const dropUsers = 'DROP TABLE IF EXISTS users CASCADE; ';
const dropIncidents = 'DROP TABLE IF EXISTS incidents CASCADE; ';
const dropLogin = 'DROP TABLE IF EXISTS login CASCADE; ';


const dropQuery = `${dropUsers}${dropIncidents}${dropLogin}`;

export default dropQuery;
