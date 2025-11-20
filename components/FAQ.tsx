import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';
import { BackgroundPaths } from './BackgroundPaths';

const faqs: FAQItem[] = [
  { question: "Is my book of business fully vested?", answer: "Yes. From day one. We believe you should own what you sell. You are 100% vested in your renewals and your agency hierarchy immediately." },
  { question: "Can I keep my own agency brand?", answer: "Absolutely. We operate as a strategic partner and back-office engine. You market and grow under your own banner." },
  { question: "Do you offer release contracts?", answer: "Yes. We have a transparent release protocol. We believe agents stay because they want to, not because they are held hostage by paperwork." },
  { question: "What does the support structure look like?", answer: "We provide case management, contracting assistance, and underwriting support. You focus on sales and recruiting; we handle the operational friction." },
  { question: "Are there hidden overrides or haircuts?", answer: "No. We operate on a transparent spread model. You see exactly what the carrier pays and what your contract level is. No mystery fees." },
];

export const FAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-white relative overflow-hidden">
      {/* Premium Animated Background */}
      <BackgroundPaths />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-16 text-center">Questions <span className="text-teal-600">Agency Owners</span> Ask</h2>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl p-2 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group rounded-xl"
              >
                <span className={`font-display text-lg font-bold transition-colors ${active === i ? 'text-teal-600' : 'text-slate-900 group-hover:text-teal-600'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors duration-300 ${active === i ? 'bg-teal-600 text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600'}`}>
                   {active === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-500 leading-relaxed text-base font-light border-t border-slate-50 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
