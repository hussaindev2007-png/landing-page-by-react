
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0B] pt-20">
      
      
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full"
        animate={{ rotate: [0, -10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div 
        className="container mx-auto px-6 z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
    
        <motion.div 
          variants={itemVariants} 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800/40 border border-gray-700 mb-8 backdrop-blur-sm cursor-pointer hover:border-indigo-500/50 transition-colors"
        >
          <Zap size={14} className="text-indigo-500 fill-indigo-500" />
          <span className="text-xs font-medium text-gray-300 tracking-wide">Introducing Magic Components</span>
          <ChevronRight size={14} className="text-gray-400" />
        </motion.div>

       
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight"
        >
          Ship your ideas <br />
          <motion.span
            className="bg-gradient-to-b from-indigo-400 to-indigo-600 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          >
            with pure magic
          </motion.span>
        </motion.h1>

       
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed"
        >
          Modern landing pages require more than just static grids. Use our TypeScript-powered components to build the future of the web.
        </motion.p>

       
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(79,70,229,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold flex items-center gap-2 transition-all"
          >
            Get Started Free 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="px-8 py-4 bg-transparent text-white border border-gray-700 rounded-full font-semibold hover:bg-gray-800/40 transition-all"
          >
            Star on GitHub
          </motion.button>
        </motion.div>

      
        <motion.div 
          variants={itemVariants}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          className="mt-20 relative mx-auto max-w-6xl px-4 group"
        >
          
        </motion.div>
      </motion.div>
    
    </section>
  );
};

export default Hero;
