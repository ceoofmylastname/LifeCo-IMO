import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { OurCarriers } from './OurCarriers';

export const Partner: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* High Impact Hero */}
      <section className="bg-slate-900 text-white pt-32 pb-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/30 to-transparent pointer-events-none" />
         
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
               <div className="flex items-center gap-2 mb-6 text-[#C98B39] font-bold uppercase tracking-widest text-xs">
                  <Star size={14} fill="#C98B39" />
                  <span>Partnership Application</span>
               </div>
               <h1 className="text-4xl sm:text-5xl md:text-7xl font-oswald font-bold mb-6 leading-tight">
                 READY TO <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BBAC4] to-[#C98B39]">OWN YOUR FUTURE?</span>
               </h1>
               <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-8">
                 We are looking for elite agency owners who want to scale. If you're ready for direct contracts, real ownership, and AI infrastructure, let's talk.
               </p>
               
               <div className="space-y-4 mb-8">
                  {['100% Vested Day One', 'Direct Carrier Contracts', 'No Hidden Overrides'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <div className="bg-white/10 p-1 rounded-full"><Check size={14} /></div>
                       <span className="font-medium text-base md:text-lg">{item}</span>
                    </div>
                  ))}
               </div>
            </motion.div>

            {/* Static Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-6 md:p-8 text-slate-900 shadow-2xl shadow-teal-900/20"
            >
               <h3 className="text-2xl font-display font-bold mb-6">Request Partnership</h3>
               <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 block">First Name</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-base" placeholder="John" />
                     </div>
                     <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 block">Last Name</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-base" placeholder="Doe" />
                     </div>
                  </div>
                  <div>
                     <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 block">Email</label>
                     <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-base" placeholder="john@agency.com" />
                  </div>
                  <div>
                     <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 block">Phone</label>
                     <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-base" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                     <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 block">Current Agency Size</label>
                     <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-base">
                        <option>Just Me</option>
                        <option>Small Team (2-10)</option>
                        <option>Large Agency (11+)</option>
                     </select>
                  </div>
                  <button className="w-full py-4 bg-gradient-to-r from-[#8BBAC4] to-[#C98B39] text-white font-bold rounded-xl hover:shadow-lg hover:brightness-110 transition-all mt-4 flex items-center justify-center gap-2">
                     Submit Application <ArrowRight size={18} />
                  </button>
                  <p className="text-xs text-center text-slate-400 mt-4">Your information is kept 100% confidential.</p>
               </form>
            </motion.div>
         </div>
      </section>
      
      <OurCarriers />
    </div>
  );
};