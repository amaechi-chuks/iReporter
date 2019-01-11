import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import winston from './config/winston';
import userRouter from './routes/user';
import router from './routes/incidentRoutes';
import defaultRouter from './routes/defaultRoute';

const app = express();
// set port for server to listen on
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use(cors());
app.use('/api/v1/', userRouter);
app.use('/api/v1/', router);
app.use('/', defaultRouter);

app.listen(port, () => {
  winston.info(`app is listening at ${process.env.PORT}`);
});

export default app;
