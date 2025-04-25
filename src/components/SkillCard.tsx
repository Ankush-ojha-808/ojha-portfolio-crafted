import React from "react";

interface SkillCardProps {
  title: string;
  items: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, items }) => (
  <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-xl shadow-xl p-5 min-w-[220px] min-h-[180px] flex flex-col gap-3 mb-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <h3 className="font-bold text-xl text-white mb-2 tracking-wide">{title}</h3>
    <ul className="text-sm text-white/90 font-medium ml-4 list-disc space-y-1">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default SkillCard;
