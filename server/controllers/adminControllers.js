import databaseConnection from '../models/dataBaseLink';
import sendMail from '../ultility/email';

export default class AdminController {
  /**
   * @description - Add a new intervention record
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof AdminController
   *
   * @returns {object} Class instance
   */

  static async changeRecordStatus(req, res) {
    try {
      const { postId } = req;
      const { incidentType } = req.params;
      const type = incidentType.substr(0, incidentType.length - 1);

      if (req.body.status) {
        const { status } = req.body;
        const query = `
        UPDATE incidents SET status = $1 WHERE id = $2 RETURNING status`;

        return databaseConnection.query(query, [status, postId], (err, dbRes) => {
          if (dbRes) {
            const emailPayload = {
              firstname: req.body.firstname,
              email: req.body.email,
              status: req.body.status,
            };
            sendMail(emailPayload);
            res.status(201).json({
              status: 201,
              messgae: `${type} Record has been successfully changed`,
              data: dbRes.rows[0],
            });
          }
        });
      }
    } catch (err) {
      return res.status(404).json({
        status: 404,
        message: 'Something went wrong with the database',
      });
    }
    return res.status(404).json({
      status: 404,
      message: 'No incident found',
    });
  }
}
