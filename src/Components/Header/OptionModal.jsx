import { useEffect, useState } from "react";
import styles from "./OptionModal.module.css";
import DeleteModal from "./DeleteModal";

function OptionModal({
  position,
  isVisible,
  handleClickOutside,
  selectedChat,
  setSelectedChat,
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isVisible]);

  const handleOutsideClick = (e) => {
    if (e.target.closest(`.${styles.optionModal}`)) {
      return;
    }
    handleClickOutside(e);
  };

  function handleDeleteClick(e) {
    e.stopPropagation();
    setShowDeleteModal(true);
  }

  function onDelete() {
    console.log("Delete");
  }

  return (
    <div
      className={styles.optionModal}
      style={{
        position: "absolute",
        top: `${position.top}px`,
        right: "25px",
      }}
    >
      <div className={styles.options}>
        <div className={styles.optionGroup}>
          <button className={styles.optionButton} onClick={handleDeleteClick}>
            Delete chat
          </button>
        </div>
        <button className={styles.optionButton}>Clear history</button>
        <button className={styles.optionButton}>Set Wallpaper</button>
      </div>
      {showDeleteModal && (
        <DeleteModal
          className={styles.logoutModal}
          setShowDeleteModal={setShowDeleteModal}
          onDelete={onDelete}
          user={selectedChat.username}
          groupId={selectedChat.group_id}
          setSelectedChat={setSelectedChat}
        />
      )}
    </div>
  );
}

export default OptionModal;
