import { Router } from 'express';
import {
  getCurrentUser,
  getRegistrationStats,
  adminGetAllMembers,
  updateUser,
  adminUpdateMember,
  deleteMember,
  adminGetAllDeceased,
  adminUpdateDeceased,
} from '../controllers/userController.js';
import { register } from '../controllers/authController.js';
import {
  validateUpdateUserInput,
  validateIdParam,
  validateIdParamForDeceased,
  validateRegisterInput,
} from '../middleware/validationMiddleware.js';
import { authorizePermissions } from '../middleware/authMiddleware.js';
import upload from '../middleware/multerMiddleware.js';

const router = Router();

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', [
  authorizePermissions('admin'),
  getRegistrationStats,
]);
router.get('/admin/all-members-admin', [
  authorizePermissions('admin'),
  adminGetAllMembers,
]);
router.get('/admin/all-deceased-admin', [
  authorizePermissions('admin'),
  adminGetAllDeceased,
]);

router.get('/auth/register', [authorizePermissions('admin'), register]);

router.patch('/admin/admin-edit-member/:id', [
  authorizePermissions('admin'),
  validateIdParam,
  adminUpdateMember,
]);
router.patch('/admin/admin-edit-deceased/:id', [
  authorizePermissions('admin'),
  validateIdParamForDeceased,
  adminUpdateDeceased,
]);
router.delete('/admin/delete-member/:id', [
  authorizePermissions('admin'),
  deleteMember,
]);
router.patch(
  '/update-user',
  upload.single('avatar'),
  validateUpdateUserInput,
  updateUser
);

export default router;
