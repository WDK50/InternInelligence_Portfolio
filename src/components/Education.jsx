/* src/components/Education.jsx */
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { AcademicCapIcon, BookOpenIcon, TrophyIcon } from "@heroicons/react/24/outline";

const educationData = [
  { 
    id: 1, 
    institution: "Matriculation in Science", 
    school: "Progressive Public School",
    period: "2017–2019",
    icon: <TrophyIcon />
  },
  { 
    id: 2, 
    institution: "Intermediate in Computer Science", 
    school: "Punjab College",
    period: "2019–2021",
    icon: <BookOpenIcon />
  },
  { 
    id: 3, 
    institution: "BS Computer Science", 
    school: "University Of Sargodha",
    period: "2021–2025",
    icon: <AcademicCapIcon />
  }

];

export default function Education() {
  const { darkMode } = useTheme();
  const sectionBg  = darkMode ? "bg-gray-900"      : "bg-gray-50";
  const timelineBg = darkMode ? "bg-gray-700"      : "bg-gray-300";
  const textColor  = darkMode ? "text-gray-300"    : "text-gray-600";

  return (
    <section
      id="education"
      className={`${sectionBg} py-20 px-4 md:px-20 scroll-mt-20`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className={darkMode ? "text-gray-300" : "text-gray-900"}>
            Education Journey
          </span>
        </h2>

        <div className="relative">
          {/* center line */}
          <div className={`absolute left-1/2 w-1 h-full ${timelineBg} -translate-x-1/2`}></div>

          <div className="space-y-16">
            {educationData.map((edu, idx) => (
              <div
                key={edu.id}
                className={`relative flex w-full 
                  md:${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                {/* dot */}
                <div className={`absolute hidden md:block top-8 left-1/2 w-5 h-5 rounded-full 
                  ${darkMode ? "bg-emerald-400" : "bg-emerald-600"} 
                  -translate-x-1/2 z-10`}
                />

                {/* Card */}
                <div className={`
                  w-full md:w-5/12 p-6 rounded-xl shadow-lg
                  transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                  ${darkMode 
                    ? "bg-gray-800 border border-gray-700" 
                    : "bg-white border border-gray-200"
                  }
                  ${idx % 2 === 0 
                    ? "md:mr-4" 
                    : "md:ml-4"
                  }
                `}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg 
                      ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
                    >
                      {React.cloneElement(edu.icon, {
                        className: `w-6 h-6 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`
                      })}
                    </div>
                    <div>
                      <h3 className={`
                        text-xl font-bold mb-1 
                        ${darkMode ? "text-gray-200" : "text-gray-900"}
                      `}>
                        {edu.institution}
                      </h3>
                      <p className={`text-sm ${textColor}`}>{edu.school}</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 ${textColor}`}>
                    <span className={`inline-block w-3 h-3 rounded-full 
                      ${darkMode ? "bg-emerald-400" : "bg-emerald-600"}`}
                    />
                    <span className="text-sm font-medium">{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
