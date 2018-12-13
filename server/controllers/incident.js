import dotenv from 'dotenv';
import incidentHelper from '../helpers/incidentHelper';
import databaseConnection from '../models/dataBaseLink';


dotenv.config();

/**
 * Class representing IncidentController
 * @class IncidentController
 */

export default class IncidentController {
/**
 * API method to Post an Incident
 * @static
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @return {object} JSON representing success message
 * @memberof IncidentController
 */
  static createIncident(req, res) {
    const {
      type, location, status, imageUrl, videoUrl, comment,
    } = req.body;
    const createdBy = req.user.id;
    const userQuery = 'INSERT INTO incident (createdby, type, location, status, imageurl, videourl, comment) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const params = [createdBy, type, location, status, imageUrl, videoUrl, comment];
    databaseConnection.query(userQuery, params)
      .then(result => incidentHelper.success(
        res, 201,
        `${type} created successfully`, result.rows[0],
      )).catch(error => incidentHelper.error(res, 500, error.message));
  }

  /**
   * API Get method to get all Incident
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} JSON object representing success message
   * @memberof IncidentController
   */
  static getAllIncident(req, res) {
    const getAllIncidentQuery = 'SELECT * FROM incident';
    databaseConnection.query(getAllIncidentQuery)
      .then((result) => {
        const user = result.rows[0];
        if (user) {
          incidentHelper.success(res, 200, ' successfully retrieved all incident ', result.rows);
        } else {
          incidentHelper.error(res, 400, 'Request with id does not exist');
        }
      }).catch(error => incidentHelper.error(res, 500, error.toString()));
  }

  /**
   * API GET method to get a single incident by Id
   * @param {object} req
   * @param {object} res
   * @returns {object} success message
   * @returns {object} {object} JSON object representing success message
   * @memberof IncidentController
   */
  static getSingleIncident(req, res) {
    const getSingleIncidentQuery = 'SELECT * FROM incident WHERE createdBy = $1 LIMIT 1;';

    const params = [req.body.createdBy];
    databaseConnection.query(getSingleIncidentQuery, params)
      .then((result) => {
        const user = result.rows[0];
        if (user) {
          incidentHelper.success(res, 200, ' successfully retrieved red-flag', result.rows);
        } else {
          incidentHelper.error(res, 400, 'Request with id does not exist');
        }
      }).catch(error => incidentHelper.error(res, 500, error.toString()));
  }


  /**
   * API PUT method to update  a single incident by location
   * @param {object} req
   * @param {object} res
   * @returns {object} success message
   * @returns {object} {object} JSON object representing success message
   * @memberof IncidentController
   */
  static updateIncident(req, res) {
    const { location, comment } = req.body;
    const createdBy = req.user.id;
    console.log(createdBy);
    const id = parseInt(req.params.id, 10);
    const checkId = 'SELECT * FROM incident WHERE id = $1 LIMIT 1;';
    const userQuery = 'UPDATE incident SET location =$1, comment = $2 WHERE createdby = $3 RETURNING *';
    const value = [id];
    const params = [location, comment, createdBy];
    databaseConnection.query(checkId, value)
      .then((result) => {
        // console.log(result.rows[0]);
        if (!result.rows[0]) {
          return incidentHelper.error(res, 400, 'Request with id does not exist');
        } if (createdBy !== result.rows[0].createdby || result.rows[0].status !== 'draft') {
          return incidentHelper.error(res, 400, 'Access Denied. You are not authorized');
        }
        return databaseConnection.query(userQuery, params)
          .then(update => incidentHelper.success(res, 200, ' Request with id successfully updated ', update.rows[0]))
          .catch(error => incidentHelper.error(res, 500, error.toString()));
      }).catch(error => incidentHelper.error(res, 500, error.toString()));
  }

  /**
   * API PUT method to update a single incident by comment
   * @param {object} req
   * @param {object} res
   * @returns {object} success message
   * @returns {object} {object} JSON object representing success message
   * @memberof IncidentController
   */
  static updateIncidentComment(req, res) {
    const checkIncidentType = req.url.split('/')[1];
    const incidentId = parseInt(req.params.id, 10);
    const oldIncident = db.incident.find(allIncident => allIncident.id === incidentId);
    if (oldIncident.type === checkIncidentType && oldIncident.status === 'draft') { // Check if the Incident comment exist, then update.
      oldIncident.comment = req.body.comment;
      db.incident[incidentId - 1] = oldIncident;
      res.status(200);
      res.json({
        success: true,
        message: `Successfully updated ${checkIncidentType} comment`,
        data: [oldIncident],
      });
    } else {
      res.status(401);
      res.json({
        success: false,
        message: 'You are not authorized to edit this page',

      });
    }
  }

  /**
   * API DELETE method to delete red-flag by Id
   * @param {obj} req
   * @param {obj} res
   * @returns {obj} success message
   * @returns {object} {object} JSON object representing success message
   * @memberof IncidentController
   */

  static deleteIncidentById(req, res) {
    const checkIncidentType = req.url.split('/')[1];
    const incidentId = parseInt(req.params.id, 10);
    const deleteIncident = db.incident.find(check => check.id === incidentId);
    if (deleteIncident && deleteIncident.type === checkIncidentType) {
      const newIncidents = db.incident.filter(newIncident => newIncident.id !== incidentId);
      db.incident = newIncidents;
      return res.status(200).json({
        success: true,
        message: 'Deleted successfully!',

      });
    }
    return res.status(404).json({
      success: false,
      message: 'Not Found',
    });
  }
}
