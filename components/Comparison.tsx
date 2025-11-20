import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface ComparisonProps {
  onOpenModal: () => void;
}

export const Comparison: React.FC<ComparisonProps> = ({ onOpenModal }) => {
  return (
    <section id="comparison" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Text Side */}
        <div className="lg:col-span-5 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 md:mb-8">The Old Way vs. <br/><span className="text-gradient-gold">The LifeCo Way.</span></h2>
          <p className="text-slate-600 mb-8 md:mb-10 text-base md:text-lg leading-relaxed font-light">
            Traditional IMOs lock you down with captive contracts, hidden haircuts, and "upline" politics. We believe in open architecture and total transparency.
          </p>
          <Button variant="gold" onClick={onOpenModal} icon={<ArrowRight size={16} />}>Talk Strategy</Button>
        </div>

        {/* Table Side */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-2xl shadow-slate-200/60">
            {/* Scroll Wrapper for Mobile */}
            <div className="overflow-x-auto w-full">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-3 bg-slate-50/80 p-4 md:p-6 border-b border-slate-100 text-xs font-bold font-display uppercase tracking-widest">
                  <div className="text-slate-400">Comparison</div>
                  <div className="text-slate-400 text-center">Typical IMO</div>
                  <div className="text-teal-700 text-center">LifeCo IMO</div>
                </div>
                
                {[
                  { name: 'Contract Type', bad: 'Captive / Restricted', good: '100% Independent' },
                  { name: 'Vesting', bad: 'Years to Vest', good: 'Day One Vesting' },
                  { name: 'Releases', bad: 'Hostage Tactic', good: 'Clear Protocols' },
                  { name: 'Overrides', bad: 'Hidden Skimming', good: 'Transparent Spread' },
                  { name: 'Carrier Access', bad: 'Limited Selection', good: 'Open Architecture' },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 p-4 md:p-6 border-b border-slate-50 last:border-0 hover:bg-teal-50/10 transition-colors items-center group">
                    <div className="font-bold text-slate-800 text-sm">{row.name}</div>
                    <div className="flex items-center justify-center text-slate-400 gap-2 opacity-60 group-hover:opacity-80 transition-opacity">
                      <X size={16} className="text-red-400" /> <span className="text-xs sm:text-sm">{row.bad}</span>
                    </div>
                    <div className="flex items-center justify-center text-teal-700 gap-2 font-bold bg-teal-50 py-1.5 px-3 rounded-full shadow-sm mx-auto w-fit">
                      <Check size={14} className="text-teal-600 stroke-[3px]" /> <span className="text-xs sm:text-sm whitespace-nowrap">{row.good}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};