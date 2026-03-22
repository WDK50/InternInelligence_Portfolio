/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Reveal from "./Reveal";
import { useTheme } from "../context/ThemeContext";
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  const { darkMode } = useTheme();
  const [hoveredBtn, setHoveredBtn] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const containerClasses = darkMode
    ? "bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white"
    : "bg-gradient-to-b from-gray-100 to-gray-200 text-black";

  const cardClasses = darkMode
    ? "bg-gray-800/60 border border-gray-700 backdrop-blur-md"
    : "bg-white border border-gray-300";

  const inputClasses = darkMode
    ? "w-full p-3 pl-11 bg-transparent rounded-lg border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
    : "w-full p-3 pl-11 bg-white rounded-lg border border-gray-400 text-gray-900 placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-400 transition-all duration-300";

  const getIconColor = (field) => {
    if (focusedField === field) {
      return darkMode ? "#22d3ee" : "#2563eb";
    }
    return darkMode ? "#9ca3af" : "#6b7280";
  };

  return (
    <div
      id="contact"
      className={`w-full min-h-screen flex items-center justify-center px-4 py-16 ${containerClasses}`}
    >
      <div className="w-full max-w-2xl flex flex-col justify-center items-center text-center">
        <Reveal>
          <h2 className="text-4xl font-bold border-b-4 border-cyan-400 inline-block mb-6">
            Contact Me
          </h2>
          <p className="text-lg mb-10 font-medium text-gray-400 max-w-2xl">
            Let's work together! Fill out the form below to get in touch.
          </p>

          <div
            className={`rounded-2xl p-8 w-full ${cardClasses}`}
            style={{
              boxShadow: darkMode
                ? "0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(34, 211, 238, 0.05)"
                : "0 20px 50px rgba(0, 0, 0, 0.08), 0 0 30px rgba(37, 99, 235, 0.05)",
            }}
          >
            <form
              action="https://getform.io/f/akkkqrwa"
              method="POST"
              className="flex flex-col space-y-6"
            >
              {/* Name Field */}
              <div className="relative">
                <FaUser
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300"
                  style={{ color: getIconColor("name") }}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className={inputClasses}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <FaEnvelope
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300"
                  style={{ color: getIconColor("email") }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={inputClasses}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <FaCommentDots
                  size={16}
                  className="absolute left-3.5 top-4 transition-colors duration-300"
                  style={{ color: getIconColor("message") }}
                />
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Enter your message"
                  className={inputClasses}
                  style={{ resize: "none" }}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                ></textarea>
              </div>

              {/* Send Button */}
              <button
                type="submit"
                onMouseEnter={() => setHoveredBtn(true)}
                onMouseLeave={() => setHoveredBtn(false)}
                style={{
                  background: darkMode
                    ? hoveredBtn
                      ? "linear-gradient(135deg, #22d3ee, #3b82f6, #6366f1)"
                      : "linear-gradient(135deg, #06b6d4, #2563eb, #4f46e5)"
                    : hoveredBtn
                    ? "linear-gradient(135deg, #3b82f6, #06b6d4, #2563eb)"
                    : "linear-gradient(135deg, #2563eb, #06b6d4, #4f46e5)",
                  boxShadow: hoveredBtn
                    ? darkMode
                      ? "0 10px 30px rgba(34, 211, 238, 0.3), 0 0 15px rgba(99, 102, 241, 0.2)"
                      : "0 10px 30px rgba(37, 99, 235, 0.3), 0 0 15px rgba(6, 182, 212, 0.2)"
                    : "none",
                  transition: "all 0.4s ease",
                  transform: hoveredBtn ? "translateY(-2px)" : "translateY(0)",
                }}
                className="relative w-full py-3.5 mt-2 text-lg font-semibold rounded-lg text-white cursor-pointer flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Send Message
                  <FaPaperPlane
                    size={16}
                    style={{
                      transition: "transform 0.4s ease",
                      transform: hoveredBtn
                        ? "translateX(4px) translateY(-4px) rotate(-12deg)"
                        : "translateX(0) translateY(0) rotate(0deg)",
                    }}
                  />
                </span>

                {/* Shine effect */}
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    left: hoveredBtn ? "120%" : "-60%",
                    width: "40%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    transition: "left 0.6s ease",
                    transform: "skewX(-15deg)",
                  }}
                />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;