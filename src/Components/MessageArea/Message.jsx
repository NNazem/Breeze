import styles from "./Message.module.css";

function Message({ message, username }) {
  const fromThem = message.username === username;
  const messageClass = fromThem ? styles.fromThem : styles.fromMe;

  return (
    <div className={fromThem ? styles.messageRowFromThem : styles.messageRow}>
      {fromThem && (
        <img
          src="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          className={styles.avatar}
          alt="Avatar"
        />
      )}
      <p className={`${styles.message} ${messageClass}`}>
        {message.message_text}
        <span className={styles.timestamp}>10:22</span>
      </p>
      {!fromThem && (
        <img
          src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid"
          className={styles.avatar}
          alt="Avatar"
        />
      )}
    </div>
  );
}

export default Message;
