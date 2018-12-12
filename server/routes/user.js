import express from 'express';
import UserController from '../controllers/user';
import UserValidator from '../middlewares/user';
// import VerifyRole from '../middlewares/auth';


const {
  signUp, login, adminGetAll
} = UserController;
const { signUpValidator, loginValidator } = UserValidator;
// const { isAdminLogin } = VerifyRole;

const userRouter = express.Router();


// SignUp Route
userRouter.post('/auth/signup', signUpValidator, signUp);

// Signin Route
userRouter.post('/auth/signin', loginValidator, login);

// Admin Route
userRouter.get('/auth/admin', adminGetAll);

// userRouter.put('/auth/admin/:id', adminUpdateStatus);

export default userRouter;
