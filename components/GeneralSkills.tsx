import React from 'react';
import Section from './Section';
import { Brain, Globe, Sparkles } from 'lucide-react';
import { LanguageItem } from '../types';

const softSkills: string[] = [
  "Active Learning",
  "Problem Solving",
  "Clear Communication",
  "Customer Focus",
  "Teamwork"
];

const languages: LanguageItem[] = [
  { language: "Myanmar", level: "Native" },
  { language: "English", level: "Intermediate" },
  { language: "Japanese", level: "N4" }
];

const GeneralSkills: React.FC = () => {
  return (
    <Section id="general-skills" title="Personal Attributes" icon={<Sparkles className="h-8 w-8" />} className="py-10 md:py-16">
      <div className="flex flex-col md:flex-row gap-16 justify-center items-start md:items-stretch px-4">
        
        {/* Soft Skills */}
        <div className="flex-1 w-full text-center md:text-right">
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center justify-center md:justify-end gap-3">
                Soft Skills <Brain className="h-6 w-6 text-primary dark:text-teal-400" />
             </h3>
             <div className="flex flex-wrap justify-center md:justify-end gap-4">
                {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center group">
                        <span className="text-xl font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-teal-400 transition-colors cursor-default">
                            {skill}
                        </span>
                        {index !== softSkills.length - 1 && (
                            <span className="hidden sm:inline-block mx-4 text-slate-300 dark:text-slate-700 font-light text-2xl">•</span>
                        )}
                    </div>
                ))}
             </div>
        </div>

        {/* Vertical Divider (Hidden on mobile) */}
        <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>

        {/* Languages */}
        <div className="flex-1 w-full text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center justify-center md:justify-start gap-3">
                <Globe className="h-6 w-6 text-primary dark:text-teal-400" /> Languages
             </h3>
             <div className="space-y-8">
                {languages.map((lang, index) => (
                    <div key={index} className="flex flex-col items-center md:items-start group">
                        <div className="flex items-baseline gap-3">
                             <span className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-teal-400 transition-colors">{lang.language}</span>
                             <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">{lang.level}</span>
                        </div>
                        {/* Decorative line/bar */}
                        <div className="h-1.5 w-16 bg-slate-200 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
                             <div className={`h-full bg-gradient-to-r from-primary to-cyan-400 dark:from-teal-500 dark:to-blue-500 rounded-full ${
                                 index === 0 ? 'w-full' : index === 1 ? 'w-2/3' : 'w-1/3'
                             }`}></div>
                        </div>
                    </div>
                ))}
             </div>
        </div>

      </div>
    </Section>
  );
};

export default GeneralSkills;