import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, TrendingUp, Smartphone, Target, ArrowRight } from 'lucide-react';

const leadTypes = [
  {
    title: "Final Expense",
    icon: <ShieldCheck className="w-6 h-6" />,
    desc: "Small premium, big volume. Perfect for consistent, predictable activity.",
    sub: "Intent-based forms",
    theme: "teal"
  },
  {
    title: "Verified Life",
    icon: <Heart className="w-6 h-6" />,
    desc: "Higher coverage. Higher intent. Designed for bigger conversations.",
    sub: "Mortgage protection",
    theme: "rose"
  },
  {
    title: "Annuity",
    icon: <TrendingUp className="w-6 h-6" />,
    desc: "Long-term money. For producers who think in assets, not just policies.",
    sub: "High net-worth",
    theme: "gold"
  },
  {
    title: "Ethos Fresh",
    icon: <Smartphone className="w-6 h-6" />,
    desc: "Fresh digital life leads from modern funnels matching how people shop.",
    sub: "Social native",
    theme: "indigo"
  },
  {
    title: "Custom",
    icon: <Target className="w-6 h-6" />,
    desc: "Need something specific? We’ll build custom targeting around your niche.",
    sub: "Geo-specific",
    theme: "blue"
  }
];

const themeStyles: Record<string, string> = {
  teal: "text-teal-600 bg-teal-50 group-hover:bg-teal-600 group-hover:text-white",
  rose: "text-rose-500 bg-rose-50 group-hover:bg-rose-500 group-hover:text-white",
  gold: "text-amber-500 bg-amber-50 group-hover:bg-amber-500 group-hover:text-white",
  indigo: "text-indigo-500 bg-indigo-50 group-hover:bg-indigo-500 group-hover:text-white",
  blue: "text-blue-500 bg-blue-50 group-hover:bg-blue-500 group-hover:text-white",
};

export const LeadCarousel: React.FC = () => {
  return (
    <section id="lead-types" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Pick Your Lead. <br/><span className="text-teal-600">We Bring The Buyers.</span></h2>
          <p className="text-slate-600 text-lg font-light leading-relaxed">Every lead type is built around one rule: if it wouldn’t be good enough for our own agents, it doesn’t go out.</p>
        </motion.div>
        
        <div className="hidden md:flex gap-2 text-sm font-bold text-teal-600 cursor-pointer hover:gap-4 transition-all items-center mt-8 md:mt-0">
           View All Categories <ArrowRight size={16} />
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="w-full overflow-x-auto pb-16 px-6 hide-scrollbar">
        <div className="flex space-x-8 min-w-max mx-auto max-w-7xl pl-2">
          {leadTypes.map((lead, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="w-[360px] group relative bg-white border border-slate-100 p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${themeStyles[lead.theme]}`}>
                {lead.icon}
              </div>
              
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors">{lead.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed text-base">{lead.desc}</p>
              
              <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-teal-600 transition-colors">{lead.sub}</span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};