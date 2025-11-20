import React from 'react';
import { Hero } from './Hero';
import { OurCarriers } from './OurCarriers';
import { TrustBar } from './TrustBar';
import { Solutions } from './Solutions';
import { Process } from './Process';
import { Comparison } from './Comparison';
import { AISection } from './AISection';
import { FAQ } from './FAQ';
import { Testimonials } from './Testimonials';
import { Button } from './Button';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="overflow-hidden">
      <Hero onOpenModal={() => onNavigate('partner')} />
      <OurCarriers />
      <TrustBar />
      <Solutions />
      <Process />
      <Comparison onOpenModal={() => onNavigate('partner')} />
      <AISection />
      <FAQ />
      <Testimonials />
      
      {/* CTA Banner */}
      <section className="py-32 relative overflow-hidden bg-white border-t border-slate-100">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-soft-light" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tight">
            Take Control of <br/> Your <span className="text-gradient">Agency Future.</span>
          </h2>
          <p className="text-xl text-slate-500 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Partner with the platform designed for owners. Claim the freedom, compensation, and infrastructure you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button onClick={() => onNavigate('partner')} className="text-lg px-10 py-5 shadow-2xl shadow-teal-500/20">Partner With Us</Button>
            <Button variant="secondary" className="border-slate-200 hover:border-teal-200 hover:bg-white" onClick={() => onNavigate('partner')}>Schedule Strategy Call</Button>
          </div>
        </div>
      </section>
    </div>
  );
};