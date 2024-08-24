import {
  PiDotsThreeOutlineVertical,
  PiPhone,
  PiVideoCamera,
} from "react-icons/pi";
import styles from "./Header.module.css";
import { useRef, useState } from "react";
import OptionModal from "./OptionModal";
const user = {
  name: "Marco Rossi",
  lastSeen: "Last seen recently",
};

function Header({ selectedChat }) {
  const [showOptionModal, setShowOptionModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const optionButtonRef = useRef(null);

  const handleOptionClick = () => {
    console.log(optionButtonRef.current);
    if (optionButtonRef.current) {
      const rect = optionButtonRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom,
        left: rect.left,
      });
    }
    setShowOptionModal(!showOptionModal);
  };

  const handleClickOutside = (e) => {
    if (
      optionButtonRef.current &&
      !optionButtonRef.current.contains(event.target)
    ) {
      setShowOptionModal(false);
    }
  };

  return (
    selectedChat && (
      <div className={styles.header}>
        <div className={styles.elements}>
          <div className={styles.avatar}>
            <img src="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />
          </div>
          <div className={styles.userInfo}>
            <p className={styles.name}>
              {selectedChat?.first_name} {selectedChat?.last_name}
            </p>
            <p className={styles.lastSeen}>{user.lastSeen}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <PiPhone size={24} className={styles.icon} />
          <PiVideoCamera size={24} className={styles.icon} />
          <button
            onClick={handleOptionClick}
            ref={optionButtonRef}
            className={styles.optionButton}
          >
            <PiDotsThreeOutlineVertical size={24} className={styles.icon} />
          </button>
          {showOptionModal && (
            <OptionModal
              position={modalPosition}
              isVisible={showOptionModal}
              handleClickOutside={handleClickOutside}
            />
          )}
        </div>
      </div>
    )
  );
}

export default Header;
