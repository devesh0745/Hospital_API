//Schema for Doctor
const mongoose=require('mongoose');

const doctorSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
    /*patients:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }]*/
},{
    timestamps:true
});

const Doctor=mongoose.model('Doctor',doctorSchema);
module.exports=Doctor;