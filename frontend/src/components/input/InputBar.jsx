import { Paperclip, Mic, SendHorizontal } from "lucide-react";
import IconButton from "../ui/IconButton";

export default function InputBar() {
  return (
    <div className="p-6 bg-[#0F1115] border-t border-white/10">
      <div className="max-w-5xl mx-auto">

        <div className="
          flex
          items-center
          gap-3
          bg-[#1A1F29]
          border
          border-white/10
          rounded-2xl
          px-4
          py-3
          shadow-lg
        ">

          <IconButton icon={<Paperclip size={20} />} />

          <input
            type="text"
            placeholder="Ask MyGPT anything..."
            className="
              flex-1
              bg-transparent
              outline-none
              text-white
              placeholder:text-gray-400
            "
          />

          <IconButton icon={<Mic size={20} />} />

          <button
            className="
              w-11
              h-11
              rounded-xl
              bg-violet-600
              hover:bg-violet-500
              flex
              items-center
              justify-center
              transition
            "
          >
            <SendHorizontal size={18} />
          </button>

        </div>

      </div>
    </div>
  );
}