import React from 'react';
import { ShoppingCart, Bot, FileText } from 'lucide-react';

interface StickySidebarProps {
  onOpenModal: () => void;
}

export const StickySidebar: React.FC<StickySidebarProps> = ({ onOpenModal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 font-sans pointer-events-auto">
      {/* Purchase Leads */}
      <button 
        onClick={onOpenModal}
        className="group relative flex items-center justify-end h-14"
      >
        <div className="absolute right-[3rem] top-1 bottom-1 bg-[#C98B39] text-white flex items-center px-6 py-2 rounded-l-full transition-transform duration-300 ease-out translate-x-[120%] group-hover:translate-x-0 shadow-lg z-0">
          <span className="whitespace-nowrap font-display font-bold text-sm pr-2">Purchase Leads</span>
        </div>
        <div className="w-14 h-14 bg-[#C98B39] text-white flex items-center justify-center rounded-l-xl relative z-10 shadow-lg group-hover:w-16 transition-all duration-300">
          <ShoppingCart size={24} />
        </div>
      </button>

      {/* AI Consulting */}
      <button 
        onClick={() => scrollTo('tech')}
        className="group relative flex items-center justify-end h-14"
      >
        <div className="absolute right-[3rem] top-1 bottom-1 bg-[#C98B39] text-white flex items-center px-6 py-2 rounded-l-full transition-transform duration-300 ease-out translate-x-[120%] group-hover:translate-x-0 shadow-lg z-0">
          <span className="whitespace-nowrap font-display font-bold text-sm pr-2">AI Consulting</span>
        </div>
        <div className="w-14 h-14 bg-[#C98B39] text-white flex items-center justify-center rounded-l-xl relative z-10 shadow-lg group-hover:w-16 transition-all duration-300">
          <Bot size={24} />
        </div>
      </button>

      {/* Resource Center */}
      <button 
        onClick={() => scrollTo('solutions')}
        className="group relative flex items-center justify-end h-14"
      >
        <div className="absolute right-[3rem] top-1 bottom-1 bg-[#C98B39] text-white flex items-center px-6 py-2 rounded-l-full transition-transform duration-300 ease-out translate-x-[120%] group-hover:translate-x-0 shadow-lg z-0">
          <span className="whitespace-nowrap font-display font-bold text-sm pr-2">Resource Center</span>
        </div>
        <div className="w-14 h-14 bg-[#C98B39] text-white flex items-center justify-center rounded-l-xl relative z-10 shadow-lg group-hover:w-16 transition-all duration-300">
          <FileText size={24} />
        </div>
      </button>
    </div>
  );
};