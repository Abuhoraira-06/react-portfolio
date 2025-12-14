// react-portfolio/src/components/Skills.jsx
import React from "react";
import {
  FaChartBar,
  FaBrain,
  FaPython,
  FaFileExcel,
  FaRobot,
  FaLanguage,
} from "react-icons/fa";

const skills = [
  {
    title: "Data Analysis & Visualization",
    icon: <FaChartBar className="text-4xl text-blue-500 mb-2" />,
    description: "Able to interpret data, identify trends, and create clear and impactful visualizations.",
  },
  {
    title: "Machine Learning",
    icon: <FaBrain className="text-4xl text-blue-500 mb-2" />,
    description: "Understanding of ML fundamentals and implementation of basic predictive models.",
  },
  {
    title: "Python & R Programming",
    icon: <FaPython className="text-4xl text-blue-500 mb-2" />,
    description: "Intermediate in Python for data science and R for statistical computing and visualization.",
  },
  {
    title: "Office Tools",
    icon: <FaFileExcel className="text-4xl text-blue-500 mb-2" />,
    description: "Skilled in using Excel, PowerPoint, and Word for documentation and reporting.",
  },
  {
    title: "AI Tools",
    icon: <FaRobot className="text-4xl text-blue-500 mb-2" />,
    description: "Hands-on experience with Kaggle, ChatGPT, and GitHub Copilot for smart development.",
  },
  {
    title: "Languages Known",
    icon: <FaLanguage className="text-4xl text-blue-500 mb-2" />,
    description: "Proficient in English and Tamil for both verbal and written communication.",
  },
];

const Skills = () => {
  return (
    <div className="flex items-center justify-center h-full px-8 py-16 bg-[#0F172A] text-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1E293B] shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
          >
            {skill.icon}
            <h3 className="font-bold text-lg text-blue-400 mb-2">{skill.title}</h3>
            <p className="text-sm text-gray-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
