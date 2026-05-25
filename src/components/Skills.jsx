// react-portfolio/src/components/Skills.jsx
import React from "react";
import {
  FaChartBar,
  FaBrain,
  FaPython,
  FaCode,
  FaServer,
  FaEye,
  FaCogs,
} from "react-icons/fa";

const skills = [
  {
    title: "Programming",
    icon: <FaPython className="text-4xl text-blue-500 mb-2" />,
    description:
      "Python, C, SQL, and R (Basics) for data handling, scripting, and software development.",
  },
  {
    title: "Machine Learning",
    icon: <FaBrain className="text-4xl text-blue-500 mb-2" />,
    description:
      "Regression, Classification, Random Forest, Naive Bayes, XGBoost, SVM, Model Evaluation, and Feature Engineering.",
  },
  {
    title: "Deep Learning",
    icon: <FaCogs className="text-4xl text-blue-500 mb-2" />,
    description:
      "TensorFlow, Keras, CNN, and RNN for neural network model development.",
  },
  {
    title: "Natural Language Processing",
    icon: <FaCode className="text-4xl text-blue-500 mb-2" />,
    description:
      "TF-IDF, Text Classification, Tokenization, and Prompt Engineering.",
  },
  {
    title: "Computer Vision",
    icon: <FaEye className="text-4xl text-blue-500 mb-2" />,
    description:
      "OpenCV, Image Processing, Real-Time Video Analysis, and Face Liveness Detection.",
  },
  {
    title: "Data Analysis & Processing",
    icon: <FaChartBar className="text-4xl text-blue-500 mb-2" />,
    description:
      "Pandas, NumPy, Data Cleaning, and Statistical Analysis for extracting insights from data.",
  },
  {
    title: "Application Development & Deployment",
    icon: <FaServer className="text-4xl text-blue-500 mb-2" />,
    description:
      "Streamlit, Tkinter, React, Formspree, and Vercel for building and deploying applications.",
  },
  {
    title: "Visualization",
    icon: <FaChartBar className="text-4xl text-blue-500 mb-2" />,
    description:
      "Power BI, Matplotlib and Seaborn for effective data visualization and reporting.",
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-[#0D0221] text-gray-100 px-8 py-16 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1F0933] shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 border border-purple-700"
          >
            {skill.icon}
            <h3 className="font-bold text-lg text-blue-400 mb-2">
              {skill.title}
            </h3>
            <p className="text-sm text-gray-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
