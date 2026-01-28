"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import {MediaCard} from "./MediaCard";

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
    { 
      title: "RECONCILIATION_CORE", 
      tag: "FIN_01", 
      desc: "Real-time automated balancing of ledgers with fiscal accuracy.",
      imageSrc: "/image.png"
    },
    { 
      title: "COMPLIANCE_SHIELD", 
      tag: "GOV_02", 
      desc: "Instant VAT/GST calculation and regional tax law syncing.",
      imageSrc: "/image.png"
    },
    { 
      title: "SMART_INVOICING", 
      tag: "DIST_03", 
      desc: "Dynamic PDF generation with custom logic triggers.",
      imageSrc: "/image.png"
    },
    { 
      title: "REVENUE_FORENSICS", 
      tag: "AUDIT_04", 
      desc: "Deep-trace transaction logging and audit trails.",
      imageSrc: "/image.png"
    },
  ];

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* BACKGROUND TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <div className="text-center w-full px-4">
            <span className="text-indigo-600 font-bold tracking-[0.5em] text-[10px] mb-2 block uppercase opacity-70">
              Billing Infrastructure
            </span>
            <h2 className="text-[12vw] font-oswald font-bold text-slate-900 uppercase tracking-[-0.04em] leading-none whitespace-nowrap">
              KWIQ <span className="text-slate-100">PROTOCOL</span>
            </h2>
          </div>
        </div>

        {/* OVERLAPPING CARDS */}
        <div className="relative z-20 w-full h-full max-w-lg mx-auto px-6">
          {cardData.map((card, index) => {
            // Balanced timing for 2:3 ratio
            const start = index * 0.22; 
            const end = start + 0.35; 

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
  const y = useTransform(progress, range, ["100vh", "-100vh"]);
  const opacity = useTransform(progress, [range[0], range[0] + 0.1, range[1] - 0.1, range[1]], [0, 1, 1, 0]);

  return (
    <motion.div 
      style={{ y, opacity }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-full shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]">
        {children}
      </div>
    </motion.div>
  );
}