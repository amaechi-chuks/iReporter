/* eslint-disable import/no-unresolved */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import incidentHelper from './incidentHelper';

dotenv.config();

const createToken = (req, res, statusCode, message, result) => {
  const payload = { firstname: result.rows[0].firstname, id: result.rows[0].id };
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 60 * 60 * 1440
  });
  const logInfo = {
    user: {
      id: result.rows[0].id,
      fullNames: result.rows[0].firstname,
      lastname: result.rows[0].lastname,
      othernames: result.rows[0].othernames,
      email: result.rows[0].email,
      password: result.rows[0].password,


    },
    token
  };
  incidentHelper.success(res, statusCode, message, logInfo);
};

export default createToken;
