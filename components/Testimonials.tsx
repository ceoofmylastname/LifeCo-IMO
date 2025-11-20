
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Marcus Delaney",
    profession: "Agency Owner • Texas",
    rating: 5,
    description:
      "LifeCo rebuilt the backend of my agency. AI qualification, automated workflows, inbound sorting, everything. I’m closing more business with half the effort.",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "testimonial-2",
    name: "Julia Ramirez",
    profession: "Senior Broker • Florida",
    rating: 4.5,
    description:
      "Before LifeCo, I was drowning in admin work. Now 70% of my process runs automatically. My agents finally have a system that actually supports production.",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "testimonial-3",
    name: "Daniel Brooks",
    profession: "Independent Producer • Georgia",
    rating: 5,
    description:
      "The AI coaching and automation literally doubled my appointments. If you're trying to scale without the chaos, this is the infrastructure you need.",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "testimonial-4",
    name: "Erika Thompson",
    profession: "Agency Builder • Arizona",
    rating: 5,
    description:
      "LifeCo gave me enterprise-level systems without enterprise-level headaches. My team is faster, cleaner, and more profitable than ever.",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop"
  },
];

export const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const getCardStyle = (index: number) => {
    const offset = (index - active + TESTIMONIALS.length) % TESTIMONIALS.length;
    const zIndex = TESTIMONIALS.length - offset;
    const scale = 1 - offset * 0.05;
    const opacity = offset === 0 ? 1 : 1 - offset * 0.2;
    const y = offset * 15;

    return { zIndex, scale, opacity, y };
  };

  return (
    <section className="bg-white px-6 py-20 md:py-24 border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-[#1A1A1A] font-display mb-4">
            What Agency Owners Say About LifeCo
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-[#555] font-light">
            Real producers. Real systems. Real results.  
            See how top agents scale faster with LifeCo IMO behind them.
          </p>
        </div>

        <div className="relative h-[500px] md:h-[400px] w-full flex justify-center items-start">
          <div className="relative w-full max-w-2xl h-full">
             {TESTIMONIALS.map((testimonial, index) => {
               const style = getCardStyle(index);
               // Only render visible cards to avoid DOM clutter
               const offset = (index - active + TESTIMONIALS.length) % TESTIMONIALS.length;
               if (offset > 2) return null; 

               return (
                 <motion.div
                   key={testimonial.id}
                   initial={false}
                   animate={{
                     zIndex: style.zIndex,
                     scale: style.scale,
                     opacity: style.opacity,
                     y: style.y,
                   }}
                   transition={{ duration: 0.4, ease: "easeInOut" }}
                   className="absolute top-0 left-0 right-0 bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 rounded-3xl p-8 md:p-12 cursor-pointer"
                   onClick={() => {
                      setActive(index);
                      setAutoplay(false);
                   }}
                 >
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                       <img 
                         src={testimonial.avatarUrl} 
                         alt={testimonial.name}
                         className="!size-14 md:!size-16 rounded-full border border-[#E5E7EB] object-cover flex-shrink-0 shadow-sm"
                       />
                       <div>
                          <div className="flex gap-1 mb-3 justify-center md:justify-start">
                             {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  size={18} 
                                  fill={i < Math.floor(testimonial.rating) ? "#C5963A" : "none"} 
                                  className={i < Math.floor(testimonial.rating) ? "text-[#C5963A]" : "text-slate-200"} 
                                />
                             ))}
                          </div>
                          <p className="text-[#1C2833] text-base md:text-lg leading-relaxed font-medium mb-6 text-center md:text-left italic">
                             "{testimonial.description}"
                          </p>
                          <div className="text-center md:text-left">
                             <h4 className="text-slate-900 font-bold font-display text-lg">{testimonial.name}</h4>
                             <p className="text-slate-500 text-sm font-medium">{testimonial.profession}</p>
                          </div>
                       </div>
                    </div>
                 </motion.div>
               );
             })}
          </div>
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 -mt-8 relative z-10">
           {TESTIMONIALS.map((_, i) => (
             <button
               key={i}
               onClick={() => {
                 setActive(i);
                 setAutoplay(false);
               }}
               className={`rounded-full transition-all duration-300 ${
                 active === i ? "bg-[#C98B39] w-8 h-2" : "bg-slate-200 hover:bg-slate-300 w-2 h-2"
               }`}
               aria-label={`Go to slide ${i + 1}`}
             />
           ))}
        </div>

      </div>
    </section>
  );
};