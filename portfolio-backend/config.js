// const mongoose= require('mongoose');
// mongoose.connect("mongodb+srv://sunitakumari:ejmad8O4hmfV7MvJ@cluster0.ioevoco.mongodb.net/portfolio")

// require('dotenv').config(); // Ensure dotenv is loaded first
// const mongoose = require('mongoose');

// const mongoURI = process.env.MONGODB_URI;
// if (!mongoURI) {
//     console.error("MongoDB URI is missing! Check your .env file.");
//     process.exit(1); // Stop the application if the URI is not found
// }

// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("Connected to MongoDB"))
// .catch(err => console.error("MongoDB Connection Error:", err));

require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
    console.error("MongoDB URI is missing! Check your environment variables.");
    process.exit(1);
}

mongoose.connect(mongoURI) // ✅ Removed deprecated options
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));


