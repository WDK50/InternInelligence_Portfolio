/* eslint-disable no-unused-vars */
import React from "react";
import "../../src/index.css";
import Reveal from "./Reveal";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { darkMode } = useTheme();
  const containerClasses = darkMode
    ? "bg-gradient-to-b from-gray-800 to-black text-white"
    : "bg-gray-300";

  return (
    <div
      id="about"
      className={`w-full md:px-12 bg:pt-4 h-fit pt-0 ${containerClasses}`}
    >
      <Reveal>
        <div className="max-w-screen-lg w-full h-full p-12 flex flex-col justify-center mx-auto">
          <div className="pb-0">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <p className="text-xl mt-20">
            I earned my Bachelor’s degree in Computer Science, where I developed
            a solid understanding of data structures, algorithms, and modern
            software engineering practices. My coursework and academic projects
            focused on real-world problem solving, which helped me cultivate a
            deep interest in full stack web development and system architecture.
          </p>

          <p className="text-xl mt-8">
            Over the course of my professional journey, I’ve worked on multiple
            projects involving Python, Django, and React. From building
            responsive UIs to integrating robust backends and APIs, I’ve honed
            my ability to deliver complete and optimized web solutions. My
            experience at TransData allowed me to collaborate across teams,
            apply agile methodologies, and strengthen my problem-solving and
            communication skills.
          </p>

        </div>
      </Reveal>
    </div>
  );
};

export default About;
