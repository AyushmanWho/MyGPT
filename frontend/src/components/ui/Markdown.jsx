import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy } from "react-icons/fi";

function CodeBlock({ children, language }) {
  const code = String(children).replace(/\n$/, "");

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative my-4 rounded-xl overflow-hidden border border-[#2B313C]">
      <div className="flex justify-between items-center bg-[#171B22] px-4 py-2 text-sm text-gray-300">
        <span>{language || "text"}</span>

        <button
          onClick={copyCode}
          className="hover:text-violet-400 transition"
        >
          <FiCopy />
        </button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          background: "#11151C",
          padding: "20px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default function Markdown({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ inline, className, children }) {
          const match = /language-(\w+)/.exec(className || "");

          if (!inline) {
            return (
              <CodeBlock
                language={match?.[1]}
              >
                {children}
              </CodeBlock>
            );
          }

          return (
            <code className="bg-[#222833] px-1 rounded text-violet-300">
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}