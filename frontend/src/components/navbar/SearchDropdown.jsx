import { useChat } from "../../context/ChatContext";

export default function SearchDropdown({
  results,
  searchQuery,
}) {
  const {
    switchChat,
    setSearchQuery,
    setHighlightedMessageId,
  } = useChat();

  function highlight(text) {
    if (!searchQuery) return text;

    const parts = text.split(
      new RegExp(`(${searchQuery})`, "gi")
    );

    return parts.map((part, index) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <span
          key={index}
          className="
            bg-violet-500/25
            text-violet-300
            rounded
            px-1
            font-semibold
          "
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  return (
    <div
      className="
        absolute
        top-14
        left-0
        w-full
        rounded-2xl
        bg-[#1A1F29]
        border
        border-white/10
        shadow-2xl
        overflow-hidden
        z-50
        max-h-96
        overflow-y-auto
      "
    >
      {results.length === 0 ? (
        <div className="p-4 text-gray-400">
          No results found
        </div>
      ) : (
        results.map((result) => (
          <div
            key={result.chat.id}
            onClick={() => {
              switchChat(result.chat.id);
              setSearchQuery("");
            }}
            className="
              group
              p-4
              hover:bg-[#252B38]
              cursor-pointer
              transition-all
              duration-150
            "
          >
            <p className="font-medium">
              {result.chat.title}
            </p>

            {result.titleMatch && (
              <div className="flex mt-2">
                <div className="w-4 mr-2 border-l border-b border-gray-600 rounded-bl-md" />

                <p className="text-sm text-gray-400">
                  🏷 Title match
                </p>
              </div>
            )}

            {result.matchedMessages?.map((message) => (
              <div
                key={message.id}
                onClick={(e) => {
                  e.stopPropagation();

                  switchChat(result.chat.id);
                  setHighlightedMessageId(message.id);
                  setSearchQuery("");
                }}
                className="
                    flex
                    mt-2
                    ml-6
                    rounded-xl
                    border
                    border-white/10
                    bg-[#202634]
                    px-3
                    py-3
                    hover:bg-[#2A3142]
                    transition-all
                    "
              >
               <div className="w-3 mr-3 mt-1 border-l border-b border-gray-600 rounded-bl-md flex-shrink-0" />

                <p className="text-sm text-gray-400 truncate">
                  💬{" "}
                  {highlight(
                    message.content.length > 80
                      ? message.content.slice(0, 80) + "..."
                      : message.content
                  )}
                </p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}