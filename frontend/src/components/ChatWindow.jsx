function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <div key={index}>
          <strong>
            {message.role === "assistant" ? "🤖 MyGPT" : "🙂 You"}
          </strong>

          <p>{message.text}</p>

          <br />
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;