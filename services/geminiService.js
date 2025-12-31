import { GoogleGenAI } from "https://esm.sh/@google/genai";

// Initialize Gemini with the provided API key
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFashionFaqAnswer = async (question) => {
  try {
    const model = 'gemini-3-flash-preview';
    const systemInstruction = `You are a friendly and knowledgeable fashion design tutor for 'Education Herald', a Nigerian Edtech platform. Your students are primarily young women. Answer their fashion-related questions concisely, helpfully, and in an encouraging tone. Keep answers under 150 words.`;
    
    const response = await ai.models.generateContent({
        model,
        contents: question,
        config: {
            systemInstruction,
        }
    });

    return response.text ?? "I'm having a little trouble thinking right now. Please try again in a moment.";
  } catch (error) {
    console.error("Error fetching response from Gemini API:", error);
    return "I'm having a little trouble thinking right now. Please try again in a moment.";
  }
};