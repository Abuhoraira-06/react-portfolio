// react-portfolio/src/App.jsx
import React, { useRef, useEffect } from "react";
import Hero from "./components/Hero";
// import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Activities from "./components/Activities"; // Updated import (renamed file & component)
import Internship from "./components/Internship";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  const containerRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", inline: "start" });
  };

  const handleArrowScroll = (direction) => {
    if (containerRef.current) {
      const width = window.innerWidth;
      containerRef.current.scrollBy({
        left: direction === "right" ? width : -width,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleArrowScroll("right");
      else if (e.key === "ArrowLeft") handleArrowScroll("left");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Top Navigation Buttons */}
      <div className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50 flex justify-center space-x-4 py-2 shadow-md">
        <button onClick={() => scrollToSection("hero")}>About</button>
        <button onClick={() => scrollToSection("skills")}>Skills</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("Certifications")}>Certifications</button>
        <button onClick={() => scrollToSection("activities")}>Activities</button>{/* Changed label and target */}
        <button onClick={() => scrollToSection("internships")}>Internships</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>

      {/* Left Arrow Button */}
      <button
        onClick={() => handleArrowScroll("left")}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        ⬅️
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={() => handleArrowScroll("right")}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        ➡️
      </button>

      {/* Horizontal Slide Sections */}
      <div
        ref={containerRef}
        className="bg-gray-900 text-white font-sans h-screen overflow-x-scroll snap-x snap-mandatory scroll-smooth flex pt-12"
      >
        <section id="hero" className="snap-start w-screen h-screen flex-shrink-0">
          <Hero />
        </section>

        <section id="skills" className="snap-start w-screen h-screen flex-shrink-0">
          <Skills />
        </section>

        <section id="projects" className="snap-start w-screen h-screen flex-shrink-0">
          <Projects />
        </section>

        <section id="Certifications" className="snap-start w-screen h-screen flex-shrink-0">
          <Certifications />
        </section>

        <section id="activities" className="snap-start w-screen h-screen flex-shrink-0">
          <Activities /> {/* Updated component call */}
        </section>

        <section id="internships" className="snap-start w-screen h-screen flex-shrink-0">
          <Internship />
        </section>

        <section id="contact" className="snap-start w-screen h-screen flex-shrink-0">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
