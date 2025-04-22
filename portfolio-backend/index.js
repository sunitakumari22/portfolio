
require('dotenv').config();
const express = require('express');
require('./config');
const cors = require('cors');
const message = require('./message');

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/message", async (req, res) => {
    let data = new message(req.body);
    let result = await data.save();
    console.log(req.body);
    res.send(req.body);
});

app.get("/messageList", async (req, res) => {
    let data = await message.find();
    res.send(data);
    console.log("data", data);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
