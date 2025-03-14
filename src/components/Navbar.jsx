/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experiences" },
    { id: 5, link: "contact" },
  ];

  return (
    <>
      <div className="flex px-4 justify-between items-center w-full h-20 text-white bg-black fixed z-40">
        <div>
          <h1 title="Web Dev Khawaja" className="text-4xl cursor-pointer ml-2">
            WDK
          </h1>
        </div>
        <ul className="hidden md:flex cursor-pointer">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 capitalize cursor-pointer font-medium text-gray-500 hover:scale-105 duration-300"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-50 pr-4 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md">
          {/* Cross icon positioned at top-right of the overlay */}
          <div
            onClick={() => setNav(false)}
            className="absolute top-5 right-5 cursor-pointer text-gray-500"
          >
            <FaTimes size={30} />
          </div>
          <ul className="flex flex-col justify-center items-center h-full text-white">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 py-4 capitalize cursor-pointer text-4xl"
              >
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
