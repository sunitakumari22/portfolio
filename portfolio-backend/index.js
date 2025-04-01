// const express = require('express');
// require('./config');
// const cors = require('cors');
// const message=require('./message');


// const app=express();
// app.use(cors());
// app.use(express.json());
// //  Api for message
// app.post("/message",async (req,res)=>{
//     let data=new message(req.body)
//     let result= await data.save()
//     console.log(req.body);    
//     res.send(req.body)
// })
// app.get("/messageList",async (req,res)=>{
//     let data= await message.find();
//     res.send(data);
//     console.log("data",data)
// })
// app.listen(5000);
require('dotenv').config();
const express = require('express');
require('./config');
const cors = require('cors');
const message = require('./message');

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

// API for message
app.post("/api/message", async (req, res) => {
    let data = new message(req.body);
    let result = await data.save();
    console.log(req.body);
    res.send(req.body);
});

// app.get("/messageList", async (req, res) => {
//     let data = await message.find();
//     res.send(data);
//     console.log("data", data);
// });
app.get("/api/messageList", async (req, res) => {
    try {
        let data = await message.find().limit(50); // Fetch only 50 messages
        res.send(data);
    } catch (error) {
        console.error("Database query error:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
