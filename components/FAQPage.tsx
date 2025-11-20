import React from 'react';
import { FAQ } from './FAQ';

export const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="text-center max-w-4xl mx-auto px-6 mb-12">
         <h1 className="text-5xl md:text-6xl font-oswald font-bold text-slate-900 mb-4">Common Questions</h1>
         <p className="text-slate-500 text-lg font-light">Everything you need to know about partnering with LifeCo.</p>
      </div>
      <FAQ />
    </div>
  );
};