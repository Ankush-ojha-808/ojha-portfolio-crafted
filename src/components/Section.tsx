
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children, ...rest }) => (
  <section
    id={id}
    className="py-16 md:py-24 max-w-4xl mx-auto w-full animate-fade-in"
    {...rest}
  >
    {title && (
      <h2 className="mb-8 text-2xl md:text-3xl font-bold tracking-tight text-accent text-center">
        {title}
      </h2>
    )}
    {children}
  </section>
);

export default Section;
