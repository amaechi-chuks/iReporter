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
  username TEXT NOT NULL
);  

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
