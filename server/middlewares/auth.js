/* eslint-disable import/no-named-as-default */
import db from '../models/incident';

/**
 * Class representing User Authorization
  @class VerifyRole
* */
export default class VerifyRole {
  /**
   * isAdmin - Checks if user is an admin
   * @static
   * @param {object} req - Request object
   * @param {object} res - Response Object
   * @param {object} next - Calls the next function/route handler
   * @returns {object} JSON representing the failure message
   */
  static isAdminLogin(req, res, next) {
    const adminId = parseInt(req.params.id, 10);
    const foundAdmin = db.userDb.find(user => user.id === adminId);
    if (foundAdmin) {
      if (foundAdmin.isAdmin === true) {
        return next();
      }
      return res.status(401).json({
        success: false,
        message: 'You are not authorized to visit this page',
      });
    }
    return res.status(404).json({
      success: false,
      message: 'Please login with the correct details',
    });
  }

  /**
   * notAdmin - Checks if user is notAdmin
   * @static
   * @param {object} req - Request object
   * @param {object} res - Response Object
   * @param {object} next - Calls the next function/route handler
   * @returns {object} JSON representing the failure message
   */
  static isNotAdmin(req, res, next) {
    const userId = parseInt(req.params.id, 10);
    const foundUser = db.userDb.find(user => user.id === userId);
    if (foundUser) {
      if (foundUser.isAdmin === false) {
        return next();
      }
      return res.status(401).json({
        status: 404,
        message: 'You are not authorized to visit this page',
      });
    }
    return res.status(422).json({
      success: false,
      message: 'Please login with the correct details',
    });
  }
}
