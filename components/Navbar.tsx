import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { NavLink } from '../types';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links: NavLink[] = [
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Technology', href: 'technology' },
    { name: 'Resources', href: 'resources' },
    { name: 'FAQ', href: 'faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm' 
          : 'bg-white/50 backdrop-blur-md py-6 md:py-8 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center group">
          <img 
            src="https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/691ccbd50eb06d1a564e678c.png" 
            alt="LifeCo IMO" 
            className={`w-auto object-contain transition-all duration-500 ${
              isScrolled ? 'h-10 md:h-12' : 'h-16 md:h-20'
            }`}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors relative group ${
                currentPage === link.href
                  ? 'text-teal-700 font-bold'
                  : isScrolled ? 'text-slate-600 hover:text-teal-700' : 'text-slate-700 hover:text-teal-600'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                currentPage === link.href ? 'w-full bg-gradient-to-r from-[#8BBAC4] to-[#C98B39]' : 'w-0 bg-[#8BBAC4]'
              }`}></span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button 
            variant={isScrolled ? "primary" : "gold"} 
            onClick={() => onNavigate('partner')} 
            className="py-2.5 px-6 text-sm shadow-lg"
          >
            Partner With Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors text-slate-900`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col space-y-6 shadow-xl animate-in slide-in-from-top-5 z-40 text-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              className={`text-lg font-display font-medium ${currentPage === link.href ? 'text-teal-600 font-bold' : 'text-slate-900'}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" fullWidth onClick={() => {
            setMobileMenuOpen(false);
            onNavigate('partner');
          }}>
            Partner With Us
          </Button>
        </div>
      )}
    </nav>
  );
};