import winston from '../config/winston';
import dataBase from './dataBase';

const { Client } = require('pg');

const client = new Client();

const seed = () => {
  const qry = dataBase;
  client.query(qry, (err, result) => {
    if (err) {
      winston.info(err.toString());
    } else {
      winston.info(result);
    }
  });
};

const connect = () => {
  client.connect()
    .then((err) => {
      winston.info('database connection established');
      if (!err) {
        seed();
      }
    });
};
connect();

const databaseConnection = {
  query: (text, params, callback) => client.query(text, params, callback),
};

export default databaseConnection;
