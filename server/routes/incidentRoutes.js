import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';


const { IncidentController } = controllers;
const { createIncident, getAllIncident, getSingleRedFlag, updateRedFlagByLocation, updateRedFlagByComment, deleteRedFlagById } = IncidentController;

const { IncidentValidator, VerifyRole } = middlewares
const { getOneIncident, incidentInputChecker } = IncidentValidator;

const {isAdminLogin} = VerifyRole

const route = express.Router();

// create a red-flag record
route.route('/red-flags')
    .post(createIncident, incidentInputChecker);

//create a intervention record
route.route('/intervention')
    .post(createIncident);

//Get all red-flag record
route.route('/red-flags')
    .get(getAllIncident, isAdminLogin);

//Get all red-flag record
route.route('/intervention')
    .get(getAllIncident, isAdminLogin);


//Get red-flag by id
route.route('/red-flag/:id')
    .get(getSingleRedFlag, getOneIncident);

//Get intervention by id
route.route('/intervention/:id')
    .get(getSingleRedFlag, getOneIncident);

//Update redFlag by location   
route.route('/red-flag/:id/location')
    .put(updateRedFlagByLocation, incidentInputChecker, isAdminLogin, getOneIncident);

//Update intervention by location 
route.route('/intervention/:id/location')
    .put(updateRedFlagByLocation, incidentInputChecker, isAdminLogin, getOneIncident);

//Update red-flag comment
route.route('/red-flag/:id/comment')
    .put(updateRedFlagByComment, incidentInputChecker, isAdminLogin, getOneIncident);

//Update intervention comment
route.route('/intervention/:id/comment')
    .put(updateRedFlagByComment, incidentInputChecker, isAdminLogin, getOneIncident);

    //Delete red-flag by Id
route.route('/red-flag/:id/delete')
.delete(deleteRedFlagById);

//Delete intervention by Id
route.route('/intervention/:id/delete')
.delete(deleteRedFlagById);

export default route;
