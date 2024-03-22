import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { nanoid } from 'nanoid'
import ChatBox from "./component/ChatBox.jsx";

const socket = io(import.meta.env.VITE_SERVER_URI);
const userName = nanoid(8)

function App() {
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", { message, userName});
    setMessage("");
  };

  useEffect(() => {
    socket.on("chat", (payload) => {
      setChat([...chat, payload]);
    });
  });

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-400">
      <div className="min-h-6">
        <header>
          <h1 className="text-2xl font-bold">Chat app</h1>
        </header>
        <ChatBox
          sendChat={sendChat}
          message={message}
          setMessage={setMessage}
          chat={chat}
        />
      </div>
    </div>
  );
}

export default App;
