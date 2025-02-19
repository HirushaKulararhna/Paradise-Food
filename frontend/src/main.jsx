import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StorContextProvider from "./context/StorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StorContextProvider>
      <App />
    </StorContextProvider>
  </BrowserRouter>
);
