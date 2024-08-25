import { useQueryClient } from "@tanstack/react-query";
import { groupApi } from "../../api/groupApi";
import styles from "./DeleteModal.module.css";

function DeleteModal({ setShowDeleteModal, groupId, setSelectedChat, user }) {
  const queryClient = useQueryClient();

  function handleDelete() {
    console.log(groupId);
    groupApi.deleteGroup(groupId).then(() => {
      setSelectedChat(null);
      queryClient.invalidateQueries(["contacts"]);
    });
  }
  return (
    <div className={styles.logoutModal}>
      <div className={styles.modalContent}>
        <h2>
          Are you sure you want to delete all message history with {user}?
          <br />
          This action cannot be undone.
        </h2>
        <div className={styles.buttonContainer}>
          <button
            className={styles.cancelButton}
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </button>
          <button className={styles.confirmButton} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
