import React, { useState } from "react";

const projects = [
  {
    title: "AI Chatbot (Raptor AI)",
    image: "/images/raptor profile.png",
    description:
      "Raptor AI is an AI-powered chatbot built using Python and Streamlit, designed to provide fast and accurate responses to programming, logical, and mathematical queries. It leverages the Groq API for low-latency language model inference, ensuring real-time interaction. The system focuses on clarity, efficiency, and usability, making it suitable for learning support and problem-solving. Its intuitive interface allows users to query complex topics seamlessly. Raptor AI demonstrates practical integration of modern LLMs into a production-ready application.",
    tech: ["Python", "Streamlit", "Groq API", "NLP"],
    link: "https://raptor-ai-7jegnvqownlwhmuqtf7ent.streamlit.app/"
  },
  {
    title: "Bike Resale Value Estimator",
    image: "/images/bike.png",
    description:
      "Bike Resale Value Estimator is a machine learning–based application developed using Python and Streamlit that predicts the resale price of motorcycles with high accuracy. The system analyzes key factors such as brand, model, manufacturing year, mileage, ownership, and vehicle condition. A trained regression model processes these inputs to generate instant and reliable price estimates. The interactive web interface allows users to evaluate bikes easily without technical knowledge. This project demonstrates practical use of data preprocessing, model training, and real-time prediction in a production-style ML application.",
    tech: ["Python", "Machine Learning", "Regression", "Streamlit"],
    link: "https://bike-resale-value-estimator-3ywkzwyqlk7jbtrzw7dcsm.streamlit.app/"
  },
  {
    title: "NLP Based Language Identification System",
    image: "/images/language.png",
    description:
      "NLP Based Language Identification System is a machine learning application developed using Python and Streamlit to automatically detect the language of a given text. The system uses character-level TF-IDF feature extraction and a Multinomial Naive Bayes classifier to accurately identify languages in real time. It analyzes linguistic patterns and character structures to classify text efficiently. The web interface provides instant predictions, demonstrating practical implementation of Natural Language Processing and text classification techniques.",
    tech: ["Python", "NLP", "TF-IDF", "Naive Bayes", "Streamlit"],
    link: "https://nlp-based-language-identification-system-foblro2ebozmaskmq52fv.streamlit.app/"
  },
  {
    title: "AI Based Network Intrusion Detection System",
    image: "/images/NIDS.png",
    description:
      "AI-Based Network Intrusion Detection System is a machine learning–driven cybersecurity application built using Python and Streamlit to monitor network traffic in real time. The system analyzes packet-level features to identify suspicious and malicious activities. A trained Random Forest model classifies traffic as benign or intrusive with high reliability. Interactive visualizations help users understand traffic patterns and threat behavior. This project demonstrates the application of machine learning techniques for real-world cybersecurity monitoring and threat detection.",
    tech: ["Python", "Random Forest", "Cybersecurity", "Threat Detection"],
    link: "https://kkrirjueakjj3n2gapxmf8.streamlit.app/"
  },
  {
    title: "Cybersecurity Keyboard Event Monitoring System",
    image: "/images/keylogger.png",
    description:
      "Cybersecurity Keyboard Event Monitoring System is a Python-based application that captures and analyzes keyboard events within a controlled environment. It records keystrokes and time intervals between inputs, storing the data securely in JSON and text formats. A Tkinter-based graphical interface provides real-time visualization of monitored events, demonstrating practical system monitoring and behavioral analysis techniques.",
    tech: ["Python", "Cybersecurity", "Tkinter", "Keystroke Logging"],
    link: "https://github.com/Abuhoraira-06/Cybersecurity-Keyboard-Event-Monitoring-system"
  },
  {
    title: "Hand Danger Detection System",
    image: "/images/hand-danger.png",
    description:
      "Hand Danger Detection System is a real-time computer vision–based safety application developed using Python and OpenCV. The system detects and tracks human hand movement from live video streams. It analyzes the hand’s proximity to a predefined virtual boundary and classifies it into SAFE, WARNING, and DANGER zones. Visual alerts are generated instantly to indicate risk levels. This project demonstrates the practical use of computer vision techniques for industrial safety monitoring and accident prevention.",
    tech: ["Python", "OpenCV", "Computer Vision", "Real-Time Detection"],
    link: "https://github.com/Abuhoraira-06/Hand-Danger-Detection-System.git"
  }
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const project = projects[current];

  return (
    <section className="min-h-screen bg-[#0D0221] text-white flex flex-col items-center justify-center px-6 py-16">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="bg-[#1F0933] max-w-3xl w-full p-8 rounded-2xl border border-red-500 shadow-xl">
        <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center bg-[#0D0221] rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <h3 className="text-xl font-semibold text-center mb-4">
          {project.title}
        </h3>

        <p className="text-sm text-gray-300 text-justify leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-1 text-xs rounded-full border border-red-400 bg-black"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center gap-4">
          <button
            onClick={() => setCurrent((p) => Math.max(p - 1, 0))}
            disabled={current === 0}
            className="px-5 py-2 text-sm rounded-md border border-gray-500 text-gray-400 disabled:opacity-40"
          >
            Previous
          </button>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <button className="w-full py-2 text-sm rounded-md border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">
              Open App
            </button>
          </a>

          <button
            onClick={() =>
              setCurrent((p) => Math.min(p + 1, projects.length - 1))
            }
            disabled={current === projects.length - 1}
            className="px-5 py-2 text-sm rounded-md border border-gray-500 text-gray-400 disabled:opacity-40"
          >
            Next
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Project {current + 1} of {projects.length}
        </p>
      </div>
    </section>
  );
};

export default Projects;
