import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';


const { IncidentController } = controllers;

 const { createIncident, getAllIncident, getSingleRedFlag, updateRedFlagByComment, updateRedFlagByLocation, deleteRedFlagById } = IncidentController;

const { IncidentValidator } = middlewares;

const { getOneIncident, incidentInputChecker, updateByLocation, updateByComment } = IncidentValidator;


const router = express.Router();

// create a red-flag record
router.route('/red-flags')
    .post(incidentInputChecker, updateByComment, updateByLocation, createIncident);

//create a intervention record
router.route('/intervention')
    .post(incidentInputChecker, updateByComment, updateByLocation, createIncident);

//Get all red-flag record
router.route('/red-flags')
    .get( getAllIncident);

//Get all red-flag record
router.route('/intervention')
    .get(getAllIncident);


//Get red-flag by id
router.route('/red-flag/:id')
    .get(getOneIncident, getSingleRedFlag);

//Get intervention by id
router.route('/intervention/:id')
    .get(getOneIncident, getSingleRedFlag);

//Update redFlag by location   
router.route('/red-flag/:id/location')
    .put(updateByLocation, updateRedFlagByLocation);

//Update intervention by location 
router.route('/intervention/:id/location')
    .put(updateByLocation, updateRedFlagByLocation);

//Update red-flag comment
router.route('/red-flag/:id/comment')
    .put(updateByComment, updateRedFlagByComment);

//Update intervention comment
router.route('/intervention/:id/comment')
    .put(updateByComment, updateRedFlagByComment);

    //Delete red-flag by Id
router.route('/red-flag/:id/delete')
.delete(getOneIncident, deleteRedFlagById);

//Delete intervention by Id
router.route('/intervention/:id/delete')
.delete(getOneIncident, deleteRedFlagById);

export default router;
