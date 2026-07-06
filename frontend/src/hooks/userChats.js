import { useState } from "react";

export function useChats() {
  const [chats, setChats] = useState([
    {
      id: 1,
      title: "New Chat",
      messages: [],
    },
  ]);

  const [currentChatId, setCurrentChatId] = useState(1);

  const currentChat =
    chats.find((chat) => chat.id === currentChatId) || chats[0];

  function newChat() {
    const id = Date.now();

    const chat = {
      id,
      title: "New Chat",
      messages: [],
    };

    setChats((prev) => [...prev, chat]);
    setCurrentChatId(id);
  }

  return {
    chats,
    setChats,
    currentChat,
    currentChatId,
    setCurrentChatId,
    newChat,
  };
}