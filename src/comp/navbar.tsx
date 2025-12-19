import  { useState,  } from 'react';
import { motion,  useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navLinks = [
    { name: 'Features', href: '#' },
    { name: 'Components', href: '#' },
    { name: 'Showcase', href: '#' },
    { name: 'Docs', href: '#' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-2' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className={`relative flex items-center justify-between px-6 py-3 rounded-full border transition-all ${
            scrolled 
            ? 'bg-white/70 dark:bg-black/70 backdrop-blur-md border-white/20 shadow-lg' 
            : 'bg-transparent border-transparent'
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <Zap size={20} className="text-white" fill="currentColor" />
            </div>
            <span className="font-bold text-xl tracking-tight dark:text-white">Hussain</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-black dark:bg-white dark:text-black text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity">
              Get Started
            </button>
          </div>

         
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="dark:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>
      </div>

      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-4 right-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 p-4 rounded-2xl shadow-xl"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-medium dark:text-white">
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Header;