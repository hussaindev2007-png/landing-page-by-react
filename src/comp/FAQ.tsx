import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is this component mobile responsive?",
    answer: "Yes! All components are optimized for mobile, tablet, and desktop to ensure they look premium on every device."
  },
  {
    question: "How do I install Magic UI?",
    answer: "You can copy the command from our docs. Just run 'npm install magic-ui' and use it with Tailwind CSS."
  },
  {
    question: "Can I use it in commercial projects?",
    answer: "Absolutely! Our license allows commercial use, whether it’s your own startup or a client project."
  },
  {
    question: "How is TypeScript support?",
    answer: "The entire landing page is built with TypeScript. You’ll get proper types for every prop and component."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#0B0B0B]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">If you have any other questions, feel free to contact us.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 shadow-sm ${
                  isOpen 
                  ? 'border-indigo-500 bg-indigo-600/10 dark:bg-indigo-500/5' 
                  : 'border-gray-800 hover:border-indigo-500'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <div className={`p-1.5 rounded-full transition-colors duration-300 ${
                    isOpen ? 'bg-indigo-500 text-white' : 'bg-gray-800 text-gray-400'
                  }`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-300 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
