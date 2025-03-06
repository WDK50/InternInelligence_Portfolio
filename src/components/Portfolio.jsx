/* eslint-disable no-unused-vars */
import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: installNode
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactParallax
        },
        {
            id: 5,
            src: reactSmooth
        },
        {
            id: 6,
            src: reactWeather
        }
    ]
  return (
    <div name='portfolio' className="w-full pt-16 bg-gradient-to-b from-black to-gray-800 text-white md:h-fit
">
      <div className="flex flex-col mx-auto p-4 w-full h-full justify-center max-w-screen-lg">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500"> Portfolio </p>
          <p className="py-6">Check out some of my work right here:</p>
        </div>
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-4 px-12 sm:px-0 pb-32">
        {
            portfolios.map(({id, src}) => (
          <div key={id} className="py-2 shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300 border-4 border-white">
            <img src={src} alt="" className="rounded-md cursor-pointer"/>
            <div>
              <button className="w-1/2 duration-300 hover:scale-105 px-6 py-3 my-4">Demo</button>
              <button className="w-1/2 duration-300 hover:scale-105 px-6 py-3 my-4">Code</button>
            </div>
          </div>
        
            ))
        }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
