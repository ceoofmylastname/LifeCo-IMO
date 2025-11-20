import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageTrail } from './ImageTrail';

interface HeroProps {
  onOpenModal: () => void;
}

const images = [
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d48f84b753578e7474135.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d48f8cdf231e97abb8b7b.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d48f86d309ea5d1311e70.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d48f84b75352693474136.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d48f84b7535734e474137.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d48f84b7535de7a474138.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d48f8ce998954a675053c.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d48f8ce99899e7675053d.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d48f8ce9989741075053e.png",
  "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691d4843ce9989175274ed21.png"
];

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="flex w-full min-h-[100vh] justify-center items-center bg-white relative overflow-hidden pt-20 md:pt-0" ref={ref}>
      {/* 🔥 Trail Animation Background - Hidden on mobile to save performance/space */}
      <div className="hidden md:block absolute inset-0 z-0">
        <ImageTrail containerRef={ref}>
          {images.map((url, index) => (
            <div
              key={index}
              className="flex relative overflow-hidden w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl shadow-xl border border-slate-100 bg-white"
            >
              <img
                src={url}
                alt={`LifeCo Image ${index + 1}`}
                className="object-cover absolute inset-0 w-full h-full"
              />
            </div>
          ))}
        </ImageTrail>
      </div>

      {/* 🌟 Hero Copy */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-4 max-w-7xl mx-auto w-full"
      >
        <h1 className="flex flex-col items-center justify-center text-center select-none px-2">
           
           {/* Small intro */}
           <span className="text-xs sm:text-sm md:text-lg font-display font-bold tracking-[0.3em] text-slate-400 uppercase mb-2 md:mb-4 block">
              Want to
           </span>

           {/* Big Line 1 */}
           <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-oswald font-bold text-slate-900 leading-[0.9] tracking-tight mb-1 md:mb-2">
              DOMINATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CBAC4] to-[#C98B39]">YOUR MARKET,</span>
           </span>

           {/* Middle Line Mixed */}
           <div className="flex flex-wrap justify-center items-baseline gap-x-2 md:gap-x-4 gap-y-1 my-2 md:my-4">
              <span className="text-2xl sm:text-4xl md:text-5xl font-oswald font-bold text-slate-800">
                 KEEP EVERY CONTRACT,
              </span>
              <span className="font-display text-sm sm:text-lg md:text-2xl text-slate-500 italic font-light">
                 and let our engine
              </span>
           </div>

           {/* Big Line 2 with Underline */}
           <div className="relative">
              <span className="block text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-oswald font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8CBAC4] to-[#C98B39] leading-none tracking-tighter pb-2 md:pb-4">
                 PUSH YOUR AGENCY
              </span>
              {/* Modern Slash Underline */}
              <svg className="absolute w-full h-3 md:h-8 bottom-0 left-0 pointer-events-none" viewBox="0 0 350 20" fill="none" preserveAspectRatio="none">
                 <path d="M5 12C80 5 180 18 345 8" stroke="#C98B39" strokeWidth="4" strokeLinecap="round" className="opacity-90" />
              </svg>
           </div>
           
           {/* Outro */}
           <span className="text-lg sm:text-2xl md:text-4xl font-display font-medium text-slate-700 mt-4 md:mt-6">
              past the competition?
           </span>

        </h1>

        <p className="mt-8 md:mt-12 text-sm md:text-xl text-slate-400 max-w-2xl mx-auto select-none font-light tracking-wide mb-10 md:mb-12 px-4 leading-relaxed">
          Verified, high-intent insurance leads engineered for serious producers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full sm:w-auto px-6 sm:px-0">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 rounded-full text-white font-bold text-base md:text-lg bg-gradient-to-r from-[#8CBAC4] to-[#C98B39] hover:brightness-110 transition-all transform hover:scale-105 shadow-[0_10px_30px_-10px_rgba(140,186,196,0.6)]"
          >
            Get Lead Pricing
          </button>

          <button
            onClick={() => document.getElementById('solutions')?.scrollIntoView({behavior: 'smooth'})}
            className="w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 rounded-full text-slate-700 font-medium text-base md:text-lg border border-slate-200 hover:border-teal-500 hover:text-teal-600 bg-white/50 hover:bg-white backdrop-blur-sm transition-all"
          >
            Explore Lead Types
          </button>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-slate-300 animate-bounce hidden md:block"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </motion.div>
    </div>
  );
};