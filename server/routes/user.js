import express from 'express';
import UserController from '../controllers/user';

import userValidation from '../middlewares/userValidation';

const { checkUser } = userValidation;

const {
  signUp, login, adminGetAll,
} = UserController;

const userRouter = express.Router();

// SignUp Route
userRouter.post('/auth/signup', checkUser, signUp);

// Signin Route
userRouter.post('/auth/signin', login);

// Admin Route
userRouter.get('/auth/admin', adminGetAll);

export default userRouter;
