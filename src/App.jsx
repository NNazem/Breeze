import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import ChatInterface from "./Components/ChatInterface";
import { useState } from "react";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";

const queryClient = new QueryClient();
function App() {
  const [user, setUser] = useState(null);
  const [signup, setSignup] = useState(false);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {user && <ChatInterface user={user} />}
        {!user && !signup && <Login setUser={setUser} setSignup={setSignup} />}
        {!user && signup && <Signup setSignup={setSignup} />}
      </QueryClientProvider>
    </>
  );
}

export default App;
