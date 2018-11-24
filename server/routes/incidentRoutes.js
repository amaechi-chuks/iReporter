import express from 'express';
import  controllers from '../controllers';

const { IncidentController } = controllers;

// const { createIncident } = IncidentController;

const router = express.Router();


router.route('/red-flags')
.post((req, res) => IncidentController.createIncident(req, res, 'Red Flag'));


export default router;