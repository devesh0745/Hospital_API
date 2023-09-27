//Routes for patients controller.
const express=require('express');
const router=express.Router();
const passport=require('passport');

const patientController=require('../../../controller/api/v1/patient_controller');

router.post('/register',passport.authenticate('jwt',{session:false}),patientController.registerPatient);

module.exports=router;
