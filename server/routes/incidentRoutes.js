import express from 'express';
import IncidentController from '../controllers/incident';
import authToken from '../middlewares/authenticateToken';
import IncidenValidation from '../middlewares/incidentValidation';


const { createIncidentValidation, updateIncidentValidation } = IncidenValidation;
const {
  createIncident,
  getAllIncident,
  getSingleIncident,
  deleteIncidentById,
  updateIncident,
} = IncidentController;


const router = express.Router();

router.post('/red-flags', authToken, createIncidentValidation, createIncident);

router.post('/interventions', authToken, createIncidentValidation, createIncident);

router.get('/incident', getAllIncident);

router.get('/red-flag/:id', getSingleIncident);

router.get('/intervention/:id', getSingleIncident);

router.put('/red-flag/:id', authToken, updateIncidentValidation, updateIncident);

router.put('/intervention/:id', authToken, updateIncidentValidation, updateIncident);

router.put('/red-flag/:id/comment', updateIncidentValidation, updateIncident);

router.put('/intervention/:id/comment', updateIncidentValidation, updateIncident);

router.delete('/red-flag/:id/delete', deleteIncidentById);

router.delete('/intervention/:id/delete', deleteIncidentById);

export default router;
