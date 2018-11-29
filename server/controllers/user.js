import db from "../models/incident";


/**
 * Class representing UserController
 * @class UserController
**/
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
        const registeredAlt = new Date();
        const role = false;
        const id = db.userDb[db.userDb.length - 1].id + 1;
        const {
            firstName, lastName, otherNames, password, confirmPassword, email, phoneNumber, username
        } = req.body;
        const newUser = {
            id,
            firstName, lastName, otherNames, email, password, confirmPassword, phoneNumber, username, registeredAlt, role
        }
        db.userDb.push(newUser);
        console.log(newUser);
        res.status(201);
        res.json({
            status: 201,
            message: `Signup Was Successful`,
            data: newUser
        });
    }



    /**
           * Login a user to the application
           * @static
           * @param {object} req - The request object
           * @param {object} res - The response object
           * @return {object} JSON object representing success message
           * @memberof UserController
    **/

    static login(req, res) {
        const { email, password } = req.body;
        let found = db.userDb.find((check) => check.email === email && check.password === password);
        if (found) {
            res.status(200);
            res.json({
                status: 200,
                message: `Signin Successful`,
                data: `${found.username} Welcome Back!`
            });
        }
        else {
            res.status(400).send({
                status: 400,
                message: `Please check your email and password`
            });
        }
    }

    /**
           * Login Admin to the application
           * @static
           * @param {object} req - The request object
           * @param {object} res - The response object
           * @return {object} JSON object representing success message
           * @memberof UserController
    **/


    static adminGetAll(req, res) {
        const id = parseInt(req.body.id, 10);
        let foundUser = db.userDb.find(user => user.id == id);
        if (foundUser && foundUser.isAdmin === true) {
            foundUser = db.incident;
            return res.status(200),
                res.json({
                    status: 200,
                    message: 'All Inccident successfully retrived',
                    data: foundUser
                })

        }
        if (foundUser && foundUser.role !== true) {
            return res.status(401),
                res.json({
                    status: 401,
                    message: 'You are not authorized to visit this page'
                });
        }
        res.status(400),
            res.json({
                status: 400,
                message: 'Invalid credentials'
            });
    }

    /**
               * Login Admin to the application
               * @static
               * @param {object} req - The request object
               * @param {object} res - The response object
               * @return {object} JSON object representing success message
               * @memberof UserController
    **/
    static adminUpdateStatus(req, res) {
        const id = parseInt(req.params.id, 10);
        const { createdOn, createdBy, type, location, status, imageUrl, videoUrl, comment } = req.body;
        const edit = {
            id, createdOn, createdBy, type, location, status, imageUrl, videoUrl, comment
        };
        const findIncidentId = db.incident.find(incident => incident.id === id);

        if (findIncidentId) {
            db.incident[id - 1] = edit;
            return res.status(200).json({
                status: 200,
                message: 'Incident status successfuly updated',
                data: edit
            });
        }
        return res.status(400).json({
            success: false,
            message: 'Incident with id does not exist'
        })

    }

}
