import { useEffect, useState } from "react";

export const useWebSocket = (username, group_id, onMessageReceived) => {
  const [socket, setSocket] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!username || !group_id) {
      return;
    }
    const ws = new WebSocket(
      "ws://localhost:8081/ws?username=" +
        username +
        "&group_id=" +
        group_id +
        "&token=" +
        token
    );

    ws.onopen = () => {
      console.log("Connected to WebSocket");
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      console.log("Message received:", event.data);
      const message = event.data;
      onMessageReceived(message);
    };

    ws.onclose = (error) => {
      console.error("WebSocket error:", error);

      setSocket(null);
    };

    return () => {
      ws.close();
    };
  }, [username, token, group_id]);

  const sendMessage = (message) => {
    if (socket) {
      socket.send(message);
    }
  };

  return { socket, sendMessage };
};
