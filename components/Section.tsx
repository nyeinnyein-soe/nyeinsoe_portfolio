import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "", icon }) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative ${className}`}>
      <div className="flex flex-col items-center mb-16 text-center animate-fade-in-up">
        {icon && (
            <div className="mb-4 p-3 bg-slate-100 dark:bg-slate-800 text-primary dark:text-teal-400 rounded-2xl shadow-inner">
                {icon}
            </div>
        )}
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white relative inline-block">
          {title}
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-primary rounded-full"></span>
        </h2>
      </div>
      <div className="animate-fade-in-up delay-100">
          {children}
      </div>
    </section>
  );
};

export default Section;