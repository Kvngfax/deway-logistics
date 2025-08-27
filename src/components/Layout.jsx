import React from "react";
import { Outlet } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <>
      <Header />
      {/* push content below fixed navbar */}
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
