/* eslint-disable no-unused-vars */
import React from "react";
import Reveal from "./Reveal";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();

  const containerClasses = darkMode
    ? "bg-gradient-to-b from-black to-gray-800 text-white"
    : "bg-gradient-to-b from-white to-gray-200 text-black";

  const inputClasses = darkMode
    ? "p-2 bg-transparent rounded-md border-2 border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    : "p-2 bg-white rounded-md border-2 border-gray-600 text-gray-800 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400";

  return (
    <div
      id="contact"
      className={`w-full px-2 pb-12 bg:px-0 md:px-16 min-h-screen pt-32 ${containerClasses}`}
    >
      <div className="max-w-screen-lg w-full h-full p-4 flex flex-col justify-center mx-auto">
        <Reveal>
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contact
            </p>
            <p className="py-6 font-semibold text-xl">Fill this form to contact with me:</p>
          </div>

          <div className="flex items-center justify-center">
            <form
              action="https://getform.io/f/akkkqrwa"
              method="POST"
              className="flex flex-col w-full md:w-1/2 space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className={inputClasses}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className={inputClasses}
              />
              <textarea
                name="message"
                rows={10}
                placeholder="Enter Your Message"
                className={inputClasses}
              ></textarea>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-110 duration-300">
                Submit
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
