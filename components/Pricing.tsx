import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Check, Star } from 'lucide-react';

interface PricingProps {
  onOpenModal: () => void;
}

const tiers = [
  { name: "Final Expense", price: "$12", desc: "High volume, consistent activity.", ideal: "New Agents" },
  { name: "Verified Life", price: "$25", desc: "Bigger policy conversations.", ideal: "Closers", popular: true },
  { name: "High Intent", price: "$37", desc: "Maximize AP per client.", ideal: "Top Producers" },
  { name: "Annuity", price: "$95", desc: "Long-term assets focus.", ideal: "Wealth Managers" },
];

export const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  return (
    <section id="pricing" className="py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Clear Pricing. <span className="text-teal-600">No Games.</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">You shouldn't have to book three calls just to find out what a lead costs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12 }}
              className={`relative p-8 rounded-[2rem] border flex flex-col transition-all duration-500 ${
                tier.popular 
                  ? 'bg-white border-teal-100 shadow-2xl shadow-teal-900/5 ring-1 ring-teal-500/20 z-10' 
                  : 'bg-white border-slate-100 shadow-lg hover:shadow-xl hover:border-teal-100'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-[10px] font-extrabold px-4 py-2 uppercase tracking-widest rounded-full shadow-lg flex items-center gap-1">
                  <Star size={12} fill="white" /> Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-display font-bold text-slate-900 uppercase tracking-wide mb-2">{tier.name}</h3>
                <div className="text-xs text-slate-500 font-bold bg-slate-50 inline-block px-3 py-1 rounded-lg border border-slate-100">Ideal for {tier.ideal}</div>
              </div>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-sm text-slate-400 font-medium">From</span>
                <div className={`text-5xl font-display font-bold tracking-tighter ${tier.popular ? 'text-teal-600' : 'text-slate-900'}`}>{tier.price}</div>
                <span className="text-sm text-slate-400 font-medium">/lead</span>
              </div>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow">{tier.desc}</p>
              
              <Button 
                variant={tier.popular ? 'primary' : 'secondary'} 
                className="w-full" 
                onClick={onOpenModal}
              >
                Get Access
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};