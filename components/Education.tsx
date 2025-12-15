import React from 'react';
import Section from './Section';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education & Certifications" icon={<GraduationCap className="h-8 w-8" />}>
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Degree */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 md:p-8 rounded-3xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300 group">
            <div className="p-4 bg-teal-50 dark:bg-slate-800 text-primary dark:text-teal-400 rounded-2xl group-hover:scale-110 transition-transform shadow-sm">
                <GraduationCap className="h-8 w-8" />
            </div>
            <div className="flex-grow">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-teal-400 transition-colors">Bachelor of Arts (English)</h3>
                 <p className="text-lg text-slate-600 dark:text-slate-400 mt-1 font-medium">Dagon University</p>
            </div>
            <div className="text-left md:text-right w-full md:w-auto pl-20 md:pl-0 -mt-4 md:mt-0">
                 <span className="inline-block px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    2019 – Present
                 </span>
                 <p className="text-sm text-slate-500 dark:text-slate-500 mt-2 font-medium">Fourth Year (Distance)</p>
            </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>

        {/* Certification */}
         <div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 md:p-8 rounded-3xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300 group">
            <div className="p-4 bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 rounded-2xl group-hover:scale-110 transition-transform shadow-sm">
                <Award className="h-8 w-8" />
            </div>
            <div className="flex-grow">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">IT Engineers (FE)</h3>
                 <p className="text-lg text-slate-600 dark:text-slate-400 mt-1 font-medium">ITPEC Certification</p>
            </div>
            <div className="text-left md:text-right w-full md:w-auto pl-20 md:pl-0 -mt-4 md:mt-0">
                 <span className="inline-block px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    2022
                 </span>
                 <p className="text-sm text-slate-500 dark:text-slate-500 mt-2 font-medium">Certified Professional</p>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;