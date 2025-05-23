import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import {
  comparePassword,
  hashPassword,
  hashString,
} from '../utils/passwordUtils.js';
import { UnauthenticatedError } from '../errors/customErrors.js';
import { createJWT } from '../utils/tokenUtils.js';
import DeceasedMember from '../models/DeceasedMemberModel.js';
import crypto from 'crypto';
import { sendResetPasswordEmail } from '../utils/sendResetPasswordEmail.js';

export const register = async (req, res) => {
  const isdFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isdFirstAccount ? 'admin' : 'user';

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  // if (!user) throw new UnauthenticatedError("invalid credentials");
  // const isPasswordCorrect = await comparePassword(
  //   req.body.password,
  //   user.password
  // );
  // if (!isPasswordCorrect) throw new UnauthenticatedError("invalid credentials");

  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValidUser) throw new UnauthenticatedError('invalid credentials');

  const token = createJWT({ userId: user._id, role: user.role });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
  });

  res.status(StatusCodes.OK).json({ msg: 'user logged in' });
};

export const logout = (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out' });
};

export const necrology = async (req, res) => {
  // const adminMembers = await Member.find({});
  // res.status(StatusCodes.OK).json({ adminMembers });
  const { searchNames, searchCodes, sort } = req.query;
  const queryObject = {
    // createdBy: req.user.userId,
  };

  if (searchNames) {
    queryObject.$or = [
      { firstName: { $regex: searchNames, $options: 'i' } },
      { lastAndMiddleNames: { $regex: searchNames, $options: 'i' } },
      // { associationCode: { $regex: search, $options: 'i' } },
    ];
  }
  if (searchCodes) {
    queryObject.$or = [
      //   { firstName: { $regex: search, $options: 'i' } },
      //   { lastAndMiddleNames: { $regex: search, $options: 'i' } },
      { associationCode: { $regex: searchCodes, $options: 'i' } },
    ];
  }

  if (searchCodes && searchNames) {
    queryObject.$or = [
      { associationCode: { $regex: searchCodes, $options: 'i' } },
    ];
    queryObject.$or = [
      { associationCode: { $regex: searchNames, $options: 'i' } },
    ];
  }

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': 'lastAndMiddleNames',
    'z-a': '-lastAndMiddleNames',
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const necrology = await DeceasedMember.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const totalMembers = await DeceasedMember.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalMembers / limit);

  res
    .status(StatusCodes.OK)
    .json({ totalMembers, numOfPages, currentPage: page, necrology });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new BadRequestError('Please provide valid email');
  }
  // .select("+password")
  const user = await User.findOne({ email });
  if (user) {
    const passwordToken = crypto.randomBytes(70).toString('hex');
    //send email
    // const origin = "http://active-solidarity-com.onrender.com";
    const origin = 'https://www.mysagi.org';

    await sendResetPasswordEmail({
      name: `${user.firstName}  ${user.lastAndMiddleNames}`,
      email: user.email,
      token: passwordToken,
      origin,
    });

    const tenMinutes = 1000 * 60 * 10;
    const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes);

    user.passwordToken = hashString(passwordToken);
    user.passwordTokenExpirationDate = passwordTokenExpirationDate;

    // user.password = undefined;
    await user.save();
  }

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Please check your email for reset password link' });
};

export const resetPassword = async (req, res) => {
  const { token, email, password } = req.body;
  if (!token || !email || !password) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ email });
  if (user) {
    const currentDate = new Date();

    if (
      user.passwordToken === hashString(token) &&
      user.passwordTokenExpirationDate > currentDate
    ) {
      const hashedPassword = await hashPassword(req.body.password);
      // req.body.password = hashedPassword;
      user.password = hashedPassword;
      user.passwordToken = null;
      user.passwordTokenExpirationDate = null;
      await user.save();
    }
  }
  res.send('reset password');
};
