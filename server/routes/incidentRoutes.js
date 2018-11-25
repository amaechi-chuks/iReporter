import express from 'express';
import controllers from '../controllers';

const { IncidentController } = controllers;


const router = express.Router();

//route to create a red-flag record
router.route('/red-flags')
    .post(IncidentController.createIncident);

//route to get all red-flag record
router.route('/red-flags')
      .get(IncidentController.getAllIncident);


//Get red-flag by id
router.route('/red-flag/:id')
    .get(IncidentController.getSingleRedFlag);


export default router;
