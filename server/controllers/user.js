import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import incidentHelper from '../helpers/incidentHelper';
import createToken from '../helpers/userTokens';
import db from '../models/incident';
import dataBaseLink from '../models/dataBaseLink';

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
    console.log('signed up');
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      const {
        firstName,
        lastName,
        otherNames,
        email,
        phoneNumber,
        username
      } = req.body;
      console.log('hashed up');
      const password = hash;
      const userQuery = 'INSERT INTO users (firstName, lastName, otherNames, email, password, phoneNumber, username) VALUES ($1, $2, $3, $4, $5, $6, $7) returning *';
      const params = [
        firstName,
        lastName,
        otherNames,
        email,
        password,
        phoneNumber,
        username
      ];
      console.log(userQuery);
      dataBaseLink.query(userQuery, params)
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
    const getEmail = email;
    const getPassword = password;
    const findEmail = db.userDb.find(user => user.email === getEmail);
    const findPassword = db.userDb.find(user => user.password === getPassword);
    if (findEmail && findPassword) {
      return res.status(200).json({
        success: true,
        message: 'Login Successfull',
        data: { email }
      });
    }
    res.status(401).json({
      success: false,
      message: 'Access Denied',
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
