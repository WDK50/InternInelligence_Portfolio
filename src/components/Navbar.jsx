/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";  

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { darkMode, toggleTheme } = useTheme(); 

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];

  const navbarBg = darkMode ? "bg-black" : "bg-gray-300";
  const navbarText = darkMode ? "text-white font-normal" : "text-black font-bold";
  const overlayBg = darkMode ? "bg-black/70" : "bg-white/70";

  return (
    <>
      <div className={`flex px-4 justify-between items-center w-full h-20 ${navbarText} ${navbarBg} fixed z-40`}>
        <div>
          <h1 title="Web Dev Khawaja" className="text-4xl cursor-pointer ml-2">
            WDK
          </h1>
        </div>
        <ul className="hidden md:flex cursor-pointer">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 capitalize cursor-pointer font-semibold text-xl hover:scale-105 duration-300"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <div onClick={toggleTheme} className="cursor-pointer">
            {darkMode ? <FaSun size={30} /> : <FaMoon size={30} />}
          </div>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer z-50 pr-4 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      {nav && (
        <div className={`fixed inset-0 z-50 ${overlayBg} backdrop-blur-md`}>
          <div
            onClick={() => setNav(false)}
            className="absolute top-5 right-5 cursor-pointer"
          >
            <FaTimes size={30} className={navbarText} />
          </div>
          <ul className={`flex flex-col justify-center items-center h-full ${navbarText}`}>
            {links.map(({ id, link }) => (
              <li key={id} className="px-4 py-4 capitalize cursor-pointer text-4xl">
                <Link onClick={() => setNav(false)} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;