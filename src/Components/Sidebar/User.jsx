import { useEffect, useState } from "react";
import { messageApi } from "../../api/messageApi";
import styles from "./User.module.css";
import { useLastMessage } from "../../hooks/useLastMessage";

function User({ user, onSelectedChat, isSelected }) {
  const { data: lastMessage } = useLastMessage(user.group_id);

  return (
    <div
      onClick={() => onSelectedChat(user)}
      className={isSelected ? styles.userActive : styles.user}
    >
      <div className={styles.avatar}>
        <img src="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.messageHeader}>
          <p className={styles.name}>
            {user?.first_name} {user?.last_name}
          </p>
          <p className={styles.lastSeen}>Today</p>
        </div>
        <p className={styles.message}>{lastMessage?.message_text}</p>
      </div>
    </div>
  );
}

export default User;
