import React from "react";
import { Award } from "lucide-react";

interface Cert {
  title: string;
  authority: string;
  date: string;
}

const certifications: Cert[] = [
  {
    title: "IBM DevOps and Software Engineering Specialization",
    authority: "IBM",
    date: "Nov 2024",
  },
  {
    title: "Programming in C++: A Hands-on Introduction",
    authority: "Coursera",
    date: "May 2023",
  },
  {
    title: "Dynamic Programming, Greedy Algorithms",
    authority: "Udemy",
    date: "Nov 2023",
  },
  {
    title: "Python (Basic Level)",
    authority: "HackerRank",
    date: "Oct 2022",
  },
];

const CertList: React.FC = () => (
  <ul className="space-y-4">
    {certifications.map((cert) => (
      <li
        key={cert.title}
        className="flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white rounded-xl px-5 py-4 shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out"
      >
        <Award className="text-yellow-300" size={20} />
        <div className="flex flex-col">
          <span className="font-semibold text-sm sm:text-base">{cert.title}</span>
          <span className="text-xs sm:text-sm text-white/80 italic">{cert.authority}</span>
        </div>
        <span className="ml-auto text-xs sm:text-sm text-white/60">{cert.date}</span>
      </li>
    ))}
  </ul>
);

export default CertList;
