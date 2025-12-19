
import React from 'react';
import { motion } from 'framer-motion';


const logos = [
  { name: "Vercel", icon: "▲" },
  { name: "Netflix", icon: "NETFLIX" },
  { name: "Google", icon: "Google" },
  { name: "Amazon", icon: "Amazon" },
  { name: "Meta", icon: "Meta" },
  { name: "Microsoft", icon: "Microsoft" },
];

const LogoMarquee: React.FC = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="py-12 bg-[#0B0B0B] border-y border-gray-800 overflow-hidden">
     
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider">
          Trusted by industry leaders
        </p>
      </div>

      <div className="relative flex overflow-hidden">
      
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-gray-400 dark:text-gray-500 hover:text-indigo-400 dark:hover:text-indigo-400 transition-all cursor-pointer px-4"
            >
              <span className="tracking-tight">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoMarquee;
