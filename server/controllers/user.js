/* eslint-disable import/no-named-as-default */
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import incidentHelper from '../helpers/incidentHelper';
import createToken from '../helpers/userTokens';
import db from '../models/incident';
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
      const userQuery = 'INSERT INTO users (firstname, lastname, othernames, email, password, phonenumber, username) VALUES ($1, $2, $3, $4, $5, $6, $7) returning *';
      const params = [
        firstName,
        lastName,
        otherNames,
        email,
        password,
        phoneNumber,
        username,
      ];
      databaseConnection.query(userQuery, params)
        .then(result => (createToken(
          res, 201,
          'Signup successfull', result,
        ))).catch(error => incidentHelper.error(res, 500, error.message));
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
        if (result.rows[0]) {
          const getPassword = bcrypt.compareSync(password, result.rows[0].password);
          if (getPassword) {
            return createToken(res, 200, 'user login successful', result);
          }
          return res.status(401).json({
            success: false,
            errors,
          });
        }
        return res.status(401).json({
          success: false,
          errors,
        }).catch(error => incidentHelper.error(res, 500, error.message));
      });
  }

  /**
   * Login Admin to the application
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success message
   * @memberof UserController
   */

  static adminGetAll(req, res) {
    const id = parseInt(req.body.id, 10);
    let foundUser = db.userDb.find(user => user.id === id);
    if (foundUser && foundUser.isAdmin === true) {
      foundUser = db.incident;
      res.status(200);
      res.json({
        success: true,
        message: 'All Inccident successfully retrived',
        data: [foundUser],
      });
    } else if (foundUser && foundUser.isAdmin !== true) {
      return res.status(401).res.json({
        success: false,
        message: 'You are not authorized to visit this page',
      });
    }
    return res.status(400).res.json({
      success: false,
      message: 'Invalid credentials',
    });
  }

  /**
   * Login Admin to the application
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success message
   * @memberof UserController
   */
  static adminUpdateStatus(req, res) {
    const id = parseInt(req.params.id, 10);
    const {
      createdOn,
      createdBy,
      type,
      location,
      status,
      imageUrl,
      videoUrl,
      comment,
    } = req.body;
    const edit = {
      id,
      createdOn,
      createdBy,
      type,
      location,
      status,
      imageUrl,
      videoUrl,
      comment,
    };
    const findIncidentId = db.incident.find(incident => incident.id === id);
    if (findIncidentId) {
      db.incident[id - 1] = edit;
      return res.status(200).json({
        success: true,
        message: 'Incident status successfuly updated',
        data: [edit],
      });
    }
    return res.status(400).json({
      success: false,
      message: 'Incident with id does not exist',
    });
  }
}
