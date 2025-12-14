import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="bg-[#0f172a] text-white py-16 px-6 flex flex-col items-center text-center">
      {/* Profile Image at Top */}
      <motion.img
        src="/images/profile.jpg"
        alt="Abu Horaira"
        className="w-36 h-36 object-cover rounded-full border-4 border-blue-500 mb-6 shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Name */}
      <motion.h1
        className="text-4xl font-bold mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Abu Horaira
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-gray-300 max-w-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        AI & Data Science Student passionate about building intelligent systems. Experienced in Python, Machine Learning, and modern web technologies.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {/* View Resume */}
        <a
          href="Abu Horaira Resume.pdf" // Make sure your PDF is in the public folder
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow transition duration-300"
        >
          📄 View Resume
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/abu-horaira-ab47a9298"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-5 rounded-lg shadow transition duration-300"
        >
          🔗 Connect on LinkedIn
        </a>
      </motion.div>
    </section>
  );
}

export default About;
