import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useVelocity } from 'framer-motion';

// High-quality camera shutter sound
const SHUTTER_AUDIO_URL = "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3";

const CustomCursor: React.FC = () => {
  // Use MotionValues instead of State for high-performance updates (bypassing React render cycle)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth physics for the movement
  // Increased damping slightly to reduce jitter calculation
  const springConfig = { damping: 30, stiffness: 350, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Calculate velocity to drive the tilt effect
  const velocityX = useVelocity(smoothX);
  const velocityY = useVelocity(smoothY);

  // Map velocity to rotation (Tilt effect)
  const rotateX = useTransform(velocityY, [-1000, 1000], [5, -5]); // Reduced tilt range for performance
  const rotateY = useTransform(velocityX, [-1000, 1000], [-5, 5]);

  const [isPointer, setIsPointer] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Use refs to avoid closure staleness in event listeners without re-binding
  const isPointerRef = useRef(false);

  // Preload audio
  useEffect(() => {
    const audio = new Audio(SHUTTER_AUDIO_URL);
    audio.load();
  }, []);

  const playShutterSound = () => {
    const audio = new Audio(SHUTTER_AUDIO_URL);
    audio.volume = 0.4;
    audio.play().catch(() => {});
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update MotionValues directly
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // PERFORMANCE FIX: Removed window.getComputedStyle(target).
      // Checking computed styles triggers a "Recalculate Style" on every frame (reflow),
      // which causes massive lag. We switch to simple tag checking.
      const target = e.target as HTMLElement;
      
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.classList.contains('cursor-pointer'); // Check for specific class if needed
        
      if (isClickable !== isPointerRef.current) {
        isPointerRef.current = isClickable;
        setIsPointer(isClickable);
      }
    };

    const handleMouseDown = () => {
        setClickCount(prev => prev + 1);
        playShutterSound();
    };

    // Use passive listener for better scroll performance where applicable
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [mouseX, mouseY]);

  return (
    <>
        {/* Full Screen Flash Effect - Optimized with will-change */}
        <AnimatePresence>
            {clickCount > 0 && (
                <motion.div
                    key={`flash-overlay-${clickCount}`}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="fixed inset-0 z-[10000] bg-white pointer-events-none mix-blend-hard-light will-change-opacity"
                />
            )}
        </AnimatePresence>

        <div className="fixed top-0 left-0 pointer-events-none z-[9999]">
            {/* 
                3D Wrapper
            */}
            <motion.div
                className="relative -ml-[32px] -mt-[21px] will-change-transform" 
                style={{
                    x: smoothX,
                    y: smoothY,
                    rotateX: rotateX,
                    rotateY: rotateY,
                    perspective: 800,
                    transformStyle: "preserve-3d"
                }}
                animate={{
                    scale: isPointer ? 0.9 : 1, 
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15
                }}
            >
                {/* Flash Effect Layer */}
                <AnimatePresence>
                    {clickCount > 0 && (
                        <motion.div
                            key={`flash-emitter-${clickCount}`}
                            className="absolute left-[72%] top-[25%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_50px_25px_rgba(255,255,255,1)]"
                            initial={{ opacity: 1, scale: 0.5 }}
                            animate={{ opacity: 0, scale: 4 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            style={{ zIndex: 20 }}
                        />
                    )}
                </AnimatePresence>

                {/* Camera Component */}
                <div className="relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                    <img 
                        src="https://i.ibb.co/KZNvDZx/20214-M11-P-silver-front-11729-Summilux-M-50-f1-4-silver-03070.webp"
                        alt="Leica Camera Cursor"
                        className="w-16 h-auto object-contain filter contrast-105" 
                        decoding="async"
                    />
                </div>
            </motion.div>
        </div>
    </>
  );
};

export default CustomCursor;