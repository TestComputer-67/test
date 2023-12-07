import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        toastOptions={{
          position: "top-right",
          style: {
            borderRadius: "2px",
            background: "black",
            color: "white",
          },
        }}
      />
  </React.StrictMode>
);
