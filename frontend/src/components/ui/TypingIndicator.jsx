export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-6">
      <div className="bg-[#1A1F29] rounded-2xl px-5 py-4 border border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">
            MyGPT is thinking
          </span>

          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce"></span>
            <span
              className="w-2 h-2 rounded-full bg-violet-400 animate-bounce"
              style={{ animationDelay: "0.15s" }}
            ></span>
            <span
              className="w-2 h-2 rounded-full bg-violet-400 animate-bounce"
              style={{ animationDelay: "0.3s" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}