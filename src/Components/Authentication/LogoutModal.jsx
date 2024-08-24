import { useEffect } from "react";
import styles from "./LogoutModal.module.css";

function LogoutModal({
  isOpen,
  onConfirm,
  onCancel,
  handleClickOutsideLogout,
}) {
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutsideLogout);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideLogout);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.logoutModal}>
      <div className={styles.modalContent}>
        <h2>Are you sure you want to logout?</h2>
        <div className={styles.buttonContainer}>
          <button className={styles.confirmButton} onClick={onConfirm}>
            Confirm
          </button>
          <button className={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
