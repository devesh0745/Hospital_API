//Schema for reports
const mongoose=require('mongoose');

const reportSchema=new mongoose.Schema({
    status:{
        type:String,
        enum:['Negative','Travelled-Quarantine','Symptoms-Quarantine','Positive-Admit'],
        required:true
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    },
},{
    timestamps:true
});

const Report=mongoose.model('Report',reportSchema);

module.exports=Report;