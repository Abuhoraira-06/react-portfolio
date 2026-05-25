import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="min-h-screen bg-[#0D0221] text-white flex items-center justify-center px-6">
      <div className="max-w-3xl w-full text-center">
        
        {/* Profile Image */}
        <motion.img
          src="/images/profile.jpg"
          alt="Abu Horaira"
          className="w-32 h-32 mx-auto object-cover rounded-full border-4 border-blue-500 shadow-lg mb-6"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Name */}
        <motion.h1
          className="text-4xl font-semibold mb-6 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ABU HORAIRA
        </motion.h1>

        {/* About Text */}
        <motion.p
          className="text-[15.5px] leading-7 text-gray-300 text-justify mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I am an AI and Data Science student with a strong passion for building intelligent
          and data-driven applications. I enjoy working with Python, machine learning, and
          data analysis to solve real-world problems. Through hands-on projects and
          internships, I have gained practical experience in developing predictive models
          and interactive web applications. I am continuously learning new technologies and
          improving my analytical and problem-solving skills. My goal is to grow as a data
          professional and contribute to impactful AI solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="Abu Horaira Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium shadow"
          >
            View Resume
          </a>

          <a
            href="https://www.linkedin.com/in/abu-horaira-ab47a9298"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg bg-gray-700 hover:bg-gray-600 transition font-medium shadow"
          >
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
