
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./config/db.js";
import MessageRoutes from "./routes/message.routes.js";
import chatRoutes from "./routes/chat.routes.js";


console.log("ENV GEMINI_API_KEY exists?", !!process.env.GEMINI_API_KEY);
console.log("ENV GEMINI_API_KEY length:", process.env.GEMINI_API_KEY?.length);
console.log("ENV GEMINI_API_KEY start/end:", 
  process.env.GEMINI_API_KEY?.slice(0, 6),
  process.env.GEMINI_API_KEY?.slice(-6)
);
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.use("/portfolio/Messages", MessageRoutes);
app.use("/api/chat", chatRoutes);
app.get("/", (req, res) => res.send("Billing API Running 🚀"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
