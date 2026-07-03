export default function ChatArea() {
  return (
    <main className="flex-1 bg-[#0F1115] flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-violet-600 mx-auto mb-6 flex items-center justify-center text-3xl font-bold">
          M
        </div>

        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to MyGPT
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          What can I help you with today?
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <button className="bg-[#1A1F29] hover:bg-[#252B36] px-5 py-3 rounded-xl">
            Explain Code
          </button>

          <button className="bg-[#1A1F29] hover:bg-[#252B36] px-5 py-3 rounded-xl">
            Summarize
          </button>

          <button className="bg-[#1A1F29] hover:bg-[#252B36] px-5 py-3 rounded-xl">
            Brainstorm
          </button>

          <button className="bg-[#1A1F29] hover:bg-[#252B36] px-5 py-3 rounded-xl">
            Write
          </button>
        </div>
      </div>
    </main>
  );
}