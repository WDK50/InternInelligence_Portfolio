/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedinIn size={25} />
        </>
      ),
      href: "https://linkedin.com/in/khawaja-abdurrehman-9b7823325/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub
          <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/WDK50",
    },
    {
      id: 3,
      child: (
        <>
          Email
          <MdEmail size={25} />
        </>
      ),
      href: "mailto: webdevkhawaja50@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "/Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="flex flex-col fixed left-0 top-[35%] ">
      <ul>
        {links.map(({ id, child, href, download, style }) => (
          <li
            key={id}
            className={
              "hidden lg:flex justify-between items-center w-40 h-14 px-2 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md" +
              "" +
              style
            }
          >
            <a
              href={href}
              download={download}
              target="_blank"    
              rel="noreferrer"
              className="flex justify-between items-center w-40 h-1/4 px-4 text-white"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;