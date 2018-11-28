import express from "express";
import logger from 'morgan';
import bodyParser from "body-parser";


import router from './server/routes';


// Create a top level instance of express
const app = express();
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));


// set port for server to listen on
const Port = process.env.PORT || 5000;

const {
    defaultRouter, userRouter, route, 
  } = router;

 app.use('/', defaultRouter);
 app.use('/api/v1/', userRouter);
app.use('/api/v1/', route );



app.listen(Port, ()=>{
    console.log('app is listening at 5000');
})

export default app;