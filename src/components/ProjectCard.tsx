import React from "react";
import { Code, Award, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  tech: string;
  period: string;
  details: string[];
  achievements?: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  tech,
  period,
  details,
  achievements,
  link,
}) => (
  <div className="bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 rounded-2xl shadow-2xl p-6 mb-6 transform hover:scale-[1.03] transition-transform duration-300 ease-in-out text-white">
    <div className="flex items-center flex-wrap gap-2">
      <Code className="text-white" size={20} />
      <h3 className="font-bold text-xl">{title}</h3>
      <span className="ml-auto text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-medium">
        {tech}
      </span>
      <span className="text-xs text-white/70">{period}</span>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          <ExternalLink size={17} />
        </a>
      )}
    </div>

    <ul className="mt-3 ml-6 text-sm list-disc space-y-1 text-white/90">
      {details.map((d) => (
        <li key={d}>{d}</li>
      ))}
    </ul>

    {achievements && achievements.length > 0 && (
      <div className="mt-3 flex items-center text-sm text-lime-300">
        <Award className="mr-1" size={16} />
        {achievements.join(", ")}
      </div>
    )}
  </div>
);

export default ProjectCard;
