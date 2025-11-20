import React from "react";
import { motion } from "framer-motion";

const BRAND_COLORS = [
  "rgba(139,186,196,0.5)", // Primary Teal - Increased dominance
  "rgba(201,138,58,0.5)",  // Gold - Increased dominance
  "rgba(191,219,220,0.4)", // Light Teal - Increased dominance
];

function FloatingPaths({ position }: { position: number }) {
  const color = BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];
  
  // Horizontal Flow Logic
  // We distribute paths vertically based on 'position'
  // ViewBox height is approx 800, so we spread 36 paths across that height (~22px apart)
  const yBase = position * 25; 
  
  // Add randomness to the wave height so lines aren't parallel
  const curveAmplitude = 50 + Math.random() * 50;
  const curveDir = Math.random() > 0.5 ? 1 : -1;

  // M (Start Left) -> C (Curve Control Points) -> End (Right)
  // Spans from X=-100 to X=1200 to ensure full coverage of viewBox width 1000
  const path = `M -100 ${yBase} C 300 ${yBase + (curveAmplitude * curveDir)} 700 ${yBase - (curveAmplitude * curveDir)} 1200 ${yBase}`;

  return (
    <motion.path
      d={path}
      stroke={color}
      strokeWidth={Math.random() * 3 + 2} // Thicker strokes (2px - 5px)
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0, pathOffset: 0 }}
      animate={{
        pathLength: [0, 0.4, 0], // Length of the "comet" tail
        opacity: [0, 1, 0],      // Fade in/out
        pathOffset: [0, 1, 2]    // Move along the path from start (0) to end (1+)
      }}
      transition={{
        duration: 10 + Math.random() * 5, // Faster, more energetic (10-15s)
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
        delay: Math.random() * 3
      }}
      className="sm:stroke-[2] md:stroke-[4]" 
    />
  );
}

export const BackgroundPaths: React.FC = () => {
  // Creating 36 paths to cover vertical height
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    position: i,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full text-slate-950"
        viewBox="0 0 1000 1000" // Wider viewbox for horizontal flow
        preserveAspectRatio="none"
      >
        {paths.map((path, i) => (
           <React.Fragment key={path.id}>
             {/* On mobile, reduce density */}
             <g className={i % 2 !== 0 ? "hidden sm:block" : "block"}>
                <FloatingPaths position={path.position} />
             </g>
           </React.Fragment>
        ))}
      </svg>
    </div>
  );
};