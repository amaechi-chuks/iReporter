import winston from '../config/winston';
import HelperUtils from '../ultility/helperUltis';
import createTables from './createTables';
import dropTables from './dropTables';
import databaseConnection from './dataBaseLink';

const dropTablesQuery = dropTables;
const createTablesQuery = createTables;

const hashedPassword = HelperUtils.hashPassword('fabulous26');
const createUserQuery = `
    INSERT INTO users(firstname, lastname, othernames, email, phonenumber, password, username) 
    VALUES('Chuks', 'Amaechi', '', 'amaechichuks2000@yahoo.com', '07068566559', '${hashedPassword}', 'ChuksAmaechi') RETURNING *`;

const userLoginQuery = `
    INSERT INTO login( email, password) 
    VALUES('amaechichuks2000@yahoo.com', '${hashedPassword}') RETURNING *`;

const createAdminQuery = `
    INSERT INTO users(firstname, lastname, othernames, email, phonenumber, password, username, isAdmin) 
    VALUES('Admin', 'Demo', 'Admin2', 'amaechichuks12000@yahoo.com', '07030048567', '${hashedPassword}', 'true') RETURNING *`;

const createIncident = `
    INSERT INTO incidents(createdby, type, comment, 
    latitude, longitude, images, videos, status) VALUES('1', 'red-flag', 
    'This is a red-flag message', '6.5442452', '5.6788753', 'www.djdfhjfjd.mp4', 'www.fjfsdjkffsdjk.mp4', 'drafted') RETURNING *`;

const queries = `${dropTablesQuery}${createTablesQuery}${createUserQuery}${userLoginQuery}${createAdminQuery}${createIncident}`;

databaseConnection.query(queries, (err) => {
  if (err) {
    winston.info('Error is', err);
  }
});
