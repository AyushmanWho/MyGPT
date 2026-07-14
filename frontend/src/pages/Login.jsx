import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  return (
    <div className="min-h-screen bg-[#0F1115] flex items-center justify-center">
      <div className="w-[420px] bg-[#171B22] border border-white/10 rounded-3xl p-10 shadow-2xl">

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-violet-600 flex items-center justify-center text-4xl font-bold text-white">
            M
          </div>
        </div>

        <h1 className="text-white text-4xl font-bold text-center">
          Welcome to MyGPT
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Sign in to continue
        </p>

        <button
          onClick={login}
          className="
          mt-10
          w-full
          bg-white
          text-black
          rounded-xl
          py-3
          flex
          items-center
          justify-center
          gap-3
          font-semibold
          hover:scale-[1.02]
          transition
          "
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>
      </div>
    </div>
  );
}