import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();

import color from 'colors';
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary';
import helmet, { contentSecurityPolicy } from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';

//routers
import memberRouter from './routes/memberRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

//public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __direname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__direname, './client/dist')));

// app.use(morgan("dev"));

app.use(cookieParser());
app.use(express.json());
// app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'img-src': ['https://www.mysagi.org/', 'https://res.cloudinary.com/'],
      upgradeInsecureRequests: [],
    },
    reportOnly: false,
  })
);
app.use(mongoSanitize());

app.use('/api/v1/members', authenticateUser, memberRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__direname, './client/dist', 'index.html'));
});
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}...`.cyan.bold);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
