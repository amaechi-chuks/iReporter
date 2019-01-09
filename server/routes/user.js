import express from 'express';
import UserController from '../controllers/usersControllers';
import ValidateUser from '../middlewares/ValidateUser';

const userRouter = express.Router();

userRouter.post(
  '/auth/register',
  ValidateUser.validateLoginDetails,
  ValidateUser.validateProfileDetails,
  ValidateUser.validateExistingUser,
  UserController.registerUser,
);
userRouter.post(
  '/auth/login',
  ValidateUser.validateLoginDetails,
  UserController.loginUser,
);


export default userRouter;
