/* eslint-disable no-unused-vars */
/* src/components/FAQs.jsx */
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const faqs = [
  { id: 1, q: "What is your turnaround time?",       a: "Typically 1–2 weeks depending on scope." },
  { id: 2, q: "Do you offer maintenance?",           a: "Yes—retainers and hourly support plans available." },
  { id: 3, q: "What are your rates?",                a: "Rates vary by project; contact me for a custom quote." },
];

export default function FAQs() {
  const [open, setOpen] = useState(null);
  const { darkMode } = useTheme();
  const bg     = darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800";
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
                <span className="font-medium text-lg">{q}</span>
                <span
                  className={`transform transition-transform duration-200 ${
                    open === id ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Only render the answer when open === id */}
              {open === id && (
                <div className="px-4 py-3 transition-all duration-300">
                  <p>{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
