import db from '../models/incident';

/**
 * Class representing Incident Validations
 * @class IncidentValidator
* */

export default class IncidentValidator {
  /**
   * Get a specific product
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - Calls the next function
   * @returns {object} JSON representing the failure message
   * @memberof IncidentValidator
   */
  static getOneIncident(req, res, next) {
    const incidentId = parseInt(req.params.id, 10);
    if (!incidentId) {
      return res.status(400).json({
        status: 400,
        message: 'Invalid ID'
      });
    }
    const foundincident = db.incident.find(incident => incident.id === (incidentId));
    if (!foundincident) {
      return res.status(404).json({
        status: 404,
        message: 'This incident does not exist'
      });
    }
    req.body.foundincident = foundincident;
    return next();
  }

  /**
   * Check incident input
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - Calls the next function
   * @returns {object} JSON representing the failure message
   * @memberof IncidentValidator
   */
  static incidentInputChecker(req, res, next) {
    const {
      createdOn, createdBy, type, location, status, imageUrl, videoUrl
    } = req.body;

    if (createdOn === undefined) {
      return res.status(400).json({
        status: 400,
        message: 'createdOn cannot be undefined'
      });
    }
    const createdOnVerifier = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

    if (!createdOnVerifier.test(createdOn)) {
      return res.status(400).json({
        status: 400,
        message: 'createdOn format should be yyyy-mm-dd'
      });
    }
    if (createdOn === '') {
      return res.status(400).json({
        status: 400,
        message: 'createdOn should have a date'
      });
    }

    if (createdBy === undefined) {
      return res.status(400).json({
        status: 400,
        message: 'createdBy cannot  be undefined'
      });
    }
    if (typeof createdBy !== 'string') {
      return res.status(400).json({
        status: 400,
        message: 'createdBy should be a number'
      });
    }
    const createdByVerifier = /[0-9]/;
    if (!createdByVerifier.test(createdBy)) {
      return res.status(400).json({
        status: 400,
        message: 'createdby cannot be a string'
      });
    }
    if (createdBy.length < 0 || createdBy.length > 2) {
      return res.status(400).json({
        status: 400,
        message: 'createdBy number ranges from 1 to 90'
      });
    }
    if (createdBy === '') {
      return res.status(400).json({
        status: 400,
        message: 'createdBy cannot be empty'
      });
    }
    const foundIncidentCreateBy = db.incident.find(incident => incident.createdBy === createdBy);
    if (foundIncidentCreateBy) {
      return res.status(409).json({
        status: 409,
        message: 'Incident already exists, consider updating it instead'
      });
    }

    if (type === undefined) {
      return res.status(400).json({
        status: 400,
        message: 'Incident type cannot be undefined'
      });
    }
    if (typeof type !== 'string') {
      return res.status(400).json({
        status: 400,
        message: 'Incident type should be a string'
      });
    }
    if (type === '') {
      return res.status(400).json({
        status: 400,
        message: 'Incident should have a type'
      });
    }


    if (type !== 'red-flag') {
      return res.status(400).json({
        status: 400,
        message: 'incident should have a type either red-flag or intervention'
      });
    }

    if (location === undefined) {
      return res.status(400).json({
        status: 400,
        message: 'Incident location cannot be undefined'
      });
    }
    if (typeof location !== 'string') {
      return res.status(400).json({
        status: 400,
        message: 'Incident location should be a string'
      });
    }
    if (location === '') {
      return res.status(400).json({
        status: 400,
        message: 'Incident should have a location'
      });
    }
    const locationVerify = /^\d{1}\w{1}\s\d{1}\w{1}$/;
    if (!locationVerify.test(location)) {
      return res.status(400).json({
        status: 400,
        message: 'Invalid location  Input'
      });
    }

    if (status === undefined) {
      return res.status(404).json({
        status: 404,
        message: 'Incident status cannot be undefined'
      });
    }
    if (typeof status !== 'string') {
      return res.status(400).json({
        status: 400,
        message: 'Incident status should be a string'
      });
    }
    if (status === '') {
      return res.status(400).json({
        status: 400,
        message: 'Incident should have a status'
      });
    }
    if (status !== 'draft') {
      return res.status(400).json({
        status: 400,
        message: 'Invalid status Input'
      });
    }

    if (imageUrl === undefined) {
      return res.status(400).json({
        status: 400,
        message: 'Image URL cannot be undefined'
      });
    }
    if (typeof imageUrl !== 'string') {
      return res.status(400).json({
        status: 400,
        message: 'Image URL should be a string'
      });
    }
    if (imageUrl === '') {
      return res.status(400).json({
        status: 400,
        message: 'Image URL cannot be empty'
      });
    }
    if (imageUrl.length < 5 || imageUrl.length > 40) {
      return res.status(400).json({
        status: 400,
        message: 'Image URL length should from 5 to 40 characters'
      });
    }

    if (videoUrl === undefined) {
      return res.status(400).json({
        status: 400,
        message: 'Video URL cannot be undefined'
      });
    }
    if (typeof (videoUrl) !== 'string') {
      return res.status(400).json({
        status: 400,
        message: 'Video URL should be a string'
      });
    }
    if (videoUrl.length < 5 || videoUrl.length > 40) {
      return res.status(400).json({
        status: 400,
        message: 'Video URL length should from 5 to 40 characters'
      });
    }
    if (videoUrl === '') {
      return res.status(400).json({
        status: 400,
        message: 'Video url cannot be empty'
      });
    }

    req.body.createdOn = createdOn;
    req.body.createdBy = createdBy;
    req.body.type = type;
    req.body.location = location;
    req.body.status = status;
    req.body.imageUrl = imageUrl;
    req.body.videoUrl = videoUrl;

    next();
  }

  /**
   * Update by location alidation
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - Calls the next function
   * @returns {object} JSON representing the failure message
   * @memberof IncidentValidator
   */
  static updateByLocation(req, res, next) {
    const { location } = req.body;

    if (location === undefined) {
      return res.status(400).json({
        status: 400,
        message: 'location cannot be undefined'
      });
    }

    if (location === '') {
      return res.status(400).json({
        status: 400,
        message: 'Incident should have a location'
      });
    }
    const locationVerify = /^\d{1}\w{1}\s\d{1}\w{1}$/;
    if (!locationVerify.test(location)) {
      return res.status(400).json({
        status: 400,
        message: 'Invalid Location Input',
        sample: '6W 7N'
      });
    }

    req.body.location = location;
    return next();
  }

  static updateByComment(req, res, next) {
    const { comment } = req.body;
    if (comment === undefined) {
      return res.status(400).json({
        status: 400,
        message: 'Comment is required'
      });
    }
    if (typeof comment !== 'string') {
      return res.status(400).json({
        status: 400,
        message: 'comment should be a string'
      });
    }
    if (comment === '') {
      return res.status(400).json({
        status: 'Fail',
        message: 'Type a brief comment'
      });
    }

    if (comment.length < 10 || comment.length > 100) {
      return res.status(400).json({
        status: 'Fail',
        message: 'comment should be between 10 and 100 characters'
      });
    }
    const commentVerifier = /^[\d\w\s]+$/i;
    if (!commentVerifier.test(comment)) {
      return res.status(400).json({
        status: 'Fail',
        message: 'comment should contain alphanumeric only'
      });
    }
    req.body.comment = comment;
    next();
  }
}
