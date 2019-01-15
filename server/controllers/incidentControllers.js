import winston from '../config/winston';
import databaseConnection from '../models/dataBaseLink';
/**
 * @class IncidentController
 * @description Specifies which method handles a given request for a specific endpoint
 * @exports IncidentController
 */

class IncidentController {
  /**
   * @method getAllIncidents
   * @description Retrieves a list of records
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static async getAllIncidents(req, res) {
    const query = 'SELECT * FROM incidents WHERE type = $1';
    const { incidentType } = req.params;
    const type = incidentType.substr(0, incidentType.length - 1);

    await databaseConnection.query(query, [type], (err, dbRes) => {
      if (err) {
        return res.status(404).json({
          status: 404,
          message: 'No incident record found',
        });
      }
      if (dbRes.rowCount > 0) {
        const allIncident = dbRes.rows;
        return res.status(200).json({
          status: 200,
          message: `successfully retrieved all ${type} records`,
          data: allIncident,
        });
      }
      return res.status(404).json({
        status: 404,
        message: 'No incident found',
      });
    });
  }

  /**
   * @method getAnIncident
   * @description Retrieves a specific record with a given ID
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static async getAnIncident(req, res) {
    const { postId } = req;
    const { incidentType } = req.params;
    const type = incidentType.substr(0, incidentType.length - 1);

    const query = 'SELECT * FROM incidents WHERE type = $1 AND id = $2';
    // eslint-disable-next-line consistent-return
    await databaseConnection.query(query, [type, postId], (err, dbRes) => {
      if (err) {
        return res.status(404).json({
          status: 404,
          message: `${type} with such id does not exist`,
        });
      }
      if (dbRes.rowCount > 0) {
        return res.status(200).json({
          status: 200,
          message: `Successfully retrieved ${type} with an id ${postId}`,
          data: dbRes.rows[0],
        });
      }
      return res.status(404).json({
        status: 404,
        message: `${type} not found!`,
      });
    });
  }

  /**
   * @method createIncident
   * @description Posts the given record to the database
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static createIncident(req, res) {
    try {
      const { id } = req.user;
      const { incidentType } = req.params;
      const type = incidentType.substr(0, incidentType.length - 1);
      const {
        comment, latitude, longitude, images, videos,
      } = req.body;
      const query = `
      INSERT INTO incidents(createdby, type, comment, latitude, longitude, images, videos) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
      const params = [id, type, comment, latitude, longitude,
        images, videos];

      databaseConnection.query(query, params, (err, dbRes) => {
        if (err) {
          winston.info(err.toString());
          return res.status(500).json({
            status: 500,
            error: 'Something went wrong with the database',
          });
        }
        const postId = dbRes.rows[0].id;
        return res.status(201).json({
          status: 201,
          data: [{
            id: postId,
            message: `Created ${type} record`,
            incident: {
              type, comment, latitude, longitude, images, videos,
            },
          }],
        });
      });
    } catch (err) {
      winston.info(err.toString());
    }
  }

  /**
   * @method updateIncident
   * @description Updates a specific report based on the given parameters
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static updateIncident(req, res) {
    try {
      const { postId } = req;
      const { incidentType } = req.params;
      const type = incidentType.substr(0, incidentType.length - 1);

      let message;
      if (req.body.comment) {
        const { comment } = req.body;
        const query = `
        UPDATE incidents SET comment = $1 WHERE id = $2 RETURNING comment`;
        return databaseConnection.query(query, [comment, postId], (err, dbRes) => {
          if (dbRes) {
            message = `${type} record comment has been updated succesfully`;
            const incidentId = postId;
            return res.status(200).json({
              status: 200,
              incidentId,
              message,
              data: dbRes.rows,
            });
          }
          return err;
        });
      }

      if (req.body.latitude && req.body.longitude) {
        const { latitude, longitude } = req.body;
        const query = `
        UPDATE incidents SET latitude = $1, longitude = $2 WHERE id = $3 RETURNING latitude, longitude`;
        return databaseConnection.query(query, [latitude, longitude, postId], (err, dbRes) => {
          if (dbRes) {
            message = `Successfully Updated ${type} record's location`;
            const incidentId = postId;
            return res.status(200).json({
              status: 200,
              incidentId,
              message,
              data: dbRes.rows,
            });
          }
          return err;
        });
      }
    } catch (err) {
      winston.info('opps', err);
    }
    return 'erro';
  }

  /**
   * @method deleteIncident
   * @description Deletes a specific record
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static deleteIncident(req, res) {
    const { postId } = req;
    const { incidentType } = req.params;
    const type = incidentType.substr(0, incidentType.length - 1);

    const query = 'DELETE FROM incidents WHERE id = $1';
    databaseConnection.query(query, [postId], (err, dbRes) => {
      if (dbRes.rowCount > 0) {
        return res.status(200).json({
          status: 200,
          data: [{
            message: `${type} record has been deleted`,
            id: postId,
          }],
        });
      }
      if (err) {
        return res.status(400).json({
          status: 400,
          message: 'No incident record found',
        });
      }
      return 'No incident with such record';
    });
  }

  /**
   * @method deleteAllIncident
   * @description Delete all record
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */

  static async deleteAllIncident(req, res) {
    // const { postId } = req;
    const { incidentType } = req.params;
    const type = incidentType.substr(0, incidentType.length - 1);

    const query = 'DELETE FROM incidents WHERE type = $1';
    databaseConnection.query(query, [type], (err, dbRes) => res.status(200).json({
      status: 200,
      data: [{
        message: ` All ${type} records has been deleted`,
        incident: dbRes,
      }],
    }));
  }
}

export default IncidentController;
