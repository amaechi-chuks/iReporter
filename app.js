import express from "express";
import bodyParser from "body-parser";


import routes from './server/routes/incidentRoutes';


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


// set port for server to listen on
const Port = process.env.PORT || 5000;

// app.get("/", (req, res)=>{
//     res.send('hello');
// })


app.use('/api/v1/', routes);


app.listen(Port, ()=>{
    console.log('app is listening at 5000');
})

export default app;