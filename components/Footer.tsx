import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-300 border-t border-slate-800/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-brand-dark to-brand-dark pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="block mb-8 opacity-90 hover:opacity-100 transition-opacity">
               <img 
                src="https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691ccbd50eb06d1a564e678c.png" 
                alt="LifeCo IMO" 
                className="h-16 md:h-20 w-auto brightness-0 invert opacity-90" 
               />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The premier partnership platform for independent agency owners. Full ownership, top compensation, and elite infrastructure.
            </p>
            <div className="flex gap-4">
              {/* Social Icons placeholders */}
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all cursor-pointer">
                <span className="text-xs font-bold">FB</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all cursor-pointer">
                <span className="text-xs font-bold">LN</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all cursor-pointer">
                <span className="text-xs font-bold">IG</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-display font-bold uppercase mb-8 text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Agency Solutions</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Tech Stack</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Lead Platform</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase mb-8 text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors">About LifeCo</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Partner Login</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase mb-8 text-xs tracking-widest">Agency Updates</h4>
            <form className="space-y-4">
              <p className="text-xs text-slate-500">Strategies for the modern agency owner.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-teal-500 rounded-l-lg transition-colors placeholder:text-slate-600"
                />
                <button type="submit" className="bg-teal-600 px-4 rounded-r-lg text-white font-bold hover:bg-teal-500 transition-colors">
                  GO
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800/50 pt-8 text-center text-xs text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4 font-medium">
          <span>&copy; {new Date().getFullYear()} LifeCo IMO. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};