import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../types';

interface NavigationProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onChangeView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (view: ViewState) => {
    onChangeView(view);
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-10 md:py-8 mix-blend-difference text-white">
        <div 
          className="text-xl md:text-2xl font-black tracking-tighter cursor-pointer"
          onClick={() => handleNavClick('HOME')}
        >
          beli.kova
        </div>
        <button 
          onClick={toggleMenu}
          className="flex items-center gap-2 text-[10px] tracking-[0.2em] font-bold uppercase hover:opacity-70 transition-opacity"
        >
          <span>{isOpen ? 'Close' : 'Menu'}</span>
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </header>

      {/* Vertical Side Labels (Hidden on mobile) */}
      <div className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 z-40 mix-blend-difference text-white pointer-events-none">
        <div className="-rotate-90 origin-left text-[10px] tracking-[0.25em] font-bold uppercase whitespace-nowrap opacity-60">
          Fashion & Editorial Photography
        </div>
      </div>
      <div className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-40 mix-blend-difference text-white pointer-events-none">
        <div className="rotate-90 origin-right text-[10px] tracking-[0.25em] font-bold uppercase whitespace-nowrap opacity-60">
          Est. 2026
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {(['HOME', 'PROJECTS', 'ABOUT'] as ViewState[]).map((view, i) => (
                <motion.button
                  key={view}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onClick={() => handleNavClick(view)}
                  className={`text-6xl md:text-8xl font-black tracking-tighter uppercase transition-colors duration-300 ${
                    currentView === view ? 'text-black' : 'text-zinc-200 hover:text-zinc-400'
                  }`}
                >
                  {view}
                </motion.button>
              ))}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 text-[10px] tracking-[0.2em] text-zinc-400 uppercase"
            >
              Prague, Czech Republic
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;