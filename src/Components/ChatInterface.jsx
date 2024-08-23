import React from "react";
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
import { useContactList } from "../hooks/useContactList";
import { useQueryClient } from "@tanstack/react-query";

function ChatInterface() {
  const queryClient = useQueryClient();
  const [selectedChat, setSelectedChat] = useState(null);

  const handleRefetch = () => {
    queryClient.invalidateQueries(["contacts"]);
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

  return (
    <div className={styles.chatInterface}>
      <Sidebar
        onSelectedChat={handleSelectedChat}
        selectedChat={selectedChat}
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
    </div>
  );
}

export default ChatInterface;
