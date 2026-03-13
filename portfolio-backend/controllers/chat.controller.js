import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;
    console.log("API KEY:", process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
You are an AI assistant for Sunita's portfolio.

About Sunita:
- Full Stack Developer
- Skills: Angular, React, Node.js, MongoDB
- Works at PixelsBlue Solutions
- Built hostel management system and CRM modules.

User question: ${message}

Answer clearly and professionally.
`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    res.json({ reply: response });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI response failed" });
  }
};