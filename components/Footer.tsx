import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 dark:bg-slate-950 text-white pt-20 pb-10 relative overflow-hidden border-t border-slate-800 dark:border-slate-900">
       {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-teal-900/30 dark:bg-purple-900/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-primary to-cyan-400 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">Let's Connect</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
              I'm actively seeking new opportunities in System Administration and IT Operations. Let's discuss how I can contribute to your team.
            </p>
            <div className="flex gap-4">
                <a href="#" className="bg-slate-800 hover:bg-primary hover:-translate-y-1 transition-all p-3.5 rounded-xl border border-slate-700 hover:border-primary">
                    <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="bg-slate-800 hover:bg-white hover:text-slate-900 hover:-translate-y-1 transition-all p-3.5 rounded-xl border border-slate-700 hover:border-white">
                    <Github className="h-6 w-6" />
                </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group flex items-center gap-5 p-4 rounded-2xl bg-slate-800/50 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="bg-slate-700 p-3 rounded-xl text-primary group-hover:text-white group-hover:scale-110 transition-all">
                    <Mail className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-semibold text-slate-300 text-sm uppercase tracking-wide">Email</h3>
                    <a href="mailto:nyeinnyein8422@gmail.com" className="text-lg text-white font-medium hover:text-primary transition-colors">nyeinnyein8422@gmail.com</a>
                </div>
            </div>
            
            <div className="group flex items-center gap-5 p-4 rounded-2xl bg-slate-800/50 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="bg-slate-700 p-3 rounded-xl text-primary group-hover:text-white group-hover:scale-110 transition-all">
                    <Phone className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-semibold text-slate-300 text-sm uppercase tracking-wide">Phone</h3>
                    <a href="tel:+959255281942" className="text-lg text-white font-medium hover:text-primary transition-colors">+95 9255281942</a>
                </div>
            </div>

             <div className="group flex items-center gap-5 p-4 rounded-2xl bg-slate-800/50 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="bg-slate-700 p-3 rounded-xl text-primary group-hover:text-white group-hover:scale-110 transition-all">
                    <MapPin className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-semibold text-slate-300 text-sm uppercase tracking-wide">Location</h3>
                    <p className="text-lg text-white font-medium">Yangon, Myanmar</p>
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Nyein Nyein Soe. Designed & Built with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;