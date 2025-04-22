
import React, { useState } from "react";
import { Github, Linkedin, Sun, Moon } from "lucide-react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "training", label: "Training" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://linkedin.com/in/ankush-ojha/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Ankush-ojha-808",
    icon: Github,
    label: "GitHub",
  },
];

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  const handleToggle = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-white/80 dark:bg-[#13131a]/80 backdrop-blur border-b border-border font-inter">
      <nav className="container flex items-center justify-between py-2">
        <span className="text-xl font-bold tracking-tight text-accent">Ankush K. Ojha</span>
        <ul className="hidden md:flex gap-7 text-[15px] font-medium items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="story-link px-2 py-1 transition-colors hover:text-accent focus:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 items-center">
          {socialLinks.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-1 rounded-full hover:bg-accent/10 transition"
            >
              <s.icon size={22} />
            </a>
          ))}
          <button
            className="ml-2 rounded-full p-1 hover:bg-accent/10 transition"
            aria-label="Toggle dark mode"
            onClick={handleToggle}
          >
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
