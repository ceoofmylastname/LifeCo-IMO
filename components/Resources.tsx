import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Bot, PlayCircle, ArrowRight, Shield, MessageSquare, Megaphone, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const Resources: React.FC = () => {
  const features = [
    { 
      name: "Carrier Resources & Product Guides", 
      desc: "Always updated, always organized, always easy to find.", 
      icon: FileText 
    },
    { 
      name: "AI & Automation Tools", 
      desc: "Plug-and-play agents, workflows, scripts, and automations that turn hours of admin into minutes.", 
      icon: Bot 
    },
    { 
      name: "Sales Scripts & Frameworks", 
      desc: "Field-tested, high-conversion discovery frameworks and objection handling ready to use today.", 
      icon: MessageSquare 
    },
    { 
      name: "Compliance Center", 
      desc: "Everything you need to stay clean, accurate, and fully compliant across all carriers.", 
      icon: Shield 
    },
    { 
      name: "Marketing & Lead Resources", 
      desc: "Creative templates, funnels, outreach frameworks, and real lead-gen strategies used by top-earning agencies.", 
      icon: Megaphone 
    },
    { 
      name: "Training Library", 
      desc: "Short videos, walkthroughs, and skills development sessions for new reps and seasoned producers.", 
      icon: PlayCircle 
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#C98B39] animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Knowledge Hub</span>
           </div>

           <h1 className="text-4xl sm:text-5xl md:text-7xl font-oswald font-bold text-slate-900 mb-6 leading-tight">
             YOUR AGENCY’S <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BBAC4] to-[#C98B39]">COMMAND CENTER FOR GROWTH.</span>
           </h1>
           
           <p className="text-lg md:text-2xl text-slate-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
             Every tool, every training, every blueprint—organized, streamlined, and ready to scale your production without slowing you down.
           </p>
        </motion.div>

        {/* DASHBOARD VISUAL */}
        <motion.div
           initial={{ opacity: 0, y: 40, scale: 0.95 }}
           whileInView={{ opacity: 1, y: 0, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative max-w-5xl mx-auto mb-24"
        >
           <div className="relative rounded-[1.5rem] md:rounded-[2rem] bg-slate-900 p-2 md:p-3 shadow-2xl shadow-teal-900/20 border border-slate-200">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-20 rounded-t-[1.3rem] md:rounded-t-[1.8rem]"></div>
              <div className="rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden bg-slate-50 relative aspect-[16/9] md:aspect-[2/1]">
                  <img 
                    src="https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691e5223d4f9b323177b27d8.png" 
                    alt="LifeCo Resource Center Dashboard" 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
              </div>
           </div>
           {/* Glow */}
           <div className="absolute -inset-4 bg-teal-500/20 blur-[80px] -z-10 rounded-full opacity-60"></div>
        </motion.div>

        {/* INTRO COPY */}
        <div className="max-w-3xl mx-auto text-base md:text-lg text-slate-500 font-light leading-relaxed border-t border-slate-100 pt-12">
           <p className="mb-6">
             The LifeCo Resource Center is your always-on hub for agency training, carrier materials, marketing assets, compliance guidelines, tech walkthroughs, and AI-powered tools. No more digging through emails, PDFs, or outdated portals. 
           </p>
           <p className="text-slate-900 font-medium text-lg md:text-xl">
             This is where serious producers level up—fast.
           </p>
        </div>
      </section>

      {/* 2. FEATURES GRID */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-32">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-500 overflow-hidden hover:-translate-y-1"
          >
             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#8BBAC4] to-[#C98B39] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors mb-6">
                <feature.icon size={28} strokeWidth={1.5} />
             </div>

             <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors">
               {feature.name}
             </h3>
             
             <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light">
               {feature.desc}
             </p>
          </motion.div>
        ))}
      </section>

      {/* 3. SECONDARY COPY / CTA */}
      <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-6">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/30 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <h2 className="text-3xl md:text-5xl font-oswald font-bold text-white mb-8">
             Stop Searching. <span className="text-[#C98B39]">Start Scaling.</span>
           </h2>
           
           <p className="text-lg md:text-xl text-slate-400 font-light mb-12 leading-relaxed max-w-3xl mx-auto">
             Successful agencies don’t grow because they “work harder.” They grow because they have the right systems—organized, automated, and built to scale.
           </p>
           
           <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 mb-16 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center text-left">
                <div>
                   <h3 className="text-white font-bold font-display text-lg md:text-xl mb-4">LifeCo gives you the structure most agencies are missing:</h3>
                   <ul className="space-y-3">
                      {[
                        "Centralized resources",
                        "Lightning-fast access",
                        "Zero clutter",
                        "AI-backed search",
                        "Built for high-volume production"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                           <CheckCircle2 size={18} className="text-[#8BBAC4]" />
                           <span>{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-8">
                   <p className="text-slate-300 italic text-base md:text-lg mb-8">
                     "This is how top producers move faster than the competition. And now you can too."
                   </p>
                   <Button variant="gold" className="w-full md:w-auto text-lg px-10 py-4 shadow-2xl shadow-[#C98B39]/20" icon={<ArrowRight size={18}/>}>
                     Enter Resource Center
                   </Button>
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-4 text-center">
                     Everything you need, one click away.
                   </p>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};