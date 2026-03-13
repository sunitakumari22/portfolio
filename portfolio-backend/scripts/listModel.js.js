import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

async function main() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const models = await genAI.listModels();

  // Print only useful bits
  for (const m of models) {
    console.log(`${m.name} | supported: ${m.supportedGenerationMethods?.join(", ")}`);
  }
}

main().catch(console.error);