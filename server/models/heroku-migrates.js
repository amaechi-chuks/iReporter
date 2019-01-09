import winston from '../config/winston';
import databaseConnection from './dataBaseLink';
import createTables from './createTables';

const queries = `${createTables}`;

// Create tables on Heroku Postgres
databaseConnection.query(queries, () => {
  winston.info('Tables Created');
  databaseConnection.end();
});
