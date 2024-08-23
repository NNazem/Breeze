import { useEffect, useRef } from "react";
import Message from "./Message";
import styles from "./MessageArea.module.css";

function MessageArea({ messages, selectedChat }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "instant" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className={styles.imessage}>
      <div className={styles.messageContainer}>
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            username={selectedChat?.username}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default MessageArea;
