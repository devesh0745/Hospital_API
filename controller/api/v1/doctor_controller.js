const Doctor=require('../../../models/doctor');

const jwt=require('jsonwebtoken');

//Creating doctor 
module.exports.createDoctor=async function(req,res){
  //  console.log('***:',req.body.name)
    try{
        const doctor=await Doctor.findOne({email:req.body.email});
        if(!doctor){
            const createDoctor=await Doctor.create(req.body);
            return res.json(200,{
                message:"Sign-up successful"
            });
        }else{
            return res.json(422,{
                message:"Doctor already exist....please sign-in"
            })
        }
    }catch(err){
    //    console.log(err);
    console.log("error in creating doctor:",err);
        return res.json(500,{
            
            message:"Internal server Error!"
        });
};
};

//Signing in user
module.exports.createSession=async function(req,res){
    try{
        const doctor=await Doctor.findOne({email:req.body.email});
        //console.log('###:',doctor);

        if(!doctor || doctor.password!=req.body.password){
            return res.json(422,{
                message:"Invalid Username or Password"
            });
        }
        //Creating jwt token
        return res.json(200,{
            message:'Sign-in Successful,here is your token!',
            data:{
                token:jwt.sign(doctor.toJSON(),'AllSocial',{expiresIn:'1000000'})
            }
        })
    }catch(err){
        console.log(err);
        return res.json(500,{
            message:"Internal Server Error!"
        });
    }
};