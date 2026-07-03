export default function IconButton({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
      p-3
      rounded-xl
      hover:bg-[#252B36]
      transition
      "
    >
      {icon}
    </button>
  );
}