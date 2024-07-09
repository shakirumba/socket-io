import React, { useContext, useState } from "react";
// import style from "../test.module.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

import { AuthContext } from "./pages/AuthContext";
import { ChatContextProvider } from "./pages/ChatContext";

export default function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <ChatContextProvider user={user}>
      <Routes>
        <Route path="/register" element={user ? <Chat /> : <Register />} />
        <Route path="/login" element={user ? <Chat /> : <Login />} />
        <Route path="/chat" element={user ? <Chat /> : <Login />} />
      </Routes>
    </ChatContextProvider>
  );
}
