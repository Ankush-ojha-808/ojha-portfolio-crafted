import React from "react";
import { Star } from "lucide-react";

const achievements = [
  "Solved ~250 problems on LeetCode",
  "Ranked among Dean’s top 10% at university",
  "Top 20% in various online coding contests",
  "Solved 400+ algorithmic problems across LeetCode and GeeksforGeeks",
];

const AchievementList: React.FC = () => (
  <ul className="space-y-4">
    {achievements.map((ach) => (
      <li
        key={ach}
        className="flex items-center bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white rounded-xl px-5 py-3 shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out"
      >
        <Star className="text-yellow-300 mr-3 shrink-0" size={18} />
        <span className="text-sm font-medium">{ach}</span>
      </li>
    ))}
  </ul>
);

export default AchievementList;
