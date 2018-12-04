import express from 'express';

const defaultRouter = express.Router();

defaultRouter.get('/', (req, res) => res.status(200).json({
  status: 200,
  message: 'Welcome to iReporter'
}));

defaultRouter.all('*', (req, res) => res.status(404).json({
  message: 'Sorry, page not found!'
}));

export default defaultRouter;
