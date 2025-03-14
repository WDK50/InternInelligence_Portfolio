/* eslint-disable no-unused-vars */
import React from "react";
import pro1 from "../assets/portfolio/Pro1.jpg";
import pro2 from "../assets/portfolio/Pro2.jpg";
import pro3 from "../assets/portfolio/Pro3.jpg";
import pro4 from "../assets/portfolio/Pro4.jpg";
import pro5 from "../assets/portfolio/Pro5.jpg";
import pro6 from "../assets/portfolio/Pro6.jpg";

import Reveal from "./Reveal";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pro1,
    },
    {
      id: 2,
      src: pro2,
    },
    {
      id: 3,
      src: pro3,
    },
    {
      id: 4,
      src: pro4,
    },
    {
      id: 5,
      src: pro5,
    },
    {
      id: 6,
      src: pro6,
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full md:px-16 bg:px-2 pt-16 bg-gradient-to-b from-black to-gray-800 text-white md:h-fit
"
    >
      <div className="flex flex-col mx-auto p-4 w-full h-full justify-center max-w-screen-lg">
        <Reveal>
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              {" "}
              Portfolio{" "}
            </p>
            <p className="py-6">Check out some of my work right here:</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-4 px-12 sm:px-0 pb-32">
            {portfolios.map(({ id, src }) => (
              <div
                key={id}
                className="py-2 shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300 border-4 border-white"
              >
                <img src={src} alt="" className="rounded-md cursor-pointer" />
                <div>
                  <button className="w-1/2 duration-300 hover:scale-105 px-6 py-3 my-4">
                    Demo
                  </button>
                  <button className="w-1/2 duration-300 hover:scale-105 px-6 py-3 my-4">
                    Code
                  </button>
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
