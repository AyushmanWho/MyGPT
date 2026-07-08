import { createContext, useContext, useState, useEffect } from "react";
import { sendMessage as sendToAI } from "../api/chat";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  
  const [chats, setChats] = useState(() => {
  const savedChats = localStorage.getItem("mygpt-chats");

  if (savedChats) {
    return JSON.parse(savedChats);
  }

  return [
    {
      id: 1,
      title: "New Chat",
      messages: [],
    },
  ];
});

const [currentChatId, setCurrentChatId] = useState(() => {
  return Number(localStorage.getItem("mygpt-current-chat")) || 1;
});
const currentChat =
  chats.find((chat) => chat.id === currentChatId) || chats[0];

  const [isThinking, setIsThinking] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedMessageId, setHighlightedMessageId] = useState(null);
  useEffect(() => {
  localStorage.setItem(
    "mygpt-chats",
    JSON.stringify(chats)
  );
}, [chats]);

useEffect(() => {
  localStorage.setItem(
    "mygpt-current-chat",
    currentChatId
  );
}, [currentChatId]);

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

    if (
  currentChat.title === "New Chat" &&
  text.trim().length > 0
) {
  setChats((prev) =>
    prev.map((chat) =>
      chat.id === currentChatId
        ? {
            ...chat,
            title:
              text.length > 30
                ? text.slice(0, 30) + "..."
                : text,
          }
        : chat
    )
  );
}

    updateCurrentChat((messages) => [
  ...messages,
  userMessage,
]);
    

    setIsThinking(true);

    try {
      const reply = await sendToAI(text);

      setIsThinking(false);

      const aiId = Date.now() + 1;

      // Create an empty AI message first
      updateCurrentChat((messages) => [
  ...messages,
  {
    id: aiId,
    role: "assistant",
    content: "",
  },
]);

      // Reveal one character at a time
      for (let i = 0; i <= reply.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 12));

        updateCurrentChat((messages) =>
  messages.map((msg) =>
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

      updateCurrentChat((messages) => [
  ...messages,
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

    setChats((prev) => [newChat, ...prev ]);
    setCurrentChatId(newId);
    
  }

  function switchChat(chatId) {
  setCurrentChatId(chatId);
}

function deleteChat(chatId) {
  if (chats.length === 1) return;

  const updatedChats = chats.filter(
    (chat) => chat.id !== chatId
  );

  setChats(updatedChats);

  if (currentChatId === chatId) {
    setCurrentChatId(updatedChats[0].id);
  }
}

  return (
    <ChatContext.Provider
      value={{
  currentChat,
  messages: currentChat.messages,
  chats,
  currentChatId,
  sendMessage,
  isThinking,
  newChat,
  switchChat,
  deleteChat,
  searchQuery,
  setSearchQuery,
  highlightedMessageId,
setHighlightedMessageId,
}}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}


