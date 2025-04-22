
require('dotenv').config(); 
const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
    console.error("MongoDB URI is missing! Check your .env file.");
    process.exit(1); 
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB Connection Error:", err));
