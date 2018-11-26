import db from "../models/incident";


/**
 * Class representing UserController
 * @class UserController
 */
class UserController {
    /**
       * Signup a user to the application
       * @static
       * @param {object} req - The request object
       * @param {object} res - The response object
       * @return {object} JSON representing success message
       * @memberof UserController
       */
    static signUp(req, res) {
        const id = db.userDb[db.userDb.length - 1].id + 1;
        const registered = new Date();
        const {
            firstname, lastname, othernames, email, phoneNumber, username, role
        } = req.body;
        const newUser = {
            id, firstname, lastname, othernames, email, phoneNumber, username, registered,
            role
        }
        db.userDb.push(newUser);
        res.status(201);
        res.json({
            success: true,
            message: `Signup Was Successful`,
            data: newUser
        });
    }



}
module.exports = UserController;
