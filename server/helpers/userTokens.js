/* eslint-disable import/no-unresolved */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import incidentHelper from './incidentHelper';

dotenv.config();

const createToken = (res, statusCode, message, result) => {
  const user = {
    id: result.rows[0].id,
    fullName: `${result.rows[0].firstname} ${result.rows[0].lastname} ${result.rows[0].othernames}`,
    email: result.rows[0].email,
    password: result.rows[0].password,
    phoneNumber: result.rows[0].phonenumber,
    username: result.rows[0].username,
  };
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 1440,
  });
  const logInfo = {
    user,
    token,
  };

  incidentHelper.success(res, statusCode, message, logInfo);
};

export default createToken;
