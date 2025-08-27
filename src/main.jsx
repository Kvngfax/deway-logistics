import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // 👈 use HashRouter
import App from "./App.jsx";
import "./index.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop/>
      <App />
    </HashRouter>
  </React.StrictMode>
);
