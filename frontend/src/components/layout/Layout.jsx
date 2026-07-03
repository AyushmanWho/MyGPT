import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import RightPanel from "../rightpanel/RightPanel";
import ChatArea from "../chat/ChatArea";
import InputBar from "../input/InputBar";

export default function Layout() {
  return (
    <div className="h-screen bg-[#0F1115] text-white flex">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Navbar />

        <ChatArea />

        <InputBar />

      </div>

      <RightPanel />

    </div>
  );
}