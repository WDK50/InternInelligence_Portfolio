/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon, FaChevronDown } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { id: 1, text: "Home", href: "#home" },
    { id: 2, text: "About", href: "#about" },
    { id: 3, text: "Portfolio", href: "#portfolio" },
    { id: 4, text: "Skills", href: "#skills" },
    { id: 5, text: "Experience", href: "#experience" },
    { id: 6, text: "Contact", href: "#contact" },
  ];
  const subLinks = [
    { id: "e", text: "Education", href: "#education" },
    { id: "s", text: "Services", href: "#services" },
    { id: "f", text: "FAQs", href: "#faqs" },
  ];

  const navbarBg = darkMode ? "bg-black" : "bg-gray-300";
  const navbarText = darkMode ? "text-white" : "text-black";
  const overlayBg = darkMode ? "bg-black/70" : "bg-white/70";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full h-20 flex items-center px-4 ${navbarBg} ${navbarText} z-50`}
      >
        <h1 className="text-4xl font-bold">WDK</h1>

        <div className="flex flex-1 items-center justify-end gap-8">
          <ul className="hidden md:flex items-center gap-6">
            {links.map(({ id, text, href }) =>
              text !== "Portfolio" ? (
                <li key={id}>
                  <a
                    href={href}
                    className="text-xl capitalize px-2 py-1 hover:scale-105 transition-transform duration-200"
                  >
                    {text}
                  </a>
                </li>
              ) : (
                <li
                  key={id}
                  ref={dropdownRef}
                  className="relative px-2 py-1 flex items-center gap-1"
                >
                  <a
                    href={href}
                    className="text-xl capitalize hover:scale-105 transition-transform duration-200"
                  >
                    {text}
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setDropdownOpen(!dropdownOpen);
                    }}
                    className="p-1 hover:scale-105 transition-transform duration-200"
                  >
                    <FaChevronDown
                      className={`transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {dropdownOpen && (
                    <ul
                      className={`absolute top-full left-0 mt-2 w-40 ${navbarBg} ${navbarText} rounded-md shadow-lg`}
                    >
                      {subLinks.map(
                        ({ id: sid, text: subText, href: subHref }) => (
                          <li key={sid}>
                            <a
                              href={subHref}
                              className="block px-4 py-2 hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-gray-600 dark:active:bg-gray-500 transition-colors duration-200"
                              onClick={() => setDropdownOpen(false)}
                            >
                              {subText}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2">
              {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
            <button
              onClick={() => setNavOpen((o) => !o)}
              className="md:hidden p-2"
            >
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {navOpen && (
        <div
          className={`fixed inset-0 pt-20 ${overlayBg} backdrop-blur-md z-40 flex items-center justify-center`}
        >
          <ul
            className={`flex flex-col items-center justify-center space-y-6 ${navbarText} w-full`}
          >
            {links.map(({ id, text, href }) =>
              text !== "Portfolio" ? (
                <li key={id} className="w-full text-center">
                  <a
                    href={href}
                    className="text-3xl capitalize hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-gray-600 dark:active:bg-gray-500 px-4 py-2 rounded-lg transition-colors duration-200 inline-block"
                    onClick={() => setNavOpen(false)}
                  >
                    {text}
                  </a>
                </li>
              ) : (
                <li key={id} ref={dropdownRef} className="w-full text-center">
                  <div className="flex justify-center items-center gap-2">
                    <a
                      href={href}
                      className="text-3xl capitalize hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-gray-600 dark:active:bg-gray-500 px-4 py-2 rounded-lg transition-colors duration-200 inline-block"
                      onClick={() => setNavOpen(false)}
                    >
                      {text}
                    </a>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen((o) => !o);
                      }}
                      className="p-1 hover:scale-105 transition-transform duration-200"
                    >
                      <FaChevronDown
                        className={`text-sm md:text-2xl transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {dropdownOpen && (
                    <ul
                      className={`mt-2 flex flex-col items-center
                  bg-white dark:bg-gray-700
                  text-black dark:text-white
                  rounded-md shadow-lg w-3/4 mx-auto`}
                    >
                      {subLinks.map(
                        ({ id: sid, text: subText, href: subHref }) => (
                          <li key={sid} className="w-full">
                            <a
                              href={subHref}
                              className="block w-full px-8 py-2 text-2xl 
                        hover:bg-gray-200 active:bg-gray-300 
                        dark:hover:bg-gray-600 dark:active:bg-gray-500 
                        transition-colors duration-200"
                              onClick={() => {
                                setNavOpen(false);
                                setDropdownOpen(false);
                              }}
                            >
                              {subText}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </>
  );
}