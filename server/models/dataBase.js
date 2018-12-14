const dataBase = `
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL primary key,
  firstName VARCHAR NOT NULL,
  lastName VARCHAR NOT NULL,
  otherNames VARCHAR NOT NULL,
  email TEXT NOT NULL,
  password VARCHAR NOT NULL,
  phoneNumber BIGINT NOT NULL,
  username TEXT NOT NULL,
  createdat TIMESTAMP NOT NULL DEFAULT NOW(),
  role TEXT NOT NULL
);  
INSERT INTO users (firstName, lastName, otherNames, email, password, phoneNumber, username, role) VALUES ('Amaechi', 'Chuks', 'umunnakwe', 'amaechichuks2000@yahoo.com', '$2y$12$5k4Fi42lBCDI.smPn6QgT.XyMzpNNgs7ThrXPDYm8DB.ooXqCbwvO', '07068566559', 'Chuks', 'admin');

DROP TABLE IF EXISTS incident;
CREATE TABLE incident (
  id SERIAL primary key,
  createdBy INT references users(id),
  type VARCHAR NOT NULL,
  location VARCHAR NOT NULL,
  status VARCHAR NOT NULL,
  imageurl TEXT NOT NULL,
  videoUrl TEXT NOT NULL,
  comment TEXT NOT NULL
  );
  `;
export default dataBase;
