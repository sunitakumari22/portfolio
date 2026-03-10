import Message, { find } from "../models/message";

// Save a new message
export async function saveMessage(req, res) {
  try {
    const msg = new Message(req.body);
    const result = await msg.save();
    res.status(201).json(result);
  } catch (error) {
    console.error("Message save error:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
}

// Get latest 50 messages
export async function getMessages(req, res) {
  try {
    const messages = await find().sort({ createdAt: -1 }).limit(50);
    res.json(messages);
  } catch (error) {
    console.error("Get messages error:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
}