
import React from "react";
import { Star } from "lucide-react";

const achievements = [
  "Solved ~250 problems on LeetCode",
  "Ranked among Dean’s top 10% at university",
  "Top 20% in various online coding contests",
  "Solved 400+ algorithmic problems across LeetCode and GeeksforGeeks",
];

const AchievementList: React.FC = () => (
  <ul className="space-y-3">
    {achievements.map((ach) => (
      <li
        key={ach}
        className="flex items-center bg-gradient-to-r from-[#13131a] to-[#232546] rounded-lg px-4 py-2 shadow-glass"
      >
        <Star className="text-accent mr-2" size={17} />
        <span>{ach}</span>
      </li>
    ))}
  </ul>
);

export default AchievementList;
