
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
  <div className="bg-gradient-to-br from-[#1a1f2c] to-[#242640] dark:bg-card-gradient rounded-xl shadow-glass p-6 mb-6 hover:scale-105 transition-transform">
    <div className="flex items-center">
      <Code className="text-accent mr-2" size={20} />
      <h3 className="font-semibold text-lg">{title}</h3>
      <span className="ml-auto text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">{tech}</span>
      <span className="ml-3 text-xs text-foreground/50">{period}</span>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-accent hover:underline"
        >
          <ExternalLink size={17} />
        </a>
      )}
    </div>
    <ul className="mt-2 mb-2 ml-5 text-foreground/80 text-[15px] list-disc">
      {details.map((d) => (
        <li key={d}>{d}</li>
      ))}
    </ul>
    {achievements && achievements.length > 0 && (
      <div className="mt-2 flex items-center text-xs text-green-400">
        <Award className="mr-1" size={16} /> {achievements.join(", ")}
      </div>
    )}
  </div>
);

export default ProjectCard;
