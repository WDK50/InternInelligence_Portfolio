/* eslint-disable no-unused-vars */
/* src/components/Services.jsx */
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaCode, FaServer, FaLayerGroup, FaDatabase, FaRobot, FaPlug } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    id: 1,
    icon: <FaCode size={28} />,
    title: "Frontend Developer",
    desc: "Building responsive and interactive user interfaces using React and Tailwind CSS for a seamless user experience.",
    delay: 100,
    lightGradient: "linear-gradient(to bottom right, #06b6d4, #3b82f6)",
    lightHover: "linear-gradient(to bottom right, #22d3ee, #60a5fa)",
    darkGradient: "linear-gradient(to bottom right, #0e7490, #1e40af)",
    darkHover: "linear-gradient(to bottom right, #06b6d4, #3b82f6)",
  },
  {
    id: 2,
    icon: <FaServer size={28} />,
    title: "Backend Developer",
    desc: "Designing and implementing secure, scalable backend systems using Python (Django & FastAPI) with database integration.",
    delay: 200,
    lightGradient: "linear-gradient(to bottom right, #22c55e, #059669)",
    lightHover: "linear-gradient(to bottom right, #4ade80, #34d399)",
    darkGradient: "linear-gradient(to bottom right, #15803d, #065f46)",
    darkHover: "linear-gradient(to bottom right, #22c55e, #059669)",
  },
  {
    id: 3,
    icon: <FaLayerGroup size={28} />,
    title: "Full Stack Developer",
    desc: "Combining frontend and backend expertise to deliver complete, high-performance web applications end-to-end.",
    delay: 300,
    lightGradient: "linear-gradient(to bottom right, #a855f7, #4f46e5)",
    lightHover: "linear-gradient(to bottom right, #c084fc, #818cf8)",
    darkGradient: "linear-gradient(to bottom right, #7e22ce, #3730a3)",
    darkHover: "linear-gradient(to bottom right, #a855f7, #4f46e5)",
  },
  {
    id: 4,
    icon: <FaPlug size={28} />,
    title: "API Development",
    desc: "Building secure, scalable REST APIs using Django REST Framework and FastAPI with JWT authentication, SQLAlchemy ORM, and seamless database integration.",
    delay: 400,
    lightGradient: "linear-gradient(to bottom right, #6366f1, #8b5cf6)",
    lightHover: "linear-gradient(to bottom right, #818cf8, #a78bfa)",
    darkGradient: "linear-gradient(to bottom right, #4338ca, #6d28d9)",
    darkHover: "linear-gradient(to bottom right, #6366f1, #8b5cf6)",
  },
  {
    id: 5,
    icon: <FaDatabase size={28} />,
    title: "Data Annotator",
    desc: "Providing high-quality data labeling and annotation for AI/ML models, ensuring accurate and consistent training datasets.",
    delay: 500,
    lightGradient: "linear-gradient(to bottom right, #f97316, #f59e0b)",
    lightHover: "linear-gradient(to bottom right, #fb923c, #fbbf24)",
    darkGradient: "linear-gradient(to bottom right, #c2410c, #92400e)",
    darkHover: "linear-gradient(to bottom right, #f97316, #f59e0b)",
  },
  {
    id: 6,
    icon: <FaRobot size={28} />,
    title: "AI Agent Evaluator",
    desc: "Evaluating and testing AI agent performance, identifying edge cases, and ensuring reliable, safe, and accurate AI behavior.",
    delay: 600,
    lightGradient: "linear-gradient(to bottom right, #f43f5e, #db2777)",
    lightHover: "linear-gradient(to bottom right, #fb7185, #f472b6)",
    darkGradient: "linear-gradient(to bottom right, #be123c, #9d174d)",
    darkHover: "linear-gradient(to bottom right, #f43f5e, #db2777)",
  },
];

export default function Services() {
  const { darkMode } = useTheme();
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const getBackground = (s) => {
    const isHovered = hoveredId === s.id;
    if (darkMode) {
      return isHovered ? s.darkHover : s.darkGradient;
    }
    return isHovered ? s.lightHover : s.lightGradient;
  };

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
                onMouseEnter={() => setHoveredId(s.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  background: getBackground(s),
                  transition: "all 0.3s ease",
                  boxShadow:
                    hoveredId === s.id
                      ? "0 20px 40px rgba(0, 0, 0, 0.3)"
                      : "0 10px 15px rgba(0, 0, 0, 0.1)",
                }}
                className="p-6 rounded-xl h-full transform transition-all duration-300 hover:scale-105 flex flex-col items-center text-center cursor-pointer"
              >
                <div className="mb-4 animate-pulse text-white">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {s.title}
                </h3>
                <p
                  className={`text-sm font-semibold leading-relaxed ${
                    darkMode ? "text-gray-200" : "text-gray-100"
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