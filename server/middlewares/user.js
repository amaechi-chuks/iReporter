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
        //destructure user object property
        let { firstName, lastName, otherNames, email, password, confirmPassword, phoneNumber, username } = req.body;

        // firstName validation
        if (firstName === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'firstName cannot be undefined'
            });
        }

        if (firstName === "") {
            return res.status(400).json({
                status: 400,
                message: 'firstName cannot be empty'
            });
        }
        if (typeof firstName !== 'string') {
            return res.status(400).json({
                status: 400,
                message: 'firstName must be a character',
            });
        }
        //firstName validation ends

        //lastName validation
        if (lastName === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'lastName cannot be undefined'
            });
        }

        if (lastName === "") {
            return res.status(400).json({
                status: 400,
                message: 'lastName cannot be empty'
            });
        }
        if (typeof lastName !== 'string') {
            return res.status(400).json({
                status: 400,
                message: 'lastName must be a character',
            });
        }
        //lastName validation ends here

        //otherNames validation
        if (otherNames === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'otherNames cannot be undefined'
            });
        }

        if (otherNames === "") {
            return res.status(400).json({
                status: 400,
                message: 'otherNames cannot be empty'
            });
        }

        if (typeof otherNames !== 'string') {
            return res.status(400).json({
                status: 400,
                message: 'otherNames must be a character',
            });
        }
        //otherNames validation ends

        //email validation
        if (email === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'Email cannot be undefine'
            });
        }

        email = email.toLowerCase().trim();
        if (email === '') {
            return res.status(400).json({
                status: 400,
                message: 'Email field cannot be empty'
            });
        }
        /* eslint-disable no-useless-escape */
        const emailVerifier = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailVerifier.test(email)) {
            return res.status(400).json({
                status: 400,
                message: 'You have entered an invalid email address!'
            });
        }
        if (email.length < 15 || email.length > 40) {
            return res.status(400).json({
                status: 400,
                message: 'Email should be 15 to 50 alphanumeric characters long'
            });
        }
        const foundEmail = db.userDb.find(user => user.email === email);
        if (foundEmail) {
            return res.status(409).json({
                status: 409,
                message: 'Email already exists!'
            });
        }
        // email validations ends

        // Password Validations
        if (password === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'Password cannot be undefined'
            });
        }

        const passwordVerifier = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const checkPassword = passwordVerifier;
        if (!checkPassword.test(password)) {
            return res.status(400).json({
                status: 400,
                message: `Password not too strong`
            })
        }

        password = password.trim();
        if (password === '') {
            return res.status(400).json({
                status: 400,
                message: 'Password field cannot be empty'
            });
        }

        if (password.length < 8 || password.length > 20) {
            return res.status(400).json({
                status: 400,
                message: 'Password should be 8 to 20 characters long'
            });
        }
        //password validation ends

        // confirmPassword Validations
        if (confirmPassword === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'Password cannot be undefined'
            });
        }

        if (confirmPassword !== password) {
            return res.status(400).json({
                status: 400,
                message: `Password do not match`
            })
        }

        confirmPassword = confirmPassword.trim();
        if (confirmPassword === '') {
            return res.status(400).json({
                status: 400,
                message: 'Password field cannot be empty'
            });
        }

        if (confirmPassword.length < 8 || confirmPassword.length > 20) {
            return res.status(400).json({
                status: 400,
                message: 'Password should be 8 to 20 characters long'
            });
        }
        //confirmPassword ends

        //phoneNumber Validation
        if (phoneNumber === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'phoneNumber cannot be undefine'
            });
        }

        if (typeof phoneNumber !== 'string') {
            return res.status(400).json({
                status: 400,
                message: 'PhoneNumber should be a string'
            });
        }

        if (phoneNumber === '') {
            return res.status(400).json({
                status: 400,
                message: 'phoneNumber field cannot be empty'
            })
        }

        if (phoneNumber.length < 10 || phoneNumber.length > 12) {
            return res.status(400).json({
                status: 400,
                message: 'phoneNumber should be 10 to 12 long'
            });
        }

        const phoneNumberVerifier = /^[\d]+$/;
        if (!phoneNumberVerifier) {
            res.status(400).json({
                status: 400,
                message: 'Invalid PhoneNumber'
            })
        }
        if (phoneNumberVerifier.length < 7 || phoneNumberVerifier.length > 12) {
            res.status(400).json({
                status: 400,
                message: 'phoneNumber length too short '
            })
        }
        //phoneValidtion ends

        //Username Validation
        if (username === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'username cannot be undefined'
            });
        }

        if (username === "") {
            return res.status(400).json({
                status: 400,
                message: 'username cannot be empty'
            });
        }
        if (typeof username !== "string") {
            return res.status(400).json({
                status: 400,
                message: 'username must be a character',
            });
        }
        const foundUserName = db.userDb.find(user => user.username === username);
        if (foundUserName) {
            return res.status(409).json({
                status: 409,
                message: 'UserName already exists!'
            });
        }

        req.body.firstName = firstName;
        req.body.lastName = lastName;
        req.body.otherNames = otherNames;
        req.body.email = email;
        req.body.password = password;
        req.body.confirmPassword = confirmPassword;
        req.body.phoneNumber = phoneNumber;
        req.body.username = username;

        return next();
    }

    /**
          * @param {object} req - The request object
          * @param {object} res - The response object
          * @param {function} next - Calls the next function
          * @returns {object} JSON representing the failure message
    **/
    static loginValidator(req, res, next) {
        let { email, password } = req.body;

        //emial validator
        if (email === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'Email cannot be undefined'
            });
        }
        if (typeof email !== 'string') {
            return res.status(400).json({
                status: 400,
                message: 'Email should be a string'
            });
        }
        if (email === '') {
            return res.status(400).json({
                status: 400,
                message: 'Email cannot be empty'
            });
        }

        email = email.toLowerCase().trim();
        const foundUser = db.userDb.find(user => user.email === email);
        if (!foundUser) {
            return res.status(401).json({
                status: 401,
                message: 'Authentication failed'
            });
        }
        //password validator
        if (password === undefined) {
            return res.status(401).json({
                status: 401,
                message: 'Pasword cannot be undefined'
            });
        }

        if (password === '') {
            return res.status(401).json({
                status: 401,
                message: 'Password cannot be empty'
            });
        }
        password = password.trim();
        if (foundUser && password !== foundUser.password) {
            return res.status(401).json({
                status: 401,
                message: 'Authentication unsuccessful'
            });
        }
        req.body.foundUser = foundUser;
        req.body.password = password;
        return next();
    }
}

export default UserValidator;
