import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-20 px-6 md:px-12 bg-white text-black">
      
      {/* Header - Updated to be lighter and thinner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-24"
      >
        <h1 className="text-[12vw] md:text-[10vw] font-light leading-[0.8] tracking-tighter uppercase text-zinc-900">
          About
        </h1>
        <h1 className="text-[12vw] md:text-[10vw] font-light leading-[0.8] tracking-tighter uppercase text-zinc-300 ml-[10vw]">
          Artist
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8">
        
        {/* Philosophy - Left Column */}
        <div className="md:col-span-4 md:col-start-1 lg:col-start-2">
            <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-zinc-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                Philosophy
            </h2>
            <div className="text-lg md:text-xl font-light leading-relaxed space-y-8 text-zinc-800">
                <p>
                    I operate at the intersection of brutalism and elegance. I believe that true luxury lies in the unseen—the negative space, the tension before the movement, the grain that proves existence.
                </p>
                <p>
                    Specializing in fashion & editorial photography, my approach is not to document, but to interpret. I strip away the unnecessary to reveal the architecture of the subject.
                </p>
            </div>
        </div>

        {/* Artist Image - Middle Column (Added per request) */}
        <div className="md:col-span-4 md:col-start-6 relative">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden w-full aspect-[3/4]"
            >
                {/* Placeholder portrait */}
                <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
                    alt="Portrait of the Artist" 
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out contrast-110"
                />
            </motion.div>
             <p className="mt-2 text-[10px] tracking-widest uppercase text-zinc-400 text-right">
                Self-Portrait, 2024
            </p>
        </div>

        {/* Services & Contact - Right Column */}
        <div className="md:col-span-3 md:col-start-10 flex flex-col justify-between h-full">
            <div className="mb-12 md:mb-0">
                <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-zinc-400">Services</h2>
                <ul className="space-y-3 text-sm font-medium uppercase tracking-wide text-zinc-800">
                    <li>Art Direction</li>
                    <li>Editorial Photography</li>
                    <li>Campaign Development</li>
                    <li>Visual Strategy</li>
                    <li>Post-Production</li>
                </ul>
            </div>

            <div>
                <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-zinc-400">Contact</h2>
                <a href="mailto:contact@belikova.studio" className="block text-xl font-bold hover:text-zinc-500 transition-colors mb-2 break-all">
                    contact@<br/>belikova.studio
                </a>
                <a 
                    href="https://t.me/bellik888" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold tracking-widest text-zinc-500 hover:text-zinc-800 transition-colors mt-2 block uppercase"
                >
                    @bellik888
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;