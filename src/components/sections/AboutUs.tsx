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
    <section id="about" className="py-24 bg-white px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Label */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="h-px w-12 bg-primary" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            The Realty Works Edge
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Bold Branding */}
          <div className="lg:col-span-6 space-y-10">
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tight text-slate-950 leading-[0.85]">
              Real Estate <br />
              <span className="text-slate-300">Re-Engineered.</span>
            </h2>

            <div className="relative rounded-[3rem] overflow-hidden aspect-[16/10] group">
              <img 
                src="/assets/hero-logistics.avif" 
                alt="Modern Warehouse Infrastructure"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="p-4 bg-primary rounded-2xl">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-display font-black text-xl uppercase italic leading-none">Established</p>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Pune Market Leaders</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content & Values */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-black uppercase text-slate-900 tracking-tight">
                Architecting the Future of <br /> Pune’s Industrial Landscape.
              </h3>
              <div className="space-y-4 text-slate-500 font-medium leading-relaxed">
                <p>
                  At <span className="text-slate-950 font-bold">Realty Works</span>, we operate at the intersection of logistical demand and architectural excellence. What started as a focused property consultancy has evolved into a powerhouse for industrial and commercial real estate across the Pune region.
                </p>
                <p>
                  Our domain expertise spans from high-velocity warehouse leasing in Chakan and Talegaon to strategic commercial investments in the city's emerging business hubs. We don't just find spaces; we provide the operational foundation for businesses to scale.
                </p>
              </div>
            </div>

            {/* Micro Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
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
                <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-950 group-hover:border-slate-950 transition-all duration-500">
                  <Building2 size={20} className="text-slate-900 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Connect with</p>
                  <p className="text-sm font-black uppercase text-slate-950 tracking-tighter">Our Principal Consultants</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}