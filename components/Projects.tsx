import React from 'react';
import Section from './Section';
import { Layers, Database, Server, Check, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    title: "SmartSales",
    subtitle: "POS Deployment & Optimization",
    description: [
      "Managed the end-to-end implementation of SmartSales POS systems.",
      "Configured MySQL databases for complex menus.",
      "Optimized database queries for peak performance.",
      "30% reduction in user-error support tickets via training.",
      "Deployed across multiple locations with zero critical bugs."
    ]
  },
  {
    title: "Paymal",
    subtitle: "Membership System Integration",
    description: [
      "Led technical rollout of loyalty program.",
      "Integrated Paymal with POS hardware for real-time sync.",
      "Troubleshoot API connectivity using Linux log analysis.",
      "Ensured secure handling of cashless payments.",
      "Enabled processing of thousands of secure transactions."
    ]
  },
  {
    title: "Food Court",
    subtitle: "Network Infrastructure",
    description: [
      "Deployed IT backbone for large-scale food courts.",
      "Architected segmented networks using VLANs.",
      "Configured firewalls for secure remote support.",
      "Maintained 99.9% network uptime for Linux servers.",
      "Delivered stable, high-speed network environments."
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Key Projects" icon={<Layers className="h-8 w-8" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-teal-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
             {/* Header Card */}
             <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 group-hover:bg-primary/5 dark:group-hover:bg-teal-900/20 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm text-primary dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                        {index === 0 && <Database className="h-6 w-6" />}
                        {index === 1 && <Layers className="h-6 w-6" />}
                        {index === 2 && <Server className="h-6 w-6" />}
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs font-bold bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                        {index === 0 ? 'Database' : index === 1 ? 'Integration' : 'Infrastructure'}
                    </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-teal-400 transition-colors">{project.title}</h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{project.subtitle}</p>
             </div>
            
             {/* Content */}
             <div className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 flex-grow">
                    {project.description.slice(0, 4).map((desc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        <Check className="h-4 w-4 text-primary dark:text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{desc}</span>
                    </li>
                    ))}
                </ul>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                    <span className="inline-flex items-center text-sm font-bold text-primary dark:text-teal-400 group-hover:gap-2 transition-all cursor-pointer">
                        View Details <ArrowRight className="h-4 w-4 ml-1" />
                    </span>
                </div>
             </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;