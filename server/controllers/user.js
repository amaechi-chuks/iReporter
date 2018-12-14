import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import incidentHelper from '../helpers/incidentHelper';
import createToken from '../helpers/userTokens';
import databaseConnection from '../models/dataBaseLink';

dotenv.config();

/**
 * Class representing UserController
 * @class UserController
 */
export default class UserController {
  /**
   * Signup a user to the application
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON representing success message
   * @memberof UserController
   */
  static signUp(req, res) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      const {
        firstName,
        lastName,
        otherNames,
        email,
        phoneNumber,
        username,
      } = req.body;
      const password = hash;
      const userQuery = 'INSERT INTO users (firstname, lastname, othernames, email, password, phonenumber, username, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *';

      const params = [
        firstName,
        lastName,
        otherNames,
        email,
        password,
        phoneNumber,
        username,
        'user',
      ];
      databaseConnection.query(userQuery, params)
        .then((result) => {
          const user = result.rows[0];
          const token = createToken(user);
          res.json({
            data: [user],
            token,
          });
        }).catch(error => incidentHelper.error(res, 500, error.message));
    });// bcrypt end
  }// user signup end

  /**
   * Login a user to the application
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success message
   * @memberof UserController
   */

  static login(req, res) {
    const { email, password } = req.body;
    const errors = { form: 'Invalid email or password' };
    const userQuery = 'SELECT * FROM users WHERE email = $1 LIMIT 1;';
    const params = [email];
    databaseConnection.query(userQuery, params)
      .then((result) => {
        const user = result.rows[0];
        if (user) {
          const getPassword = bcrypt.compareSync(password, result.rows[0].password);
          if (getPassword) {
            const token = createToken(user);
            res.status(200).json({
              Success: true,
              message: 'Signin successful',
              data: `${user.username} Welcome to iReporter`,
              token,
            });
          }
        }
        return res.status(401).json({
          success: false,
          errors,
        }).catch(error => incidentHelper.error(res, 500, error.message));
      });
  }

  /**
   * Admin update status
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success message
   * @memberof UserController
   */
  static adminUpdateStatus(req, res, newStatus) {
    const id = parseInt(req.params.id, 10);
    const checkId = 'SELECT * FROM users WHERE id = 1 LIMIT 1';
    const createdBy = req.user.id;
    const userQuery = 'UPDATE incident SET status = $1 WHERE id = $2 returning *';
    const params = [newStatus, id];

    databaseConnection.query(checkId)
      .then((result) => {
        if (createdBy !== result.rows[0].id) {
          return incidentHelper.error(res, 401, 'Authentication failed. Token is invalid or expired');
        }
        return databaseConnection.query(userQuery, params)
          .then(state => incidentHelper.success(res, 200, newStatus, state.rows[0]))
          .catch(error => incidentHelper.error(res, 500, error.toString()));
      }).catch(error => incidentHelper.error(res, 500, error.toString()));
  }

  /**
   * API Admin get all incident
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} JSON object representing success message
   * @memberof UserController
   */
  static adminGetAll(req, res) {
    const getAllIncidentQuery = 'SELECT * FROM incident';
    databaseConnection.query(getAllIncidentQuery)
      .then((result) => {
        const user = result.rows[0];
        if (user) {
          incidentHelper.success(res, 200, ' successfully retrieved all incident ', result.rows);
        } else {
          incidentHelper.error(res, 400, 'Request with id does not exist');
        }
      }).catch(error => incidentHelper.error(res, 500, error.toString()));
  }
}
