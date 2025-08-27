// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";

import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Services from "./routes/Services.jsx";
import Contact from "./routes/Contact.jsx";
import NotFound from "./routes/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
