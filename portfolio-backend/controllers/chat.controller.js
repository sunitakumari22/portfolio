import { GoogleGenerativeAI } from "@google/generative-ai";
import { RESUME_CONTEXT } from "../Data/resume-context.js";

export const chatWithAI = async (req, res) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey)
      return res.status(500).json({ error: "GEMINI_API_KEY missing" });

    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "message is required" });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // STEP 1: Resume answer
    const resumePrompt = `
${RESUME_CONTEXT}

User question: ${message}

  Answer using resume context.
  Write in natural, polished English.
  Use complete sentences.
  If the user asks for skills, expertise, experience, projects, or responsibilities, start with one short summary sentence and then use simple bullet points with "- ".
  Do not use markdown bold, asterisks for emphasis, or decorative symbols.
  Keep each bullet concise and readable.
  If the answer is short, respond in 2-4 clear sentences instead of fragments.
If answer is NOT in resume say:
"I don't have that information in Sunita's resume."
`;

    const resumeResult = await model.generateContent(resumePrompt);
    const resumeReply = resumeResult.response.text();

    // STEP 2: Detect if answer not in resume
    if (
      resumeReply.toLowerCase().includes("don't have that information") ||
      resumeReply.toLowerCase().includes("not mentioned in the resume")
    ) {
      const generalResult = await model.generateContent(
        `User question: ${message}

Answer in natural, polished English.
Use complete sentences.
If the answer needs a list, add one short intro sentence and then use simple bullet points with "- ".
Do not use markdown bold, asterisks for emphasis, or decorative symbols.`,
      );
      const generalReply = generalResult.response.text();

      return res.json({ reply: generalReply });
    }

    return res.json({ reply: resumeReply });
  } catch (error) {
    console.error("Gemini error:", error);
    return res.status(500).json({ error: "AI response failed" });
  }
};
