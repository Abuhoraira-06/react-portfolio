import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Abu Horaira</h1>
        <ul className="flex space-x-6 font-medium">
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#certifications" className="hover:text-blue-400">Certifications</a></li>
          <li><a href="#workshops" className="hover:text-blue-400">Workshops</a></li>
          <li><a href="#internships" className="hover:text-blue-400">Internships</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
