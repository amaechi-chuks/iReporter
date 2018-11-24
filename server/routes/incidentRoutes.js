import express from 'express';
import  controllers from '../controllers';

const { IncidentController } = controllers;

// const { createIncident } = IncidentController;

const router = express.Router();

//route to create a red-flag record
router.route('/red-flags')
.post((req, res) => IncidentController.createIncident(req, res, 'Red Flag'));

//route to get all red-flag record

router.route('/red-flags')
.get((req, res) => IncidentController.getAllIncident(req, res, 'Red Flag'));


export default router;