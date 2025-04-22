
import React from "react";

interface SkillCardProps {
  title: string;
  items: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, items }) => (
  <div className="bg-gradient-to-br from-[#181c2e] to-[#242640] dark:bg-card-gradient rounded-xl shadow-glass p-5 min-w-[220px] min-h-[160px] flex flex-col gap-2 mb-4 hover:scale-105 transition-transform">
    <h3 className="font-semibold text-lg text-accent mb-1">{title}</h3>
    <ul className="text-sm text-foreground/80 font-inter ml-3 list-disc space-y-1">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default SkillCard;
