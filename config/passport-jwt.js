const passport=require('passport');
const JWTStrategy=require('passport-jwt').Strategy;
//It will extract jwt token from the header
const ExtractJWT=require('passport-jwt').ExtractJwt

const Doctor=require('../models/doctor');



let opts={
    
    //it will extract jwt token from header.
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    //Used to decrypt the token.
    secretOrKey : 'AllSocial'
}
console.log('jwt strategy running');

//Now it will tell passport to use jwt.//this call back function reads data from the jwt pay load.
//When we use authentication method on route then jwtpayload will extract user from the token using jwtpayload and return user to the passport if user is found.
passport.use(new JWTStrategy(opts,async function(jwtPayLoad,done){
    console.log('******extracting********');
    try{
    const doctor=await Doctor.findById(jwtPayLoad._id);
   // console.log('####:',doctor);

    if(doctor){
        return done(null,doctor);
        }else{
            return done(null,false);
        }
    }
    catch(err){
        console.log("Error in finding user from JWT");
    }
}));

module.exports = passport;
