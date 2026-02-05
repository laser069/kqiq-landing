"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

/**
 * REFINED GATEWAY SCROLL
 * Features a "Zipper" sequential opening effect.
 * Images appear in pairs (1st two, then 2nd two, then 3rd two).
 */
export default function GatewayScroll(): React.JSX.Element {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Text Reveal Logic - stays late after images unzip
  const contentOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.7, 0.85], ["40px", "0px"]);
  const btnOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const btnScale = useTransform(scrollYProgress, [0.85, 1], [0.8, 1]);

  const pairs = [
    { id: "pair-1", left: "/billing.png", right: "/dashboard.png", range: [0.0, 0.45], z: 30 },
    { id: "pair-2", left: "/dashboard.png", right: "/billing.png", range: [0.25, 0.75], z: 20 },
    { id: "pair-3", left: "/billing.png", right: "/dashboard.png", range: [0.55, 0.95], z: 10 },
  ];

  return (
    <section ref={containerRef} className="relative h-[120vh] bg-slate-950 z-40">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Cinematic Backdrop Decor */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,#0ea5e9_0,transparent_75%)] opacity-20" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>

        {/* TEXT REVEAL (Final Background layer) */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-0"
        >
          <div className="space-y-8">
            <h2 className="text-sky-500 font-mono text-sm tracking-[1em] uppercase opacity-60">
              Infrastructure_View
            </h2>
            <p className="text-white text-7xl md:text-[10rem] font-oswald uppercase max-w-7xl leading-[0.8] tracking-tighter">
              Seamless <br /><span className="text-slate-700">Integration</span>
            </p>

            <motion.div style={{ opacity: btnOpacity, scale: btnScale }} className="pt-12">
              <button
                onClick={() => router.push("/contact")}
                className="group relative px-16 py-6 bg-transparent overflow-hidden border border-sky-500/30 text-sky-400 font-mono text-xs tracking-[0.5em] uppercase hover:text-white transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-sky-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 font-bold">Initialize System</span>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* ZIPPER IMAGE CONTAINER */}
        <div className="relative w-full max-w-[90vw] h-full flex items-center justify-center z-20 pointer-events-none px-4">
          {pairs.map((pair) => (
            <ZipperPair
              key={pair.id}
              leftSrc={pair.left}
              rightSrc={pair.right}
              range={pair.range as [number, number]}
              progress={scrollYProgress}
              zIndex={pair.z}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ZipperPair({ range, progress, zIndex, leftSrc, rightSrc }: { range: [number, number], progress: MotionValue<number>, zIndex: number, leftSrc: string, rightSrc: string }) {
  // Define animation milestones within the range
  const start = range[0];
  const end = range[1];

  const fadeInEnd = start + (end - start) * 0.2;
  const unzipStart = start + (end - start) * 0.45;

  const opacity = useTransform(progress, [start, fadeInEnd, unzipStart, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, unzipStart], [0.9, 1]);

  // Zipper X translation
  const leftX = useTransform(progress, [unzipStart, end], ["0%", "-180%"]);
  const rightX = useTransform(progress, [unzipStart, end], ["0%", "180%"]);

  // Rotation
  const leftRotate = useTransform(progress, [unzipStart, end], [0, -15]);
  const rightRotate = useTransform(progress, [unzipStart, end], [0, 15]);

  return (
    <motion.div
      style={{ opacity, scale, zIndex }}
      className="absolute inset-0 flex items-center justify-center p-4 md:p-12"
    >
      <div className="flex w-full h-full max-h-[60vh] gap-4 md:gap-8 items-center justify-center">
        {/* Left Full Image */}
        <motion.div
          style={{ x: leftX, rotate: leftRotate }}
          className="relative flex-1 aspect-video bg-slate-900 border border-sky-500/10 rounded-xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]"
        >
          <Image
            src={leftSrc}
            alt="System View Left"
            fill
            className="object-contain p-2 opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 to-transparent pointer-events-none" />
        </motion.div>

        {/* Right Full Image */}
        <motion.div
          style={{ x: rightX, rotate: rightRotate }}
          className="relative flex-1 aspect-video bg-slate-900 border border-sky-500/10 rounded-xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]"
        >
          <Image
            src={rightSrc}
            alt="System View Right"
            fill
            className="object-contain p-2 opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-sky-500/5 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </motion.div>
  );
}




