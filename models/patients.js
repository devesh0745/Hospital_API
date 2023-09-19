const mongoose=require('mongoose');

const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    reports:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Report'
    }],
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    }
},{
    timestamps:true
})

const Patient=mongoose.model('Patient',patientSchema);
module.exports=Patient;