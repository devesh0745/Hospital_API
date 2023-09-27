//Connecting to database
const mongoose=require('mongoose');

mongoose.connect('mongodb://0.0.0.0/hospital_api');

const db=mongoose.connection;
db.on('error',console.error.bind(console,'Error in connecting MongoDB'));

db.once('open',function(){
    console.log('Connected to Database::MongoDB');
});
module.exports=db;