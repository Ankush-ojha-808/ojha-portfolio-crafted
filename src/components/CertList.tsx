
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
  <ul className="space-y-3">
    {certifications.map((cert) => (
      <li
        key={cert.title}
        className="flex items-center bg-gradient-to-r from-[#232546] to-[#1a1f2c] rounded-lg px-4 py-3 shadow-glass"
      >
        <Award className="text-accent mr-2" size={17} />
        <span className="font-semibold">{cert.title}</span>
        <span className="ml-2 text-foreground/60 text-sm italic">{cert.authority}</span>
        <span className="ml-auto text-xs text-foreground/50">{cert.date}</span>
      </li>
    ))}
  </ul>
);

export default CertList;
