import { sendMessage as sendToAI } from "../api/chat";

export async function getAIResponse(message) {
  return await sendToAI(message);
}