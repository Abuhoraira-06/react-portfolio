import React from "react";
import certificate from "../assets/nexus.jpeg"; // ✅ Update path if needed

function Internship() {
  return (
    <section className="bg-[#0D0221] text-white px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Internship</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        
        {/* Certificate Image Displayed */}
        <div className="text-center">
          <img
            src={certificate}
            alt="NSP Nexus Internship Certificate"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg border border-gray-700"
          />
        </div>

        {/* Internship Details */}
        <div className="bg-[#1A1A2E] p-6 rounded-xl shadow-lg border border-gray-700 space-y-5">
          <h3 className="text-2xl font-semibold text-purple-400">NSP Nexus Virtual Internship</h3>
          <p className="text-gray-300">
            Successfully completed a 1-month virtual internship in AI & Machine Learning from{" "}
            <span className="text-blue-400">23rd June to 23rd July 2025</span>, demonstrating
            strong learning and project execution capabilities.
          </p>

          <div>
            <h4 className="text-lg font-semibold text-gray-400">Skills Gained:</h4>
            <ul className="list-disc list-inside text-blue-200">
              <li>Decision Tree</li>
              <li>Logistic Regression</li>
              <li>K-Nearest Neighbors (KNN)</li>
              <li>AI Chatbot Development</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-400">GitHub Project:</h4>
            <a
              href="https://github.com/Abuhoraira-06/NSP_NEXUS_INTERNSHIP.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/Abuhoraira-06/NSP_NEXUS_INTERNSHIP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Internship;
