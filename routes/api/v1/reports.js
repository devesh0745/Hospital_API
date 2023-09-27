//Routes for Reports controller.
const express=require('express');
const router=express.Router();
const passport=require('passport');

const reportController=require('../../../controller/api/v1/reports_controller');

router.post('/:id/create_report/',passport.authenticate('jwt',{session:false}),reportController.createReport);

router.get('/:id/all_reports/',passport.authenticate('jwt',{session:false}),reportController.allReports);

router.get('/:status',reportController.reportsStatus);

module.exports=router;
