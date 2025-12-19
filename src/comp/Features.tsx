import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Globe, Shield, BarChart3, Sparkles } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0B0B] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Everything you need to <span className="text-indigo-500">scale</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Every feature is carefully designed to make your workflow 10x more efficient.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:h-[600px]"
        >
          {/* Big Vertical Card */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 p-8 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="z-10">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6">
                <Globe className="text-indigo-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Global Edge</h3>
              <p className="text-gray-400">Deploy in 50+ regions worldwide with zero latency.</p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full group-hover:bg-indigo-500/20 transition-all duration-500" />
          </motion.div>

          {/* Wide Horizontal Card */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 p-8 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex-1">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-4">
                <BarChart3 className="text-purple-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Advanced Analytics</h3>
              <p className="text-gray-400 max-w-xs">Monitor every click and interaction in real-time with our dashboard.</p>
            </div>
            <div className="hidden md:block w-48 h-32 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl border border-white/10 rotate-3" />
          </motion.div>

          {/* Security Card */}
          <motion.div
            variants={cardVariants}
            className="group rounded-3xl border border-gray-800 bg-gray-900 p-6 hover:bg-gray-800 transition-colors duration-300 flex flex-col items-start shadow-sm"
          >
            <Shield className="text-blue-500 mb-4" size={28} />
            <h3 className="text-xl font-bold text-white mb-1">Enterprise Security</h3>
            <p className="text-gray-400 text-sm">SOC2 compliant with end-to-end encryption.</p>
          </motion.div>

          {/* AI Powered Card */}
          <motion.div
            variants={cardVariants}
            className="group rounded-3xl border border-gray-800 bg-gray-900 p-6 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-2 rounded-lg bg-yellow-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="text-yellow-500" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">AI Powered</h3>
            <p className="text-gray-400 text-sm">Automatic optimization features that make your site faster by itself.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
