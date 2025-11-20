import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-display font-bold tracking-wide transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group";
  
  const variants = {
    primary: "bg-teal-600 text-white shadow-[0_10px_20px_-5px_rgba(86,133,147,0.3)] hover:shadow-[0_15px_25px_-5px_rgba(86,133,147,0.4)] hover:-translate-y-0.5 focus:ring-teal-500 border border-transparent",
    gold: "bg-gradient-to-r from-brand-gold to-amber-600 text-white shadow-[0_10px_20px_-5px_rgba(201,139,57,0.3)] hover:shadow-[0_15px_25px_-5px_rgba(201,139,57,0.4)] hover:-translate-y-0.5 focus:ring-amber-500 border border-transparent",
    secondary: "bg-white border border-slate-200 text-slate-700 hover:border-teal-500 hover:text-teal-700 hover:shadow-lg focus:ring-slate-200",
    ghost: "bg-transparent text-slate-500 hover:text-teal-600 hover:bg-teal-50/50",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {/* Shine effect for primary/gold buttons */}
      {(variant === 'primary' || variant === 'gold') && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-[-20deg]" />
      )}
      
      <span className="relative flex items-center">
        {children}
        {icon && <span className="ml-2 transition-transform group-hover:translate-x-1">{icon}</span>}
      </span>
    </motion.button>
  );
};