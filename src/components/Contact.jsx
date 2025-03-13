/* eslint-disable no-unused-vars */
import React from "react";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div name='contact' className="w-full min-h-screen pt-32 bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg w-full h-full p-4 flex flex-col justify-center mx-auto">
        <Reveal>
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Fill this form to contact with me:</p>
        </div>
        <div className="flex items-center justify-center">
          <form action="https://getform.io/f/akkkqrwa" method="POST" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter Your Name" 
            className="p-2 bg-transparent rounded-md border-2 text-white focus:outline-none"/>
            <input type="email" name="email" placeholder="Enter Your Email" 
            className="p-2 bg-transparent rounded-md border-2 my-4 text-white focus:outline-none"/>
            <textarea name="message" rows={10} placeholder="Enter Your Message"
            className="p-2 bg-transparent rounded-md border-2 text-white focus:outline-none"></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 rounded-md hover:scale-110 duration-300">
            Submit
            </button>
          </form>
        </div>
         </Reveal>
      </div>
    </div>
  );
};

export default Contact;
