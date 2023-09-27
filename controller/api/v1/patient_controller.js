const Patient=require('../../../models/patients');

//Register patients 
module.exports.registerPatient=async function(req,res){
    console.log('*******:',req.user);
    try{
        const patient=await Patient.findOne({phoneNumber:req.body.phoneNumber});
        if(!patient){
            const newPatient=await Patient.create({
                name:req.body.name,
                phoneNumber:req.body.phoneNumber,
                doctor:req.user._id
            });
            return res.json(200,{
                patients_details:newPatient,
                message:"Patient registration successfull"
            });
        }else{
            return res.json(200,{
                message:"Patient Already Exit!",
                patient_Info:patient
            })
        }
    }catch(err){
        console.log(err);
        return res.json(500,{
            message:"Internal Server Error!"
        });
    }
}