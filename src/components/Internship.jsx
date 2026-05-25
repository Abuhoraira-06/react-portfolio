import React, { useState } from "react";
import certificate1 from "../assets/nexus.jpeg";
import certificate2 from "../assets/vois_certificate.jpeg";

function Internship() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section className="min-h-screen bg-[#0D0221] text-white flex items-center justify-center px-6">
      <div className="max-w-7xl w-full">
        
        <h2 className="text-4xl font-bold text-center mb-14">
          Internships
        </h2>

        {/* Slider Content */}
        <div className="relative">

          {/* Slide 1 */}
          {currentSlide === 0 && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              <div className="flex justify-center">
                <img
                  src={certificate1}
                  alt="NSP Nexus Internship Certificate"
                  className="w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-600"
                />
              </div>

              <div className="bg-[#1A1A2E] p-8 rounded-2xl shadow-xl border border-gray-700">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                  NSP Nexus Virtual Internship
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6 text-justify">
                  Successfully completed a one-month virtual internship in
                  <span className="text-blue-400 font-medium">
                    {" "}AI & Machine Learning{" "}
                  </span>
                  from <span className="text-blue-400">23rd June to 23rd July 2025</span>.
                  The internship focused on practical learning, project execution,
                  and applying machine learning concepts to real-world scenarios.
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-gray-400 mb-3">
                    Skills Gained
                  </h4>

                  <ul className="space-y-2 text-blue-200 list-disc list-inside">
                    <li>Decision Tree Algorithms</li>
                    <li>Logistic Regression</li>
                    <li>K-Nearest Neighbors (KNN)</li>
                    <li>AI Chatbot Development</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Slide 2 */}
          {currentSlide === 1 && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              <div className="flex justify-center">
                <img
                  src={certificate2}
                  alt="VOIS Internship Certificate"
                  className="w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-600"
                />
              </div>

              <div className="bg-[#1A1A2E] p-8 rounded-2xl shadow-xl border border-gray-700">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                  VOIS for Tech – Cybersecurity with Gen AI
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6 text-justify">
                  Successfully completed the AICTE-led virtual internship program
                  on <span className="text-blue-400 font-medium">Cybersecurity with Gen AI </span>
                  conducted from <span className="text-blue-400">09th December 2025 to 06th January 2026</span>.
                  The internship focused on cybersecurity fundamentals, AI integration,
                  and practical security implementations.
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-gray-400 mb-3">
                    Skills Gained
                  </h4>

                  <ul className="space-y-2 text-blue-200 list-disc list-inside">
                    <li>Generative AI Applications</li>
                    <li>Threat Analysis & Detection</li>
                    <li>Cybersecurity Keyboard Event Monitoring System</li>
                    <li>AI-Based Network Intrusion Detection system</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-10 gap-6">
            <button
              onClick={prevSlide}
              className="px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
            >
              Previous
            </button>

            <button
              onClick={nextSlide}
              className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-500 transition"
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Internship;
