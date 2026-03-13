import express from "express";
import {
  addMessage,
  getMessageList,
  getMessageById,
  deleteMessage
} from "../controllers/portfolio.message.controller.js";

const router = express.Router();

// Create message (contact form)
router.post("/", addMessage);

// Get all messages
router.get("/", getMessageList);

// Get single message
router.get("/:id", getMessageById);

// Delete message
router.delete("/:id", deleteMessage);

export default router;