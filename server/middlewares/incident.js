import db from '../models/incident'

/**
 * Class representing Incident Validations
 * @class IncidentValidator
**/


class IncidentValidator {
    /**
     * Get a specific product
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @param {function} next - Calls the next function
     * @returns {object} JSON representing the failure message
     * @memberof IncidentValidator
    **/
    static getOneIncident(req, res, next) {
        const { incidentId } = req.params;
        if (!Number(incidentId)) {
            return res.status(400).json({
                status: 400,
                message: 'Invalid URL'
            });
        }
        const foundincident = db.incident.find(incident => incident.id === Number(incidentId));
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
        let {
            createdOn, createdBy, type, location, status, imageUrl, videoUrl, comment
        } = req.body;

        // createdOn
        if (createdOn === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'Incident date cannot be undefined'
            });
        }
        if (typeof createdOn !== "number") {
            return res.status(400).json({
                status: 400,
                message: 'Incident date should be a number'
            });
        }
        if (createdOn === '') {
            return res.status(400).json({
                status: 400,
                message: 'Incident should have a date'
            });
        }

        //createdBy
        if (createdBy === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'Incident date cannot be undefined'
            });
        }
        if (typeof createdBy !== "number") {
            return res.status(400).json({
                status: 400,
                message: 'Incident date should be a number'
            });
        }
        if (createdBy === '') {
            return res.status(400).json({
                status: 400,
                message: 'Incident should have a date'
            });
        }
        const foundIncidentCreateBy = db.incident.find(incident => incident.createdBy === createdBy);
        if (foundIncidentCreateBy) {
            return res.status(409).json({
                status: 400,
                message: 'Incident already exists, consider updating it instead'
            });
        }

        //Type
        if (type === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'Incident type cannot be undefined'
            });
        }
        if (typeof type !== "string") {
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
        type = type.toLocaleLowerCase().trim();
        if (type === 'red-flag' || 'intervention') {
            return res.status(400).json({
                status: 400,
                message: 'incident should have a type either red-flag or intervention'
            })
        }
        if (!type.test(type)) {
            return res.status(400).json({
                status: 400,
                message: 'comment should contain characters only'
            });
        }

        //location
        if (location === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'Incident location cannot be undefined'
            });
        }
        if (typeof location !== "string") {
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
        const verifyLocation = /^\d{1}\w{1}\s\d{1}\w{1}$/;
        if (!verifyLocation) {
            return res.status(400).json({
                status: 400,
                message: 'Invalid Input'

            })
        }

        //status
        if (status === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'Incident status cannot be undefined'
            });
        }
        if (typeof status !== "string") {
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
        if (status === 'draft') {
            return res.status(400).json({
                status: 400,
                message: 'Invalid Input'
            });
        }

        //imgaeUrl
        if (imageurl === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'Image URL cannot be undefined'
            });
        }
        if (typeof imageurl !== 'string') {
            return res.status(400).json({
                status: 400,
                message: 'Image URL should be a string'
            });
        }
        if (imageurl === '') {
            return res.status(400).json({
                status: 400,
                message: 'Enter a valid url for this incident'
            });
        }

        //videoUrl
        if (videoUrl === undefined) {
            return res.status(400).json({
                status: 400,
                message: 'Video URL cannot be undefined'
            });
        }
        if (typeof videoUrl !== 'string') {
            return res.status(400).json({
                status: 400,
                message: 'Video URL should be a string'
            });
        }
        if (videoUrl === '') {
            return res.status(400).json({
                status: 400,
                message: 'Video avalid url for this incident'
            });
        }

        //comment
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

        comment = comment.toLowerCase().trim();
        if (comment.length < 10 || comment.length > 100) {
            return res.status(400).json({
                status: 'Fail',
                message: 'comment should be between 10 and 100 characters'
            });
        }
        const commentVerifier = /^[\d\w\s]+$/
        if (!commentVerifier.test(comment)) {
            return res.status(400).json({
                status: 'Fail',
                message: 'comment should contain alphanumeric only'
            });
        }
        req.body.createdOn = createdOn;
        req.body.createdBy = createdBy;
        req.body.type = type;
        req.body.location = location;
        req.body.status = status;
        req.body.imageUrl = imageUrl;
        req.body.videoUrl = videoUrl;
        req.body.comment = comment;

        next();
    }

}
module.exports = IncidentValidator;