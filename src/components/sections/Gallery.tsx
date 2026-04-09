"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Aperture, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryAssets = [
  { src: "/assets/hero-logistics.avif", label: "Global Logistics", ratio: "16/9" },
  { src: "/assets/wagholi.avif", label: "Main Hub Exterior", ratio: "1/1" },
  { src: "/assets/chakan.avif", label: "Dock Systems", ratio: "1/1" },
  { src: "/assets/kesanand.avif", label: "Floor Integrity", ratio: "1/1" },
  { src: "/assets/lonikand.avif", label: "Security Perimeter", ratio: "1/1" },
  { src: "/assets/talegaon.avif", label: "Inventory Management", ratio: "1/1" },
  { src: "/assets/lohegaon.avif", label: "Night Ops", ratio: "1/1" },
];

export default function Gallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-70%"]);

  return (
    <section id="gallery" ref={targetRef} className="relative h-[300vh] bg-slate-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Technical Header Overlay */}
        <div className="absolute top-12 left-6 md:left-12 z-50 mix-blend-difference text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Cinematic Sequence</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter">
            Live <span className="italic text-slate-400">Feed.</span>
          </h2>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-12 left-12 z-50 flex items-center gap-4 text-white/40">
            <MousePointer2 size={16} className="animate-bounce" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Scroll to Explore</span>
        </div>

        {/* The Track */}
        <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-12">
          {galleryAssets.map((asset, i) => (
            <div
              key={i}
              className={cn(
                "group relative shrink-0 overflow-hidden rounded-[2rem] bg-slate-900 border border-white/10 transition-all duration-500 hover:border-primary/50",
                asset.ratio === "16/9" ? "w-[70vw] md:w-[50vw] aspect-video" : "w-[60vw] md:w-[35vw] aspect-square"
              )}
            >
              {/* Overlay Metadata */}
              <div className="absolute top-6 left-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="bg-primary/90 text-slate-950 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">
                   REF_{i + 1}
                 </div>
              </div>

              {/* Image Layer - REMOVED GRAYSCALE AND OPACITY FILTERS */}
              <img
                src={asset.src}
                alt={asset.label}
                className="h-full w-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Hover Content */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">
                    {asset.label}
                  </p>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-display font-black uppercase tracking-tighter italic text-white">
                      Inspect_Asset
                    </h3>
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md group-hover:bg-primary transition-colors">
                      <ArrowUpRight size={20} className="text-white group-hover:text-slate-950" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dynamic Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
            <motion.div 
                style={{ scaleX: scrollYProgress }} 
                className="h-full bg-primary origin-left" 
            />
        </div>
      </div>

      {/* Background Tech Details */}
      <div className="absolute top-0 right-12 py-12 hidden lg:block">
          <div className="flex flex-col items-end gap-6 text-white/20">
              <Aperture size={40} className="animate-spin-slow" />
              <div className="text-right">
                <p className="text-[8px] font-black uppercase tracking-widest">Registry Sync</p>
                <p className="text-[10px] font-bold">STABLE_CONNECTED</p>
              </div>
          </div>
      </div>
    </section>
  );
}