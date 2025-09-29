import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 👈 use HashRouter
import App from "./App.jsx";
import "./index.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToHashElement from "./components/ScrollToHashElement";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <ScrollToHashElement />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
