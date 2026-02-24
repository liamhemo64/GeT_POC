import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API
// Make sure EXPO_PUBLIC_GEMINI_API_KEY is defined in your .env file
const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GEMINI_API_KEY || '');

const SYSTEM_INSTRUCTION = `You are a helpful and knowledgeable AI travel assistant specializing in Japan travel, inside an app called JapanJourney.
Your goal is to help users plan their trips, find recommendations, understand Japanese culture, and navigate transportation.
Provide concise, organized, and friendly answers. Use emojis to make the conversation lively.
If asked about topics completely unrelated to Japan, travel, or the app features, politely decline to answer.
Adapt your language to the user's input language.`;

export class ChatService {
  /**
   * Generates a response from the Gemini model.
   * Maintains basic conversational context by prepending the system prompt.
   */
  static async getAIResponse(userMessage: string, userContext?: string): Promise<string> {
    try {
      if (!process.env.EXPO_PUBLIC_GEMINI_API_KEY) {
        return "I'm sorry, my AI capabilities are currently unavailable because the API key is not configured.";
      }

      let currentInstruction = SYSTEM_INSTRUCTION;
      if (userContext) {
        currentInstruction += `\n\nUSER LIKED ACTIVITIES:\nThe user has favorited the following activities. Please keep these in mind when making recommendations or if the user asks about them:\n${userContext}`;
      }

      // Use the Gemini 2.5 Flash model for fast chat responses
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction: currentInstruction,
      });

      const result = await model.generateContent(userMessage);
      const responseText = result.response.text();
      return responseText.trim();
    } catch (error) {
      console.error('Error generating AI response:', error);
      return "I encountered an error trying to process your request. Please try again later.";
    }
  }
}
