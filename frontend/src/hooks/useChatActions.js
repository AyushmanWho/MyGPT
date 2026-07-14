export function createNewChat(setChats, setCurrentChatId) {
  const newId = Date.now();

  const newChat = {
    id: newId,
    title: "New Chat",
    messages: [],
  };

  setChats((prev) => [newChat, ...prev]);
  setCurrentChatId(newId);
}

export function switchCurrentChat(setCurrentChatId, chatId) {
  setCurrentChatId(chatId);
}

export function removeChat(
  chats,
  currentChatId,
  chatId,
  setChats,
  setCurrentChatId
) {
  if (chats.length === 1) return;

  const updatedChats = chats.filter(
    (chat) => chat.id !== chatId
  );

  setChats(updatedChats);

  if (currentChatId === chatId) {
    setCurrentChatId(updatedChats[0].id);
  }
}