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
INSERT INTO users (firstName, lastName, otherNames, email, password, phoneNumber, username, isAdmin) VALUES ('Amaechi', 'Chuks', 'umunnakwe', 'amaechichuks2000@yahoo.com', '$2y$12$5k4Fi42lBCDI.smPn6QgT.XyMzpNNgs7ThrXPDYm8DB.ooXqCbwvO', '07068566559', 'Chuksm', 'true');

DROP TABLE IF EXISTS incident CASCADE;
CREATE TABLE incidents(
  id SERIAL primary key,
  createdby INT references users(id),
  type VARCHAR NOT NULL,
  latitude VARCHAR NOT NULL,
  longitude VARCHAR NOT NULL,
  status VARCHAR NOT NULL,
  images TEXT NOT NULL,
  videos TEXT NOT NULL,
  comment TEXT NOT NULL
  );
  `;
export default dataBase;
