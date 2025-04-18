/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import pro1 from "../assets/portfolio/Pro1.jpg";
import pro2 from "../assets/portfolio/Pro2.jpg";
import pro3 from "../assets/portfolio/Pro3.jpg";
import pro4 from "../assets/portfolio/Pro4.jpg";
import pro5 from "../assets/portfolio/Pro5.jpg";
import pro6 from "../assets/portfolio/Pro6.jpg";
import Reveal from "./Reveal";
import { useTheme } from "../context/ThemeContext";

const Portfolio = () => {
  const { darkMode } = useTheme();
  const [activeCard, setActiveCard] = useState(null);

  const containerClasses = darkMode
    ? "bg-gradient-to-b from-black to-gray-800 text-white"
    : "bg-gray-200";
  const cardBorder = darkMode ? "border-white" : "border-black";
  const cardShadow = darkMode ? "shadow-gray-600" : "shadow-gray-400";

  const portfolios = [
    {
      id: 1,
      src: pro1,
      title: "Bubble Game",
      demo: "https://wdk50.github.io/bubbleWDK.com/",
      code: "https://github.com/WDK50/bubbleWDK.com",
    },
    {
      id: 2,
      src: pro2,
      title: "Rent A Car",
      demo: "https://wdk50.github.io/KhCarRental.github.io/",
      code: "https://github.com/WDK50/KhCarRental.github.io",
    },
    {
      id: 3,
      src: pro3,
      title: "Login and Signup",
      demo: "https://internintelligence-login.netlify.app/",
      code: "https://github.com/WDK50/InternIntelligence_Login",
    },
    {
      id: 4,
      src: pro4,
      title: "Movie Web",
      demo: "https://filmazia.netlify.app/",
      code: "https://github.com/WDK50/InternInteeligence_Movie",
    },
    {
      id: 5,
      src: pro5,
      title: "My Portfolio",
      demo: "https://wdkportfolio.netlify.app/",
      code: "https://github.com/WDK50/InternInelligence_Portfolio",
    },
    {
      id: 6,
      src: pro6,
      title: "Hospital Management System",
      demo: "https://wdk50.github.io/HospitalManage.github.io/",
      code: "https://github.com/WDK50/HospitalManage.github.io",
    },
  ];

  return (
    <div
      name="portfolio"
      className={`w-full md:px-20 px-2 pt-16 ${containerClasses} md:h-fit`}
    >
      <div className="flex flex-col mx-auto p-4 w-full h-full justify-center max-w-screen-lg">
        <Reveal>
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here:</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-4 px-2 pb-32">
            {portfolios.map(({ id, src, title, demo, code }) => (
              <div
                key={id}
                className={`pb-2 shadow-md ${cardShadow} rounded-lg hover:scale-105 duration-300 border-4 ${cardBorder}`}
              >
                <div
                  className="relative group cursor-pointer"
                  onClick={() =>
                    setActiveCard(activeCard === id ? null : id)
                  }
                >
                  <img src={src} alt={title} className="w-full h-auto" />
                  <div
                    className={`absolute inset-0 bg-black/40 backdrop-blur-sm ${
                      activeCard === id ? "opacity-100" : "opacity-0"
                    } group-hover:opacity-100 transition-opacity duration-300 rounded-md flex items-center justify-center`}
                  >
                    <p className="text-white text-lg font-semibold">
                      {title}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2"
                  >
                    <button className="w-full duration-300 hover:scale-105 px-6 py-3 my-4">
                      Demo
                    </button>
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2"
                  >
                    <button className="w-full duration-300 hover:scale-105 px-6 py-3 my-4">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Portfolio;
