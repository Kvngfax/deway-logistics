// src/components/Navbar.jsx
import React, { useState } from "react";
import logo from "../assets/Deway logo.png"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Our services", href: "#services" },

  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <nav className="mx-auto max-w-[1540px] px-2 lg:px-3">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className=" lg:max-w-[185px] max-w-[170px] sm:mx-0" />
            {/* <span className="text-2xl font-bold text-black">YourBrand</span> */}
          </a>

          {/* Nav links centered */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <ul className="flex items-center gap-8 text-gray-700 font-medium">
              {navItems.map((item) => (
                <li key={item.href} className="relative group">
                  <a
                    href={item.href}
                    className="relative z-10 px-4 py-5 block text-xl transition-colors duration-300 group-hover:text-white"
                  >
                    {item.label}
                  </a>
                  {/* Expanding orange background */}
                  <span
                    className="absolute inset-0 scale-x-0 origin-center bg-orange-400 transition-transform duration-300 group-hover:scale-x-100"
                  ></span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA aligned right */}
          <div className="hidden lg:flex">
            <a
              href="#quote"
              className="ml-6 inline-flex text-xl items-center bg-orange-400 px-5 py-5 font-semibold text-white shadow hover:bg-orange-700 transition"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2.5 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            {!open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3"
                   fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ,r-3"
                   fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-2 rounded-lg border border-gray-200 bg-white shadow-md text-center text-xl">
            <ul className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative block rounded-md px-4 py-3 text-gray-700 transition group overflow-hidden"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="relative z-10 group-hover:text-white">
                      {item.label}
                    </span>
                    <span className="absolute inset-0 scale-x-0 origin-center bg-orange-600 rounded-md transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#quote"
                  className="block rounded-md bg-orange-400 px-3 py-3 text-xl font-semibold text-white shadow hover:bg-orange-600 transition"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
