import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const { UserController } = controllers;
const {
  signUp, login, adminGetAll, adminUpdateStatus
} = UserController;
const { UserValidator, VerifyRole } = middlewares;
const { signUpValidator, loginValidator } = UserValidator;
const { isAdminLogin } = VerifyRole;

const userRouter = express.Router();


// SignUp Route
userRouter.route('/auth/signup')
  .post(signUpValidator, signUp);

// Signin Route
userRouter.route('/auth/signin')
  .post(loginValidator, login);

// Admin Route
userRouter.route('/auth/admin')
  .get(adminGetAll);

userRouter.route('/auth/admin/:id')
  .put(isAdminLogin, adminUpdateStatus);

export default userRouter;
