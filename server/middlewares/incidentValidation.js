import checkItem from '../helpers/checkInput';

/**
 * Validate Request POST and GET req
 * @class Validation
 */
export default class IncidentValidation {
  /**
     *  @description validate incident details
     * @memberof IncidentValidation
     * @static
     *
     * @param {object} req
     * @param {object} res
     * @param {object} next
     *
     * @returns {object} get error message
     */
  static createIncidentValidation(req, res, next) {
    const {
      type, location, status, imageUrl, videoUrl, comment,
    } = req.body;

    const check = checkItem({
      type, location, status, imageUrl, videoUrl, comment,
    });

    if (Object.keys(check).length > 0) {
      return res.status(400).json(check);
    } return next();
  }

  /**
     *  @description validate incident details
     * @memberof IncidentValidation
     * @static
     *
     * @param {object} req
     * @param {object} res
     * @param {object} next
     *
     * @returns {object} get error message
     */
  static updateIncidentValidation(req, res, next) {
    const { comment, location } = req.body;
    const requestID = parseInt(req.params.requestId, 10);

    if (!Number.isNaN(requestID)) {
      const check = checkItem({ comment, location });

      if (Object.keys(check).length > 0) {
        return res.status(400).json(check);
      }
    }
    return next();
  }
}
