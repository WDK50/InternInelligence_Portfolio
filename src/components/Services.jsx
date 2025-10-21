/* eslint-disable no-unused-vars */
/* src/components/Services.jsx */
import React, { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaCode, FaServer, FaLayerGroup } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    id: 1,
    icon: <FaCode size={28} />,
    title: "Frontend Developer",
    desc: "Building responsive and interactive user interfaces using React and Tailwind CSS for a seamless user experience.",
    delay: 100,
  },
  {
    id: 2,
    icon: <FaServer size={28} />,
    title: "Backend Developer",
    desc: "Designing and implementing secure, scalable backend systems using Python (Django & FastAPI) with database integration.",
    delay: 200,
  },
  {
    id: 3,
    icon: <FaLayerGroup size={28} />,
    title: "Full Stack Developer",
    desc: "Combining frontend and backend expertise to deliver complete, high-performance web applications end-to-end.",
    delay: 300,
  },
];

export default function Services() {
  const { darkMode } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const lightGradient =
    "bg-gradient-to-br from-blue-500 to-green-400 hover:from-green-400 hover:to-blue-500";
  const darkGradient =
    "bg-gradient-to-br dark:from-purple-800 dark:to-indigo-900 dark:hover:from-blue-500 dark:hover:to-blue-600";

  return (
    <section
      name="services"
      id="services"
      className={`py-12 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 md:px-20 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.id} data-aos="fade-up" data-aos-delay={s.delay}>
              <div
                className={`
                  p-6 rounded-xl shadow-xl
                  ${darkMode ? darkGradient : lightGradient}
                  transform transition-transform duration-300 hover:scale-105
                  flex flex-col items-center text-center cursor-pointer
                `}
              >
                <div className="mb-4 animate-pulse">{s.icon}</div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-white"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`text-sm font-semibold leading-relaxed ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
