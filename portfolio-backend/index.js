const express = require('express');
require('./config');
const cors = require('cors');
const message=require('./message');


const app=express();
app.use(cors());
app.use(express.json());
//  Api for message
app.post("/message",async (req,res)=>{
    let data=new message(req.body)
    let result= await data.save()
    console.log(req.body);    
    res.send(req.body)
})
app.get("/messageList",async (req,res)=>{
    let data= await message.find();
    res.send(data);
    console.log("data",data)
})
app.listen(5000);