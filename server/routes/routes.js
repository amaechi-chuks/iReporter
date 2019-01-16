import express from 'express';
import IncidentController from '../controllers/incidentControllers';
import ValidateIncident from '../middlewares/ValidateIncident';
import AuthenticateUser from '../middlewares/AuthenticateUser';
import AdminController from '../controllers/adminControllers';
import UserController from '../controllers/usersControllers';
import ValidateUser from '../middlewares/ValidateUser';


const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

router.post(
  '/auth/register',
  ValidateUser.validateLoginDetails,
  ValidateUser.validateProfileDetails,
  ValidateUser.validateExistingUser,
  UserController.registerUser,
);
router.post(
  '/auth/login',
  ValidateUser.validateLoginDetails,
  UserController.loginUser,
);

router.post(
  '/:incidentType',
  ValidateIncident.validateIncidentType,
  ValidateIncident.validateCoordinates,
  ValidateIncident.validateComment,
  AuthenticateUser.verifyUser,
  IncidentController.createIncident,
);


// Handle all GET requests
router.get(
  '/:incidentType',
  AuthenticateUser.verifyUser,
  IncidentController.getAllIncidents,
);
router.get(
  '/:incidentType/:id',
  AuthenticateUser.verifyUser,
  ValidateIncident.validateIncidentId,
  IncidentController.getAnIncident,
);

// Handle all PATCH requests
router.patch(
  '/:incidentType/:id/location',
  AuthenticateUser.verifyUser,
  ValidateIncident.validateIncidentId,
  ValidateIncident.validateCoordinates,
  IncidentController.updateIncident,
);
router.patch(
  '/:incidentType/:id/comment',
  AuthenticateUser.verifyUser,
  ValidateIncident.validateIncidentId,
  ValidateIncident.validateComment,
  IncidentController.updateIncident,
);
router.patch(
  '/:incidentType/:id/status',
  AuthenticateUser.verifyAdmin,
  ValidateIncident.validateIncidentId,
  ValidateIncident.validateIncidentType,
  AdminController.changeRecordStatus,
);

// Handle Delete requests
router.delete(
  '/:incidentType/:id',
  AuthenticateUser.verifyUser,
  ValidateIncident.validateIncidentId,
  IncidentController.deleteIncident,
);

router.delete(
  '/:incidentType',
  AuthenticateUser.verifyUser,
  // ValidateIncident.validateIncidentId,
  IncidentController.deleteAllIncident,
);


export default router;
