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
        let { userId, firstName, lastName, otherNames, email, password, confirmPassword, phoneNumber, username, registeredAlt } = req.body;

        // UserId validations
        if (userId === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'userId cannot be undefined'
            });
        }

        if (UserId === '') {
            return res.status(400).json({
                status: 400,
                message: 'UserId cannot be empty'
            });
        }

        let value;
        if (typeof UserId === 'string') {
            value = Number(UserId);
            if (Number.isNaN(value)) {
                return res.status(400).json({
                    status: 400,
                    message: 'UserId should be a valid number'
                });
            }
        }
        //UserId validation ends


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
        if (typeof firstName === "string") {
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
        if (typeof lastName === "string") {
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

        if (typeof otherNames === "string") {
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

        if (typeof email !== 'string') {
            return res.status(400).json({
                status: 400,
                message: 'Email should be a string'
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
        const emailVerifier = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (!emailVerifier.test(email)) {
            return res.status(400).json({
                status: 400,
                message: 'Email format is invalid'
            });
        }
        if (email.length < 10 || email.length > 30) {
            return res.status(400).json({
                status: 400,
                message: 'Email should be 10 to 50 characters long'
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

        const passwordVerifier = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
        if (!passwordVerifier.test(password)) {
            return res.status(400).json({
                status: 400,
                message: `Invalid password`
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

        const confirmPasswordVerifier = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
        if (!confirmPasswordVerifier.test(confirmPassword)) {
            return res.status(400).json({
                status: 400,
                message: `Invalid password`
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
        if(phoneNumberVerifier.length < 7 || phoneNumberVerifier.length > 12) {
            res.status(400).json({
                status:400,
                message: 'Incorrect digit length' 
            })
        }
        //phoneValidtion ends

        //Username Validation
        if (username === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'username  cannot be undefined'
            });
        }

        if (username === "") {
            return res.status(400).json({
                status: 400,
                message: 'username  cannot be empty'
            });
        }
        if (typeof username === "string") {
            return res.status(400).json({
                status: 400,
                message: 'username  must be a character',
            });
        }
        //username validation ends

        //registeredAlt Validation
        if (registeredAlt === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'registereAlt cannot be undefined'
            });
        }

        if (registeredAlt === "") {
            return res.status(400).json({
                status: 400,
                message: 'registeredAlt cannot be empty'
            });
        }

        if (typeof registeredAlt !== 'string') {
            return res.status(400).json({
                status: 400,
                message: 'registeredAlt should be a string'
            });
        }
        //registeredAlt ends 

        req.body.UserId = value;
        req.body.firstName = firstName;
        req.body.lastName = lastName;
        req.body.otherNames = otherNames;
        req.body.email = email;
        req.body.password = password;
        req.body.confirmPassword = confirmPassword;
        req.body.phoneNumber = phoneNumber;
        req.body.username = username;
        req.body.registeredAlt = registeredAlt;

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

module.exports = UserValidator;
