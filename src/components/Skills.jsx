/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import fireabase from "../assets/firebase.png";
import vite from "../assets/vite.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Reveal from "./Reveal";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { darkMode } = useTheme();

  const containerBg = darkMode
    ? "bg-gradient-to-b from-gray-800 to-black text-white"
    : "bg-gray-300";

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: fireabase,
      title: "Firebase",
      style: "shadow-red-500",
    },
    {
      id: 6,
      src: vite,
      title: "Vite",
      style: "shadow-purple-400",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: darkMode ? "shadow-gray-400" : "shadow-black",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
  ];

  return (
    <div
      id="skills"
      className={`w-full md:px-16 bg:px-4 h-fit pt-20 block ${containerBg}`}
    >
      <div className="max-w-screen-lg w-full h-full p-4 flex flex-col justify-center mx-auto">
        <Reveal>
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
              Skills
            </p>
            <p className="py-6">These are technologies I've ever used:</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-4 md:px-4 px-6 text-center">
            {techs.map(({ id, title, style, src }) => (
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
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
