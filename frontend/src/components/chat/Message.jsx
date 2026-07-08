import Markdown from "../ui/Markdown";
import Avatar from "../ui/Avatar";

export default function Message({
  id,
  role,
  content,
  highlighted,
}) {
  const isUser = role === "user";

  return (
    <div
  id={`message-${id}`}
  className={`flex items-start gap-4 mb-8 ${
    isUser ? "flex-row-reverse" : ""
  }`}
>
      {/* Avatar */}
      <Avatar role={role} />

      {/* Message Section */}
      <div
        className={`flex flex-col ${
          isUser ? "items-end" : "items-start"
        } flex-1`}
      >
        {/* Name */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold text-gray-300">
            {isUser ? "You" : "MyGPT"}
          </span>
        </div>

        {/* Bubble */}
        <div
  className={`
    rounded-3xl
    px-6
    py-5
    leading-8
    transition-all
    duration-700
    ${
      isUser
        ? "bg-violet-600 text-white min-w-[120px] max-w-xl"
        : "bg-[#1A1F29] text-gray-100 max-w-3xl"
    }
    ${
      highlighted
        ? "ring-2 ring-violet-400 bg-violet-900/30"
        : ""
    }
  `}
>
          {isUser ? (
            <p className="whitespace-pre-wrap break-words">
              {content}
            </p>
          ) : (
            <Markdown content={content} />
          )}
        </div>
      </div>
    </div>
  );
}