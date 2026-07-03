import {
  Search,
  Bell,
  Settings,
  UserCircle2
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 border-b border-white/10 bg-[#0F1115]/80 backdrop-blur-xl flex items-center justify-between px-8">

      {/* Left */}
      <div className="flex items-center gap-4">

        <div className="relative">

          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            placeholder="Search chats..."
            className="
            w-96
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

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        <button className="p-2 rounded-xl hover:bg-[#222936]">
          <Bell size={20}/>
        </button>

        <button className="p-2 rounded-xl hover:bg-[#222936]">
          <Settings size={20}/>
        </button>

        <button className="p-2 rounded-xl hover:bg-[#222936]">
          <UserCircle2 size={28}/>
        </button>

      </div>

    </header>
  );
}