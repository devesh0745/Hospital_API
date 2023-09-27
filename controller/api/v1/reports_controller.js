const Report=require('../../../models/reports');
const Doctor=require('../../../models/doctor');
const Patient=require('../../../models/patients');


//Creating reports for patients
module.exports.createReport=async function(req,res){
    try{
        const patient=await Patient.findById(req.params.id);
        console.log('patient:',patient);
        console.log('doctor:',req.user);
        console.log('status:',req.body);
        
        const report=await Report.create({
            status:req.body.status,
            patient:patient._id,
            doctor:req.user._id
        });
        patient.reports.push(report);
        patient.save();
        return res.json(200,{
            message:"Report Created",
        });
    }catch(err){
        console.log(err);
        return res.json(500,{
            message:"Internal Server Error!"
        })
    }
}

//To display all the reports.
module.exports.allReports=async function(req,res){
    try{
        const patientReports=await Patient.findById(req.params.id).populate('reports');
        console.log('all reports:',patientReports);
        return res.json(200,{
            patient_name:patientReports.name,
            allReports:patientReports.reports,
            message:"All Reports"
        })
    }catch(err){
        console.log(err);
        return res.json(500,{
            message:"Internal Sever Error!"
        });

    }
}

//To display all reports with specific status.
module.exports.reportsStatus=async function(req,res){
    try{
        const status_report=await Report.find({status:req.params.status});
        if(status_report.length>0){
            return res.json(200,{
                status:status_report,
                message:"All Reports with specific status"
            })
        }else{
            return res.json(200,{
                message:"Can not find report of specific status."
            })
        }
    }catch(err){
        return res.json(500,{
            message:"Interval Server Error!"
        });
    }
};