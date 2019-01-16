import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import winston from './config/winston';
import routes from './routes/routes';


// const app = express();

// // app.use(cors({ credentials: true, origin: true }));
// // set port for server to listen on

// const port = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(morgan('combined', { stream: winston.stream }));

// app.use((err, req, res, next) => {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

//   res.status(err.status || 500);
//   res.render('error');
//   next();
// });
const app = express();

// set port for server to listen on
const port = process.env.PORT || 5000;

// support parsing of application/json type post data
app.use(bodyParser.json({ limit: '50mb' }));

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.resolve(__dirname, '../client')));

app.use(cors());

app.get('/', (req, res) => res.sendFile('../client/index.html'));

app.use('/api/v1/', routes);

app.all('*', (req, res) => res.status(404).json({
  message: 'Wrong endpoint. Such endpoint does not exist',
}));


app.listen(port, () => winston.info(`Application started on port ${port}, ${process.cwd()}, ${__dirname}`));

export default app;
