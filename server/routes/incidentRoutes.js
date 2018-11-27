import express from 'express';
import controllers from '../controllers';

const { IncidentController } = controllers;


const router = express.Router();

// create a red-flag record
router.route('/red-flags')
    .post(IncidentController.createIncident);

//create a intervention record
router.route('/intervention')
    .post(IncidentController.createIncident);

//Get all red-flag record
router.route('/red-flags')
    .get(IncidentController.getAllIncident);

//Get all red-flag record
router.route('/intervention')
    .get(IncidentController.getAllIncident);


//Get red-flag by id
router.route('/red-flag/:id')
    .get(IncidentController.getSingleRedFlag);

//Get intervention by id
router.route('/intervention/:id')
    .get(IncidentController.getSingleRedFlag);

//Update redFlag by location   
router.route('/red-flag/:id/location')
    .put(IncidentController.updateRedFlagByLocation);

//Update intervention by location 
router.route('/intervention/:id/location')
    .put(IncidentController.updateRedFlagByLocation);

//Update red-flag comment
router.route('/red-flag/:id/comment')
    .put(IncidentController.updateRedFlagByComment);

//Update intervention comment
router.route('/intervention/:id/comment')
    .put(IncidentController.updateRedFlagByComment);

    //Delete red-flag by Id
router.route('/red-flag/:id/delete')
.delete(IncidentController.deleteRedFlagById);

router.route('/intervention/:id/delete')
.delete(IncidentController.deleteRedFlagById);
export default router;
