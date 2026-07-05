import { createContext, useContext, useState } from "react";
import { sendMessage as sendToAI } from "../api/chat";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [isThinking, setIsThinking] = useState(false);

  async function sendMessage(text) {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsThinking(true);

    try {
      const reply = await sendToAI(text);

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
    } finally {
      setIsThinking(false);
    }
  }

  return (
    <ChatContext.Provider
      value={{
        messages,
        sendMessage,
        isThinking,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}