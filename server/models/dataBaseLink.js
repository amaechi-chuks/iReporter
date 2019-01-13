import dotenv from 'dotenv';
import pg from 'pg';
import winston from '../config/winston';
import createTables from './createTables';

const { Pool } = pg;
dotenv.config();

const connectionString = 'postgres://entzxpqa:MD8_kosGydkAqxeqcFDmOHCG4plCXwVF@elmer.db.elephantsql.com:5432/entzxpqa';
const pool = new Pool(connectionString);

const seed = () => {
  const qry = createTables;
  pool.query(qry, (err, dbRes) => {
    if (err) {
      winston.info(err.toString());
    } else {
      winston.info(dbRes);
    }
  });
};

const connect = () => {
  pool.connect()
    .then((err) => {
      winston.info('database connection established');
      if (!err) {
        seed();
      }
    }).catch(error => error);
};
connect();

const databaseConnection = {
  query: (text, params, callback) => pool.query(text, params, callback),
};

export default databaseConnection;
