import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

export default function RightPanel() {
  return (
    <aside className="w-72 border-l border-white/10 bg-[#111827] p-5">

      <SectionTitle>Quick Tools</SectionTitle>

      <div className="space-y-4">

        <Card>🌐 Web Search</Card>

        <Card>📄 Summarize PDF</Card>

        <Card>🖼 Analyze Image</Card>

        <Card>💻 Explain Code</Card>

        <Card>🧠 Memory</Card>

      </div>

    </aside>
  );
}