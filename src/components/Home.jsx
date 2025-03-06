/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import HeroImg from "../assets/HeroImage.png";
import { Link } from "react-scroll";
import { FaArrowRightLong } from "react-icons/fa6";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen
     w-full bg-gradient-to-b from-black via-black to-gray-800 pt-12" >
      <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto h-full px-20 items-center justify-center">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-7xl font-bold text-white">I'm a Frontend Developer</h2>
          <p className="py-4 text-gray-500 max-w-md font-semibold">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="px-6 font-semibold text-xl gap-1.5 py-3 my-2 w-fit cursor-pointer group flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
               <span className="group-hover:rotate-90 duration-500 ease-in-out">
                <FaArrowRightLong size={20}/>
              </span>
            </Link> 
            
          </div>
        </div>
        <div >
          <img src={HeroImg} alt="My Profile" className="rounded-2xl mx-auto  md:w-full sm:w-full xs:mb-20 mb-20" />
        </div>
      </div>
    </div>
  );
};

export default Home;