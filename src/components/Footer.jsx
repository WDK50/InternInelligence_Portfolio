/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext"; 
import { Link } from "react-scroll";

const Footer = () => {
  const { darkMode } = useTheme();

  const containerBg = darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-200 text-gray-800";
  const hoverLink = darkMode
    ? "hover:text-cyan-400 hover:shadow-cyan-400"
    : "hover:text-blue-600 hover:shadow-blue-400";

  const buttonStyle = darkMode
    ? "bg-gradient-to-r from-cyan-500 to-blue-500"
    : "bg-black";

  return (
    <footer
      className={`w-full p-3 shadow-inner flex flex-col-reverse sm:flex-row justify-between items-center space-y-4 sm:space-y-0 ${containerBg}`}
    >
      <div className="sm:order-first py-4 md:py-0">
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className={`${buttonStyle} text-white px-4 py-2 rounded-md hover:scale-105 duration-300 cursor-pointer`}
        >
          Hire Me
        </Link>
      </div>

      <div className="text-md font-semibold text-center">
        © {new Date().getFullYear()} Khawaja. All rights reserved.
      </div>

      <div className="flex space-x-4 text-xl">
        <a
          href="https://github.com/WDK50"
          target="_blank"
          rel="noopener noreferrer"
          className={`${hoverLink} hover:shadow-md p-1 rounded-full transition-all duration-300`}
        >
          <FaGithub />
        </a>
        <a
          href="www.linkedin.com/in/khawaja-abdurrehman-9b7823325"
          target="_blank"
          rel="noopener noreferrer"
          className={`${hoverLink} hover:shadow-md p-1 rounded-full transition-all duration-300`}
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
