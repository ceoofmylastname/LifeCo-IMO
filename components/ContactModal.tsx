import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from './Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    agencySize: '', premiumVolume: '',
    goals: [] as string[]
  });

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      alert('Partnership request sent! A Strategic Director will contact you shortly.');
      onClose();
      setStep(1);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-8 border-b border-slate-100 bg-slate-50/50">
          <div>
            <h3 className="text-2xl font-display font-bold text-slate-900">Partner With Us</h3>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mt-1">Step {step} of 3</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-white hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors shadow-sm border border-slate-100"><X size={20} /></button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Full Name</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Email Address</label>
                  <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 outline-none transition-all" placeholder="john@agency.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Phone Number</label>
                  <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 outline-none transition-all" placeholder="(555) 123-4567" />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Current Team Size</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 outline-none transition-all cursor-pointer appearance-none">
                    <option>Just Me (Solo Producer)</option>
                    <option>Small Team (2-10 Writers)</option>
                    <option>Growing Agency (11-50 Writers)</option>
                    <option>Large Organization (50+)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Annual Premium Volume</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 outline-none transition-all cursor-pointer appearance-none">
                    <option>Under $100k</option>
                    <option>$100k - $500k</option>
                    <option>$500k - $1M</option>
                    <option>$1M - $5M</option>
                    <option>$5M+</option>
                  </select>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Primary Goal</label>
                  <div className="grid grid-cols-1 gap-3">
                    {['Increase Compensation', 'Access Better Leads', 'Recruit & Build Agency', 'Operational Support'].map(t => (
                      <label key={t} className="flex items-center space-x-3 p-3 border border-slate-200 rounded-xl hover:bg-teal-50 hover:border-teal-200 cursor-pointer transition-all group">
                        <input type="checkbox" className="accent-teal-600 w-4 h-4" />
                        <span className="text-sm font-medium text-slate-700 group-hover:text-teal-800">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="bg-teal-50 border border-teal-100 p-5 rounded-xl text-sm text-teal-800 flex items-start gap-3">
                  <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center shrink-0 text-teal-600 font-bold text-xs">i</div>
                  <p className="leading-relaxed">Your information is confidential. We do not share data with current uplines or competitors.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
            {step > 1 ? (
              <button type="button" onClick={handleBack} className="flex items-center text-slate-400 hover:text-slate-900 text-sm font-bold px-2 transition-colors uppercase tracking-wide">
                <ArrowLeft size={16} className="mr-1" /> Back
              </button>
            ) : <div></div>}
            
            {step < 3 ? (
              <Button type="button" onClick={handleNext} icon={<ArrowRight size={16} />}>
                Next Step
              </Button>
            ) : (
              <Button type="submit" className="w-full" icon={<Check size={16} />}>
                Submit Request
              </Button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};