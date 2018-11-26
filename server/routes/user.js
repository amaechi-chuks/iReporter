import express from 'express';
import controllers  from "../controllers";

const { UserController } = controllers;

const userRouter = express.Router();

userRouter.route('/signup')
    .post(UserController.signUp);

    module.exports = userRouter;