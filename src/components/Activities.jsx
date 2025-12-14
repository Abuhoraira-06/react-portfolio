// react-portfolio/src/components/Activities.jsx
import { FaGraduationCap } from "react-icons/fa";

const activities = [
  {
    title: "Chemovate'25",
    subtitle: "Participated in National Level 24hrs Hackathon",
    color: "from-[#c3dafe] to-[#e0e7ff]",
    certificate: "/certificates/hackathon.jpeg",
  },
  {
    title: "Vivanta'24",
    subtitle: "Participated in National Level Technical symposium",
    color: "from-[#bae6fd] to-[#e0f2fe]",
    certificate: "/certificates/symposium.jpeg",
  },
  {
    title: "R for Data Science",
    subtitle: "By Open Source Club",
    color: "from-[#bbf7d0] to-[#d1fae5]",
    certificate: "/certificates/r.jpeg",
  },
  {
    title: "Distributed Big Data Processing Techniques & Cloud Services",
    subtitle: "One Day Workshop",
    color: "from-[#fed7aa] to-[#fff7ed]",
    certificate: "/certificates/bigdata.jpeg",
  },
  {
    title: "Deep Learning & Neural Networks",
    subtitle: "By Neural Techgenics Club",
    color: "from-[#fbcfe8] to-[#ffe4e6]",
    certificate: "/certificates/deep.jpeg",
  },
  {
    title: "Evolution of GPT Models",
    subtitle: "One Day Workshop",
    color: "from-[#e5e7eb] to-[#f3f4f6]",
    certificate: "/certificates/gpt.jpeg",
  },
  {
    title: "Data Science and AI",
    subtitle: "Seminar conducted by Computer Software College, Adambakkam",
    color: "from-[#c3dafe] to-[#e0e7ff]",
    certificate: "/certificates/Seminar.jpeg",
  },
];

const Activities = () => {
  return (
    <section className="bg-[#0f172a] py-12 px-6 min-h-screen text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-white">
          Activities
        </h2>
        <div className="relative border-l-4 border-blue-600 pl-6 space-y-10">
          {activities.map((activity, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              <span className="absolute -left-4 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r animate-pulse shadow-md text-white text-sm font-bold bg-blue-500">
                <FaGraduationCap size={14} />
              </span>

              {/* Clickable Card */}
              <a
                href={activity.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className={`bg-gradient-to-r ${activity.color} text-black rounded-xl shadow-md p-5 transition-transform duration-300 transform group-hover:scale-[1.02]`}
                >
                  <h3 className="text-xl font-semibold">{activity.title}</h3>
                  <p className="text-sm opacity-90">{activity.subtitle}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
