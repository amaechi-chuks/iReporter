import db from '../models/incident';

/**
 * Class representing User Validations
 * @class UserValidator
*/
class UserValidator {
/**
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - Calls the next function
 * @returns {object} JSON representing the failure message
 */
  static signUpValidator(req, res, next) {
    const {
      firstName,
      lastName,
      otherNames,
      email,
      password,
      phoneNumber,
      username,
    } = req.body;

    if (firstName === undefined) {
      return res.status(400).json({
        success: false,
        message: 'firstName is required',
      });
    }

    if (firstName === '') {
      return res.status(400).json({
        success: false,
        message: 'firstName is required',
      });
    }
    if (typeof firstName !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'firstName must be a character',
      });
    }

    if (lastName === undefined) {
      return res.status(400).json({
        success: false,
        message: 'lastName is required',
      });
    }

    if (lastName === '') {
      return res.status(400).json({
        success: false,
        message: 'lastName cannot be empty',
      });
    }
    if (typeof lastName !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'lastName must be a character',
      });
    }

    if (otherNames === undefined) {
      return res.status(400).json({
        success: false,
        message: 'otherNames is required',
      });
    }

    if (otherNames === '') {
      return res.status(400).json({
        success: false,
        message: 'otherNames cannot be empty',
      });
    }

    if (typeof otherNames !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'otherNames must be a character',
      });
    }

    if (email === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Email cannot be undefine',
      });
    }

    if (email === '') {
      return res.status(400).json({
        success: false,
        message: 'Email field cannot be empty',
      });
    }

    const emailVerifier = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailVerifier.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'You have entered an invalid email address!',
      });
    }
    if (email.length < 15 || email.length > 40) {
      return res.status(400).json({
        success: false,
        message: 'Email should be 15 to 50 alphanumeric characters long',
      });
    }
    const foundEmail = db.userDb.find(user => user.email === email);
    if (foundEmail) {
      return res.status(409).json({
        success: false,
        message: 'Email already exist!',
      });
    }

    if (password === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Password is required',
      });
    }

    const passwordVerifier = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const checkPassword = passwordVerifier;
    if (!checkPassword.test(password)) {
      return res.status(400).json({
        success: false,
        message: 'Password not too strong',
      });
    }

    if (password === '') {
      return res.status(400).json({
        success: false,
        message: 'Password field cannot be empty',
      });
    }

    if (password.length < 8 || password.length > 20) {
      return res.status(400).json({
        success: false,
        message: 'Password should be 8 to 20 characters long',
      });
    }
    if (phoneNumber === undefined) {
      return res.status(400).json({
        success: false,
        message: 'phoneNumber cannot be undefine',
      });
    }

    if (typeof phoneNumber !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'PhoneNumber should be a string',
      });
    }

    if (phoneNumber === '') {
      return res.status(400).json({
        success: false,
        message: 'phoneNumber field cannot be empty',
      });
    }

    if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      return res.status(400).json({
        success: false,
        message: 'phoneNumber should be 10 to 12 long',
      });
    }

    const phoneNumberVerifier = /^[\d]+$/;
    if (!phoneNumberVerifier) {
      res.status(400).json({
        success: false,
        message: 'Invalid PhoneNumber',
      });
    }
    if (phoneNumberVerifier.length < 7 || phoneNumberVerifier.length > 12) {
      res.status(400).json({
        success: false,
        message: 'phoneNumber length too short ',
      });
    }

    if (username === undefined) {
      return res.status(400).json({
        success: false,
        message: 'username is required',
      });
    }

    if (username === '') {
      return res.status(400).json({
        success: false,
        message: 'username cannot be empty',
      });
    }
    if (typeof username !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'username must be a character',
      });
    }
    const foundUserName = db.userDb.find(user => user.username === username);
    if (foundUserName) {
      return res.status(409).json({
        success: false,
        message: 'UserName already exists!',
      });
    }
    return next();
  }

  /**
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - Calls the next function
   * @returns {object} JSON representing the failure message
   */
  static loginValidator(req, res, next) {
    let { email, password } = req.body;
    // emial validator
    if (email === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Email is required',
      });
    }
    if (typeof email !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Email should be a string',
      });
    }
    if (email === '') {
      return res.status(400).json({
        success: false,
        message: 'Email cannot be empty',
      });
    }

    email = email.toLowerCase().trim();
    const foundUser = db.userDb.find(user => user.email === email);
    if (!foundUser) {
      return res.status(401).json({
        success: false,
        message: 'Authentication failed',
      });
    }

    if (password === undefined) {
      return res.status(401).json({
        success: false,
        message: 'Pasword is required',
      });
    }

    if (password === '') {
      return res.status(401).json({
        success: false,
        message: 'Password cannot be empty',
      });
    }
    password = password.trim();
    if (foundUser && password !== foundUser.password) {
      return res.status(401).json({
        success: false,
        message: 'Authentication unsuccessful',
      });
    }
    req.body.foundUser = foundUser;
    req.body.password = password;
    return next();
  }
}

export default UserValidator;
