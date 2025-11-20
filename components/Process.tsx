import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, PenTool, Rocket, TrendingUp } from 'lucide-react';
import { AnimatedBadge } from './AnimatedBadge';

const steps = [
  {
    id: "01",
    title: "Discovery",
    subtitle: "Analysis & Strategy",
    desc: "We analyze your current setup, carrier mix, and goals to tailor your custom partnership plan.",
    icon: ClipboardList,
    theme: "teal",
    gradient: "from-teal-400 to-cyan-300"
  },
  {
    id: "02",
    title: "Contracting",
    subtitle: "Digital & Paperless",
    desc: "Streamlined, digital contracting with top carriers. No paper, no headaches. 100% Digital.",
    icon: PenTool,
    theme: "teal",
    gradient: "from-cyan-400 to-teal-500"
  },
  {
    id: "03",
    title: "Launch",
    subtitle: "Systems Integration",
    desc: "Plug into our CRM, lead flows, and training systems immediately. Live in days, not weeks.",
    icon: Rocket,
    theme: "gold",
    gradient: "from-amber-300 to-orange-400"
  },
  {
    id: "04",
    title: "Scale",
    subtitle: "Growth & Overrides",
    desc: "Recruit agents, track overrides, and optimize profitability with real-time performance data.",
    icon: TrendingUp,
    theme: "gold",
    gradient: "from-orange-400 to-red-400"
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* 🌐 Background Grid & Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-teal-50/30 blur-[120px] rounded-full mix-blend-multiply"></div>
      </div>
      
      {/* Top Fade to blend seamlessly */}
       <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex justify-center w-full">
            <AnimatedBadge text="Streamlined Onboarding" color="#8BBAC4" />
          </div>
          <h2 className="text-4xl md:text-6xl font-oswald font-bold text-slate-900 mb-4 md:mb-6">
            The Partnership <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BBAC4] to-[#C98B39]">Roadmap</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            From onboarding to override, we've removed the friction so you can focus on production and recruiting.
          </p>
        </div>

        {/* 🚀 Timeline Container */}
        <div className="relative">
          
          {/* Desktop Connecting Line (Animated Stream) */}
          <div className="hidden lg:block absolute top-[45px] left-0 w-full h-1 bg-slate-100 rounded-full overflow-hidden z-0">
             {/* Moving Gradient Beam */}
             <motion.div 
               className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-[#8BBAC4] to-transparent opacity-80"
               animate={{ x: ["-100%", "200%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             />
          </div>

          {/* Mobile Connecting Line - Adjusted for better alignment */}
          <div className="lg:hidden absolute top-0 left-4 bottom-0 w-1 bg-slate-100 z-0 rounded-full"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 group perspective-1000"
              >
                {/* Node on the Line */}
                <div className="hidden lg:flex absolute top-[33px] left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-4 border-white shadow-md z-20 items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:shadow-lg">
                   <div className={`w-2.5 h-2.5 rounded-full ${step.theme === 'teal' ? 'bg-[#8BBAC4]' : 'bg-[#C98B39]'} group-hover:animate-pulse`}></div>
                </div>

                {/* Mobile Node - Adjusted to align with line at left-4 */}
                <div className="lg:hidden absolute top-8 left-[10px] w-5 h-5 rounded-full bg-white border-2 border-slate-200 z-20 flex items-center justify-center">
                   <div className={`w-2 h-2 rounded-full ${step.theme === 'teal' ? 'bg-[#8BBAC4]' : 'bg-[#C98B39]'}`}></div>
                </div>

                {/* Card Container */}
                <div className="pl-12 lg:pl-0 lg:pt-16">
                  
                  {/* The 3D Card */}
                  <div 
                    className="relative bg-white rounded-[2rem] p-6 md:p-8 border border-slate-100 shadow-lg transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-x-2 group-hover:shadow-2xl group-hover:shadow-slate-200/30 overflow-hidden"
                  >
                    {/* Top Gradient Line */}
                    <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Floating Number Background */}
                    <div className="absolute -bottom-6 -right-6 text-[6rem] md:text-[8rem] font-oswald font-bold text-slate-50 opacity-50 select-none pointer-events-none group-hover:scale-110 group-hover:text-slate-100 transition-all duration-500">
                      {step.id}
                    </div>

                    {/* Icon Container */}
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl mb-6 flex items-center justify-center relative transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${
                      step.theme === 'teal' 
                        ? 'bg-teal-50 text-[#8BBAC4] group-hover:bg-[#8BBAC4] group-hover:text-white group-hover:shadow-teal-200' 
                        : 'bg-orange-50 text-[#C98B39] group-hover:bg-[#C98B39] group-hover:text-white group-hover:shadow-orange-200'
                    }`}>
                      <step.icon size={24} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${step.theme === 'teal' ? 'text-teal-500' : 'text-amber-500'}`}>
                        {step.subtitle}
                      </div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-light group-hover:text-slate-600">
                        {step.desc}
                      </p>
                    </div>

                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundSize: '200% 200%', animation: 'none' }} />
                  </div>

                  {/* Reflection Shadow (Bottom) */}
                  <div className="absolute -bottom-4 left-6 right-6 h-4 bg-slate-900/5 blur-xl rounded-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 lg:block hidden pointer-events-none"></div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Fade */}
       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};