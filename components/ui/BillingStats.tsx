"use client";

import { useEffect, useState, useRef } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

const stats = [
  { label: "TOTAL BILLS GENERATED", value: 42, color: "bg-sky-500", suffix: "K+" },
  { label: "MONTHLY REVENUE", value: 8.9, color: "bg-sky-600", suffix: "L", prefix: "₹" },
  { label: "ACTIVE BUSINESSES", value: 124, color: "bg-sky-500", suffix: "+" },
  { label: "ACTIVE STORES", value: 12, color: "bg-sky-400", suffix: "" },
];

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 90,
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      // If it's a decimal value (like 8.9), show 1 decimal place. Otherwise show integer.
      if (value % 1 !== 0) {
        setDisplayValue(latest.toFixed(1));
      } else {
        setDisplayValue(Math.floor(latest).toString());
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function BillingStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2 md:p-4 bg-transparent text-slate-800">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="relative overflow-hidden bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col gap-8 hover:bg-white hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 group"
        >
          {/* Header Section */}
          <div className="flex items-center gap-2 z-10">
            {/* Pulsing Sky Blue indicator - Darker for visibility on white */}
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${stat.color} opacity-30`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${stat.color}`}></span>
            </span>
            <h3 className="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase">
              {stat.label}
            </h3>
          </div>

          {/* Value Section - Oswald Font */}
          <div className="text-6xl font-oswald font-bold text-slate-900 tabular-nums z-10 flex items-baseline tracking-tighter">
            {stat.prefix && (
              <span className="text-sky-600 mr-1 text-4xl">
                {stat.prefix}
              </span>
            )}
            <AnimatedNumber value={stat.value} />
            {stat.suffix && (
              <span className="text-sky-600 ml-1 text-4xl">
                {stat.suffix}
              </span>
            )}
          </div>

          {/* Clean Grid Background - Light Variant */}
          <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          {/* Subtle Accent: Sky Blue corner glow */}
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-sky-200 opacity-0 group-hover:opacity-20 blur-[40px] transition-opacity duration-700" />
          
          {/* Decorative index indicator */}
          <span className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-300 group-hover:text-sky-400 transition-colors">
            REF_00{index + 1}
          </span>
        </div>
      ))}
    </div>
  );
}
