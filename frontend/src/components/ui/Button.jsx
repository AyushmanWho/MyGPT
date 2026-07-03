export default function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
}) {
  const variants = {
    primary:
      "bg-violet-600 hover:bg-violet-500 text-white",
    secondary:
      "bg-[#1A1F29] hover:bg-[#252B36] text-white border border-white/10",
  };

  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 rounded-xl transition font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}