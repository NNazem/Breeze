import { useContactList } from "../../hooks/useContactList";
import User from "./User";
import styles from "./UserList.module.css";

function UserList({
  onSelectedChat,
  selectedChat,
  onLogout,
  isLoading,
  users,
}) {
  if (isLoading) return <div>Caricamento...</div>;

  return (
    <div className={styles.userListContainer}>
      <div className={styles.userList}>
        {users.map((user, index) => (
          <User
            key={index}
            user={user}
            onSelectedChat={onSelectedChat}
            isSelected={selectedChat?.contact_id === user.contact_id}
          />
        ))}
      </div>
      <button className={styles.menuButton} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default UserList;
