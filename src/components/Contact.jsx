import React from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-[#0D0221] text-white px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Contact Info */}
        <div className="bg-[#1A1A2E] p-6 rounded-xl shadow-lg border border-gray-700 space-y-6">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-blue-400 text-xl" />
            <a
              href="mailto:abusonjalal@gmail.com"
              className="text-blue-400 hover:underline"
            >
              abusonjalal@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-green-400 text-xl" />
            <a
              href="tel:+919789020638"
              className="text-white hover:underline"
            >
              +91-9789020638
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaGithub className="text-gray-300 text-xl" />
            <a
              href="http://github.com/Abuhoraira-06"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abuhoraira-06
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaLinkedin className="text-blue-600 text-xl" />
            <a
              href="http://linkedin.com/in/abu-horaira-ab47a9298"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              abu-horaira-ab47a9298
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/myzpjwop" // Replace this with your real Formspree link
          method="POST"
          className="bg-[#1A1A2E] p-6 rounded-xl shadow-lg border border-gray-700 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-md bg-[#0F0F1F] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-md bg-[#0F0F1F] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-2 rounded-md bg-[#0F0F1F] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-semibold transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
