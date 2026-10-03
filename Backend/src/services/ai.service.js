import { ChatGoogle } from "@langchain/google/node";

export const askAi = async (prompt) => {
  const model = new ChatGoogle({
    model: "gemini-3.7-flash",
    apiKey: process.env.GEMINI_API_KEY,
  });

  try {
    const response = await model.invoke(prompt);
    console.log("AI Response:", response.content);
    return response;
  } catch (error) {
    console.error("AI Error:", error.message);
    return null;
  }
};
