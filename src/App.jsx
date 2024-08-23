import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import ChatInterface from "./Components/ChatInterface";
import { useState } from "react";
import Login from "./Components/Authentication/Login";

const queryClient = new QueryClient();
function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {user ? <ChatInterface /> : <Login setUser={setUser} />}
      </QueryClientProvider>
    </>
  );
}

export default App;
