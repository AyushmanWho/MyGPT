import Markdown from "../ui/Markdown";
import Avatar from "../ui/Avatar";

export default function Message({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      className={`flex gap-4 mb-8 ${
        isUser ? "flex-row-reverse" : ""
      }`}
    >
      <Avatar role={role} />

      <div className="max-w-3xl">

        <div
          className={`font-semibold mb-2 ${
            isUser ? "text-right" : ""
          }`}
        >
          {isUser ? "You" : "MyGPT"}
        </div>

        <div
          className={`rounded-2xl px-5 py-4 leading-8 ${
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
    </div>
  );
}