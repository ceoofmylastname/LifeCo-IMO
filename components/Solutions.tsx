import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Bot, Settings, Database } from 'lucide-react';

// Custom component for the hand-drawn circle animation
const HandWrittenHighlight: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!text.includes(highlight)) return <>{text}</>;

  const parts = text.split(highlight);
  
  return (
    <span className="relative inline-block">
      {parts[0]}
      <span className="relative inline-block whitespace-nowrap">
        <span className="relative z-10">{highlight}</span>
        <svg
          className="absolute -top-2 -left-4 w-[110%] h-[140%] pointer-events-none z-0 overflow-visible"
          viewBox="0 0 200 60"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M15,35 C35,10 140,10 175,35 C190,45 180,55 160,58 C100,65 40,60 15,35"
            fill="none"
            stroke="#C98B39" // Brand Gold
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </span>
      {parts[1]}
    </span>
  );
};

const cards = [
  {
    title: "Carrier Access & Top-Tier Contracts",
    highlight: "Top-Tier Contracts",
    desc: "Gain direct access to premium carriers, higher contract levels, and true ownership of your business. No restrictions. No middle-man. No limits on what you can build.",
    icon: ShieldCheck,
  },
  {
    title: "Elite Agency Growth Consulting",
    highlight: "Elite Agency Growth",
    desc: "Access private consulting designed specifically for high-performing agencies generating serious volume. We help you streamline, scale, hire, and expand with clarity and precision.",
    icon: TrendingUp,
  },
  {
    title: "AI-Powered Marketing Engine",
    highlight: "AI-Powered Marketing",
    desc: "Done-for-you AI campaigns, automation, lead pipelines, and brand amplification built for agencies that want dominance — not dabbling. You get systems no other IMO provides.",
    icon: Bot,
  },
  {
    title: "Back-Office Ops & Admin Automation",
    highlight: "Ops & Admin Automation",
    desc: "We eliminate your administrative weight with AI-enhanced onboarding, commissions tracking, compliance workflows, and full operational support. Free yourself to sell, recruit, and expand.",
    icon: Settings,
  },
  {
    title: "Technology & Data Platform",
    highlight: "Technology & Data Platform",
    desc: "Your entire agency powered by a custom portal: performance dashboards, AI insights, training systems, and real-time reporting across all business units. A full enterprise backend — built for scale.",
    icon: Database,
  }
];

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="relative py-32 bg-white overflow-visible">
      
      {/* Background Blur Image behind Title */}
      <div className="absolute top-0 left-0 w-full h-[600px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10"></div>
        {/* Abstract mesh gradient acting as the 'blurred image' */}
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full bg-mesh opacity-80 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-oswald font-bold text-slate-900 mb-6"
          >
            The LifeCo Advantage — <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BBAC4] to-[#C98A3A]">
              How We Empower Elite Agencies
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 font-light leading-relaxed"
          >
            At LifeCo, we give high-performing agencies the infrastructure, technology, and ownership they need to scale without limits. You keep the freedom, the brand, and the contracts — we power everything behind the scenes.
          </motion.p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Top Row: 3 Cards */}
            {cards.slice(0, 3).map((card, i) => (
              <AdvantageCard key={i} card={card} index={i} />
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:max-w-5xl lg:mx-auto">
             {/* Bottom Row: 2 Cards */}
             {cards.slice(3, 5).map((card, i) => (
              <AdvantageCard key={i + 3} card={card} index={i + 3} />
            ))}
        </div>

      </div>
    </section>
  );
};

const AdvantageCard: React.FC<{ card: typeof cards[0], index: number }> = ({ card, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="relative group h-full perspective-1000"
    >
       {/* Animated Colored Shadow/Glow Background */}
       <div className="absolute -inset-1 bg-gradient-to-br from-[#8BBAC4] via-[#8BBAC4] to-[#C98B39] rounded-[2.5rem] opacity-0 group-hover:opacity-60 blur-xl transition-all duration-700 group-hover:duration-500 group-hover:scale-105" />
       
       {/* Static Shadow for non-hover state */}
       <div className="absolute inset-6 bg-[#8BBAC4]/30 rounded-[2rem] blur-2xl transition-all duration-500 group-hover:opacity-0" />

       {/* Main Card */}
       <div className="relative h-full bg-white rounded-[2.2rem] p-8 md:p-10 border border-slate-100 group-hover:border-white/50 shadow-[0_20px_40px_-15px_rgba(139,186,196,0.2)] group-hover:shadow-none transition-all duration-500 flex flex-col items-start z-10 overflow-hidden transform group-hover:-translate-y-2">
          
          {/* Subtle gradient overlay on card bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/30 to-[#8BBAC4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content Wrapper */}
          <div className="relative z-10 w-full">
            {/* Icon with 3D float effect */}
            <div className="w-16 h-16 rounded-2xl bg-[#F2F7F9] border border-[#8BBAC4]/10 text-[#8BBAC4] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-[#C98B39]/10 group-hover:border-[#C98B39]/30 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-[#FFF8F0] group-hover:text-[#C98B39] transition-all duration-500 ease-out">
                <card.icon className="w-8 h-8" />
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-6 leading-tight min-h-[3rem]">
                <HandWrittenHighlight text={card.title} highlight={card.highlight} />
            </h3>

            <p className="text-slate-500 leading-relaxed text-base md:text-lg font-light mb-4">
                {card.desc}
            </p>
          </div>
          
          {/* Bottom Decoration Line */}
           <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#8BBAC4] to-[#C98B39] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ease-out" />
       </div>
    </motion.div>
  );
};
