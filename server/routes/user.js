import express from 'express';
import UserController from '../controllers/user';
import UserValidator from '../middlewares/user';

const {
  signUp, login, adminGetAll,
} = UserController;
const { signUpValidator, loginValidator } = UserValidator;

const userRouter = express.Router();

// SignUp Route
userRouter.post('/auth/signup', signUpValidator, signUp);

// Signin Route
userRouter.post('/auth/signin', loginValidator, login);

// Admin Route
userRouter.get('/auth/admin', adminGetAll);

export default userRouter;
