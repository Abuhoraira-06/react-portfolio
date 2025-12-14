// react-portfolio/src/components/Projects.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AI Chatbot (Raptor AI)",
    image: "/images/raptor profile.png",
    description: "An AI-powered chatbot built using the Groq API and Streamlit UI that efficiently handles program-related, logical, and mathematical queries, providing fast and accurate responses using advanced language processing.",
    tech: ["Python", "Streamlit", "Groq API"],
    link: "https://github.com/Abuhoraira-06/NSP_NEXUS_INTERNSHIP/tree/main/RAPTOR%20AI(CHATBOT)"
  },
  {
    title: "Bike Resale Value Estimator",
    image: "/images/bike.png", // add your bike image
    description:
      "A motorcycle resale value prediction system that uses a Random Forest regression model trained on features like brand, model, year, mileage, engine, condition, ownership, and original price, providing instant and accurate price estimates through a simple Tkinter GUI.",
    tech: ["Python", "Tkinter", "Random Forest", "Machine Learning"],
    link: null // no GitHub icon for this project
  }
];

const Projects = () => {
  return (
    <div className="py-12 px-6 bg-[#0F172A] text-white min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      {/* GRID FOR SIDE-BY-SIDE VIEW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1E293B] p-5 rounded-xl shadow-lg border border-red-500 text-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="mx-auto w-48 h-48 object-contain rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex justify-center flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-black border border-red-400 text-white px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Show GitHub only if link exists */}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-gray-400 mx-auto" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
