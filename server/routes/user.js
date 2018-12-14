import express from 'express';
import UserController from '../controllers/user';

import userValidation from '../middlewares/userValidation';
import authToken from '../middlewares/authenticateToken';

const { checkUser } = userValidation;

const {
  signUp, login, adminGetAll, adminUpdateStatus,
} = UserController;

const userRouter = express.Router();

// SignUp Route
userRouter.post('/auth/signup', checkUser, signUp);

// Signin Route
userRouter.post('/auth/signin', login);

// Admin Route
userRouter.get('/auth/admin', adminGetAll);

userRouter.put('/auth/admin/:id/resolved', authToken, (req, res) => adminUpdateStatus(req, res, 'resolved'));

userRouter.put('/auth/admin/:id/rejected', authToken, (req, res) => adminUpdateStatus(req, res, 'rejected'));

userRouter.put('/auth/admin/:id/underInvestigation', authToken, (req, res) => adminUpdateStatus(req, res, 'underInvestigation'));


export default userRouter;
