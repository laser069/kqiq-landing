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
    /* Changed to aspect-[3/4] for a tall, portrait minimalist look */
    <div className="relative aspect-[3/4] w-full bg-slate-950 overflow-hidden group">
      <div className="relative w-full h-full">
        {/* Background Image - Optimized for Portrait scale */}
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-70" 
        />
        
        {/* Tag: Flushed to the absolute top-left corner */}
        <div className="absolute top-0 left-0 bg-sky-500 px-5 py-3 z-10">
          <span className="text-[11px] font-mono font-black tracking-[0.25em] text-slate-950 uppercase">
            {tag || "SYS_NODE"}
          </span>
        </div>

        {/* Content Section: Vertical layout benefits from tighter padding */}
        <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
          {/* Bigger Typography for Portrait: The vertical space allows for massive text */}
          <h3 className="text-4xl md:text-6xl font-oswald font-black text-white uppercase tracking-[-0.05em] leading-[0.8] [text-shadow:0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-translate-y-3">
            {title.split('_').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h3>
          
          <div className="overflow-hidden">
            <p className="mt-6 text-sm text-sky-400 font-black uppercase tracking-[0.2em] leading-tight opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Heavy Bottom Scanning Line */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30" />
    </div>
  );
}