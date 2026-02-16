import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ViewState } from '../types';
import { MANIFESTO_TEXT } from '../constants';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-white">
      
      {/* Left Content */}
      <div className="flex flex-col justify-center px-8 py-20 md:px-24 h-full order-2 md:order-1 relative bg-white">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
            <div className="mb-10 text-[10px] tracking-[0.4em] text-zinc-400 uppercase font-bold">
                Philosophy
            </div>
            
            {/* Optimized Typography: Reduced size for more negative space, refined leading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-[1.3] tracking-tight mb-16 text-zinc-900">
            {MANIFESTO_TEXT}
            </h1>
            
            <button 
                onClick={() => onNavigate('PROJECTS')}
                className="group flex items-center gap-6 text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-800 hover:text-zinc-500 transition-colors"
            >
                <span>Explore Projects</span>
                <div className="w-10 h-px bg-zinc-800 group-hover:w-16 transition-all duration-500 origin-left" />
            </button>
        </motion.div>

        {/* Home Specific Bottom Meta Info */}
        <div className="absolute bottom-10 left-8 md:left-24 flex flex-col gap-1">
            <p className="text-[9px] text-zinc-400 tracking-[0.2em] uppercase">
                Vadim Filatov — Art Direction
            </p>
            <p className="text-[9px] text-zinc-300 tracking-[0.2em] uppercase">
                Est. 2023 — ©2026
            </p>
        </div>

        {/* Social Link */}
        <a 
            href="https://www.instagram.com/beli.kova_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute bottom-10 right-8 text-[9px] font-bold tracking-[0.3em] uppercase hover:text-zinc-500 transition-colors hidden md:block"
        >
            Instagram
        </a>
      </div>

      {/* Right Content - Hero Image */}
      <div className="h-[40vh] md:h-screen w-full relative order-1 md:order-2 overflow-hidden">
        <motion.div
            initial={{ scale: 1.15, filter: 'grayscale(100%)' }}
            animate={{ scale: 1, filter: 'grayscale(0%)' }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
        >
            <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop" 
                alt="Editorial Portrait" 
                className="w-full h-full object-cover contrast-110"
                decoding="async"
            />
            
            {/* Subtle overlay to soften the image transition to the left column */}
            <div className="absolute inset-0 bg-black/5" />
        </motion.div>
        
        {/* Subtle Image Caption */}
        <div className="absolute bottom-10 right-10 text-white mix-blend-difference text-[8px] tracking-[0.4em] uppercase opacity-50">
            Series: Northern Souls
        </div>
      </div>
    </div>
  );
};

export default Home;