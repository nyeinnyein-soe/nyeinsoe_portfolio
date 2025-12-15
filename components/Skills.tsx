import React from 'react';
import Section from './Section';
import { Cpu, Server, Database, GitBranch, Wifi, Zap } from 'lucide-react';
import { SkillCategory } from '../types';

const technicalSkills: SkillCategory[] = [
  {
    title: "Networking",
    skills: ["LAN/WAN", "TCP/IP", "DNS", "Network Security", "POS Connectivity", "Infrastructure"]
  },
  {
    title: "System & Server",
    skills: ["Linux Admin", "High-Availability", "MySQL", "PostgreSQL", "Monitoring", "Recovery"]
  },
  {
    title: "VCS & Tools",
    skills: ["Git", "GitHub", "GitLab", "Branching", "Repo Management"]
  },
  {
    title: "POS, CMS & ERP",
    skills: ["POS Hardware", "WordPress", "Odoo ERP", "cPanel", "Customization"]
  }
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills" icon={<Cpu className="h-8 w-8" />}>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 justify-center md:justify-start">
            <span className="p-2 bg-teal-50 dark:bg-slate-800 text-primary dark:text-teal-400 rounded-lg"><Server className="h-6 w-6" /></span>
            Core Competencies
        </h3>
        {/* Max 2 columns per row as requested previously */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((category, idx) => (
            <div key={idx} className="group bg-white dark:bg-slate-900/60 rounded-2xl shadow-md dark:shadow-black/40 border border-slate-200 dark:border-slate-800 p-6 hover:border-primary dark:hover:border-teal-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
                <h4 className="font-bold text-slate-900 dark:text-white mb-4 pb-3 border-b border-slate-100 dark:border-slate-700 flex items-center gap-3">
                    {idx === 0 && <Wifi className="h-5 w-5 text-primary group-hover:animate-pulse" />}
                    {idx === 1 && <Database className="h-5 w-5 text-slate-500 dark:text-slate-400 group-hover:animate-pulse" />}
                    {idx === 2 && <GitBranch className="h-5 w-5 text-slate-400 dark:text-slate-500 group-hover:animate-pulse" />}
                    {idx === 3 && <Zap className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:animate-pulse" />}
                    {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="inline-flex items-center rounded-lg bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-200 dark:ring-slate-700 group-hover:bg-teal-50 dark:group-hover:bg-teal-900/30 group-hover:text-primary dark:group-hover:text-teal-300 group-hover:ring-primary dark:group-hover:ring-teal-500 transition-all shadow-sm">
                    {skill}
                    </span>
                ))}
                </div>
            </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;