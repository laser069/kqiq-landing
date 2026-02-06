"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export function ThreeDPhotoCarousel() {
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const yTranslate = useTransform(scrollYProgress, [0, 1], ["0vh", "200vh"]);

  // 3D Math - Responsive
  const isMobile = windowWidth < 768;
  const faceCount = cards.length;
  const cylinderWidth = isMobile ? windowWidth * 1.8 : 1300;
  const faceWidth = isMobile ? windowWidth * 0.7 : cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);
  const perspective = isMobile ? "800px" : "1200px";

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-visible"
      style={{ height: "300vh", backgroundColor: "#0B0E14" }}
    >
      <motion.div
        style={{ y: yTranslate }}
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden z-10"
      >
        <div className="absolute inset-0 bg-[#0B0E14] shadow-[0_0_100px_rgba(0,0,0,1)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b_0%,#0B0E14_100%)] opacity-70" />

        <div
          className="relative flex h-full w-full items-center justify-center"
          style={{ perspective: perspective, transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="relative flex h-full w-full items-center justify-center"
            style={{
              transformStyle: "preserve-3d",
              rotateY: rotation,
            }}
          >
            {cards.map((img, i) => (
              <div
                key={i}
                className="absolute flex items-center justify-center rounded-2xl border border-white/10 bg-slate-900 shadow-2xl overflow-hidden"
                style={{
                  width: `${faceWidth}px`,
                  height: isMobile ? "300px" : "450px",
                  backfaceVisibility: "hidden",
                  transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
