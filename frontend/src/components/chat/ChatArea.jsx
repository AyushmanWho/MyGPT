import { useChat } from "../../context/ChatContext";
import Message from "./Message";

export default function ChatArea() {
  const { messages } = useChat();

  if (messages.length === 0) {
    return (
      <main className="flex-1 bg-[#0F1115] flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-violet-600 mx-auto mb-6 flex items-center justify-center text-3xl font-bold">
            M
          </div>

          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to MyGPT
          </h1>

          <p className="text-gray-400 text-lg">
            What can I help you with today?
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto p-8 bg-[#0F1115]">
      <div className="max-w-4xl mx-auto">
        {messages.map((msg) => (
          <Message
            key={msg.id}
            role={msg.role}
            content={msg.content}
          />
        ))}
      </div>
    </main>
  );
}