import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, AuthContextProvider } from "./pages/AuthContext";
import { ChatContext } from "./pages/ChatContext.jsx";

// const { user } = useContext(AuthContext);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthContextProvider> */}
      <App />
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
