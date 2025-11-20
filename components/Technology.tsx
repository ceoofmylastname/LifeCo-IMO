import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Database, BarChart3, Workflow, Zap, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface TechnologyProps {
  onOpenModal: () => void;
}

export const Technology: React.FC<TechnologyProps> = ({ onOpenModal }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8">
              <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Agency Automation OS</span>
           </div>
           
           <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-oswald font-bold text-slate-900 leading-[0.9] tracking-tight mb-8">
             AI WON'T BUILD <br /> YOUR AGENCY. <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BBAC4] to-[#C98B39]">BUT AUTOMATION WILL SCALE IT.</span>
           </h1>
           
           <p className="text-lg md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
             Most agency owners use AI like a toy. <br className="hidden md:block" />
             We turn it into an operating system.
           </p>
        </motion.div>
      </section>

      {/* 2. WORKFLOW VISUAL (SCREENSHOT) */}
      <section className="max-w-6xl mx-auto px-4 mb-32 relative z-10">
         <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="perspective-1000"
         >
            <div className="relative rounded-[1.5rem] md:rounded-[2rem] p-2 bg-gradient-to-b from-slate-200 to-slate-50 shadow-2xl shadow-slate-300/50 border border-slate-200">
               {/* Screen Glare */}
               <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none z-20 rounded-t-[1.3rem] md:rounded-t-[1.8rem]"></div>
               
               <div className="bg-slate-900 rounded-[1.3rem] md:rounded-[1.8rem] overflow-hidden relative aspect-video md:aspect-[16/9] group">
                  {/* n8n Automation Workflow Screenshot */}
                  <img 
                    src="https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691e4be1f05eafc3f3335c7f.png" 
                    alt="n8n Automation Workflow" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/10 pointer-events-none"></div>
                  
                  {/* Floating Labels */}
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-xl flex items-center gap-3 z-30"
                  >
                     <div className="p-2 bg-green-500/20 rounded-lg"><Workflow className="text-green-400 w-4 h-4 md:w-5 md:h-5" /></div>
                     <div>
                        <div className="text-[10px] md:text-xs text-slate-300 uppercase font-bold">Status</div>
                        <div className="text-white font-bold text-sm md:text-base">Workflow Active</div>
                     </div>
                  </motion.div>
               </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-teal-500/20 blur-[100px] -z-10 rounded-full opacity-50"></div>
         </motion.div>
      </section>

      {/* 3. COPY SECTIONS */}
      <section className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-32">
        
        {/* Block 1: Infrastructure */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
           <div>
              <h2 className="text-3xl md:text-4xl font-oswald font-bold text-slate-900 mb-6">
                A Modern Agency Needs More Than Prompts. <span className="text-[#C98B39]">It Needs Infrastructure.</span>
              </h2>
              <div className="space-y-6 text-base md:text-lg text-slate-600 font-light leading-relaxed">
                 <p>
                   AI is everywhere, but real leverage is rare. Most agency owners rely on AI for small tasks — a quick email, a rewritten message, a social post here and there.
                 </p>
                 <p className="font-medium text-slate-900">
                   That’s not leverage. That’s not scale. That’s not how you win.
                 </p>
                 <p>
                   LifeCo gives you the automation layer that turns AI into a machine — a system that books appointments, qualifies leads, manages workflows, tracks revenue, and eliminates the chaos you’ve been carrying.
                 </p>
              </div>
           </div>
           <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent rounded-3xl -z-10"></div>
              <div className="p-6 md:p-8 border border-slate-100 rounded-3xl bg-white shadow-xl">
                 <h3 className="text-xl font-display font-bold text-slate-900 mb-6">The New Advantage</h3>
                 <ul className="space-y-4">
                    {[
                      "Capture & qualify every lead automatically",
                      "Route data through n8n & CRM without friction",
                      "Trigger AI agents that work 24/7",
                      "Analyze performance in real time",
                      "Remove manual work slowing you down"
                    ].map((item, i) => (
                       <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base">
                          <CheckCircle2 className="w-5 h-5 text-teal-500 mt-1 shrink-0" />
                          <span>{item}</span>
                       </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>

        {/* Block 2: AI as Employee */}
        <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
           <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-oswald font-bold mb-8">
                Your AI Should Be Working <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BBAC4] to-[#C98B39]">Harder Than You Are.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 font-light mb-10 leading-relaxed">
                You’ve heard the hype. You’ve tested the tools. But here’s the truth: <br/>
                <strong className="text-white">If the AI in your business isn’t automated, it’s not doing anything meaningful.</strong>
              </p>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-left">
                 {[
                   { icon: Zap, title: "Interpret Intent", desc: "Reads every message instantly." },
                   { icon: Workflow, title: "Trigger Workflows", desc: "Moves leads without clicks." },
                   { icon: Bot, title: "Push Decisions", desc: "Converts leads while you sleep." }
                 ].map((card, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                       <card.icon className="text-[#8BBAC4] w-8 h-8 mb-4" />
                       <h4 className="font-bold text-lg mb-2">{card.title}</h4>
                       <p className="text-sm text-slate-400">{card.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Block 3: The Heavy Lifting */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
           <div className="md:col-span-5 order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-purple-500"><Lock size={24}/></div>
                    <div className="font-bold text-slate-900 text-sm">Secure Data</div>
                 </div>
                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center mt-8">
                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-blue-500"><Database size={24}/></div>
                    <div className="font-bold text-slate-900 text-sm">Unified CRM</div>
                 </div>
                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-amber-500"><Bot size={24}/></div>
                    <div className="font-bold text-slate-900 text-sm">AI Agents</div>
                 </div>
                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center mt-8">
                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-teal-500"><BarChart3 size={24}/></div>
                    <div className="font-bold text-slate-900 text-sm">Real-Time Stats</div>
                 </div>
              </div>
           </div>
           <div className="md:col-span-7 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-oswald font-bold text-slate-900 mb-6">
                You Don’t Need to Be Technical. <br/>
                <span className="text-teal-600">We Do the Heavy Lifting.</span>
              </h2>
              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-6">
                You’re a producer. A builder. A closer. You don’t need to become an engineer to win.
              </p>
              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-8">
                We connect your workflows, automate your tasks, build your AI agents, and make your entire operation run smoother — while you focus on revenue and leadership. If you’re operating at a high level with low-level tech, LifeCo is the bridge.
              </p>
              <Button variant="gold" onClick={onOpenModal} icon={<ArrowRight size={16}/>} className="w-full sm:w-auto">
                Book Your Tech Walkthrough
              </Button>
           </div>
        </div>

      </section>

      {/* 4. THE STACK */}
      <section className="mt-32 py-24 bg-slate-50 border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-slate-900 mb-12 md:mb-16">
              The Agency Automation <span className="text-gradient">Operating System</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
               {[
                 { title: "AI Agents", desc: "Trained on your agency data to handle support and sales." },
                 { title: "Automated Workflows", desc: "n8n pipelines that eliminate manual data entry." },
                 { title: "Custom CRM", desc: "Optimized HighLevel setup for high-volume producers." },
                 { title: "Real-Time Data", desc: "Pipelines that show you exactly where revenue sits." },
                 { title: "Conversation Intel", desc: "AI that listens, learns, and improves agent scripts." },
                 { title: "Performance Dashboards", desc: "Expose gaps instantly with live visualization." }
               ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 text-left"
                  >
                     <div className="w-2 h-2 bg-teal-500 rounded-full mb-4"></div>
                     <h3 className="text-xl font-display font-bold text-slate-900 mb-2">{item.title}</h3>
                     <p className="text-slate-500 font-light text-sm">{item.desc}</p>
                  </motion.div>
               ))}
            </div>

            <div className="mt-20 max-w-2xl mx-auto">
               <p className="text-xl md:text-2xl font-oswald font-bold text-slate-400 mb-8 uppercase">
                 Stop Being Manual in an Automated World.
               </p>
               <Button variant="primary" onClick={onOpenModal} className="w-full md:w-auto text-lg px-12 py-4 shadow-2xl shadow-teal-500/30">
                 Upgrade Your Agency's Automation
               </Button>
            </div>
         </div>
      </section>

    </div>
  );
};