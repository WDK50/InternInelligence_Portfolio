/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* src/components/FAQs.jsx */
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaTimes } from "react-icons/fa";

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
    a: "You can reach out through my contact section. Once I understand your goals, I'll share a project roadmap, timeline, and technical stack plan before we begin.",
  },
];

const allFaqs = [
  ...faqs,
  {
    id: 6,
    q: "What is your typical project timeline?",
    a: "Depending on the complexity, most projects take 2–6 weeks. I provide a detailed timeline upfront so you know what to expect at every stage.",
  },
  {
    id: 7,
    q: "Do you work with databases?",
    a: "Yes, I work with PostgreSQL, SQLite, and MySQL. I use SQLAlchemy and Django ORM for efficient database management and query optimization.",
  },
  {
    id: 8,
    q: "Can you build REST APIs from scratch?",
    a: "Absolutely. I build secure, scalable REST APIs using Django REST Framework and FastAPI with JWT authentication and proper endpoint documentation.",
  },
  {
    id: 9,
    q: "Do you handle frontend and backend separately?",
    a: "I can do both. Whether you need just a React frontend, a Python backend, or a complete full-stack solution, I tailor my approach to your project needs.",
  },
  {
    id: 10,
    q: "What is your experience with version control?",
    a: "I use Git and GitHub daily for version control, branching strategies, pull requests, and collaborative development workflows.",
  },
  {
    id: 11,
    q: "Do you offer responsive design?",
    a: "Every project I build is fully responsive across all devices — mobile, tablet, and desktop — using Tailwind CSS and modern CSS techniques.",
  },
  {
    id: 12,
    q: "Can you optimize website performance?",
    a: "Yes, I focus on lazy loading, code splitting, image optimization, caching strategies, and minimizing bundle sizes for fast load times.",
  },
  {
    id: 13,
    q: "What is your data annotation experience?",
    a: "I have hands-on experience labeling and structuring training datasets for AI/ML models, ensuring high precision and consistency to improve model accuracy.",
  },
  {
    id: 14,
    q: "What does AI Agent Evaluation involve?",
    a: "I test and assess AI systems for edge cases, reliability, safety, and accuracy — identifying weaknesses and contributing to more trustworthy AI behavior.",
  },
  {
    id: 15,
    q: "Do you use any AI tools in development?",
    a: "Yes, I leverage AI-powered tools for code assistance, debugging, and prompt engineering to accelerate development while maintaining code quality.",
  },
  {
    id: 16,
    q: "Can you work with existing codebases?",
    a: "Absolutely. I can review, refactor, debug, and extend existing projects. I follow clean code practices and ensure smooth integration with legacy systems.",
  },
  {
    id: 17,
    q: "Do you write tests for your code?",
    a: "Yes, I write unit tests and integration tests to ensure reliability. I use testing frameworks appropriate to the stack — like pytest for Python and Jest for React.",
  },
  {
    id: 18,
    q: "Are you available for freelance or remote work?",
    a: "Yes, I'm open to freelance projects, contract work, and full-time remote positions. I'm flexible with time zones and communication tools.",
  },
  {
    id: 19,
    q: "What sets you apart from other developers?",
    a: "My unique combination of full-stack development, API expertise, data annotation, and AI evaluation gives me a well-rounded perspective that most developers don't offer.",
  },
  {
    id: 20,
    q: "How do I get started working with you?",
    a: "Simply reach out via the contact form or email. Share your project idea, and I'll respond within 24 hours with a plan, estimated timeline, and next steps.",
  },
];

const FAQItem = ({ id, q, a, isOpen, onToggle, isDark }) => (
  <div
    className={`border ${isDark ? "border-gray-600" : "border-gray-200"} rounded-lg overflow-hidden`}
  >
    <button
      onClick={() => onToggle(id)}
      className="w-full flex justify-between items-center px-4 py-3 cursor-pointer"
    >
      <span className="font-semibold text-lg text-left">{q}</span>
      <span
        className={`transform transition-transform duration-200 ml-4 flex-shrink-0 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        ▼
      </span>
    </button>
    <div
      style={{
        maxHeight: isOpen ? "200px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.3s ease",
      }}
    >
      <div className="px-4 py-3">
        <p
          className={`text-md leading-relaxed ${
            isDark ? "text-blue-100" : "text-gray-700"
          }`}
        >
          {a}
        </p>
      </div>
    </div>
  </div>
);

const CustomScrollbar = ({ scrollRef, darkMode }) => {
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef(null);
  const dragStartY = useRef(0);
  const dragStartScroll = useRef(0);

  const updateThumb = () => {
    const el = scrollRef.current;
    if (!el) return;
    const ratio = el.clientHeight / el.scrollHeight;
    const height = Math.max(ratio * el.clientHeight, 40);
    const top =
      (el.scrollTop / (el.scrollHeight - el.clientHeight)) *
      (el.clientHeight - height);
    setThumbHeight(height);
    setThumbTop(top);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateThumb);
    updateThumb();
    const observer = new ResizeObserver(updateThumb);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", updateThumb);
      observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollRef]);

  useEffect(() => {
    if (!isDragging) return;
    const onMouseMove = (e) => {
      const el = scrollRef.current;
      if (!el) return;
      const delta = e.clientY - dragStartY.current;
      const trackHeight = el.clientHeight - thumbHeight;
      const scrollRange = el.scrollHeight - el.clientHeight;
      el.scrollTop = dragStartScroll.current + (delta / trackHeight) * scrollRange;
    };
    const onMouseUp = () => setIsDragging(false);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, thumbHeight, scrollRef]);

  const handleTrackClick = (e) => {
    const el = scrollRef.current;
    if (!el || !trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const scrollRange = el.scrollHeight - el.clientHeight;
    el.scrollTop = (clickY / rect.height) * scrollRange;
  };

  const handleThumbMouseDown = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    dragStartY.current = e.clientY;
    dragStartScroll.current = scrollRef.current?.scrollTop || 0;
  };

  return (
    <div
      ref={trackRef}
      onClick={handleTrackClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "14px",
        height: "100%",
        background: darkMode
          ? "rgba(31, 41, 55, 0.8)"
          : "rgba(243, 244, 246, 0.8)",
        borderRadius: "0 16px 16px 0",
        cursor: "pointer",
        zIndex: 10,
      }}
    >
      <div
        onMouseDown={handleThumbMouseDown}
        style={{
          position: "absolute",
          top: thumbTop,
          left: "2px",
          width: "10px",
          height: thumbHeight,
          borderRadius: "10px",
          background:
            isDragging || isHovered
              ? darkMode
                ? "#60a5fa"
                : "#3b82f6"
              : darkMode
              ? "#3b82f6"
              : "#2563eb",
          transition: isDragging ? "none" : "background 0.2s ease",
          cursor: "grab",
        }}
      />
    </div>
  );
};

export default function FAQs() {
  const [open, setOpen] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalFaqOpen, setModalFaqOpen] = useState(null);
  const { darkMode } = useTheme();
  const modalBodyRef = useRef(null);

  const bg = darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800";

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    <>
      <section id="faqs" className={`${bg} py-12 scroll-mt-20`}>
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>

          <div className="space-y-4">
            {faqs.map(({ id, q, a }) => (
              <FAQItem
                key={id}
                id={id}
                q={q}
                a={a}
                isOpen={open === id}
                onToggle={(faqId) => setOpen(open === faqId ? null : faqId)}
                isDark={darkMode}
              />
            ))}
          </div>

          {/* Show All Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setModalOpen(true)}
              type="button"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg, #3b82f6, #6366f1)"
                  : "linear-gradient(135deg, #2563eb, #4f46e5)",
                transition: "all 0.3s ease",
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 duration-300"
            >
              Show All FAQs
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(6px)",
            animation: "faqFadeIn 0.3s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: darkMode
                ? "linear-gradient(135deg, #1f2937, #111827)"
                : "linear-gradient(135deg, #f9fafb, #ffffff)",
              maxHeight: "85vh",
              width: "90%",
              maxWidth: "750px",
              borderRadius: "16px",
              overflow: "hidden",
              animation: "faqSlideUp 0.3s ease",
              boxShadow: darkMode
                ? "0 25px 60px rgba(0, 0, 0, 0.5)"
                : "0 25px 60px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* Modal Header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{
                borderBottom: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
                background: darkMode
                  ? "linear-gradient(135deg, #1e3a5f, #312e81)"
                  : "linear-gradient(135deg, #2563eb, #4f46e5)",
              }}
            >
              <h3 className="text-xl font-bold text-white">
                Frequently Asked Questions
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                type="button"
                className="text-white p-2 rounded-full cursor-pointer hover:scale-110 duration-200"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
                }
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Modal Body with Custom Scrollbar */}
            <div style={{ position: "relative" }}>
              <div
                ref={modalBodyRef}
                className={`px-6 py-4 space-y-3 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
                style={{
                  maxHeight: "calc(85vh - 70px)",
                  scrollBehavior: "smooth",
                  overflowY: "scroll",
                  paddingRight: "28px",
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}
              >
                {allFaqs.map(({ id, q, a }) => (
                  <FAQItem
                    key={id}
                    id={id}
                    q={q}
                    a={a}
                    isOpen={modalFaqOpen === id}
                    onToggle={(faqId) =>
                      setModalFaqOpen(modalFaqOpen === faqId ? null : faqId)
                    }
                    isDark={darkMode}
                  />
                ))}
              </div>

              {/* Custom Scrollbar */}
              <CustomScrollbar scrollRef={modalBodyRef} darkMode={darkMode} />
            </div>
          </div>
        </div>
      )}

      {/* Modal Animations & Hide Native Scrollbar */}
      <style>
        {`
          @keyframes faqFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes faqSlideUp {
            from { opacity: 0; transform: translateY(30px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          div[style*="overflowY: scroll"]::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </>
  );
}