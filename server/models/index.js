import databaseConnection from './dataBaseLink';
import dropQuery from './dropTables';
import createTables from './createTables';

const queries = `${dropQuery}${createTables}`;

databaseConnection.query(queries, () => {
  databaseConnection.end();
});

export default queries;
