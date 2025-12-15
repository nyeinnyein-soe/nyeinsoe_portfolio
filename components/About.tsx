import React from 'react';
import Section from './Section';
import { User, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-300">
        {/* Decorative background element - Light Mode */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-teal-100 dark:bg-purple-900/20 rounded-full opacity-50 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-cyan-100 dark:bg-blue-900/20 rounded-full opacity-50 blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
            I am an enthusiastic and results-driven <span className="font-semibold text-primary dark:text-teal-400">IT Professional</span> with extensive hands-on experience in technical support, system administration, and operations engineering. My career is defined by a commitment to minimizing downtime and optimizing user experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {[
                    { title: "System Administration", desc: "Linux server management & database optimization.", color: "text-primary" },
                    { title: "Network Infrastructure", desc: "LAN/WAN, TCP/IP setup & security protocols.", color: "text-primary" },
                    { title: "POS Solutions", desc: "Complete deployment & hardware lifecycle support.", color: "text-primary" },
                    { title: "Technical Support", desc: "Proactive onsite & remote troubleshooting.", color: "text-primary" }
                ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-teal-100 dark:hover:border-slate-700">
                        <CheckCircle2 className={`h-6 w-6 ${item.color} flex-shrink-0 mt-1`} />
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-lg">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </Section>
  );
};

export default About;