import { useQueryClient } from "@tanstack/react-query";
import { groupApi } from "../../api/groupApi";
import styles from "./DeleteModal.module.css";
import { messageApi } from "../../api/messageApi";

function ClearHistoryModal({ setShowClearHistoryModal, groupId, user }) {
  const queryClient = useQueryClient();
  function handleDelete() {
    console.log(groupId);
    messageApi.deleteMessage(groupId).then(() => {
      queryClient.invalidateQueries(["messages", groupId]);
      setShowClearHistoryModal(false);
    });
  }
  return (
    <div className={styles.logoutModal}>
      <div className={styles.modalContent}>
        <h2>
          Are you sure you want to clear the message history with {user}?
          <br />
          This action cannot be undone.
        </h2>
        <div className={styles.buttonContainer}>
          <button
            className={styles.cancelButton}
            onClick={() => setShowClearHistoryModal(false)}
          >
            Cancel
          </button>
          <button className={styles.confirmButton} onClick={handleDelete}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClearHistoryModal;
