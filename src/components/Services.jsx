/* eslint-disable no-unused-vars */
/* src/components/Services.jsx */
import React, { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaLaptopCode, FaPalette, FaBolt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  { id: 1, icon: <FaLaptopCode size={28} />, title: "Web Development", delay: 100 },
  { id: 2, icon: <FaPalette size={28} />, title: "UI/UX Design", delay: 200 },
  { id: 3, icon: <FaBolt size={28} />, title: "Frontend Development", delay: 300 },
];

export default function Services() {
  const { darkMode } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Light‑mode gradient + hover; dark‑mode clears it then applies its own gradient
  const lightGradient = "bg-gradient-to-br from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400";
  const darkGradient  = "bg-gradient-to-br dark:from-blue-500 dark:to-blue-600 dark:hover:from-purple-800 dark:hover:to-indigo-900";

  return (
    <section
      name="services" id="services"
      className={`py-12 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      <div className="container mx-auto px-4 md:px-20 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              data-aos="fade-up"
              data-aos-delay={s.delay}
            >
              <div
                className={`
                  p-6 rounded-xl shadow-xl
                  ${darkMode ? darkGradient : lightGradient}
                  transform transition-transform duration-300 hover:scale-105
                  flex flex-col items-center text-center cursor-pointer
                `}
              >
                <div className="mb-4 animate-pulse">{s.icon}</div>
                <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-zinc-100"}`}>
                  {s.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
