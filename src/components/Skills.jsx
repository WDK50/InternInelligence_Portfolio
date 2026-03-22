/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import fireabase from "../assets/firebase.png";
import vite from "../assets/vite.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import django from "../assets/django.png";
import fastapi from "../assets/fastapi.png";
import postgres from "../assets/postgres.jpg";
import prompteng from "../assets/PromptEng.png";
import rlhf from "../assets/RLHF.png";
import turing from "../assets/Turing.png";
import Reveal from "./Reveal";
import { useTheme } from "../context/ThemeContext";
import { FaChevronDown } from "react-icons/fa";

const Skills = () => {
  const { darkMode } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const containerBg = darkMode
    ? "bg-gradient-to-b from-gray-800 to-black text-white"
    : "bg-gray-300";

const techs = [
    { id: 1, src: react, title: "React", style: "shadow-blue-600" },
    { id: 2, src: python, title: "Python", style: "shadow-yellow-400" },
    { id: 3, src: django, title: "Django", style: "shadow-green-700" },
    { id: 4, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 5, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 6, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 7, src: fireabase, title: "Firebase", style: "shadow-red-500" },
    { id: 8, src: vite, title: "Vite", style: "shadow-purple-400" },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: darkMode ? "shadow-gray-400" : "shadow-black",
    },
    { id: 10, src: tailwind, title: "Tailwind CSS", style: "shadow-sky-400" },
    { id: 11, src: fastapi, title: "FastAPI", style: "shadow-emerald-500" },
    { id: 12, src: postgres, title: "PostgreSQL", style: "shadow-blue-400" },
    { id: 13, src: prompteng, title: "Prompt Engineering", style: "shadow-violet-500" },
    { id: 14, src: rlhf, title: "RLHF", style: "shadow-rose-500" },
    { id: 15, src: turing, title: "Turing", style: "shadow-amber-500" },
  ];
  const firstRow = techs.slice(0, 3);
  const restRows = techs.slice(3);

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (showAll) {
      setShowAll(false);
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      setShowAll(true);
    }
  };

  return (
    <div
      ref={sectionRef}
      id="skills"
      className={`w-full md:px-16 px-4 h-fit pt-20 pb-16 block ${containerBg}`}
    >
      <div className="max-w-screen-lg w-full h-full p-4 flex flex-col justify-center mx-auto">
        <Reveal>
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
              Skills
            </p>
            <p className="py-6">These are the technologies I've worked with:</p>
          </div>

          {/* First Row - Always Visible */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-4 px-4 text-center">
            {firstRow.map(({ id, title, style, src }) => (
              <div
                key={id}
                className={`py-6 px-4 shadow-lg rounded-lg hover:scale-105 duration-500 ${style} cursor-pointer ${
                  !darkMode ? "bg-white" : ""
                }`}
              >
                <img src={src} alt={title} className="w-20 mx-auto" />
                <p className="mt-2 font-semibold">{title}</p>
              </div>
            ))}
          </div>

          {/* Remaining Rows - Toggle */}
          <div
            style={{
              maxHeight: showAll ? `${restRows.length * 200}px` : "0px",
              overflow: "hidden",
              transition: "max-height 0.6s ease-in-out, opacity 0.4s ease",
              opacity: showAll ? 1 : 0,
            }}
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-4 px-4 text-center">
              {restRows.map(({ id, title, style, src }, index) => (
                <div
                  key={id}
                  style={{
                    transition: "transform 0.4s ease, opacity 0.4s ease",
                    transitionDelay: showAll ? `${index * 50}ms` : "0ms",
                    transform: showAll ? "translateY(0)" : "translateY(20px)",
                    opacity: showAll ? 1 : 0,
                  }}
                  className={`py-6 px-4 shadow-lg rounded-lg hover:scale-105 duration-500 ${style} cursor-pointer ${
                    !darkMode ? "bg-white" : ""
                  }`}
                >
                  <img src={src} alt={title} className="w-20 mx-auto" />
                  <p className="mt-2 font-semibold">{title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center mt-6 mb-8">
            <button
              onClick={handleToggle}
              type="button"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg, #3b82f6, #6366f1)"
                  : "linear-gradient(135deg, #2563eb, #4f46e5)",
                transition: "all 0.3s ease",
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 duration-300"
            >
              {showAll ? "Show Less" : "Show All Skills"}
              <span
                style={{
                  transition: "transform 0.3s ease",
                  transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                  display: "inline-flex",
                }}
              >
                <FaChevronDown size={14} />
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;