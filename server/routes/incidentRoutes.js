import express from 'express';
import IncidentController from '../controllers/incident';
import authToken from '../middlewares/authenticateToken';
import IncidenValidation from '../middlewares/incidentValidation';


const { createIncidentValidation, updateIncidentValidation } = IncidenValidation;
const {
  createIncident,
  getAllIncident,
  getSingleIncident,
  updateIncidentComment,
  updateIncidentLocation,
  deleteIncidentById,
  getAllIncidentType,
  getRedFlag,
} = IncidentController;


const router = express.Router();

router.post('/red-flags', authToken, createIncidentValidation, createIncident);

router.post('/interventions', authToken, createIncidentValidation, createIncident);

router.get('/incident', getAllIncident);

router.get('/red-flags', getRedFlag);
router.get('/interventions', getAllIncidentType);

router.get('/red-flag/:id', getSingleIncident);

router.get('/intervention/:id', getSingleIncident);

router.put('/red-flag/:id/location', updateIncidentValidation, updateIncidentLocation);

router.put('/intervention/:id/location', updateIncidentValidation, updateIncidentLocation);

router.put('/red-flag/:id/comment', updateIncidentValidation, updateIncidentComment);

router.put('/intervention/:id/comment', updateIncidentValidation, updateIncidentComment);

router.delete('/red-flag/:id/delete', deleteIncidentById);

router.delete('/intervention/:id/delete', deleteIncidentById);

export default router;
