import express from 'express';
import controllers from "../controllers";

const { UserController } = controllers;

const userRouter = express.Router();


//SignUp Route
userRouter.route('/auth/signup')
    .post(UserController.signUp);

//Signin Route
userRouter.route('/auth/signin')
    .post(UserController.login);

    //Admin Route
userRouter.route('/auth/admin')
    .get(UserController.adminGetAll);

    userRouter.route('/auth/admin/:id')
    .put(UserController.adminUpdateStatus);

module.exports = userRouter;