import { Router } from 'express';
const router = Router();
import {
  login,
  register,
  forgotPassword,
  resetPassword,
  logout,
  necrology,
} from '../controllers/authController.js';
import {
  validateLoginInput,
  validateRegisterInput,
  validateResetPasswordInput,
} from '../middleware/validationMiddleware.js';

import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { msg: 'IP rate limit exceeded; try again after 15 minutes' },
});

// router.post('/register', apiLimiter, validateRegisterInput, register);
router.post('/login', apiLimiter, validateLoginInput, login);
router.post('/register', validateRegisterInput, register);
router.get('/logout', logout);
router.get('/necrology', necrology);
router.post('/forgot', forgotPassword);
router.post('/reset', validateResetPasswordInput, resetPassword);

export default router;
