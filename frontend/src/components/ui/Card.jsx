export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-[#1A1F29] border border-white/10 rounded-2xl p-5 ${className}`}
    >
      {children}
    </div>
  );
}