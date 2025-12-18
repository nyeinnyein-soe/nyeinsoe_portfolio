import React, { useState, useEffect } from 'react';
import Section from './Section';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CircleDot } from 'lucide-react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    company: "Code2LAB Co.Ltd",
    role: "Junior Operation Engineer",
    period: "06/2024 – Present",
    location: "Yangon",
    description: [
      "Provide onsite/remote technical support for customer restaurants, including large-scale food courts and franchise operations.",
      "Configure and maintain network infrastructure for both onsite and remote working environments, ensuring secure and stable connectivity.",
      "Install, configure, and support POS (Point of Sale) systems, food court management systems, and membership programs for client businesses.",
      "Troubleshoot and resolve hardware, software, and networking issues to minimize downtime and maintain operational efficiency.",
      "Collaborate with clients to gather technical requirements and ensure system deployments meet business needs.",
      "Monitor and manage cloud servers, ensuring uptime, security, and performance for business-critical applications."
    ]
  },
  {
    company: "TechXagon Co.Ltd",
    role: "IT Support",
    period: "10/2023 – 06/2024",
    location: "Yangon",
    description: [
      "Installed and configured hardware including POS systems, peripherals, and network devices for diverse clients such as bars, KTVs, and hotels.",
      "Designed and deployed robust Wi-Fi networks, utilizing network extenders and configuring routers/access points (APs) to ensure reliable connectivity.",
      "Provided comprehensive end-user training and ongoing support to customers, improving their proficiency with POS software and hardware.",
      "Monitored and maintained the company's WordPress-based web servers and email systems using cPanel."
    ]
  }
];

const Experience: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isPDF, setIsPDF] = useState(false);

  useEffect(() => {
    setIsPDF(document.body.classList.contains("pdf-mode"));
  }, []);

  const toggleAccordion = (index: number) => {
    if (isPDF) return; // 🚫 disable accordion in PDF

    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);

      setTimeout(() => {
        const element = document.getElementById(`experience-${index}`);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };


  return (
    <Section id="experience" title="Professional Experience" icon={<Briefcase className="h-8 w-8" />} className="bg-transparent">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {experiences.map((job, index) => {
          const isOpen = isPDF || openIndex === index;
          return (
            <div
              key={index}
              id={`experience-${index}`}
              className={`rounded-2xl overflow-hidden ${isPDF ? '' : 'transition-all duration-300'
                } ${isOpen
                  ? 'bg-white dark:bg-slate-900 shadow-xl border-l-4 border-l-primary ring-1 ring-slate-200 dark:ring-slate-800'
                  : 'bg-white dark:bg-slate-900/60 shadow-sm border-l-4 border-l-transparent'
                } ${isPDF ? '' : 'hover:bg-slate-50 dark:hover:bg-slate-800/80 cursor-pointer'
                }`}
            >

              {/* Header */}
              <div
                onClick={() => toggleAccordion(index)}
                className={`p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 ${isPDF ? '' : 'cursor-pointer'
                  }`}

              >
                <div className="flex items-start gap-4">
                  <div className={`mt-1 p-2 rounded-lg transition-colors ${isOpen ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold transition-colors ${isOpen ? 'text-primary dark:text-teal-400' : 'text-slate-900 dark:text-white'}`}>
                      {job.role}
                    </h3>
                    <div className="text-lg font-medium text-slate-600 dark:text-slate-400 mt-1">
                      {job.company}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 pl-14 md:pl-0">
                  <div className="text-sm text-slate-500 dark:text-slate-400 flex flex-col items-start md:items-end gap-1">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {job.period}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                  </div>
                  {!isPDF && (
                    <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-slate-400'}`}>
                      <ChevronDown className="h-6 w-6" />
                    </div>
                  )}

                </div>
              </div>

              {/* Content */}
              <div
                key={index}
                id={`experience-${index}`}
                className={`rounded-2xl overflow-hidden ${isPDF ? '' : 'transition-all duration-300'
                  } ${isOpen
                    ? 'bg-white dark:bg-slate-900 shadow-xl border-l-4 border-l-primary ring-1 ring-slate-200 dark:ring-slate-800'
                    : 'bg-white dark:bg-slate-900/60 shadow-sm border-l-4 border-l-transparent'
                  } ${isPDF ? '' : 'hover:bg-slate-50 dark:hover:bg-slate-800/80 cursor-pointer'
                  }`}
              >

                <div className="px-6 pb-8 md:px-8 md:pl-24 pt-0 border-t border-slate-100 dark:border-slate-800/50 mt-2">
                  <div className="pt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">Key Responsibilities</h4>
                    <ul className="space-y-4">
                      {job.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                          <CircleDot className="h-4 w-4 text-primary dark:text-teal-500 flex-shrink-0 mt-1.5" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Experience;