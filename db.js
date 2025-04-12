const mongoose =require('mongoose');

const uri="";
function connectDb(){
    mongoose
    .connect(uri)
    .then(()=> console.log("connected"))
    .catch(err => console.error("error",err));

}
module.exports =connectDb;