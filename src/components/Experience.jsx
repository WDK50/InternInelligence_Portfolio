/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
  import html from "../assets/html.png";
  import css from "../assets/css.png";
  import javascript from "../assets/javascript.png";
  import react from "../assets/react.png";
  import fireabase from "../assets/firebase.png";  
  import vite from "../assets/vite.png";
  import github from "../assets/github.png";
  import tailwind from "../assets/tailwind.png";
import Reveal from "./Reveal";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: fireabase,
      title: 'Firebase',
      style: 'shadow-red-500'
    },
    {
      id: 6,
      src: vite,
      title: 'Vite',
      style: 'shadow-purple-400'
    },
    {
      id: 7,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400'
    },
    {
      id: 8,
      src: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-sky-400'
    }
  ]
  return (
    <div name='experiences' className="w-full md:px-16 bg:px-4 h-fit pt-20 block
 bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-screen-lg w-full h-full p-4 flex flex-col justify-center mx-auto text-white">
      <Reveal>
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">Experience</p>
          <p className="py-6">These are technologies I've ever used:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-4 px-12 sm:px-0 text-center">
        {
          techs.map(({id, title,style,src}) => (
            <div key={id} className={`py-2 shadow-md rounded-lg hover:scale-105 duration-500 ${style} cursor-pointer  `}>
            <img src={src} alt={title} className="w-20 mx-auto"/>
            <p className="mt-2">{title}</p>
          </div>
          ))
        }
        </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Experience;
