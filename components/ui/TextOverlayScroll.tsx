"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { MediaCard } from "./MediaCard";

interface BillingModule {
  title: string;
  tag: string;
  desc: string;
  imageSrc: string;
}

interface CardWrapperProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

export default function TextOverlayScroll(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardData: BillingModule[] = [
    { title: "RECONCILIATION_CORE", tag: "FIN_01", desc: "Real-time automated balancing of ledgers.", imageSrc: "/image.png" },
    { title: "COMPLIANCE_SHIELD", tag: "GOV_02", desc: "Instant VAT/GST calculation and syncing.", imageSrc: "/image.png" },
    { title: "SMART_INVOICING", tag: "DIST_03", desc: "Dynamic PDF generation with triggers.", imageSrc: "/image.png" },
    { title: "REVENUE_FORENSICS", tag: "AUDIT_04", desc: "Deep-trace transaction logging.", imageSrc: "/image.png" },
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* BACKGROUND TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4">
          <div className="text-center w-full select-none">
            <motion.span 
              style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0.8, 0.2]) }}
              className="text-sky-500 font-black tracking-[0.5em] text-[11px] mb-4 block uppercase"
            >
              Infrastructure Layer 01
            </motion.span>
            <h2 className="text-[14vw] font-oswald font-black text-slate-950 uppercase tracking-[-0.07em] leading-[0.7] flex flex-col items-center">
              <span className="block">KWIQ</span>
              <span className="block text-slate-200 -mt-[10px] md:-mt-[20px]">PROTOCOL</span>
            </h2>
          </div>
        </div>

        {/* OVERLAPPING CARDS - ZERO GAP LOGIC */}
        <div className="relative z-20 w-full h-full max-w-xl mx-auto px-6">
          {cardData.map((card, index) => {
            /** * ZERO GAP CALCULATION:
             * We divide the total scroll (1.0) by the number of cards.
             * Each card starts exactly where the previous one hit its midpoint.
             */
            const step = 1 / cardData.length;
            const start = index * step;
            const end = (index + 1) * step;

            return (
              <CardWrapper key={card.tag} progress={scrollYProgress} range={[start, end]}>
                <MediaCard 
                  title={card.title} 
                  tag={card.tag} 
                  description={card.desc}
                  imageSrc={card.imageSrc} 
                />
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CardWrapper({ children, progress, range }: CardWrapperProps): React.JSX.Element {
  /**
   * For a "Zero Space" feel, the cards must move quickly. 
   * y: starts from bottom, hits center, exits top.
   * opacity: instantaneous fade-in/out at the boundaries.
   */
  const y = useTransform(progress, range, ["100vh", "-100vh"]);
  
  // Opacity is now "tighter" so there is no ghosting between transitions
  const opacity = useTransform(
    progress, 
    [range[0], range[0] + 0.01, range[1] - 0.01, range[1]], 
    [0, 1, 1, 0]
  );

  return (
    <motion.div 
      style={{ y, opacity }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-full bg-white border border-slate-100 p-0.5">
        {children}
      </div>
    </motion.div>
  );
}