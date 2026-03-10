require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/message", require("./routes/message.route"));
app.use("/api/chat", require("./routes/chat.route"));

// Test
app.get("/", (req, res) => res.send("AI Portfolio Assistant Backend is running!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));