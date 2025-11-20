import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Database, BarChart3, Globe, Zap, Users } from 'lucide-react';

export const AISection: React.FC = () => {
  return (
    <section id="tech" className="py-32 bg-white overflow-hidden relative">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-[20%] -right-[10%] w-[900px] h-[900px] bg-gradient-to-br from-teal-50/50 to-blue-50/50 rounded-full blur-3xl opacity-70"></div>
         <div className="absolute bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-50/50 to-orange-50/50 rounded-full blur-3xl opacity-70"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg shadow-sm">
              <Zap className="text-amber-600 w-5 h-5" />
            </div>
            <span className="text-amber-600 font-bold tracking-wide uppercase text-xs">Agency Infrastructure</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">The Operating System <br/><span className="text-gradient">For Modern Agencies.</span></h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-12 font-light">
            We provide the tech stack you need to recruit at scale, manage your book, and automate your outreach—so you can stop playing admin and start being a CEO.
          </p>

          <div className="space-y-6">
             {[
               { title: 'Unified CRM', desc: 'Manage leads, policies, and agents in one dashboard.', icon: Database, color: 'bg-blue-50 text-blue-600' },
               { title: 'Recruiting Automation', desc: 'Automated funnels to attract and onboard new talent.', icon: Bot, color: 'bg-purple-50 text-purple-600' },
               { title: 'Global Analytics', desc: 'Track overrides, production, and profitability in real-time.', icon: BarChart3, color: 'bg-teal-50 text-teal-600' },
             ].map((item, i) => (
               <div key={i} className="flex gap-6 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 cursor-default">
                 <div className={`mt-1 p-3.5 rounded-2xl h-fit ${item.color}`}>
                   <item.icon className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="text-slate-900 font-bold font-display mb-2 text-lg">{item.title}</h4>
                   <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </motion.div>

        {/* Visualization */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative perspective-1000"
        >
          <div className="glass-card rounded-[2.5rem] p-10 shadow-2xl shadow-teal-900/5 relative z-10 bg-white/60 border border-white">
            {/* Tech Stack Mockup */}
            <div className="flex flex-col gap-6">
               <div className="flex justify-between items-center mb-4">
                  <h4 className="text-slate-900 font-bold">Agency Command Center</h4>
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
               </div>

               {/* Data Rows */}
               <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="p-2 bg-teal-50 rounded-lg text-teal-600"><Globe size={18}/></div>
                        <div>
                           <div className="text-xs text-slate-400 font-bold uppercase">Total Production</div>
                           <div className="text-slate-900 font-bold">$482,000</div>
                        </div>
                     </div>
                     <div className="text-green-500 text-sm font-bold">+18%</div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Users size={18}/></div>
                        <div>
                           <div className="text-xs text-slate-400 font-bold uppercase">Active Agents</div>
                           <div className="text-slate-900 font-bold">142</div>
                        </div>
                     </div>
                     <div className="text-green-500 text-sm font-bold">+5</div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-200 text-center">
                     <div className="text-xs text-slate-400 font-medium mb-2">Recruiting Pipeline</div>
                     <div className="w-full bg-slate-200 rounded-full h-2 mb-1 overflow-hidden">
                        <div className="bg-teal-500 h-full w-3/4"></div>
                     </div>
                     <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase mt-2">
                        <span>Lead</span>
                        <span>Interview</span>
                        <span>Contract</span>
                        <span>Launch</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};