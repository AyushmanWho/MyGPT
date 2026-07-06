export function createChat() {
  return {
    id: Date.now(),
    title: "New Chat",
    createdAt: new Date().toISOString(),
    messages: [],
  };
}