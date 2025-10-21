/* eslint-disable no-unused-vars */
import React from "react";
import Reveal from "./Reveal";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();

  const containerClasses = darkMode
    ? "bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white"
    : "bg-gradient-to-b from-gray-100 to-gray-200 text-black";

  const cardClasses = darkMode
    ? "bg-gray-800/60 border border-gray-700 shadow-lg backdrop-blur-md"
    : "bg-white border border-gray-300 shadow-lg";

  const inputClasses = darkMode
    ? "p-3 bg-transparent rounded-md border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200"
    : "p-3 bg-white rounded-md border border-gray-400 text-gray-900 placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-400 transition-all duration-200";

  const buttonClasses = `
    relative inline-flex items-center justify-center px-8 py-3 mt-4 text-lg font-semibold 
    rounded-md overflow-hidden transition-all duration-300
    ${darkMode ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-blue-500 hover:to-cyan-500" 
               : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-cyan-500 hover:to-blue-600"}
  `;

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
            Let’s work together! Fill out the form below to get in touch.
          </p>

          <div className={`rounded-2xl p-8 w-full ${cardClasses}`}>
            <form
              action="https://getform.io/f/akkkqrwa"
              method="POST"
              className="flex flex-col space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className={inputClasses}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={inputClasses}
                required
              />
              <textarea
                name="message"
                rows={6}
                placeholder="Enter your message"
                className={inputClasses}
                required
              ></textarea>

              <button type="submit" className={buttonClasses}>
                <span className="relative z-10">Send Message</span>
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
