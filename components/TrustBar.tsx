import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Q1', growth: 100 },
  { name: 'Q2', growth: 120 },
  { name: 'Q3', growth: 150 },
  { name: 'Q4', growth: 210 },
  { name: 'Q5', growth: 280 },
  { name: 'Q6', growth: 350 },
];

export const TrustBar: React.FC = () => {
  return (
    <section className="py-16 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            
            {/* Text Header */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-display font-bold text-slate-900 leading-tight">
                The Platform for <br/>
                <span className="text-teal-600">Modern Agencies.</span>
              </h2>
              <p className="text-sm text-slate-500 mt-3 font-medium">Scale without the friction.</p>
            </div>

            {/* Stats */}
            <div className="flex flex-col justify-center pl-6 border-l border-slate-200">
              <div className="text-4xl font-display font-bold text-slate-900 mb-1 tracking-tight">100%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Vested Day One</div>
            </div>
            
            <div className="flex flex-col justify-center pl-6 border-l border-slate-200">
              <div className="text-4xl font-display font-bold text-gradient mb-1 tracking-tight">40+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Carrier Partners</div>
            </div>

            {/* Chart */}
            <div className="h-24 w-full opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8BBAC4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8BBAC4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#F1F5F9', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', color: '#0F172A', fontSize: '12px', fontWeight: 'bold' }} 
                    cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="growth" 
                    stroke="#8BBAC4" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorGrowth)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};