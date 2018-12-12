import dotenv from 'dotenv';
import incidentHelper from '../helpers/incidentHelper';
import databaseConnection from '../models/dataBaseLink';


import db from '../models/incident';

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
      type, location, status, imageUrl, videoUrl, comment
    } = req.body;
    const { createdBy } = req.body;
    const userQuery = 'INSERT INTO incident (type, location, status, imageurl, videourl, comment, createdby) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const params = [type, location, status, imageUrl, videoUrl, comment, createdBy];
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
    if (db.incident.length === 0 || db.incident === null || db.incident === []) {
      res.status(401).json({
        success: false,
        message: 'Incidents can not be fetched at the moment',
      });
    }
    const checkIncidentType = req.url.split('/')[1];
    const incident = checkIncidentType.split('s')[0];
    const incidentToDispaly = db.incident.filter(incidentType => incidentType.type === incident);
    res.status(200).json({
      success: true,
      message: `Successfully retrived all ${incident}s`,
      data: [incidentToDispaly],

    });
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
    const checkIncidentType = req.url.split('/')[1];
    const index = parseInt(req.params.id, 10);
    const findRedFlag = db.incident.find(redflag => redflag.id === index);
    // check Incident type
    if ((checkIncidentType === 'red-flag' && findRedFlag.type === 'red-flag') || (checkIncidentType === 'intervention' && findRedFlag.type === 'intervention')) {
      return res.status(200).json({
        success: true,
        message: `Successfully retrieved ${findRedFlag.type}`,
        data: [db.incident[index - 1]],
      });
    }
    return res.status(404).json({
      success: false,
      message: `Cannot retrieve ${checkIncidentType} of id ${index}`,
    });
  }

  /**
   * API PUT method to update  a single incident by location
   * @param {object} req
   * @param {object} res
   * @returns {object} success message
   * @returns {object} {object} JSON object representing success message
   * @memberof IncidentController
   */
  static updateIncidentLocation(req, res) {
    const checkIncidentType = req.url.split('/')[1];
    const incidentId = parseInt(req.params.id, 10);
    const oldIncident = db.incident.find(allIncident => allIncident.id === incidentId);
    if (oldIncident.type === checkIncidentType && oldIncident.status === 'draft') { // Check if the  location exist, then update.
      oldIncident.location = req.body.location;
      db.incident[incidentId - 1] = oldIncident;
      res.status(200);
      res.json({
        success: true,
        message: `Successfully Updated  ${checkIncidentType} `,
        data: oldIncident,

      });
    } else {
      res.status(401);
      res.json({
        status: 401,
        message: 'You are not authorized to create Incident',
      });
    }
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
