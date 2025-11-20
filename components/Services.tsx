
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, TrendingUp, Bot, Settings, Database, ArrowRight, Check, Zap, Star, Lock, BarChart } from 'lucide-react';
import { Button } from './Button';

interface ServicesProps {
  onOpenModal: () => void;
}

// --- Data ---
const services = [
  {
    id: "01",
    title: "Direct Carrier Access & Elite Compensation",
    headline: "You Keep The Contract.",
    desc: "Premium carriers. Immediate access. No politics. We connect you directly to top carriers with high-pay, high-renewal, clean, transparent contracts engineered for serious operators.",
    icon: ShieldCheck,
    bullets: ["100% Vested Day One", "Direct Carrier Payments", "No Hidden Haircuts", "Full Book Ownership"],
    theme: "gold",
    visual: "ContractBadge"
  },
  {
    id: "02",
    title: "AI-Driven Consulting & Growth Strategy",
    headline: "Scale With Intelligence.",
    desc: "Your agency deserves modern intelligence — not outdated playbooks. We help you streamline, scale, hire, and expand with clarity and precision using data-backed strategies.",
    icon: TrendingUp,
    bullets: ["Recruiting Funnels", "Expansion Blueprints", "Sales Script Optimization", "Profitability Audits"],
    theme: "teal",
    visual: "GrowthGraph"
  },
  {
    id: "03",
    title: "Done-For-You Marketing & Automation Engine",
    headline: "Systems That Sell.",
    desc: "While other IMOs hand you PDFs, we hand you systems. Automated follow-up sequences, AI voice bots, and conversion-optimized landing pages that work while you sleep.",
    icon: Bot,
    bullets: ["AI Voice Agents", "SMS Nurture Flows", "Pipeline Automation", "Lead Scoring"],
    theme: "blue",
    visual: "AutomationFlow"
  },
  {
    id: "04",
    title: "Back-Office, Admin & Compliance Support",
    headline: "Freedom From Friction.",
    desc: "Your agency should sell — not drown in paperwork. We handle licensing, policy admin, commissions cleanup, and compliance workflows so you can focus on revenue.",
    icon: Settings,
    bullets: ["Licensing Tracking", "Commission Reconciliation", "Contract Movement", "Compliance Audits"],
    theme: "purple",
    visual: "AdminChecklist"
  },
  {
    id: "05",
    title: "Sales & Technology Platform (AI-Powered)",
    headline: "The Agency OS.",
    desc: "A modern agency requires a modern infrastructure. Custom CRM setup, agent performance dashboards, AI coaching insights, and intelligent lead routing.",
    icon: Database,
    bullets: ["Custom CRM Setup", "Real-Time Dashboards", "AI Call Coaching", "Lead Distribution"],
    theme: "teal",
    visual: "TechDashboard"
  }
];

// --- Visual Components for Each Service ---
// (Visual components ContractBadge, GrowthGraph, etc. remain identical to previous impl, just shortening for brevity in this context update, assume they are here)
const ContractBadge = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-transparent rounded-3xl" />
    <motion.div 
      whileHover={{ scale: 1.05, rotate: -2 }}
      className="relative bg-white p-6 md:p-8 rounded-2xl shadow-2xl shadow-amber-900/10 border border-amber-100 max-w-[280px]"
    >
      <div className="flex justify-between items-start mb-6">
         <div className="p-3 bg-amber-50 rounded-full"><ShieldCheck className="text-amber-600" size={32} /></div>
         <div className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wide rounded-full">Vested</div>
      </div>
      <div className="space-y-2 mb-6">
        <div className="h-2 w-12 bg-slate-100 rounded-full" />
        <div className="h-4 w-full bg-slate-900 rounded-md" />
        <div className="h-4 w-2/3 bg-slate-200 rounded-md" />
      </div>
      <div className="flex items-center gap-3 pt-6 border-t border-slate-50">
        <div className="text-4xl font-oswald font-bold text-amber-500">120%</div>
        <div className="text-xs text-slate-400 font-medium leading-tight">Contract<br/>Level</div>
      </div>
      <div className="absolute -right-4 -top-4 bg-slate-900 text-white p-3 rounded-full shadow-lg">
        <Star size={20} fill="currentColor" />
      </div>
    </motion.div>
  </div>
);

const GrowthGraph = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
    <div className="w-full h-56 md:h-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 md:p-6 relative overflow-hidden">
      <div className="flex justify-between mb-8">
        <div>
           <div className="text-xs text-slate-400 uppercase font-bold">Revenue Velocity</div>
           <div className="text-xl md:text-2xl font-bold text-slate-900">$1.2M</div>
        </div>
        <div className="p-2 bg-teal-50 rounded-lg"><TrendingUp className="text-teal-600" /></div>
      </div>
      <div className="flex items-end gap-2 h-24 w-full">
         {[40, 65, 45, 70, 55, 85, 100].map((h, i) => (
           <motion.div 
             key={i}
             initial={{ height: 0 }}
             whileInView={{ height: `${h}%` }}
             transition={{ delay: i * 0.1, duration: 0.5 }}
             className={`w-full rounded-t-md ${i === 6 ? 'bg-gradient-to-t from-[#8BBAC4] to-[#568593]' : 'bg-slate-100'}`}
           />
         ))}
      </div>
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-1/2 right-4 md:right-8 bg-slate-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-lg text-xs font-bold"
      >
        +42% YoY
      </motion.div>
    </div>
  </div>
);

const AutomationFlow = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative">
       <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center z-10 relative">
          <Bot className="text-blue-500" size={32} />
       </div>
       {[0, 120, 240].map((deg, i) => (
         <motion.div
           key={i}
           className="absolute top-1/2 left-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center"
           animate={{ 
             rotate: 360,
             x: [0, Math.cos(deg * (Math.PI/180)) * 80, 0],
             y: [0, Math.sin(deg * (Math.PI/180)) * 80, 0]
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: i * 2 }}
           style={{ marginLeft: -20, marginTop: -20 }} // centered based on mobile size
         >
           {i === 0 && <MessageSquareIcon size={16} className="text-teal-500"/>}
           {i === 1 && <Zap size={16} className="text-amber-500"/>}
           {i === 2 && <UserIcon size={16} className="text-purple-500"/>}
         </motion.div>
       ))}
       <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] pointer-events-none opacity-20 animate-spin-slow">
          <circle cx="100" cy="100" r="70" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" fill="none" />
       </svg>
    </div>
  </div>
);

const AdminChecklist = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
     <div className="w-[280px] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
        <div className="h-2 bg-purple-500 w-full" />
        <div className="p-5">
           <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-50 rounded-full"><Lock size={20} className="text-purple-600"/></div>
              <span className="font-bold text-slate-900 text-sm">Compliance Audit</span>
           </div>
           <div className="space-y-4">
              {['License Verification', 'Contract Transfer', 'E&O Check'].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                       <Check size={10} className="text-green-600" />
                    </div>
                    <span className="text-xs text-slate-600 line-through opacity-50">{item}</span>
                 </div>
              ))}
           </div>
        </div>
     </div>
  </div>
);

const TechDashboard = () => (
  <div className="relative w-full h-full flex items-center justify-center px-4">
     <div className="w-full max-w-sm bg-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-800">
        <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
           <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"/>
              <div className="w-2 h-2 rounded-full bg-amber-500"/>
              <div className="w-2 h-2 rounded-full bg-green-500"/>
           </div>
           <div className="text-[10px] text-slate-500 font-mono">AGENCY_OS</div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
           <div className="bg-slate-800 p-3 rounded-lg">
              <div className="text-[10px] text-slate-400 mb-1">LEADS</div>
              <div className="text-lg font-bold text-white">842</div>
           </div>
           <div className="bg-slate-800 p-3 rounded-lg">
              <div className="text-[10px] text-slate-400 mb-1">CONVERSION</div>
              <div className="text-lg font-bold text-teal-400">18.4%</div>
           </div>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3">
           <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center"><Bot size={12} className="text-indigo-400"/></div>
              <div className="text-[10px] text-slate-300 truncate">AI Agent: "Booking confirmed..."</div>
           </div>
        </div>
     </div>
  </div>
);

const MessageSquareIcon = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const UserIcon = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;


export const Services: React.FC<ServicesProps> = ({ onOpenModal }) => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-50/50 via-white to-white -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 md:mb-8 shadow-lg shadow-slate-900/20">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-oswald font-bold text-slate-900 mb-6 md:mb-8 leading-[0.9]">
              THE INFRASTRUCTURE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BBAC4] to-[#C98B39]">OF DOMINANCE.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed px-4">
              We don't just give you contracts. We give you an operating system designed to scale high-performance agencies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES SCROLL LIST */}
      <div className="max-w-7xl mx-auto px-6 pb-24 md:pb-32 space-y-20 md:space-y-40">
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* 3. BOTTOM CTA */}
      <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden mx-4 md:mx-6 rounded-[2rem] md:rounded-[3rem]">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />
         <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-6xl font-oswald font-bold text-white mb-6 md:mb-8">
              Ready to Upgrade Your <br/>
              <span className="text-[#C98B39]">Agency Engine?</span>
            </h2>
            <p className="text-base md:text-lg text-slate-400 mb-10 md:mb-12 font-light">
              Stop building from scratch. Plug into the LifeCo infrastructure and scale faster.
            </p>
            <Button variant="gold" onClick={onOpenModal} className="text-lg px-8 py-4 h-auto w-full sm:w-auto" icon={<ArrowRight size={20}/>}>
               Start Your Partnership
            </Button>
         </div>
      </section>
    </div>
  );
};

const ServiceSection: React.FC<{ service: typeof services[0], index: number }> = ({ service, index }) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  
  // Disable parallax on mobile by conditionally applying styles via CSS classes instead of JS
  // For this simplified logic, we use responsive classnames for layout

  return (
    <div 
      ref={ref}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}
    >
      {/* Text Side */}
      <div className="flex-1 space-y-6 md:space-y-8 w-full">
         <div className="flex items-center gap-4">
            <span className="text-5xl md:text-6xl font-oswald font-bold text-slate-100">{service.id}</span>
            <div className={`h-px flex-1 ${service.theme === 'gold' ? 'bg-[#C98B39]' : 'bg-[#8BBAC4]'}`} />
         </div>
         
         <div>
            <h3 className={`text-lg md:text-xl font-bold uppercase tracking-widest mb-2 ${
                service.theme === 'gold' ? 'text-[#C98B39]' : 
                service.theme === 'teal' ? 'text-[#568593]' : 
                'text-slate-500'
            }`}>
                {service.headline}
            </h3>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                {service.title}
            </h2>
         </div>

         <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
            {service.desc}
         </p>

         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-2">
            {service.bullets.map((bullet, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm md:text-base">
                 <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    service.theme === 'gold' ? 'bg-amber-50 text-amber-600' : 'bg-teal-50 text-teal-600'
                 }`}>
                    <Check size={14} strokeWidth={3} />
                 </div>
                 {bullet}
              </li>
            ))}
         </ul>
      </div>

      {/* Visual Side */}
      <div className="flex-1 w-full">
         <div 
           className="relative aspect-square md:aspect-[4/3] bg-slate-50 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl md:shadow-2xl shadow-slate-200/50"
         >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40" />
            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br opacity-30 ${
                service.theme === 'gold' ? 'from-amber-100 to-transparent' : 
                service.theme === 'teal' ? 'from-teal-100 to-transparent' : 
                'from-blue-100 to-transparent'
            }`} />
            
            <div className="relative z-10 w-full h-full">
               {service.visual === 'ContractBadge' && <ContractBadge />}
               {service.visual === 'GrowthGraph' && <GrowthGraph />}
               {service.visual === 'AutomationFlow' && <AutomationFlow />}
               {service.visual === 'AdminChecklist' && <AdminChecklist />}
               {service.visual === 'TechDashboard' && <TechDashboard />}
            </div>
         </div>
      </div>
    </div>
  );
};
