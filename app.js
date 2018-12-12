import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import winston from './server/config/winston';
import userRouter from './server/routes/user';
import router from './server/routes/incidentRoutes';
import defaultRouter from './server/routes/defaultRoute';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

// set port for server to listen on
const port = process.env.PORT || 4000;

app.use('/api/v1/', userRouter);
app.use('/api/v1/', router);
app.use('/', defaultRouter);

app.listen(port, () => {
  winston.info(`app is listening at ${process.env.PORT}`);
});

export default app;
