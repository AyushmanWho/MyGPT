import Markdown from "../ui/Markdown";

export default function Message({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      className={`flex w-full mb-6 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-3xl rounded-2xl px-5 py-4 leading-8 ${
          isUser
            ? "bg-violet-600 text-white"
            : "bg-[#1A1F29] text-gray-100"
        }`}
      >
        {isUser ? (
          content
        ) : (
          <Markdown content={content} />
        )}
      </div>
    </div>
  );
}