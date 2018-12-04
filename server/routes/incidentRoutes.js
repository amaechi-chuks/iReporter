import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const { IncidentController } = controllers;

const {
  createIncident, getAllIncident, getSingleRedFlag,
  updateRedFlagByComment, updateRedFlagByLocation,
  deleteRedFlagById
} = IncidentController;

const { IncidentValidator } = middlewares;

const {
  getOneIncident, incidentInputChecker, updateByLocation, updateByComment
} = IncidentValidator;

const router = express.Router();

router.route('/red-flags').post(incidentInputChecker, updateByComment, updateByLocation, createIncident);

router.route('/interventions').post(incidentInputChecker, updateByComment, updateByLocation, createIncident);

router.route('/red-flags').get(getAllIncident);

router.route('/interventions').get(getAllIncident);

router.route('/red-flag/:id').get(getOneIncident, getSingleRedFlag);

router.route('/intervention/:id').get(getOneIncident, getSingleRedFlag);

router.route('/red-flag/:id/location').put(updateByLocation, updateRedFlagByLocation);

router.route('/intervention/:id/location').put(updateByLocation, updateRedFlagByLocation);

router.route('/red-flag/:id/comment').put(updateByComment, updateRedFlagByComment);

router.route('/intervention/:id/comment').put(updateByComment, updateRedFlagByComment);

router.route('/red-flag/:id/delete').delete(getOneIncident, deleteRedFlagById);

router.route('/intervention/:id/delete').delete(getOneIncident, deleteRedFlagById);

export default router;
