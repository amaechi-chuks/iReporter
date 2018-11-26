import db from "../models/incident";

/**
 * Class representing IncidentController
 * @class IncidentController
 */

class IncidentController {
    /**
       * Create new incident record
       * @static
       * @param {object} req - The request object
       * @param {object} res - The response object
       * @return {object} JSON representing success message
       * @memberof IncidentController
       */

    static createIncident(req, res) {
        if (parseInt(req.body.createdBy) > 0) {
            const {
                createBy, location, type, status, imageUrl, videoUrl, comment
            } = req.body;
            const id = db.incident[db.incident.length - 1].id + 1;
            const createdOn = new Date().toDateString();
            const newIncident = {
                id, createdOn, createBy, type, location, status, imageUrl, videoUrl, comment
            };

            db.incident.push(newIncident);
            res.status(201);
            res.json({
                success: true,
                message: `Created ${newIncident.type} record`,
                data: newIncident
            });
        }
        else {
            res.status(401);
            res.json({
                status: 401,
                message: `You are not authorized to create Incident`,
            });
        }
    }
    // createIncident ends


    /**
     * Get all Incident
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @returns {object} JSON object representing success message
     * @memberof IncidentController
     */

    static getAllIncident(req, res) {
        if (db.incident.length !== 0) {
            if (!req.query.sort) {
                res.status(200);
                res.json({
                    status: 200,
                    message: `Successfully Retrieved all Incidents`,
                    data: db.incident
                });
            }
            else {
                res.status(404);
                res.json({
                    status: 404,
                    message: `No incident found`,
                });
            }
        }
    }
    // getAllIncident ends


    /**
       * API method to GET a single incident
       * @param {obj} req
       * @param {obj} res
       * @returns {obj} success message
       * @returns {object} {object} JSON object representing success message
       * @memberof IncidentController
       */
    static getSingleRedFlag(req, res) {
        const index = parseInt(req.params.id, 10);
        const findRedFlag = db.incident.find(redflag => redflag.id === index);
        if (findRedFlag.type == 'red-flag') {
            return res.status(200).json({
                status: 200,
                message: `Successfully retrieved ${findRedFlag.type}`,
                data: db.incident[index - 1]
            });
        }
        else if (findRedFlag.type == 'intervention') {
            return res.status(200).json({
                status: 200,
                message: `Successfully Retrieved ${findRedFlag.type}`,
                data: db.incident[index - 1]
            });
        }
        return res.status(404).json({
            status: 404,
            message: 'Request does not exist'
        });
    }
    // getSingleRedFlag ends






}

module.exports = IncidentController;
