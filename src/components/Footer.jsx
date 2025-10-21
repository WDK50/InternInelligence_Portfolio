/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-scroll";

const Footer = () => {
  const { darkMode } = useTheme();

  const containerBg = darkMode
    ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300"
    : "bg-gradient-to-r from-gray-100 via-white to-gray-200 text-gray-800";

  const buttonStyle = darkMode
    ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-600 hover:to-cyan-500"
    : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600";

  const hoverLink = darkMode
    ? "hover:text-cyan-400 hover:shadow-cyan-400/50"
    : "hover:text-blue-600 hover:shadow-blue-400/50";

  return (
    <footer
      className={`w-full p-3 shadow-inner flex flex-col-reverse sm:flex-row justify-between items-center space-y-4 sm:space-y-0 ${containerBg}`}
    >
      {/* Left - Hire Me Button */}
      <div className="sm:order-first py-4 md:py-0">
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className={`${buttonStyle} text-white px-4 py-2 rounded-md font-semibold hover:scale-105 transition-all duration-300 cursor-pointer`}
        >
          Hire Me
        </Link>
      </div>

      {/* Middle - Text */}
      <div className="text-md font-semibold text-center tracking-wide">
        © {new Date().getFullYear()} Khawaja Abdur-Rehman.{" "}
        <span
          className={`${
            darkMode ? "text-cyan-400" : "text-blue-600"
          } font-bold`}
        >
          All Rights Reserved
        </span>
        .
      </div>

      {/* Right - Social Icons */}
      <div className="flex space-x-5 text-xl">
        <a
          href="https://github.com/WDK50"
          target="_blank"
          rel="noopener noreferrer"
          className={`${hoverLink} p-2 rounded-full transition-all duration-300 hover:scale-110`}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/khawaja-abdurrehman-9b7823325"
          target="_blank"
          rel="noopener noreferrer"
          className={`${hoverLink} p-2 rounded-full transition-all duration-300 hover:scale-110`}
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
