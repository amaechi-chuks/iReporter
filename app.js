/* eslint-disable linebreak-style */
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import routes from './server/routes/index';

// Create a top level instance of express
const app = express();
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));

// set port for server to listen on
const port = process.env.PORT || 5000;

app.use('/api/v1/', routes.userRouter);
app.use('/api/v1/', routes.router);
app.use('/', routes.defaultRouter);

app.listen(port, () => {
  console.log('app is listening at 5000');
});

export default app;
