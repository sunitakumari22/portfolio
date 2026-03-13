
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import MessageRoutes from "./routes/message.routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.use("/portfolio/Messages", MessageRoutes);
app.get("/", (req, res) => res.send("Billing API Running 🚀"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
