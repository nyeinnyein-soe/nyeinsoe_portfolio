import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download, Terminal, ChevronDown } from 'lucide-react';
import photo from "../img/nns.jpg";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden pt-20 pb-12 sm:pb-20 lg:pb-32 lg:pt-40 border-b border-slate-200/60 dark:border-slate-800 bg-slate-50 dark:bg-transparent transition-colors duration-300">
      {/* Animated Background Blobs - Light Mode Only */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none dark:hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-primary dark:text-teal-300 ring-1 ring-inset ring-primary/20 dark:ring-teal-400/30 bg-primary-light/30 dark:bg-teal-900/30 backdrop-blur-sm mb-8 shadow-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary dark:bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary dark:bg-teal-400"></span>
              </span>
              Available for Opportunities
            </div>
            
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl mb-6">
              Hi, I'm <br className="hidden lg:block"/>
              <span className="text-gradient">Nyein Nyein Soe</span>
            </h1>
            
            <p className="mt-4 text-2xl text-slate-600 dark:text-slate-300 font-medium">
              IT Operation Engineer & <br className="sm:hidden" />System Administrator
            </p>
            
            <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Enthusiastic and results-driven IT professional optimizing user experiences through effective troubleshooting of hardware, networking, and software issues.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-y-3 gap-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a href="mailto:nyeinnyein8422@gmail.com" className="flex items-center gap-2 hover:text-primary dark:hover:text-teal-300 transition-colors group">
                <div className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm group-hover:shadow-md transition-all">
                   <Mail className="h-4 w-4" /> 
                </div>
                nyeinnyein8422@gmail.com
              </a>
              <a href="tel:+959255281942" className="flex items-center gap-2 hover:text-primary dark:hover:text-teal-300 transition-colors group">
                <div className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm group-hover:shadow-md transition-all">
                  <Phone className="h-4 w-4" /> 
                </div>
                +95 9255281942
              </a>
            </div>
            
             <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-y-3 gap-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
               <div className="flex items-center gap-2 group">
                <div className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                  <MapPin className="h-4 w-4" /> 
                </div>
                Yangon, Myanmar
              </div>
             </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                Contact Me
              </button>
              <button className="inline-flex items-center justify-center rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-8 py-4 text-base font-bold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-slate-700 hover:bg-white dark:hover:bg-slate-700 hover:ring-slate-300 dark:hover:ring-slate-600 hover:-translate-y-1 transition-all duration-300">
                <Download className="mr-2 h-5 w-5 text-primary dark:text-teal-400" /> Download Resume
              </button>
            </div>
            
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
                <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-all p-3 rounded-full">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all p-3 rounded-full">
                  <Github className="h-6 w-6" />
                </a>
            </div>
          </div>
          
          <div className="mt-16 lg:col-span-5 lg:mt-0 flex justify-center perspective-1000 animate-fade-in-up delay-200">
             <div className="relative animate-float">
                {/* Back glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-500 dark:from-purple-600 dark:to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                
                {/* Main Image Container */}
                <div className="relative h-80 w-80 sm:h-96 sm:w-96 rounded-3xl p-2 bg-white dark:bg-slate-800 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                   <div className="h-full w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                      <img 
                          src={photo}
                          alt="Nyein Nyein Soe" 
                          className="h-full w-full object-cover"
                      />
                   </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-8 -right-4 glass-card p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-primary to-cyan-600 p-2.5 rounded-xl text-white shadow-lg shadow-teal-500/30">
                            <Terminal className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-300 font-semibold uppercase tracking-wider">Certified</p>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">ITPEC FE Engineer</p>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-slate-400 dark:text-slate-600">
         <ChevronDown className="h-6 w-6" />
      </div>
    </div>
  );
};

export default Hero;