
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import CertList from "@/components/CertList";
import AchievementList from "@/components/AchievementList";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const skills = [
  {
    title: "Languages",
    items: ["C++", "Python", "Java", "R"],
  },
  {
    title: "Tools",
    items: [
      "Docker",
      "Jenkins",
      "Postman",
      "Git/GitHub",
      "Tableau",
      "Microsoft Excel",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Adaptive learner",
      "Strong communication",
      "Leadership capability",
      "Problem-solving",
    ],
  },
  {
    title: "Platforms",
    items: [
      "PyCharm",
      "Jupyter Notebook",
      "VS Code",
      "IntelliJ IDEA",
      "Cursor",
    ],
  },
];

const Index = () => {
  return (
    <div className="bg-section-gradient min-h-screen font-inter">
      <Navbar />
      <main className="pt-24">
        <Section id="home">
          <div className="flex flex-col items-center animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-accent text-center mb-3">
              Shubham Singh
            </h1>
            <h2 className="text-md md:text-xl text-foreground/90 mb-4 text-center font-medium">
              Aspiring Software Developer | Data Science Enthusiast | Software Developer | AI-ML Engineer.
            </h2>
            <p className="text-foreground/75 max-w-lg text-center mb-5">
              B.Tech student specializing in Data Science at Lovely Professional University.
              Passionate about technology, adaptive learning, and building innovative solutions.
            </p>
          </div>
        </Section>
        <Section id="about" title="About Me">
          <div className="text-foreground/80 max-w-2xl mx-auto text-[17px] leading-relaxed text-center">
            <p>
              I am a motivated final-year B.Tech student at <span className="font-semibold text-accent">Lovely Professional University</span>, majoring in Computer Science and Engineering with a focus on Data Science.
              My strengths lie in adaptive learning, problem-solving, and strong communication. I continuously hone my technical and leadership skills by tackling diverse projects and academic challenges.
            </p>
            <div className="mt-4 text-sm text-foreground/60">
              <div><b>Location:</b> Phagwara, Punjab</div>
              <div><b>Degree:</b> Bachelor of Technology (Aug 22 – Present)</div>
            </div>
          </div>
        </Section>
        <Section id="skills" title="Skills">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
            {skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </Section>
        <Section id="projects" title="Projects">
          <ProjectCard
            title="N-Queen Visualizer"
            tech="React, JS, Backtracking"
            period="Jun 24 – Aug 24"
            link=""
            details={[
              "Built an interactive visualizer for the N-Queen problem using React.js and backtracking algorithms.",
              "Implemented step-by-step controls (play, pause, step-by-step) for better learning experience.",
              "Optimized board-state representation for smooth visualization.",
              "Strengthened front-end, algorithm visualization, and UI responsiveness.",
            ]}
          />
          <ProjectCard
            title="Credit Card Fraud Detection"
            tech="ML, Python, Logistic Regression"
            period="Nov 24 – Feb 25"
            link=""
            details={[
              "Developed a logistic regression model with 87% accuracy for detecting fraudulent transactions.",
              "Reduced false positives by 16% using advanced feature engineering and hyperparameter tuning.",
              "Addressed class imbalance with under-sampling & ensemble methods; improved performance by 15%.",
              "Boosted model efficiency by 23% and overall accuracy by 6%.",
            ]}
          />
        </Section>
        <Section id="training" title="Training & Certifications">
          <div className="text-foreground/80 mb-7">
            <b>Summer Training (GeeksForGeeks)</b> — Data Structures & Algorithms (May 24 – Aug 24)<br />
            <ul className="text-[16px] mt-1 ml-4 list-disc space-y-1">
              <li>Comprehensive C++ training program on DSA principles.</li>
              <li>Gained proficiency in data structures (arrays, linked lists, trees, graphs).</li>
              <li>Applied DSA concepts in real-world projects.</li>
            </ul>
          </div>
          <CertList />
        </Section>
        <Section id="achievements" title="Achievements">
          <AchievementList />
        </Section>
        <Section id="contact" title="Contact">
          <ContactForm />
        </Section>
        <Footer />
      </main>
    </div>
  );
};

export default Index;
