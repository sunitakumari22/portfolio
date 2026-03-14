import Message from "../models/message.js";
import mongoose from "mongoose";
import { sendNewMessageEmail } from "../utills/sendEmail.js"; 

export const addMessage = async (req, res) => {
  try {
    const data = new Message(req.body);
    const result = await data.save();
    await sendNewMessageEmail(result);

    res.status(201).json(result);
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ message: "Failed to save message" });
  }
};

export const getMessageList = async (req, res) => {
  try {
    const data = await Message.find().limit(50);
    res.status(200).json(data);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMessageById = async (req, res) => {
  try {
    const data = await Message.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Message not found" });
  }
};

// Delete Message
export const deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};