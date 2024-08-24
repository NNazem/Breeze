import React, { useRef } from "react";
import Header from "./Header/Header";
import InputArea from "./Input Area/InputArea";
import MessageArea from "./MessageArea/MessageArea";
import styles from "./ChatInterface.module.css";
import Sidebar from "./Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useWebSocket } from "../hooks/useWebSocket";
import { useMessageList } from "../hooks/useMessageList";
import { groupApi } from "../api/groupApi";
import { createGroupMemberApi } from "../api/createGroupMember";
import { useQueryClient } from "@tanstack/react-query";
import LogoutModal from "./Authentication/LogoutModal";

function ChatInterface() {
  const queryClient = useQueryClient();
  const [selectedChat, setSelectedChat] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleRefetch = () => {
    queryClient.invalidateQueries(["contacts"]);
  };

  const handleClickOutsideLogout = (e) => {
    setShowLogoutModal(false);
  };

  const {
    data: messages = [],
    isLoading,
    error,
    refreshMessages,
  } = useMessageList(selectedChat?.group_id);

  const { socket, sendMessage } = useWebSocket(
    localStorage.getItem("username"),
    selectedChat?.group_id,
    refreshMessages
  );

  function handleSelectedChat(chat) {
    if (chat.group_id) {
      setSelectedChat(chat);
      handleRefetch();
    } else {
      groupApi
        .fetchGroupId(
          Number(localStorage.getItem("contactId")),
          chat.contact_id
        )
        .then((response) => {
          if (response != 0) {
            chat = { ...chat, group_id: response };
            setSelectedChat(chat);
          } else {
            groupApi
              .createGroup(
                Number(localStorage.getItem("contactId")),
                chat.contact_id
              )
              .then((response) => {
                chat = { ...chat, group_id: response.group_id };
                createGroupMemberApi.createGroupMember(
                  Number(localStorage.getItem("contactId")),
                  chat.contact_id,
                  response.group_id
                );
                setSelectedChat(chat);
                handleRefetch();
              });
          }
        });
    }
    refreshMessages();
  }

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  function handleLogout() {
    console.log("logout");
    setShowLogoutModal(true);
  }

  function confirmLogout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className={styles.chatInterface}>
      <Sidebar
        onSelectedChat={handleSelectedChat}
        selectedChat={selectedChat}
        handleLogout={handleLogout}
      />
      <div className={styles.chatArea}>
        <Header selectedChat={selectedChat} />
        <div className={styles.messageAreaWrapper}>
          {isLoading ? (
            <div>Caricamento messaggi...</div>
          ) : error ? (
            <div>Errore nel caricamento dei messaggi: {error.message}</div>
          ) : (
            <MessageArea messages={messages} selectedChat={selectedChat} />
          )}
        </div>
        <InputArea selectedChat={selectedChat} sendMessage={sendMessage} />
      </div>
      {showLogoutModal && (
        <LogoutModal
          isOpen={showLogoutModal}
          onConfirm={confirmLogout}
          onCancel={() => setShowLogoutModal(false)}
          className={styles.logoutModal}
          handleClickOutsideLogout={handleClickOutsideLogout}
        />
      )}
    </div>
  );
}

export default ChatInterface;
