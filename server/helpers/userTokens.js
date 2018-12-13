/* eslint-disable import/no-unresolved */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const createToken = (user) => {
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 1440,
  });
  const logInfo = {
    token,
  };
  return logInfo;
};

export default createToken;
