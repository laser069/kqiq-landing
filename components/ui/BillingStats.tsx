"use client";

import { useEffect, useState, useRef } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

const stats = [
  { label: "TOTAL BILLS GENERATED", value: 10, color: "bg-sky-500", suffix: "K+" },
  { label: "MONTHLY REVENUE", value: 50, color: "bg-sky-600", suffix: "K+", prefix: "₹" },
  { label: "ACTIVE BUSINESSES", value: 15, color: "bg-sky-500", suffix: "+" },
  { label: "ACTIVE STORES", value: 10, color: "bg-sky-400", suffix: "" },
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
          className="relative overflow-hidden bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 flex flex-col gap-10 hover:bg-white/60 hover:border-sky-300 shadow-[20px_20px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)] transition-all duration-500 group"
        >
          {/* Header Section */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${stat.color} opacity-40`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${stat.color} shadow-[0_0_8px_rgba(14,165,233,0.5)]`}></span>
              </span>
              <h3 className="text-[11px] font-black tracking-[0.3em] text-slate-400 uppercase">
                {stat.label}
              </h3>
            </div>
          </div>

          {/* Value Section - Oswald Font */}
          <div className="text-6xl md:text-7xl font-oswald font-black text-slate-950 tabular-nums z-10 flex items-baseline tracking-tighter">
            {stat.prefix && (
              <span className="text-sky-500 mr-2 text-4xl opacity-50 group-hover:opacity-100 transition-opacity">
                {stat.prefix}
              </span>
            )}
            <AnimatedNumber value={stat.value} />
            {stat.suffix && (
              <span className="text-sky-500 ml-2 text-4xl opacity-50 group-hover:opacity-100 transition-opacity">
                {stat.suffix}
              </span>
            )}
          </div>

          {/* Technical Data Stream (Decorative) */}
          <div className="mt-auto pt-4 border-t border-slate-300/20 flex justify-between items-center opacity-30 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
            <div className="flex gap-1 h-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`w-1 h-full bg-sky-500/20 rounded-full group-hover:animate-pulse`} style={{ animationDelay: `${i * 150}ms` }} />
              ))}
            </div>
            <span className="text-[8px] font-mono text-slate-400 font-bold">STATUS://OPTIMIZED</span>
          </div>

          {/* Background Grid - High Tech Variant */}
          <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] bg-[size:24px_24px] group-hover:opacity-[0.15] transition-opacity" />

          {/* Accent Glow */}
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-sky-400 opacity-0 group-hover:opacity-[0.08] blur-[50px] transition-opacity duration-700 rounded-full" />
        </div>
      ))}
    </div>
  );
}
