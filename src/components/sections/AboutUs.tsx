"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Building2, 
  Target, 
  Handshake, 
  ShieldCheck 
} from "lucide-react";

const values = [
  {
    icon: <Target size={18} />,
    title: "Strategic Selection",
    desc: "Every asset in our portfolio is vetted for multi-modal connectivity and long-term capital appreciation."
  },
  {
    icon: <Handshake size={18} />,
    title: "End-to-End Leasing",
    desc: "From regulatory compliance to tenant management, we handle the full lifecycle of industrial rental."
  }
];

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      {/* Main Container: 
          - Added px-6 for mobile safety (keeps text off the edges)
          - Added md:px-10 for tablet/desktop breathing room
      */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Top Label */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8 md:mb-12"
        >
          <div className="h-px w-12 bg-primary" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            The Realty Works Edge
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Side: Bold Branding */}
          <div className="lg:col-span-6 space-y-8 md:space-y-10">
            {/* Headline:
                - Reduced from text-5xl to text-4xl on mobile to prevent overflow
                - Balanced line height for mobile 
            */}
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-display font-black uppercase tracking-tight text-slate-950 leading-[0.9] md:leading-[0.85]">
              Real Estate <br />
              <span className="text-slate-300">Re-Engineered.</span>
            </h2>

            {/* Image Wrapper: Reduced rounded corners slightly for mobile aesthetic */}
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[16/10] group">
              <img 
                src="/assets/hero-logistics.avif" 
                alt="Modern Warehouse Infrastructure"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center gap-4">
                <div className="p-3 md:p-4 bg-primary rounded-xl md:rounded-2xl">
                  <ShieldCheck className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white font-display font-black text-lg md:text-xl uppercase italic leading-none">Established</p>
                  <p className="text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1">Pune Market Leaders</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content & Values */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-10 md:space-y-12">
            <div className="space-y-6">
              {/* Adjusted text size for mobile */}
              <h3 className="text-xl md:text-2xl font-display font-black uppercase text-slate-900 tracking-tight leading-snug">
                Architecting the Future of <br className="hidden md:block" /> Pune’s Industrial Landscape.
              </h3>
              <div className="space-y-4 text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                <p>
                  At <span className="text-slate-950 font-bold">Realty Works</span>, we operate at the intersection of logistical demand and architectural excellence. What started as a focused property consultancy has evolved into a powerhouse for industrial and commercial real estate across the Pune region.
                </p>
                <p>
                  Our domain expertise spans from high-velocity warehouse leasing in Chakan and Talegaon to strategic commercial investments. We don't just find spaces; we provide the operational foundation for businesses to scale.
                </p>
              </div>
            </div>

            {/* Micro Values Grid: Added gap-y-10 for better stacking on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 pt-8 border-t border-slate-100">
              {values.map((v, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center gap-3 text-primary">
                    {v.icon}
                    <h4 className="text-[11px] font-black uppercase tracking-widest">{v.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Signature / CTA */}
            <div className="pt-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-950 group-hover:border-slate-950 transition-all duration-500">
                  <Building2 size={18} className="text-slate-900 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Connect with</p>
                  <p className="text-xs md:text-sm font-black uppercase text-slate-950 tracking-tighter">Our Principal Consultants</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}