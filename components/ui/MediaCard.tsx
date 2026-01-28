"use client";

import React from "react";
import Image from "next/image";

interface MediaCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tag?: string;
}

export function MediaCard({
  imageSrc,
  title,
  description,
  tag,
}: MediaCardProps): React.JSX.Element {
  return (
    <div className="relative aspect-[3/2] w-full bg-slate-950 border border-indigo-500/10 overflow-hidden group shadow-2xl rounded-sm">
      <div className="relative w-full h-full overflow-hidden">
        {/* Background Image with Hover Zoom */}
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100" 
        />
        
        {/* Glassmorphism Tag (Top Left) */}
        <div className="absolute top-6 left-6 bg-slate-900/40 backdrop-blur-xl px-4 py-1.5 border border-indigo-500/20 z-10 rounded-sm">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-indigo-400 uppercase">
            {tag || "System_Node"}
          </span>
        </div>

        {/* Deep Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />

        {/* Content Section */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
          <h3 className="text-3xl font-oswald font-bold text-white uppercase tracking-tighter group-hover:text-indigo-400 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description reveals and slides up on hover */}
          <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-2 font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
            {description}
          </p>
        </div>
      </div>

      {/* Animated Bottom Border (Scanning Effect) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-indigo-500/30" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center z-30" />
    </div>
  );
}