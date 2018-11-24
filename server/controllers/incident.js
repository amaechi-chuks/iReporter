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

    static createIncident(req, res, incidentType) {
        const {
            createBy, location, status, imageUrl, videoUrl, comment
        } = req.body;
        const id = db.incident[db.incident.length - 1].id + 1;
        const createdOn = new Date();
        const type = incidentType;
        const newIncident = {
            
            id,
            createdOn,
            createBy,
            type,
            location,
            status,
            imageUrl,
            videoUrl,
            comment,
           
        };

        db.incident.push(newIncident);
        return res.status(201).json({
            newIncident,
            status: 'Success',
            message: 'Created red-flag record'
        });
    }
}

module.exports = IncidentController;
