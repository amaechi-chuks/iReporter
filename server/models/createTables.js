const createUsersTable = `
  DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    firstname VARCHAR (40) NOT NULL,
    lastname VARCHAR (40) NOT NULL,
    othernames VARCHAR(40),
    email VARCHAR(30) UNIQUE NOT NULL,
    password VARCHAR(65) NOT NULL,
    phonenumber VARCHAR(14) UNIQUE NOT NULL,
    username VARCHAR (40) UNIQUE NOT NULL,
    isAdmin VARCHAR (5) DEFAULT 'false',
    registered TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
  INSERT INTO users (firstName, lastName, otherNames, email, password, phoneNumber, username, isAdmin) VALUES ('Amaechi', 'Chuks', 'umunnakwe', 'amaechichuks2000@yahoo.com', '$2y$12$5k4Fi42lBCDI.smPn6QgT.XyMzpNNgs7ThrXPDYm8DB.ooXqCbwvO', '07068566559', 'Chuksm', 'true');
`;

const createUserLoginTable = `
  CREATE TABLE IF NOT EXISTS login(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(30) UNIQUE NOT NULL,
    password VARCHAR(65) NOT NULL,
    isAdmin VARCHAR (5) DEFAULT 'false',
    registered TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
`;

const createIncidentsTable = `
  DROP TABLE IF EXISTS incidents CASCADE;
  CREATE TABLE incidents(
    id SERIAL PRIMARY KEY NOT NULL,
    createdby INTEGER REFERENCES users(id),
    type VARCHAR(12) NOT NULL,
    comment VARCHAR(255) NOT NULL,
    latitude VARCHAR(25) NOT NULL,
    longitude VARCHAR(25) NOT NULL,
    images VARCHAR(50) NOT NULL,
    videos VARCHAR(50) NOT NULL,
    status VARCHAR(13) DEFAULT 'drafted', 
    createdat TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
`;

const createTables = `${createUsersTable}${createIncidentsTable}${createUserLoginTable}`;

export default createTables;
