"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

/**
 * OPTIMIZED GATEWAY SCROLL
 * Cinematic dark break with Sky-Blue accents
 */
export default function GatewayScroll(): React.JSX.Element {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.75], ["-80px", "0px"]);
  const btnOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
  const btnScale = useTransform(scrollYProgress, [0.6, 0.75], [0.95, 1]);

  const cards = [
    { id: 1, side: "left" }, { id: 2, side: "right" },
    { id: 3, side: "left" }, { id: 4, side: "right" },
    { id: 5, side: "left" }, { id: 6, side: "right" },
  ];

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-slate-950 z-40">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Cinematic Backdrop Decor */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,#0ea5e9_0,transparent_70%)] opacity-30" />
        </div>

        {/* TEXT REVEAL */}
        <motion.div 
          style={{ y: contentY }}
          className="absolute inset-0 flex flex-col items-center justify-start text-center px-4 z-0 pt-[30vh]"
        >
          <div className="space-y-6">
            <h2 className="text-sky-500 font-mono text-xs tracking-[0.8em] uppercase opacity-60">
              Infrastructure_View
            </h2>
            <p className="text-white text-6xl md:text-9xl font-oswald uppercase max-w-7xl leading-[0.75] tracking-tighter">
              Seamless <br/><span className="text-slate-600">Integration</span>
            </p>

            <motion.div style={{ opacity: btnOpacity, scale: btnScale }} className="pt-12">
              <button 
                onClick={() => router.push("/contact")}
                className="px-12 py-5 bg-slate-900 border border-sky-500/20 text-sky-400 font-mono text-sm tracking-[0.3em] uppercase hover:border-sky-500 transition-all duration-700 rounded-sm shadow-[0_0_40px_rgba(14,165,233,0.1)]"
              >
                Initialize System
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* SPACIOUS DISPERSION GRID */}
        <div className="relative w-full max-w-7xl z-20 pointer-events-none px-12">
          <div className="grid grid-cols-2 gap-32"> 
            {cards.map((card, index) => (
              <ParabolicCard 
                key={card.id} 
                side={card.side as "left" | "right"} 
                progress={scrollYProgress}
                rowIndex={Math.floor(index / 2)} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ParabolicCard({ side, progress, rowIndex }: { side: "left" | "right", progress: MotionValue<number>, rowIndex: number }) {
  const layers = [
    { x: 130, y: -100, rot: 10, scale: 1.1, z: 10 }, 
    { x: 160, y: -20,  rot: 8,  scale: 1.1, z: 20 }, 
    { x: 45,  y: -10,  rot: 30, scale: 1.1, z: 30 }, 
  ];

  const current = layers[rowIndex];
  const xDist = side === "left" ? `-${current.x}%` : `${current.x}%`;

  const x = useTransform(progress, [0, 0.6], ["0%", xDist]);
  const y = useTransform(progress, [0, 0.6], ["0%", `${current.y}%`]);
  const rotate = useTransform(progress, [0, 0.6], [0, side === "left" ? -current.rot : current.rot]);
  const opacity = useTransform(progress, [0, 0.5, 0.6], [1, 1, 0]);

  return (
    <motion.div
      style={{ x, y, rotate, opacity, transformOrigin: "center center", zIndex: current.z, aspectRatio: "16 / 9" }}
      className="relative w-full bg-slate-900 border border-sky-500/10 rounded-sm overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
    >
      <Image src="/image.png" alt="Infrastructure" fill className="object-cover opacity-80" />
      <div className="absolute inset-0 bg-slate-950/50" />
    </motion.div>
  );
}