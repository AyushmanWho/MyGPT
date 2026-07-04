import { useState } from "react";
import { Paperclip, Mic, SendHorizontal } from "lucide-react";
import IconButton from "../ui/IconButton";
import { useChat } from "../../context/ChatContext";

export default function InputBar() {
  const [text, setText] = useState("");

  const { sendMessage } = useChat();

  function handleSend() {
    if (!text.trim()) return;

    sendMessage(text);

    setText("");
  }

  return (
    <div className="p-6 bg-[#0F1115] border-t border-white/10">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-3 bg-[#1A1F29] border border-white/10 rounded-2xl px-4 py-3">

          <IconButton icon={<Paperclip size={20} />} />

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            placeholder="Ask MyGPT anything..."
            className="flex-1 bg-transparent outline-none text-white"
          />

          <IconButton icon={<Mic size={20} />} />

          <button
            onClick={handleSend}
            className="w-11 h-11 rounded-xl bg-violet-600 hover:bg-violet-500 flex items-center justify-center"
          >
            <SendHorizontal size={18} />
          </button>

        </div>

      </div>
    </div>
  );
}