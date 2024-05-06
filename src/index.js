import React from "react"; // thư viện React
import ReactDOM from "react-dom/client"; // Thư viện React dom
import "./index.css"; // Css
import App from "./App"; // import component

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // Chế độ nghiêm ngặt
  <React.StrictMode>
    {/* gọi component App */}
    <App />
  </React.StrictMode>
);
