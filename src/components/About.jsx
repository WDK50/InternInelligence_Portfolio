/* eslint-disable react/no-unescaped-entities */
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
          I am currently pursuing a Bachelor of Science in Computer Science, where I am gaining valuable knowledge and skills in programming, software development, and computer systems. My studies focus on understanding how technology works and how to create effective solutions using code. This education not only helps me grow as a student but also prepares me for my future career as a frontend developer. I enjoy learning new concepts and applying them in real-world situations, which makes my journey exciting and rewarding.
          </p>
          <br />
          <br />
          <p className="text-xl mt-8">
          Web development isn't just a job for me; it's something I truly love to do. I find joy in creating websites that are not only beautiful but also user-friendly. Every time I design a new feature or solve a problem, I feel a sense of accomplishment. I constantly seek to improve my coding skills and stay updated on the latest trends, as I believe that learning is a lifelong journey. For me, web development is the perfect blend of creativity and logic, and I am excited to turn my passion into a thriving career.
          </p>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
