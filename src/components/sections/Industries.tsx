"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Cpu, 
  Settings, 
  Sun, 
  FlaskConical, 
  Package,
  ArrowUpRight
} from "lucide-react";

const industries = [
  {
    title: "FMCG",
    icon: <Package className="w-5 h-5 md:w-8 md:h-8" />,
    description: "High-throughput floor plates optimized for rapid turnaround.",
    color: "group-hover:text-blue-500",
  },
  {
    title: "Electronics",
    icon: <Cpu className="w-5 h-5 md:w-8 md:h-8" />,
    description: "ESD-protected environments and high-security zones.",
    color: "group-hover:text-emerald-500",
  },
  {
    title: "Machinery",
    icon: <Settings className="w-5 h-5 md:w-8 md:h-8" />,
    description: "Heavy-duty SFRC flooring for massive point loads.",
    color: "group-hover:text-orange-500",
  },
  {
    title: "Retail",
    icon: <ShoppingCart className="w-5 h-5 md:w-8 md:h-8" />,
    description: "B2C-ready hubs with mezzanine support and pick-pack configs.",
    color: "group-hover:text-pink-500",
  },
  {
    title: "Energy",
    icon: <Sun className="w-5 h-5 md:w-8 md:h-8" />,
    description: "Expansive storage for large-scale renewable components.",
    color: "group-hover:text-yellow-500",
  },
  {
    title: "Chemicals",
    icon: <FlaskConical className="w-5 h-5 md:w-8 md:h-8" />,
    description: "Safety-first facilities with specialized containment systems.",
    color: "group-hover:text-red-500",
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-16 md:py-32 bg-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col gap-4 mb-12 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 w-fit"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-500">
              Vertical Expertise
            </span>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <h2 className="text-4xl md:text-8xl font-display font-black uppercase tracking-tighter text-slate-950 leading-[0.85]">
              Specialized <br /> 
              <span className="text-slate-200 italic">Sectors.</span>
            </h2>
            <p className="max-w-[180px] md:max-w-xs text-slate-400 text-[10px] md:text-sm font-bold uppercase tracking-widest leading-relaxed">
              Precision infrastructure <br className="hidden md:block" /> for high-growth markets.
            </p>
          </div>
        </div>

        {/* The Uneven Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "group relative bg-[#F8FAFC] p-5 md:p-10 rounded-[1.8rem] md:rounded-[3rem] border border-slate-100 transition-all duration-500",
                "hover:bg-white hover:shadow-2xl hover:border-transparent flex flex-col justify-between overflow-hidden",
                // Uneven Heights for Desktop: Alternating heights
                index % 2 === 0 ? "md:min-h-[300px]" : "md:min-h-[340px] md:mt-4"
              )}
            >
              {/* Background Accents */}
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                 <ArrowUpRight size={40} className="text-slate-200 group-hover:text-primary transition-colors" />
              </div>

              <div className="space-y-6 relative z-10">
                <div className={cn(
                  "transition-all duration-500 group-hover:scale-110 w-fit",
                  item.color
                )}>
                  {item.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs md:text-3xl font-display font-black uppercase tracking-tighter text-slate-950 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  {/* Detailed on Desktop, Minimal on Mobile */}
                  <p className="hidden md:block text-sm text-slate-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                  <p className="md:hidden text-[9px] text-slate-400 font-bold uppercase tracking-tight leading-tight line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Counter Number */}
              <div className="mt-6 flex items-end justify-between relative z-10">
                <span className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-slate-900 transition-colors">
                  Standards.v1
                </span>
                <span className="text-xl md:text-4xl font-display font-black text-slate-100 group-hover:text-primary/10 transition-colors leading-none">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stable Bottom Status Bar */}
        <div className="mt-16 md:mt-24 py-8 border-t border-slate-100 flex flex-wrap justify-center md:justify-between items-center gap-6">
          <div className="flex items-center gap-8 order-2 md:order-1">
             {["ISO Certified", "Safety First"].map((text) => (
                <div key={text} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.25em] text-slate-950">{text}</span>
                </div>
              ))}
          </div>

          <div className="hidden md:block h-[1px] flex-grow mx-8 bg-slate-100 order-2" />

          <div className="flex items-center gap-8 order-1 md:order-3">
             {["Compliance Ready", "24/7 Support"].map((text) => (
                <div key={text} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                  <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">{text}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}