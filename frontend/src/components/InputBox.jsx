import { useState } from "react";

function InputBox({ onSend }) {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;

    onSend(text);

    setText("");
  }

  return (
    <div className="input-box">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
        placeholder="Ask MyGPT anything..."
      />

      <button onClick={handleSend}>
        Send
      </button>
    </div>
  );
}

export default InputBox;