import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-20 px-6 md:px-12 bg-white text-black">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-zinc-100 pb-8">
        {/* Updated H1: Thinner font (font-light), tighter tracking for editorial look */}
        <h1 className="text-6xl md:text-9xl font-light tracking-tighter leading-[0.9] text-zinc-900">
          SELECTED<br/>WORK
        </h1>
        <div className="mb-2 md:mb-4 text-right">
            <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-400">
                Archive 2022 — 2024
            </p>
        </div>
      </div>

      {/* Asymmetrical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} // Reduced margin triggers less aggressively
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`group flex flex-col ${project.widthClass} ${index % 2 !== 0 ? 'md:mt-32' : ''} will-change-transform`}
          >
            <div className="relative overflow-hidden mb-6 cursor-pointer">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 z-10 transition-colors duration-500" />
              <img 
                src={project.imageUrl} 
                alt={project.title}
                loading={index < 2 ? "eager" : "lazy"} // Lazy load images below fold
                decoding="async"
                className="w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 contrast-[1.15]"
                style={{ aspectRatio: index % 3 === 0 ? '4/5' : '16/9' }}
              />
            </div>

            <div className="flex justify-between items-start border-t border-zinc-200 pt-3">
              <div>
                <h3 className="text-xl md:text-3xl font-light tracking-tight mb-1 group-hover:text-zinc-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-400">
                  {project.category}
                </p>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">
                {project.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-40 text-center border-t border-zinc-200 pt-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-300">
          End of Selection
        </p>
      </div>
    </div>
  );
};

export default Projects;