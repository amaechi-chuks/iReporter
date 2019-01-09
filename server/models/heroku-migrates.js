import winston from '../config/winston';
import pool from './dataBaseLink';
import createTables from './createTables';

const queries = `${createTables}`;

// Create tables on Heroku Postgres
pool.query(queries, () => {
  winston.info('Tables Created');
  pool.end();
});
