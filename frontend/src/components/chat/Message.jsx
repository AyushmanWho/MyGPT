export default function Message({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`flex mb-4 ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[70%]
          px-5
          py-3
          rounded-2xl
          ${
            isUser
              ? "bg-violet-600 text-white"
              : "bg-[#1A1F29] text-white"
          }
        `}
      >
        {content}
      </div>
    </div>
  );
}