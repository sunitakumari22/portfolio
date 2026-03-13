import { GoogleGenerativeAI } from "@google/generative-ai";
import { RESUME_CONTEXT } from "../Data/resume-context.js";

export const chatWithAI = async (req, res) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "GEMINI_API_KEY missing" });

    const { message } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "message is required (string)" });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
${RESUME_CONTEXT}

User question: ${message}

Answer rules:
- Answer based on resume context only.
- If not found, say you don't have that information in the resume.
- If user asks "Tell me about you" / "Introduce yourself", give a short summary from resume.
`;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    return res.json({ reply });
  } catch (error) {
    console.error("Gemini error:", error);
    return res.status(500).json({ error: "AI response failed" });
  }
};