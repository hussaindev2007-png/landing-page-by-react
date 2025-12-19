import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Zap, Mail } from 'lucide-react';
import { Meteors } from '@/components/ui/meteors';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0B0B] border-t border-gray-800 text-white">
      <div className="container mx-auto px-6 -mt-24 mb-20">
        <Meteors number={20} />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center p-12 rounded-3xl bg-[#0B0B0B] shadow-2xl shadow-indigo-900/40 overflow-hidden"
        >
          <Meteors number={25} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/5 blur-[150px] rounded-full" />
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight relative z-10">
            Ready to build something <br /> amazing?
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 relative z-10">
            Join 10,000+ developers who are already using Magic UI to build beautiful interfaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
            <button className="group relative px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold flex items-center gap-2 transition-all shadow-md hover:scale-105">
              Get Started for Free
            </button>
            <button className="px-8 py-4 bg-transparent text-white border border-gray-700 rounded-full font-semibold hover:bg-gray-800/40 transition-all">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-indigo-600 p-2 rounded-lg shadow-md">
                <Zap size={20} className="text-white" fill="currentColor" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight">Hussain</span>
            </div>
            <p className="text-gray-400 max-w-xs mb-6">
              Modern UI components that can boost your development speed by 10x. Optimized for TypeScript and Tailwind CSS.
            </p>
            <div className="flex gap-4">
              <Github size={20} className="text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors" />
              <Twitter size={20} className="text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors" />
              <Linkedin size={20} className="text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links Columns */}
          {[
            { title: "Product", links: ["Components", "Templates", "Showcase"] },
            { title: "Resources", links: ["Documentation", "Help Center", "Blog"] },
            { title: "Company", links: ["About Us", "Privacy Policy", "Terms"] }
          ].map((col, idx) => (
            <div key={idx}>
              <h4 className="font-bold mb-6">{col.title}</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                {col.links.map((link, i) => (
                  <li key={i} className="hover:text-indigo-400 cursor-pointer transition-colors">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© {currentYear} Hussain Design. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            hello@hussain.design
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
