export function loadChats() {
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
}

export function saveChats(chats) {
  localStorage.setItem(
    "mygpt-chats",
    JSON.stringify(chats)
  );
}

export function loadCurrentChat() {
  return (
    Number(localStorage.getItem("mygpt-current-chat")) || 1
  );
}

export function saveCurrentChat(chatId) {
  localStorage.setItem(
    "mygpt-current-chat",
    chatId
  );
}