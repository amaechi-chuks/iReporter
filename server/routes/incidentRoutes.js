import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const { IncidentController } = controllers;

const {
  createIncident,
  getAllIncident,
  getSingleIncident,
  updateIncidentComment,
  updateIncidentLocation,
  deleteIncidentId
} = IncidentController;

const { IncidentValidator } = middlewares;

const {
  validateSingleIncident, incidentInputChecker, updateByLocation, updateByComment
} = IncidentValidator;

const router = express.Router();

router.route('/red-flags').post(incidentInputChecker, updateByComment, updateByLocation, createIncident);

router.route('/interventions').post(incidentInputChecker, updateByComment, updateByLocation, createIncident);

router.route('/red-flags').get(getAllIncident);

router.route('/interventions').get(getAllIncident);

router.route('/red-flag/:id').get(validateSingleIncident, getSingleIncident);

router.route('/intervention/:id').get(validateSingleIncident, getSingleIncident);

router.route('/red-flag/:id/location').put(updateByLocation, updateIncidentLocation);

router.route('/intervention/:id/location').put(updateByLocation, updateIncidentLocation);

router.route('/red-flag/:id/comment').put(updateByComment, updateIncidentComment);

router.route('/intervention/:id/comment').put(updateByComment, updateIncidentComment);

router.route('/red-flag/:id/delete').delete(validateSingleIncident, deleteIncidentId);

router.route('/intervention/:id/delete').delete(validateSingleIncident, deleteIncidentId);

export default router;
