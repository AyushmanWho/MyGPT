import { useState } from "react";

import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import RightPanel from "../rightpanel/RightPanel";
import ChatArea from "../chat/ChatArea";
import InputBar from "../input/InputBar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen bg-[#0F1115] text-white flex overflow-hidden">

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />

          <div className="fixed left-0 top-0 z-50 h-full lg:hidden">
            <Sidebar />
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0">

        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <ChatArea />

        <InputBar />

      </div>

      {/* Desktop Right Panel */}
      <div className="hidden xl:flex">
        <RightPanel />
      </div>

    </div>
  );
}