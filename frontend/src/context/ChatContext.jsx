import { createContext, useContext, useState } from "react";
import { sendMessage as sendToAI } from "../api/chat";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);

  async function sendMessage(text) {
    if (!text.trim()) return;

    // Add the user's message immediately
    const userMessage = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      // Send the message to the FastAPI backend
      const reply = await sendToAI(text);

      // Add the AI's response
      const aiMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Failed to contact AI:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: "⚠️ Failed to connect to the AI backend.",
        },
      ]);
    }
  }

  return (
    <ChatContext.Provider
      value={{
        messages,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}