/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-scroll";

const Footer = () => {
  const { darkMode } = useTheme();
  const [hoveredHire, setHoveredHire] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const containerBg = darkMode
    ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300"
    : "bg-gradient-to-r from-gray-100 via-white to-gray-200 text-gray-800";

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
          onMouseEnter={() => setHoveredHire(true)}
          onMouseLeave={() => setHoveredHire(false)}
          style={{
            background: darkMode
              ? hoveredHire
                ? "linear-gradient(135deg, #22d3ee, #3b82f6, #6366f1)"
                : "linear-gradient(135deg, #06b6d4, #2563eb)"
              : hoveredHire
              ? "linear-gradient(135deg, #3b82f6, #06b6d4, #6366f1)"
              : "linear-gradient(135deg, #2563eb, #06b6d4)",
            boxShadow: hoveredHire
              ? darkMode
                ? "0 8px 25px rgba(34, 211, 238, 0.35), 0 0 12px rgba(99, 102, 241, 0.2)"
                : "0 8px 25px rgba(37, 99, 235, 0.35), 0 0 12px rgba(6, 182, 212, 0.2)"
              : "none",
            transform: hoveredHire
              ? "translateY(-2px) scale(1.05)"
              : "translateY(0) scale(1)",
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden",
            display: "inline-block",
          }}
          className="text-white px-5 py-2.5 rounded-lg font-semibold cursor-pointer"
        >
          <span style={{ position: "relative", zIndex: 1 }}>Hire Me</span>
          <span
            style={{
              position: "absolute",
              top: 0,
              left: hoveredHire ? "120%" : "-60%",
              width: "40%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
              transition: "left 0.5s ease",
              transform: "skewX(-15deg)",
            }}
          />
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
      <div className="flex text-xl">
        
        {/* GitHub */}
        <a
          href="https://github.com/WDK50"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredIcon("github")}
          onMouseLeave={() => setHoveredIcon(null)}
          style={{
            background:
              hoveredIcon === "github"
                ? darkMode
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.08)"
                : "transparent",
            color:
              hoveredIcon === "github"
                ? darkMode
                  ? "#22d3ee"
                  : "#2563eb"
                : darkMode
                ? "#9ca3af"
                : "#4b5563",
            transform:
              hoveredIcon === "github"
                ? "translateY(-3px) scale(1.15)"
                : "translateY(0) scale(1)",
            boxShadow:
              hoveredIcon === "github"
                ? darkMode
                  ? "0 6px 20px rgba(34, 211, 238, 0.3)"
                  : "0 6px 20px rgba(37, 99, 235, 0.25)"
                : "none",
            transition: "all 0.3s ease",
          }}
          className="p-2.5 rounded-full cursor-pointer"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/abdurrehman-dev/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredIcon("linkedin")}
          onMouseLeave={() => setHoveredIcon(null)}
          style={{
            background:
              hoveredIcon === "linkedin"
                ? darkMode
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.08)"
                : "transparent",
            color:
              hoveredIcon === "linkedin"
                ? darkMode
                  ? "#22d3ee"
                  : "#2563eb"
                : darkMode
                ? "#9ca3af"
                : "#4b5563",
            transform:
              hoveredIcon === "linkedin"
                ? "translateY(-3px) scale(1.15)"
                : "translateY(0) scale(1)",
            boxShadow:
              hoveredIcon === "linkedin"
                ? darkMode
                  ? "0 6px 20px rgba(34, 211, 238, 0.3)"
                  : "0 6px 20px rgba(37, 99, 235, 0.25)"
                : "none",
            transition: "all 0.3s ease",
          }}
          className="p-2.5 rounded-full cursor-pointer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;