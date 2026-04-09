"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Users2, 
  Globe2, 
  TrendingUp,
  ArrowUpRight
} from "lucide-react";

const stats = [
  {
    label: "Space Under Management",
    value: "2.5M+",
    suffix: "SQ. FT.",
    subtext: "Grade-A industrial floor plate across Pune's prime clusters.",
    icon: <Building2 className="text-primary" size={20} />
  },
  {
    label: "Strategic Locations",
    value: "12",
    suffix: "HUBS",
    subtext: "Hyper-connected nodes including Chakan, Talegaon, and Shikrapur.",
    icon: <Globe2 className="text-primary" size={20} />
  },
  {
    label: "Corporate Partners",
    value: "45+",
    suffix: "CLIENTS",
    subtext: "Trusted by Fortune 500 companies and leading 3PL providers.",
    icon: <Users2 className="text-primary" size={20} />
  },
  {
    label: "Growth Velocity",
    value: "18%",
    suffix: "YOY",
    subtext: "Consistent expansion in asset value and infrastructure quality.",
    icon: <TrendingUp className="text-primary" size={20} />
  }
];

export default function Stats() {
  return (
    <section id="stats" className="py-16 md:py-24 bg-slate-950 text-white overflow-hidden">
      {/* Standardized container padding: px-6 for mobile, md:px-10 for desktop */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Branding & Context */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">
                Market Performance 2026
              </span>
            </motion.div>

            {/* Responsive headline: text-4xl on small devices to prevent word-breaking */}
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-[0.9] md:leading-[0.85]">
              Numbers <br />
              That Define <br />
              <span className="text-primary italic">Dominance.</span>
            </h2>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md font-medium">
              We don't just lease space; we engineer growth environments. Our metrics reflect our commitment to Pune's industrial evolution.
            </p>

            <div className="pt-2 md:pt-4">
              <button className="group flex items-center gap-4 text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-white">
                View Annual Report
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <ArrowUpRight size={18} />
                </div>
              </button>
            </div>
          </div>

          {/* Right Side: Stats Grid */}
          {/* gap-4 on mobile to keep the list compact, md:gap-6 for desktop */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500 group"
              >
                {/* Icon Container: Slightly smaller on mobile */}
                <div className="mb-4 md:mb-6 p-2.5 md:p-3 w-fit rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors">
                  {stat.icon}
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    {/* Numbers scaled for mobile */}
                    <span className="text-4xl md:text-6xl font-display font-black tracking-tighter">
                      {stat.value}
                    </span>
                    <span className="text-[10px] md:text-sm font-black text-primary tracking-widest uppercase">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-400 pt-1 md:pt-2">
                    {stat.label}
                  </p>
                </div>

                <p className="mt-3 md:mt-4 text-xs md:text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                  {stat.subtext}
                </p>

                {/* Background Accent: Hidden on mobile to keep the UI clean and avoid visual noise */}
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity hidden md:block">
                   <Building2 size={80} strokeWidth={1} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}