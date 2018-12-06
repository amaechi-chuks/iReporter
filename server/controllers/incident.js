import db from '../models/incident';

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
    if (parseInt(req.body.createdBy, 10) > 0) {
      const {
        location, type, status, imageUrl, videoUrl, comment
      } = req.body;
      const id = db.incident[db.incident.length - 1].id + 1;
      const createdOn = new Date().toString();
      const createdBy = parseInt(req.body.createdBy, 10);
      const newIncident = {
        id, createdOn, createdBy, type, location, status, imageUrl, videoUrl, comment
      };

      db.incident.push(newIncident);
      res.status(201);
      res.json({
        success: true,
        message: `Created ${newIncident.type} record`,
        data: newIncident
      });
    } else {
      res.status(400);
      res.json({
        success: false,
        message: 'Bad Request',
      });
    }
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
    if (db.incident.length !== 0) {
      const checkIncidentType = req.url.split('/')[1];
      const incident = checkIncidentType.split('s')[0];
      const incidentToDispaly = db.incident.filter((incidentType) => {
        if (incidentType.type === 'red-flag' || incident === 'red-flag') {
          return incidentType;
        }
      });

      return res.status(200).json({
        success: true,
        message: `Successfully retrived all ${incident}`,
        incidentToDispaly

      });
    }
    res.status(401).json({
      success: false,
      message: 'You are not authorized to create Incident',
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
  static getSingleRedFlag(req, res) {
    const checkIncidentType = req.url.split('/')[1];
    const index = parseInt(req.params.id, 10);
    const findRedFlag = db.incident.find(redflag => redflag.id === index);
    if (checkIncidentType === 'red-flag' && findRedFlag.type === 'red-flag') {
      return res.status(200).json({
        success: true,
        message: `Successfully retrieved ${findRedFlag.type}`,
        data: db.incident[index - 1]
      });
    }
    if (checkIncidentType === 'intervention' && findRedFlag.type === 'intervention') {
      return res.status(200).json({
        success: true,
        message: `Successfully Retrieved ${findRedFlag.type}`,
        data: db.incident[index - 1]
      });
    }
    return res.status(404).json({
      success: false,
      message: 'Request does not exist'
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
  static updateRedFlagByLocation(req, res) {
    const checkIncidentType = req.url.split('/')[1];
    const redFlagId = parseInt(req.params.id, 10);
    const oldRedFlagId = db.incident.find(allRedFlag => allRedFlag.id === redFlagId);
    if (oldRedFlagId.type === 'red-flag' && checkIncidentType === 'red-flag' && oldRedFlagId.status === 'draft') { // Check if the RedFlag location exist, then update.
      oldRedFlagId.location = req.body.location;
      db.incident[redFlagId - 1] = oldRedFlagId;
      res.status(200);
      res.json({
        success: true,
        message: 'Successfully update redFlag location',
        data: oldRedFlagId
      });
    } else if (oldRedFlagId.type === 'intervention' && checkIncidentType === 'intervention' && oldRedFlagId.status === 'draft') { // Check if the intervention location exist, then update.
      oldRedFlagId.location = req.body.location;
      db.incident[redFlagId - 1] = oldRedFlagId;
      res.status(200);
      res.json({
        success: true,
        message: 'Successfully update intervention location',
        data: oldRedFlagId
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
   * API PUT method to update a single incident by comment
   * @param {object} req
   * @param {object} res
   * @returns {object} success message
   * @returns {object} {object} JSON object representing success message
   * @memberof IncidentController
   */

  static updateRedFlagByComment(req, res) {
    const checkIncidentType = req.url.split('/')[1];
    const redFlagId = parseInt(req.params.id, 10);
    const oldRedFlagId = db.incident.find(allRedFlag => allRedFlag.id === redFlagId);
    if (oldRedFlagId.type === 'red-flag' && checkIncidentType === 'red-flag' && oldRedFlagId.status === 'draft') { // Check if the Red-flag cooment exist, then update.
      oldRedFlagId.comment = req.body.comment;
      db.incident[redFlagId - 1] = oldRedFlagId;
      res.status(200);
      res.json({
        success: true,
        message: 'Successfully update redFlag comment',
        data: oldRedFlagId
      });
    } else if (oldRedFlagId.type === 'intervention' && checkIncidentType === 'intervention' && oldRedFlagId.status === 'draft') { // Check if the intervention commit exist, then update.
      oldRedFlagId.comment = req.body.comment;
      db.incident[redFlagId - 1] = oldRedFlagId;
      res.status(200);
      res.json({
        success: true,
        message: 'Successfully update intervention comment',
        data: oldRedFlagId
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

  static deleteRedFlagById(req, res) {
    const checkIncidentType = req.url.split('/')[1];
    const findNow = parseInt(req.params.id, 10);
    const deleteIncident = db.incident.find(check => check.id === findNow);
    if (deleteIncident) {
      const newIncidentId = db.incident.filter(newIncident => newIncident.id !== findNow);
      db.incident = newIncidentId;
      return res.status(200).json({
        success: true,
        message: 'Deleted successfully!',

      });
    }
    if (deleteIncident.type === 'intervention' && checkIncidentType === 'intervention') {
      return res.status(200).json({
        success: true,
        message: 'Deleted successfully!',

      });
    }

    return res.status(404).json({
      success: false,
      message: 'Not Found'
    });
  }
}
