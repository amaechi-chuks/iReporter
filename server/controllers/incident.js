import db from "../models/incident";

/**
 * Class representing IncidentController
 * @class IncidentController
 */

class IncidentController {
    /**
       * API method to Post an Incident
       * @static
       * @param {object} req - The request object
       * @param {object} res - The response object
       * @return {object} JSON representing success message
       * @memberof IncidentController
       */

    static createIncident(req, res) {
        if (parseInt(req.body.createdBy) > 0) {
            const {
                createdBy, location, type, status, imageUrl, videoUrl, comment
            } = req.body;
            const id = db.incident[db.incident.length - 1].id + 1;
            const createdOn = new Date().toDateString();
            const newIncident = {
                id, createdOn, createdBy, type, location, status, imageUrl, videoUrl, comment
            };

            db.incident.push(newIncident);
            res.status(201);
            res.json({
                status: 201,
                message: `Created ${newIncident.type} record`,
                data: newIncident
            });
        }
        else {
            res.status(400);
            res.json({
                status: 400,
                message: `Bad Request`,
            });
        }
    }
    // createIncident ends


    /**
     * API Get method to get all Incident
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @returns {object} JSON object representing success message
     * @memberof IncidentController
     */

    static getAllIncident(req, res) {
        if (db.incident.length !== 0) {
            const type = req.url.split('/')[1];
            const type2 = type.split('s')[0];
            const data2 = db.incident.filter(incidentType => {
                if (incidentType.type === type2) {
                    return incidentType;
                }
            })

            res.status(200);
            res.json({
                success: true,
                message: `Successfully Retrieved all ${type2}`,
                data: data2

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
    // getAllIncident ends


    /**
       * API GET method to get a single incident by Id
       * @param {obj} req
       * @param {obj} res
       * @returns {obj} success message
       * @returns {object} {object} JSON object representing success message
       * @memberof IncidentController
       */
    static getSingleRedFlag(req, res) {
        const type = req.url.split('/')[1];
        const index = parseInt(req.params.id, 10);
        const findRedFlag = db.incident.find(redflag => redflag.id === index);
        if (type == 'red-flag' && findRedFlag.type == 'red-flag') {
            return res.status(200).json({
                status: 200,
                message: `Successfully retrieved ${findRedFlag.type}`,
                data: db.incident[index]
            });
        }
        else if (type == 'intervention' && findRedFlag.type == 'intervention') {
            return res.status(200).json({
                status: 200,
                message: `Successfully Retrieved ${findRedFlag.type}`,
                data: db.incident[index]
            });
        }
        return res.status(404).json({
            status: 404,
            message: 'Request does not exist'
        });
    }
    // getSingleRedFlag ends


    /**
          * API PUT method to update  a single incident by location
          * @param {obj} req
          * @param {obj} res
          * @returns {obj} success message
          * @returns {object} {object} JSON object representing success message
          * @memberof IncidentController
          */

    static updateRedFlagByLocation(req, res) {
        const type = req.url.split('/')[1];
        const redFlagId = parseInt(req.params.id, 10);
        const oldRedFlagId = db.incident.find((allBiz) => allBiz.id === redFlagId);
        if (oldRedFlagId.type == 'red-flag' && type == 'red-flag') {     // Check if the RedFlag location exist, then update.
            oldRedFlagId.location = req.body.location;
            db.incident[redFlagId - 1] = oldRedFlagId;
            res.status(200);
            res.json({
                status: 200,
                message: `Successfully update redFlag location`,
                data: oldRedFlagId
            })

        }
        else if (oldRedFlagId.type == 'intervention' && type == 'intervention') {     // Check if the intervention location exist, then update.
            oldRedFlagId.location = req.body.location;
            db.incident[redFlagId - 1] = oldRedFlagId;
            res.status(200);
            res.json({
                status: 200,
                message: `Successfully update intervention location`,
                data: oldRedFlagId
            })
        }
        else {
            res.status(404);
            res.json({
                status: 404,
                message: `Not Found`,
            })
        }

    }


    /**
          * API PUT method to update a single incident by comment
          * @param {obj} req
          * @param {obj} res
          * @returns {obj} success message
          * @returns {object} {object} JSON object representing success message
          * @memberof IncidentController
          */

    static updateRedFlagByComment(req, res) {
        const type = req.url.split('/')[1];
        const redFlagId = parseInt(req.params.id, 10);
        const oldRedFlagId = db.incident.find((allBiz) => allBiz.id === redFlagId);
        if (oldRedFlagId.type == 'red-flag' && type == 'red-flag') {     // Check if the Red-flag cooment exist, then update.
            oldRedFlagId.comment = req.body.comment;
            db.incident[redFlagId - 1] = oldRedFlagId;
            res.status(200);
            res.json({
                status: 200,
                message: `Successfully update redFlag comment`,
                data: oldRedFlagId
            })
        }
        else if (oldRedFlagId.type == 'intervention' && type == 'intervention') {     // Check if the intervention commit exist, then update.
            oldRedFlagId.comment = req.body.comment;
            db.incident[redFlagId - 1] = oldRedFlagId;
            res.status(200);
            res.json({
                status: 200,
                message: `Successfully update intervention comment`,
                data: oldRedFlagId
            })
        }
        else {
            res.status(404);
            res.json({
                status: 404,
                message: `Not Found`,

            })
        }
    }


}

module.exports = IncidentController;
