/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Profile from "../assets/Profile.png";
import { Link } from "react-scroll";
import { FaArrowRightLong } from "react-icons/fa6";
import "../../src/index.css";
import Reveal from "./Reveal";

const Home = () => {
  return (
    <Reveal>
      <div
        id="home"
        className="h-screen reveal w-full bg-gradient-to-b from-black via-black to-gray-800 pt-12 "
      >
        <div className="max-w-screen-lg  mx-auto h-full px-5 sm:px-10 md:px-20 flex flex-col md:flex-row  items-center justify-between ">
          <div className="flex wrapper flex-col justify-center h-full md:w-full space-y-6   -mt-12">
            <h1 className="text-5xl content md:text-left text-center sm:text-7xl font-bold text-white">
              I'm a
              <ol className="md:text-5xl text-3xl md:text-left text-center font-semibold text-yellow-400">
                <li>
                  <span>Web Designer</span>
                </li>
                <li>
                  <span>Web Developer</span>
                </li>
                <li>
                  <span>Software Developer</span>
                </li>
                <li>
                  <span>Frontend Developer</span>
                </li>
              </ol>
            </h1>
            <p className="text-gray-500 max-w-md font-semibold ">
              I'm a frontend developer who transforms creative
              ideas into seamless digital experiences using React and Tailwind
              CSS. I build fast, responsive web applications that are both
              visually appealing and intuitive to use.
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
          <div className="w-1/2 md:w-full ml-24 flex items-center justify-center md:justify-end mt-20 md:mt-0">
            <img
              src={Profile}
              alt="My Profile"
              className="rounded-2xl w-[250px] md:w-1/4 md:mt-72  h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Home;
