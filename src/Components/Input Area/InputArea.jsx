import { useState } from "react";
import styles from "./InputArea.module.css";
import { CiLocationArrow1 } from "react-icons/ci";
import { useQueryClient } from "@tanstack/react-query";

function InputArea({ sendMessage }) {
  const [message, setMessage] = useState("");
  const queryClient = useQueryClient();
  function handleSendMessage(e) {
    if (e.key !== "Enter" || message.length == 0) return;
    sendMessage(e.target.value);
    setMessage("");
    queryClient.invalidateQueries(["lastMessage"]);
  }

  return (
    <div className={styles.inputArea}>
      <input
        type="text"
        placeholder="Type a message"
        className={styles.input}
        onKeyDown={handleSendMessage}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {message?.length != 0 && (
        <button
          className={styles.sendButton}
          onClick={() => sendMessage(message)}
        >
          <CiLocationArrow1 size={24} />
        </button>
      )}
    </div>
  );
}

export default InputArea;
