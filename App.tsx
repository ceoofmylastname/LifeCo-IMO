import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickySidebar } from './components/StickySidebar';
import { ContactModal } from './components/ContactModal';

// Pages
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Technology } from './components/Technology';
import { Resources } from './components/Resources';
import { FAQPage } from './components/FAQPage';
import { Partner } from './components/Partner';

function App() {
  const [page, setPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleNavigate = (newPage: string) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar currentPage={page} onNavigate={handleNavigate} />
      <StickySidebar onOpenModal={() => handleNavigate('partner')} />
      
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {page === 'home' && <Home onNavigate={handleNavigate} />}
            {page === 'about' && <About onOpenModal={() => handleNavigate('partner')} />}
            {page === 'services' && <Services onOpenModal={() => handleNavigate('partner')} />}
            {page === 'technology' && <Technology onOpenModal={() => handleNavigate('partner')} />}
            {page === 'resources' && <Resources />}
            {page === 'faq' && <FAQPage />}
            {page === 'partner' && <Partner />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;