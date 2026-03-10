const axios = require("axios");

// This should be your portfolio context data
const portfolioContext = `
Hi! I am Siya Mahto, a Full Stack Developer with expertise in Angular, React, Node.js, and MERN/MEAN stack. 
I have experience in building university CRM systems, hostel management modules, and dashboards.
`;

exports.chatWithAI = async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) return res.status(400).json({ error: "Message is required" });

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: portfolioContext + "\nUser Question: " + userMessage
              }
            ]
          }
        ]
      }
    );

    const aiReply = response.data.candidates[0].content.parts[0].text;

    res.json({ reply: aiReply });
  } catch (error) {
    console.error("AI chat error:", error.response?.data || error.message);
    res.status(500).json({ error: "AI response failed" });
  }
};