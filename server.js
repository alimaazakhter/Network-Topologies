const mongoose=require('mongoose')
const connectDb=require('./db')
const express = require('express');
const app =express();

connectDb();
app.listen(express.json());


const abi=mongoose.model('user',{
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:number,required:true }
});

app.get('/',(req,res)=>{
    res.send('server running')
});

app.post('/post',async(req,res)=>{
    try{
        const {name,email,password}=req.body
        const abi=new abi
    }
})




app.listen(4000,(req,res)=>{
    console.log('server running on port 4000')
});