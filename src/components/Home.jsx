/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Profile from "../assets/Profile.png";
import { Link } from "react-scroll";
import { FaArrowRightLong } from "react-icons/fa6";
import "../../src/index.css";
import Reveal from "./Reveal";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { darkMode } = useTheme();

  const homeBg = darkMode
    ? "bg-gradient-to-b from-black via-black to-gray-800"
    : "bg-gray-200";
  const textColor = darkMode ? "text-white" : "text-black";
  const secondaryTextColor = darkMode ? "text-gray-400" : "text-gray-700";
  const spanColor = darkMode ? "text-yellow-400" : "text-blue-700";

  return (
    <Reveal>
      <div
        id="home"
        className={`h-screen reveal ${homeBg} bg:mb-0 w-full pt-12`}
      >
        <div className="max-w-screen-lg bg:mb-0 bg:-mt-72 mx-auto h-full px-5 sm:px-10 md:px-20 flex flex-col md:flex-row items-center justify-between">
          <div className="flex wrapper flex-col justify-center h-full md:w-full space-y-6 bg:-mt-2 -mt-12">
            <h1
              className={`text-5xl bg:-mt-[1024px] content md:text-left text-center sm:text-7xl font-bold ${textColor}`}
            >
              I'm a
              <ol className="md:text-5xl text-3xl md:text-left text-center font-semibold">
                <li>
                  <span className={spanColor}>Web Designer</span>
                </li>
                <li>
                  <span className={spanColor}>Web Developer</span>
                </li>
                <li>
                  <span className={spanColor}>Software Developer</span>
                </li>
                <li>
                  <span className={spanColor}>Frontend Developer</span>
                </li>
              </ol>
            </h1>
            <p
              className={`text-gray-500 max-w-md font-semibold ${secondaryTextColor}`}
            >
              I'm a frontend developer who transforms creative ideas into
              seamless digital experiences using React and Tailwind CSS. I build
              fast, responsive web applications that are both visually appealing
              and intuitive to use.
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="px-6 py-3 my-2 w-fit cursor-pointer group flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-xl gap-1.5"
              >
                Portfolio
                <span className="ml-1 group-hover:rotate-90 duration-500 ease-in-out">
                  <FaArrowRightLong size={20} />
                </span>
              </Link>
            </div>
          </div>
          <div className="w-1/2 img md:w-full bg:w-full flex items-center justify-center md:justify-end mt-12 md:-mt-12">
            <img
              src={Profile}
              alt="My Profile"
              className="rounded-2xl w-[250px] bg:w-1/4 bg:-mr-6 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Home;
