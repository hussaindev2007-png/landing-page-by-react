import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for personal projects.",
    features: ["3 Projects", "Basic Analytics", "Community Support"],
    isPopular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "The first choice of professional developers.",
    features: ["Unlimited Projects", "Advanced AI Tools", "Priority Support", "Custom Domains"],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large teams and scaling.",
    features: ["SLA Guarantee", "Dedicated Manager", "Unlimited Seats", "Advanced Security"],
    isPopular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-lg">No hidden fees. Pick the plan that suits your needs.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                plan.isPopular
                  ? 'border-indigo-500 bg-gray-900 shadow-2xl shadow-indigo-500/20'
                  : 'border-gray-800 bg-gray-900 hover:shadow-lg hover:shadow-indigo-500/10'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-md">
                  <Zap size={14} fill="currentColor" /> Most Popular
                </div>
              )}

              {/* Plan Info */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center">
                      <Check size={12} className="text-indigo-500" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30'
                  : 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700'
              }`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
