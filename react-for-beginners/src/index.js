// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // ✅ 여기 수정
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
