import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Check, Star, Briefcase, Users, Building } from 'lucide-react';
import { TierItem } from '../types';

interface CompStructureProps {
  onOpenModal: () => void;
}

const tiers: TierItem[] = [
  { 
    name: "Producer", 
    focus: "Independent Agent", 
    features: ["Top-Tier Street Contracts", "Day 1 Vesting", "Direct Carrier Pay", "Access to Lead Platform", "CRM & Tech Suite"],
    highlight: false
  },
  { 
    name: "Team Leader", 
    focus: "Growing Agency", 
    features: ["Override Spreads", "Recruiting Support", "Automated Onboarding", "Agency Dashboard", "Sales Training Systems"],
    highlight: true
  },
  { 
    name: "Enterprise", 
    focus: "Large Organization", 
    features: ["Custom Hierarchy", "White Label Options", "API Integrations", "Dedicated Service Rep", "Operational Consulting"],
    highlight: false
  },
];

export const CompStructure: React.FC<CompStructureProps> = ({ onOpenModal }) => {
  return (
    <section id="comp" className="py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Compensation & <span className="text-teal-600">Structure.</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">We don't hide the numbers. Choose the partnership model that fits your business stage.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12 }}
              className={`relative p-10 rounded-[2rem] border flex flex-col transition-all duration-500 ${
                tier.highlight 
                  ? 'bg-white border-teal-100 shadow-2xl shadow-teal-900/5 ring-1 ring-teal-500/20 z-10' 
                  : 'bg-white border-slate-100 shadow-lg hover:shadow-xl hover:border-teal-100'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-[10px] font-extrabold px-4 py-2 uppercase tracking-widest rounded-full shadow-lg flex items-center gap-1">
                  <Star size={12} fill="white" /> Most Popular
                </div>
              )}
              
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">{tier.name}</h3>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{tier.focus}</div>
              </div>
              
              <div className="flex-grow space-y-4 mb-10">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-teal-50 text-teal-600 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-slate-600 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant={tier.highlight ? 'primary' : 'secondary'} 
                className="w-full" 
                onClick={onOpenModal}
              >
                Start Partnering
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};