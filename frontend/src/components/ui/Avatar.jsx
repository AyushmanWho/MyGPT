import { FiUser } from "react-icons/fi";

export default function Avatar({ role }) {
  if (role === "assistant") {
    return (
      <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold shrink-0">
        M
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-full bg-[#2B313C] flex items-center justify-center text-white shrink-0">
      <FiUser size={18} />
    </div>
  );
}