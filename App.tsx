import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Home from './views/Home';
import Projects from './views/Projects';
import About from './views/About';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'HOME':
        return <Home onNavigate={setCurrentView} />;
      case 'PROJECTS':
        return <Projects />;
      case 'ABOUT':
        return <About />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-full bg-white flex items-center justify-center text-black z-50">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[10px] tracking-[0.8em] font-light uppercase animate-pulse"
        >
            beli.kova
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white relative">
      <CustomCursor />
      
      <Navigation currentView={currentView} onChangeView={setCurrentView} />

      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Decorative lines - Made more subtle */}
      <div className="fixed inset-0 pointer-events-none z-[10] opacity-[0.02]">
        <div className="absolute left-10 top-0 bottom-0 w-px bg-black hidden md:block"></div>
        <div className="absolute right-10 top-0 bottom-0 w-px bg-black hidden md:block"></div>
        <div className="absolute left-0 right-0 top-10 h-px bg-black hidden md:block"></div>
        <div className="absolute left-0 right-0 bottom-10 h-px bg-black hidden md:block"></div>
      </div>
    </div>
  );
};

export default App;