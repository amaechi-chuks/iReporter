const dataBase = `
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL primary key,
  firstName VARCHAR NOT NULL,
  lastname VARCHAR NOT NULL,
  otherNames VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  confirmPassword VARCHAR NOT NULL,
  phoneNumber integer NOT NULL,
  username VARCHAR NOT NULL,
  registeredAlt DATE NOT NULL,
  isAdmin BOOLEAN
);  

DROP TABLE IF EXISTS intervention;
CREATE TABLE intervention (
  id SERIAL primary key,
  userId int references users(id),
  type VARCHAR NOT NULL,
  location DECIMAL NOT NULL,
  status VARCHAR NOT NULL,
  imageurl TEXT NOT NULL,
  videoUrl TEXT NOT NULL,
  comment VARCHAR NOT NULL
  );

  DROP TABLE IF EXISTS redflag;
CREATE TABLE redflag (
  id SERIAL primary key,
  userId int references users(id),
  type VARCHAR NOT NULL,
  location DECIMAL NOT NULL,
  status VARCHAR NOT NULL,
  imageurl TEXT NOT NULL,
  videoUrl TEXT NOT NULL,
  comment VARCHAR NOT NULL
  );
  `;
export default dataBase;
