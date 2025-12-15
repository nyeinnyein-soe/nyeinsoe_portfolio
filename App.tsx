import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GeneralSkills from './components/GeneralSkills';
import Education from './components/Education';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative">
      {/* Dark Mode Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none hidden dark:block overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        
        {/* About Section with 3D/Color background */}
        <div className="relative bg-white dark:bg-slate-900/50 skew-y-0 transform origin-top-left">
           <About />
        </div>

        <Experience />
        
        {/* Projects Section with distinct background */}
        <div className="relative bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
           <Projects />
        </div>

        <Skills />
        <GeneralSkills />
        <Education />
      </main>
      
      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-white shadow-lg shadow-teal-500/30 hover:bg-teal-600 hover:-translate-y-1 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default App;