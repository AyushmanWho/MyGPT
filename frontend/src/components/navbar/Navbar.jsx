import SearchDropdown from "./SearchDropdown";
import { useChat } from "../../context/ChatContext";
import {
  Search,
  Bell,
  Settings,
  UserCircle2,
  Menu,
} from "lucide-react";

export default function Navbar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const {
    searchQuery,
    setSearchQuery,
    chats,
  } = useChat();

  const results = chats.reduce((acc, chat) => {
    const query = searchQuery.toLowerCase();

    const titleMatch = chat.title
      .toLowerCase()
      .includes(query);

    const matchedMessages = chat.messages.filter((message) =>
      message.content.toLowerCase().includes(query)
    );

    if (titleMatch || matchedMessages.length > 0) {
      acc.push({
        chat,
        titleMatch,
        matchedMessages,
      });
    }

    return acc;
  }, []);

  return (
    <header className="h-16 border-b border-white/10 bg-[#0F1115]/80 backdrop-blur-xl flex items-center justify-between px-4 lg:px-8">

      {/* Left */}
      <div className="flex items-center gap-3 flex-1">

        {/* Mobile Menu */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 rounded-xl hover:bg-[#222936]"
        >
          <Menu size={22} />
        </button>

        <div className="relative flex-1 max-w-md">

          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chats..."
            className="
              w-full
              bg-[#1A1F29]
              border
              border-white/10
              rounded-xl
              py-2.5
              pl-10
              pr-4
              text-sm
              outline-none
              focus:border-violet-500
            "
          />

          {searchQuery.trim() && (
            <SearchDropdown
              results={results}
              searchQuery={searchQuery}
            />
          )}

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-2 lg:gap-4">

        <button className="p-2 rounded-xl hover:bg-[#222936]">
          <Bell size={20} />
        </button>

        <button className="p-2 rounded-xl hover:bg-[#222936]">
          <Settings size={20} />
        </button>

        <button className="p-2 rounded-xl hover:bg-[#222936]">
          <UserCircle2 size={28} />
        </button>

      </div>

    </header>
  );
}