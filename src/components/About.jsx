/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../src/index.css";
import Reveal from "./Reveal";
import { useTheme } from "../context/ThemeContext";
import { FaGraduationCap, FaBriefcase, FaBrain } from "react-icons/fa";

const aboutCards = [
  {
    id: 1,
    icon: <FaGraduationCap size={24} />,
    title: "Education & Foundation",
    text: "I earned my Bachelor's degree in Computer Science, where I developed a solid understanding of data structures, algorithms, and modern software engineering practices. My coursework and academic projects focused on real-world problem solving, which helped me cultivate a deep interest in full stack web development and system architecture.",
    lightGradient: "linear-gradient(135deg, #0ea5e9, #2563eb, #4f46e5)",
    lightCardHover: "linear-gradient(135deg, #22c1e9, #3b7cf6, #6360f5)",
    lightExpanded: "linear-gradient(135deg, #38bdf8, #60a5fa, #818cf8)",
    darkGradient: "linear-gradient(135deg, #0c4a6e, #1e3a5f, #312e81)",
    darkCardHover: "linear-gradient(135deg, #0f5e8a, #264d78, #3d3a9e)",
    darkExpanded: "linear-gradient(135deg, #0e7490, #1d4ed8, #4f46e5)",
    borderLight: "#38bdf8",
    borderDark: "#38bdf8",
  },
  {
    id: 2,
    icon: <FaBriefcase size={24} />,
    title: "Professional Journey",
    text: "Over the course of my professional journey, I've worked on multiple projects involving Python, Django, and React. From building responsive UIs to integrating robust backends and APIs, I've honed my ability to deliver complete and optimized web solutions. My experience at TransData allowed me to collaborate across teams, apply agile methodologies, and strengthen my problem-solving and communication skills.",
    lightGradient: "linear-gradient(135deg, #c026d3, #9333ea, #6366f1)",
    lightCardHover: "linear-gradient(135deg, #d43de6, #a54ff5, #7a7af8)",
    lightExpanded: "linear-gradient(135deg, #e879f9, #a855f7, #818cf8)",
    darkGradient: "linear-gradient(135deg, #581c87, #3b0764, #312e81)",
    darkCardHover: "linear-gradient(135deg, #6b249e, #4c0f7e, #3f3a9e)",
    darkExpanded: "linear-gradient(135deg, #7e22ce, #6d28d9, #4f46e5)",
    borderLight: "#d946ef",
    borderDark: "#d946ef",
  },
  {
    id: 3,
    icon: <FaBrain size={24} />,
    title: "AI & Data Expertise",
    text: "Beyond development, I bring hands-on experience in Data Annotation and AI Agent Evaluation. I have worked on labeling and structuring high-quality training datasets for AI/ML models, ensuring precision and consistency that directly improved model accuracy. As an AI Agent Evaluator, I rigorously tested and assessed AI systems for edge cases, reliability, and safety — consistently delivering outstanding performance ratings and contributing to the development of more trustworthy and accurate AI solutions.",
    lightGradient: "linear-gradient(135deg, #ea580c, #d97706, #dc2626)",
    lightCardHover: "linear-gradient(135deg, #f06b22, #e68f1e, #e8403e)",
    lightExpanded: "linear-gradient(135deg, #f97316, #fbbf24, #f43f5e)",
    darkGradient: "linear-gradient(135deg, #7c2d12, #78350f, #7f1d1d)",
    darkCardHover: "linear-gradient(135deg, #943618, #8f4015, #962525)",
    darkExpanded: "linear-gradient(135deg, #c2410c, #b45309, #be123c)",
    borderLight: "#fb923c",
    borderDark: "#fb923c",
  },
];

const PEN_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E") 2 22, text`;

const About = () => {
  const { darkMode } = useTheme();
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [btnHoveredId, setBtnHoveredId] = useState(null);
  const [collapsedId, setCollapsedId] = useState(null);
  const [lockedId, setLockedId] = useState(null);

  const containerClasses = darkMode
    ? "bg-gradient-to-b from-gray-800 to-black text-white"
    : "bg-gray-300";

  const isTextVisible = (cardId) => {
    if (lockedId === cardId) return true;
    if (collapsedId === cardId) return false;
    return btnHoveredId === cardId;
  };

  const handleBtnClick = (cardId) => {
    if (lockedId === cardId) {
      // Locked open → unlock and collapse
      setLockedId(null);
      setCollapsedId(cardId);
    } else if (collapsedId === cardId) {
      // Collapsed after first hover → lock open
      setCollapsedId(null);
      setLockedId(cardId);
    } else if (btnHoveredId === cardId) {
      // First hover showing text → collapse
      setCollapsedId(cardId);
    }
  };

  const getBackground = (card) => {
    const textVisible = isTextVisible(card.id);
    const isCardHovered = hoveredCardId === card.id;

    if (darkMode) {
      if (textVisible) return card.darkExpanded;
      if (isCardHovered) return card.darkCardHover;
      return card.darkGradient;
    }
    if (textVisible) return card.lightExpanded;
    if (isCardHovered) return card.lightCardHover;
    return card.lightGradient;
  };

  return (
    <div
      id="about"
      className={`w-full md:px-12 bg:pt-4 h-fit pt-0 ${containerClasses}`}
    >
      <Reveal>
        <div className="max-w-screen-lg w-full h-full p-12 flex flex-col justify-center mx-auto">
          <div className="pb-0 mb-12">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {aboutCards.map((card) => {
              const textVisible = isTextVisible(card.id);

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredCardId(card.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  style={{
                    background: getBackground(card),
                    borderLeft: `4px solid ${
                      darkMode ? card.borderDark : card.borderLight
                    }`,
                    transition: "all 0.4s ease",
                    transform: textVisible
                      ? "translateY(-4px)"
                      : "translateY(0)",
                  }}
                  className="rounded-xl p-6"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-white p-2 rounded-lg"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                      }}
                    >
                      {card.icon}
                    </span>

                    <h3 className="text-lg font-bold text-white">
                      {card.title}
                    </h3>

              <span
  onClick={() => handleBtnClick(card.id)}
  onMouseEnter={(e) => {
    setBtnHoveredId(card.id);
    if (lockedId !== card.id) {
      setCollapsedId(null);
    }
    e.currentTarget.style.background =
      "rgba(255,255,255,0.35)";
  }}
  onMouseLeave={(e) => {
    setBtnHoveredId(null);
    setCollapsedId(null);
    e.currentTarget.style.background =
      "rgba(255,255,255,0.12)";
  }}
  className="ml-auto text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer whitespace-nowrap"
  style={{
    background: textVisible
      ? "rgba(255,255,255,0.25)"
      : "rgba(255,255,255,0.12)",
    color: "#fff",
    transition: "all 0.3s ease",
    minWidth: "fit-content",
  }}
>
  {textVisible ? "Read Less" : "Read More"}
</span>                  </div>

                  {/* Text */}
                  <div
                    style={{
                      maxHeight: textVisible ? "300px" : "1.8em",
                      overflow: "hidden",
                      transition: "max-height 0.5s ease",
                    }}
                  >
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        color: "rgba(255,255,255,0.92)",
                        cursor: PEN_CURSOR,
                      }}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default About;