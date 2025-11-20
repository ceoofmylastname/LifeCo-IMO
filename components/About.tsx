import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, Lock, TrendingUp, Users, Zap, Building2, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface AboutProps {
  onOpenModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenModal }) => {
  return (
    <div className="pt-24 md:pt-32 pb-20 bg-white min-h-screen font-sans">
      
      {/* 1. HERO / MANIFESTO */}
      <section className="relative max-w-7xl mx-auto px-6 mb-24 md:mb-32">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-teal-50/50 to-transparent -z-10 blur-3xl opacity-50 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-oswald font-bold text-slate-900 leading-[0.9] tracking-tight mb-8">
            BUILT FOR AGENCIES <br />
            WHO REFUSE TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CBAC4] to-[#C98B39]">SURRENDER CONTROL.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl border-l-4 border-[#C98B39] pl-6 md:pl-8 mt-12">
            LifeCo IMO isn’t built for everybody — and that’s intentional. 
            We exist for the elite agencies who already produce at a high level… 
            the ones who know their value, demand full ownership, and aren’t willing 
            to let another organization control their brand, their renewals, or their future.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 border-t border-slate-100 pt-12"
        >
          <div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">You built your agency.</h3>
            <div className="h-1 w-12 bg-[#8CBAC4]"></div>
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">You built your team.</h3>
            <div className="h-1 w-12 bg-[#8CBAC4]"></div>
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">You built your book.</h3>
            <div className="h-1 w-12 bg-[#C98B39]"></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center md:text-left"
        >
          <p className="text-2xl md:text-3xl font-display font-bold text-slate-900">
            We make sure you own it. <span className="text-[#C98B39] underline decoration-2 underline-offset-4 decoration-[#C98B39]/30">Permanently.</span>
          </p>
        </motion.div>
      </section>

      {/* 2. MISSION */}
      <section className="bg-slate-900 py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#8CBAC4] font-bold tracking-widest uppercase text-xs mb-4 block">Our Mission</span>
              <h2 className="text-3xl md:text-5xl font-oswald font-bold text-white mb-6">
                Empower top-performing agencies with ownership, infrastructure, and freedom — at scale.
              </h2>
              <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed mb-8">
                LifeCo IMO gives you the backend power of a national organization without requiring you to hand over control.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['No buyouts', 'No "golden cage" contracts', 'No hidden overrides', 'No quiet lock-ins'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 bg-white/5 p-3 rounded-lg border border-white/5">
                    <X size={16} className="text-red-400" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8CBAC4] to-[#C98B39] rounded-2xl opacity-20 blur-lg" />
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl relative">
                 <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Just your brand, backed by our engine.</h3>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-[#8CBAC4]/20 rounded-lg text-[#8CBAC4] mt-1"><ShieldCheck size={20} /></div>
                      <div>
                        <h4 className="text-white font-bold">Protection</h4>
                        <p className="text-sm text-slate-400">Your book is yours. Vested day one. No fine print.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-[#C98B39]/20 rounded-lg text-[#C98B39] mt-1"><Zap size={20} /></div>
                      <div>
                        <h4 className="text-white font-bold">Power</h4>
                        <p className="text-sm text-slate-400">Enterprise-grade tech and AI automation to scale faster.</p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE FLIP (WHY WE EXIST) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-slate-900 mb-6">Why We Exist</h2>
          <p className="text-lg text-slate-500 font-light">
            The industry has turned into a trap for high-producing agencies. We flipped the model.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* The Trap */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-200 group-hover:bg-red-400 transition-colors" />
            <h3 className="text-2xl font-display font-bold text-slate-400 mb-8 group-hover:text-slate-600 transition-colors">The Industry Trap</h3>
            
            <ul className="space-y-5">
              {[
                'Carriers force your hand with restrictive contracts',
                'Big IMOs want to "own" you',
                'Aggregators buy agencies and quietly take control',
                'Release games block your ability to grow',
                'You’re pushed into tech you don’t control'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-500 group-hover:text-slate-700 transition-colors">
                   <X size={20} className="text-red-400 shrink-0 mt-0.5" />
                   <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Freedom */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-teal-100 shadow-xl shadow-teal-900/5 relative overflow-hidden group ring-1 ring-teal-500/20">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#8CBAC4] to-[#C98B39]" />
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">The LifeCo Model</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">You Keep 100%</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['Your Book', 'Your Renewals', 'Your Contracts', 'Your Brand'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-bold bg-slate-50 px-3 py-2 rounded-lg text-sm md:text-base">
                      <Check size={16} className="text-[#8CBAC4]" /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">You Gain</h4>
                 <ul className="space-y-3">
                   {[
                     'Access to premium carriers',
                     'Transparent, top-tier comp',
                     'AI-driven operational power',
                     'Automated recruitment + scaling systems'
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-slate-700 text-sm md:text-base">
                        <div className="bg-[#C98B39]/10 p-1 rounded-full mt-0.5">
                          <Check size={12} className="text-[#C98B39] stroke-[3px]" />
                        </div>
                        <span>{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO WE SERVE */}
      <section className="py-24 bg-[#F8FAFC] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
             <div className="lg:col-span-4">
                <h2 className="text-4xl md:text-5xl font-oswald font-bold text-slate-900 mb-6">Who We Serve</h2>
                <p className="text-lg text-slate-500 font-light mb-8">
                   This is agency freedom — engineered for the top 1%.
                </p>
                <Button variant="gold" onClick={onOpenModal} icon={<ArrowRight size={16}/>} className="w-full sm:w-auto">
                   Check Eligibility
                </Button>
             </div>

             <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { label: '$1M+ / year agencies', color: 'border-[#8CBAC4] bg-[#8CBAC4]/5 text-[#568593]', icon: TrendingUp },
                  { label: 'Multi-state agency owners', color: 'border-slate-200 bg-white text-slate-700', icon: Building2 },
                  { label: 'Teams scaling to 50–500 agents', color: 'border-[#C98B39] bg-[#C98B39]/5 text-[#C98B39]', icon: Users },
                  { label: 'Owners who want AI infrastructure', color: 'border-slate-200 bg-white text-slate-700', icon: Zap },
                  { label: 'Operators who refuse to lose control', color: 'border-slate-200 bg-white text-slate-700', icon: Lock },
                ].map((card, i) => (
                   <motion.div 
                     key={i}
                     whileHover={{ y: -5 }}
                     className={`p-6 rounded-xl border-l-4 shadow-sm flex items-center gap-4 ${card.color}`}
                   >
                     <card.icon size={24} className="shrink-0" />
                     <span className="font-display font-bold text-base md:text-lg">{card.label}</span>
                   </motion.div>
                ))}
             </div>
          </div>
          
          <div className="mt-20 text-center border-t border-slate-200 pt-12">
             <p className="text-2xl md:text-3xl font-oswald font-bold text-slate-400 uppercase">
               If you’re small, you’re not ready. <br className="md:hidden"/>
               <span className="text-slate-900">If you’re elite, you’re home.</span>
             </p>
          </div>
        </div>
      </section>

    </div>
  );
};