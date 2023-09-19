const express=require('express');
const app=express();
const port=5000;
const db=require('./config/mongoose');
const passport=require('passport');
const passportJWT=require('./config/passport-jwt');

app.use(express.urlencoded({
    extended:true
}));

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log('Error in running server',err);
    };
    console.log('Server running on port 5000');
});
