import { useEffect } from "react";
import styles from "./OptionModal.module.css";

function OptionModal({ position, isVisible, handleClickOutside }) {
  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);
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
          <button className={styles.optionButton}>Delete chat</button>
        </div>
        <button className={styles.optionButton}>Clear history</button>
        <button className={styles.optionButton}>Set Wallpaper</button>
      </div>
    </div>
  );
}

export default OptionModal;
