"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export function ThreeDPhotoCarousel() {
  const containerRef = useRef(null);

  const cards = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
    "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800",
    "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800",
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800",
    "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800",
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Rotation logic (360 degrees)
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // 2. THE PAUSE MAGIC:
  // We translate the content vertically to counteract the natural scroll.
  // 0vh at the start, 200vh at the end (because the track is 300vh total).
  const yTranslate = useTransform(scrollYProgress, [0, 1], ["0vh", "200vh"]);

  // 3D Math
  const faceCount = cards.length;
  const cylinderWidth = 1300; 
  const faceWidth = cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);

  return (
    /* The Track: 300vh height provides the scroll distance */
    <div 
      ref={containerRef} 
      className="relative w-full overflow-visible" 
      style={{ height: "300vh", backgroundColor: "#0B0E14" }}
    >
      {/* This is the "Visual Frame". 
        Instead of 'sticky', we use the 'yTranslate' to make it look stationary.
      */}
      <motion.div 
        style={{ y: yTranslate }}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden z-10"
      >
        {/* Security Dark Canvas */}
        <div className="absolute inset-0 bg-[#0B0E14] shadow-[0_0_100px_rgba(0,0,0,1)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b_0%,#0B0E14_100%)] opacity-70" />
        
        {/* 3D Scene */}
        <div 
          className="relative flex h-full w-full items-center justify-center" 
          style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="relative flex h-full w-full items-center justify-center"
            style={{ 
              transformStyle: "preserve-3d",
              rotateY: rotation 
            }}
          >
            {cards.map((img, i) => (
              <div
                key={i}
                className="absolute flex h-[450px] items-center justify-center rounded-2xl border border-white/10 bg-slate-900 shadow-2xl"
                style={{
                  width: `${faceWidth}px`,
                  backfaceVisibility: "hidden",
                  transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
                }}
              >
                <img src={img} alt="" className="h-full w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* HUD Elements */}

      </motion.div>
    </div>
  );
}