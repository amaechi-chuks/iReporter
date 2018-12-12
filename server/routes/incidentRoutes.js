import express from 'express';
import IncidentController from '../controllers/incident';
import IncidentValidator from '../middlewares/incident';


const {
  createIncident,
  getAllIncident,
  getSingleIncident,
  updateIncidentComment,
  updateIncidentLocation,
  deleteIncidentById,
} = IncidentController;

const {
  validateSingleIncident, incidentInputChecker, updateByLocation, updateByComment,
} = IncidentValidator;

const router = express.Router();

router.post('/red-flags', incidentInputChecker, createIncident);

router.post('/interventions', incidentInputChecker, createIncident);

router.get('/interventions', getAllIncident);

router.get('/red-flag/:id', validateSingleIncident, getSingleIncident);

router.get('/intervention/:id', validateSingleIncident, getSingleIncident);

router.put('/red-flag/:id/location', updateByLocation, updateIncidentLocation);

router.put('/intervention/:id/location', updateByLocation, updateIncidentLocation);

router.put('/red-flag/:id/comment', updateByComment, updateIncidentComment);

router.put('/intervention/:id/comment', updateByComment, updateIncidentComment);

router.delete('/red-flag/:id/delete', validateSingleIncident, deleteIncidentById);

router.delete('/intervention/:id/delete', validateSingleIncident, deleteIncidentById);

export default router;
