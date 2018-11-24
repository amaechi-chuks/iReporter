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
        if (db.incident.length !== 0) {
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
            res.status(201);
            res.json({
                success: true,
                message: 'Created red-flag record',
                data: newIncident
            });
        }
        else {
            res.status(400);
            res.json({
                success: false,
                message: 'You are not authorized to create Incident',
            });
        }
    }


    /**
     * Get all red-flag records
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
                    success: true,
                    message: 'Successfully Retrieved incident record',
                    data: db.incident,
                });
            }
        } else {
            res.status(404);
            res.json({
                success: false,
                message: 'No incident found',
            });
        }
    }

    /**
   * Get one red-flag by its ID
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} {object} JSON object representing success message
   * @memberof IncidentController
   */
  static getOneIncident(req, res) {
    const { foundProduct } = req.body;
    return res.status(200).json({
      foundProduct,
      message: 'Product successfully found'
    });
  }

}

module.exports = IncidentController;
