/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'
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
    <div className="flex px-4 justify-between items-center w-full h-20 text-white bg-black fixed">
      <div>
        <h1 className="text-4xl ml-2">WDK</h1>
      </div>
      <ul className="md:flex hidden">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 capitalize cursor-pointer font-medium text-gray-500 hover:scale-105 duration-300" >
            <Link  to={link} smooth duration={500}>
            {link}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)}  className="cursor-pointer z-10 pr-4 text-gray-500 md:hidden" >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center w-full h-fit absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 py-6 capitalize cursor-pointer text-4xl" >
            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
            {link}
            </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
