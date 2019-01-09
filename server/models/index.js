import pool from './dataBaseLink';
import dropQuery from './dropTables';
import createTables from './createTables';

const queries = `${dropQuery}${createTables}`;

pool.query(queries, () => {
  pool.end();
});

export default queries;
