import { createContext, useContext, useState } from "react";
import { sendMessage as sendToAI } from "../api/chat";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const [chats, setChats] = useState([
  {
    id: 1,
    title: "New Chat",
    messages: [],
  },
]);

const [currentChatId, setCurrentChatId] = useState(1);

  const [isThinking, setIsThinking] = useState(false);
  
  function updateCurrentChat(updateFn) {
    setChats((prevChats) =>
      prevChats.map((chat) => {
        if (chat.id !== currentChatId) return chat;

        return {
          ...chat,
          messages: updateFn(chat.messages),
        };
      })
    );
  }

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

      setIsThinking(false);

      const aiId = Date.now() + 1;

      // Create an empty AI message first
      setMessages((prev) => [
        ...prev,
        {
          id: aiId,
          role: "assistant",
          content: "",
        },
      ]);

      // Reveal one character at a time
      for (let i = 0; i <= reply.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 12));

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiId
              ? {
                  ...msg,
                  content: reply.slice(0, i),
                }
              : msg
          )
        );
      }
    } catch (error) {
      console.error("Failed to contact AI:", error);

      setIsThinking(false);

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

  // NEW CHAT
  function newChat() {
    const newId = Date.now();

  const newChat = {
    id: newId,
    title: "New Chat",
    messages: [],
  };

    setChats((prev) => [...prev, newChat]);
    setCurrentChatId(newId);
    setMessages([]);
  }

  return (
    <ChatContext.Provider
      value={{
        messages,
        chats,
        currentChatId,
        sendMessage,
        isThinking,
        newChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}