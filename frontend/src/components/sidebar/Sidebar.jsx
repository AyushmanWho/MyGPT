import {
  Plus,
  MessageSquare,
  Folder,
  Brain,
  FileText,
  Settings,
  UserCircle2,
} from "lucide-react";

import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";
import { useChat } from "../../context/ChatContext";


export default function Sidebar() {
  const { chats, currentChatId, newChat, } = useChat();

  return (
    <aside className="w-72 bg-[#111827] border-r border-white/10 flex flex-col">

      {/* Logo */}
      <div className="p-6">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-2xl bg-violet-600 flex items-center justify-center text-xl font-bold">
            M
          </div>

          <div>
            <h1 className="font-bold text-xl">MyGPT</h1>
            <p className="text-xs text-gray-400">
              Your AI Workspace
            </p>
          </div>

        </div>

        <Button
          onClick={newChat}
          className="mt-6 w-full flex items-center justify-center gap-2"
        >
          <Plus size={18} />
          New Chat
        </Button>

      </div>

      {/* Navigation */}
      <div className="flex-1 px-5 overflow-y-auto">

        <SectionTitle>Recent Chats</SectionTitle>

        <div className="space-y-2">

          {chats.map((chat) => (
            <div
              key={chat.id}
              className="
              flex
              items-center
              gap-3
              px-3
              py-3
              rounded-xl
              hover:bg-[#1A2232]
              cursor-pointer
              transition
              "
            >
              <MessageSquare size={17} />
              <span className="text-sm">{chat.title}</span>
            </div>
          ))}

        </div>

        <div className="my-6 border-t border-white/10" />

        <SectionTitle>Workspace</SectionTitle>

        <SidebarItem
          icon={<Folder size={18} />}
          text="Projects"
        />

        <SidebarItem
          icon={<Brain size={18} />}
          text="Memory"
        />

        <SidebarItem
          icon={<FileText size={18} />}
          text="Documents"
        />

        <SidebarItem
          icon={<Settings size={18} />}
          text="Settings"
        />

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 p-5">

        <div className="flex items-center gap-3">

          <UserCircle2
            size={42}
            className="text-violet-400"
          />

          <div>
            <p className="font-medium">
              Ayushman
            </p>

            <p className="text-xs text-gray-400">
              Free Plan
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}

function SidebarItem({ icon, text }) {
  return (
    <div
      className="
      flex
      items-center
      gap-3
      px-3
      py-3
      rounded-xl
      hover:bg-[#1A2232]
      cursor-pointer
      transition
      "
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}