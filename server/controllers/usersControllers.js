import winston from '../config/winston';
import HelperUtils from '../ultility/helperUltis';
import databaseConnection from '../models/dataBaseLink';


/**
 * @class UserController
 * @description Specifies which method handles a given request for a specific endpoint
 * @exports UserController
 */

class UserController {
  /**
  * @method registerUser
  * @description Registers a user if details are correct
  * @param {object} req - The Request Object
  * @param {object} res - The Response Object
  * @returns {object} JSON API Response
  */
  static registerUser(req, res) {
    const {
      firstname, lastname, othernames,
      email, phonenumber, password, username,
    } = req.body;
    const hashedPassword = HelperUtils.hashPassword(password);

    try {
      const query = 'INSERT INTO users(firstname, lastname, othernames, email, phonenumber, password, username) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
      const values = [firstname, lastname,
        othernames, email, phonenumber,
        hashedPassword, username];

      databaseConnection.query(query, values, (err, dbRes) => {
        if (err) {
          return res.status(500).json({ status: 500, message: 'Something went wrong with the database.' });
        }
        const userDetails = dbRes.rows[0];
        const { id } = userDetails.id;
        userDetails.email = email;
        const { isadmin } = userDetails.isadmin;

        const token = HelperUtils.generateToken({ id, email, isadmin });
        return res.status(201).json({ status: 201, data: [{ message: 'Registration Successful!', userDetails, token }] });
      });
    } catch (err) {
      winston.info('ops!', err);
    }
  }

  /**
   * @method loginUser
   * @description Logs in a user if details are correct
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const errors = { form: 'Invalid email or password' };
      const userQuery = 'SELECT * FROM users WHERE email = $1 LIMIT 1;';
      const params = [email];
      databaseConnection.query(userQuery, params, (err, dbRes) => {
        if (err) {
          return res.status(404).json({
            status: 404,
            message: errors,
          });
        }
        if (dbRes.rowCount > 0) {
          const getPassword = HelperUtils.verifyPassword(password, dbRes.rows[0].password);
          if (getPassword) {
            const token = HelperUtils.generateToken(req.user); res.status(200).json({
              status: 200,
              data: [{ message: 'Login Successful!', token }],
            });
          }
        }
        return errors;
      });
    } catch (err) {
      winston.info('opps!', err);
    }
  }
}

export default UserController;
