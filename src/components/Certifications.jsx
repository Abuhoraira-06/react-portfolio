import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const courses = [
  {
    title: "Data Analytics Job Simulation",
    description: "Certified by Deloitte",
    link: "/certificates/Deloitte.jpeg",
  },
  {
    title: "Machine Learning",
    description: "Certified by CodeChef",
    link: "/certificates/ML.jpeg",
  },
  {
    title: "Complete Machine Learning & Data Science - Skill Up",
    description: "Certified by GeeksforGeeks",
    link: "/certificates/geek.jpeg",
  },
  {
    title: "The Joy of Computing Using Python (76%)",
    description: "Certified by NPTEL",
    link: "/certificates/NPTEL.jpeg",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    description: "Certified by Amazon Web Services",
    link: "/certificates/AWS.jpeg",
  },
  {
    title: "Python For Data Science",
    description: "Certified by Great Learning",
    link: "/certificates/python greatlearning.jpeg",
  },
  {
    title: "C# Data Structures and Algorithms",
    description: "Certified by Infosys SpringBoard",
    link: "/certificates/infosys C.jpeg",
  },
];

function Courses() {
  const chunkedCourses = [];
  for (let i = 0; i < courses.length; i += 3) {
    chunkedCourses.push(courses.slice(i, i + 3));
  }

  return (
    <section className="min-h-screen bg-[#0D0221] text-white flex items-center justify-center px-4">
      
      <div className="w-full">
        <h2 className="text-4xl font-bold text-center mb-4">Certifications</h2>
        <p className="text-center text-lg mb-10 max-w-xl mx-auto text-gray-300">
          Learning never stops. These certificates represent milestones in my continuous
          growth as an individual.
        </p>

        <div className="max-w-7xl mx-auto px-2">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {chunkedCourses.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {group.map((course, idx) => (
                    <div
                      key={idx}
                      className="h-full min-h-[280px] flex flex-col justify-between p-6 bg-[#1F0933] rounded-xl border border-purple-700 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div>
                        <div className="w-10 h-10 bg-pink-500 text-white flex items-center justify-center rounded-full font-bold text-lg mb-4">
                          {course.title.charAt(0)}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {course.description}
                        </p>
                      </div>

                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:underline mt-6"
                      >
                        View →
                      </a>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Pagination styling */}
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: #6B21A8 !important;
            opacity: 0.6;
            width: 12px;
            height: 12px;
          }

          .swiper-pagination-bullet-active {
            background-color: #9D4EDD !important;
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
}

export default Courses;
