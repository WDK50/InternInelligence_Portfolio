/* eslint-disable no-unused-vars */
/* src/components/FAQs.jsx */
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const faqs = [
  {
    id: 1,
    q: "What technologies do you specialize in?",
    a: "I focus on modern web development using React, Tailwind CSS, and Python frameworks like Django and FastAPI. My stack ensures both frontend performance and backend reliability.",
  },
  {
    id: 2,
    q: "Do you build full-stack web applications?",
    a: "Yes, I design and develop complete applications—from responsive frontends to powerful backends with database integrations and API endpoints for smooth data flow.",
  },
  {
    id: 3,
    q: "Can you integrate AI or APIs into projects?",
    a: "Absolutely! I can integrate external APIs, AI chatbots, or recommendation engines using Python and RESTful services, enhancing user interaction and automation.",
  },
  {
    id: 4,
    q: "Do you provide deployment and maintenance support?",
    a: "Yes, I handle deployment on platforms like Vercel, Render, and AWS. I also offer ongoing maintenance, performance tuning, and bug fixes post-launch.",
  },
  {
    id: 5,
    q: "How can we collaborate on a project?",
    a: "You can reach out through my contact section. Once I understand your goals, I’ll share a project roadmap, timeline, and technical stack plan before we begin.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState(null);
  const { darkMode } = useTheme();

  const bg = darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800";
  const border = darkMode ? "border-gray-700" : "border-gray-200";

  return (
    <section id="faqs" className={`${bg} py-12 scroll-mt-20`}>
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>

        <div className="space-y-4">
          {faqs.map(({ id, q, a }) => (
            <div key={id} className={`border ${border} rounded-lg overflow-hidden`}>
              <button
                onClick={() => setOpen(open === id ? null : id)}
                className="w-full flex justify-between items-center px-4 py-3 cursor-pointer"
              >
                <span className="font-semibold text-lg">{q}</span>
                <span
                  className={`transform transition-transform duration-200 ${
                    open === id ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>

              {open === id && (
                <div className="px-4 py-3 transition-all duration-300">
                  <p
                    className={`text-md leading-relaxed ${
                      darkMode ? "text-blue-100" : "text-gray-700"
                    }`}
                  >
                    {a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
