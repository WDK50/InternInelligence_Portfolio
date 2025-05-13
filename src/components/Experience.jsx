/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { certificates } from "../data/certificates";
import { useTheme } from "../context/ThemeContext";

export default function Experience() {
  const { darkMode } = useTheme();
  const [selectedCert, setSelectedCert] = useState(null);

  const sectionBg = darkMode
    ? "bg-gradient-to-b from-black to-gray-800 text-white"
    : "bg-gray-50 text-gray-800";
  const cardBorder = darkMode ? "border-gray-700" : "border-gray-200";

  return (
    <section id="experience" className={`py-12 px-4 md:px-20 ${sectionBg}`}>
      <h2 className="text-3xl font-bold text-center mb-8">My Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className={`group relative w-full aspect-[4/3] overflow-hidden border-black border-2 rounded-lg  ${cardBorder}  shadow-lg cursor-pointer`}
            onClick={() => setSelectedCert(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 "
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{cert.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50 pointer-events-auto"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative pointer-events-auto">
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
);
}
