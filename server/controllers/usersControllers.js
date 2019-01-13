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
          const errorMessage = err.detail;
          return res.status(500).json({ status: 500, message: errorMessage });
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
      const token = HelperUtils.generateToken(req.user);
      const UserEmail = req.user.email;
      const userId = req.user.id;
      res.status(200).json({
        status: 200,
        data: [{
          message: 'Login Successful!',
          userId,
          UserEmail,
          token,
        }],
      });
    } catch (err) {
      winston.info('opps!', err);
    }
  }
}

export default UserController;
