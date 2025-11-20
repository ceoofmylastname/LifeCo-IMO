import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageTrailProps {
  children: React.ReactNode[];
  containerRef: React.RefObject<HTMLDivElement | null>;
}

interface TrailItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
  imageIndex: number;
}

export const ImageTrail: React.FC<ImageTrailProps> = ({ children, containerRef }) => {
  const [activeItem, setActiveItem] = useState<TrailItem | null>(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);
  const counter = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle slightly to prevent too frequent updates
      if (now - lastTime.current < 50) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const distance = Math.hypot(
        x - lastPosition.current.x,
        y - lastPosition.current.y
      );

      // Distance threshold - creates separation between image appearances
      if (distance > 100) {
        lastPosition.current = { x, y };
        lastTime.current = now;
        
        const newItem: TrailItem = {
          id: counter.current++,
          x,
          y,
          rotation: Math.random() * 20 - 10,
          imageIndex: imageIndex.current,
        };

        // Replace the current item immediately
        setActiveItem(newItem);
        
        imageIndex.current = (imageIndex.current + 1) % React.Children.count(children);
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [children, containerRef]);

  return (
    <div className="relative w-full h-full pointer-events-none">
        <AnimatePresence mode="popLayout">
          {activeItem && (
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.5, x: activeItem.x, y: activeItem.y }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.8, // Slight scale up on exit for pop effect
                transition: { duration: 0.2, ease: "easeIn" } 
              }}
              style={{ 
                position: 'absolute', 
                left: 0, 
                top: 0,
                rotate: activeItem.rotation,
              }}
              className="pointer-events-none flex items-center justify-center"
            >
               <div className="-translate-x-1/2 -translate-y-1/2">
                 {React.Children.toArray(children)[activeItem.imageIndex]}
               </div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
};