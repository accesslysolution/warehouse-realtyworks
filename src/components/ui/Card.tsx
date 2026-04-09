// src/components/ui/Card.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface SpecCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  detail: string;
  index: number;
}

export const SpecCard = ({ icon, title, value, description, detail, index }: SpecCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }} // Faster stagger for mobile
      className="group relative bg-white border border-slate-100 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <div className="absolute top-0 right-0 p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity text-primary/30">
        <ArrowUpRight size={24} className="md:w-8 md:h-8" />
      </div>

      <div className="space-y-4 md:space-y-8">
        {/* Smaller Icon for Mobile */}
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
          {React.isValidElement(icon) && 
            React.cloneElement(icon as React.ReactElement<any>, { 
              className: "group-hover:text-white transition-colors w-6 h-6 md:w-7 md:h-7",
            })
          }
        </div>
        
        <div className="space-y-1 md:space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-px w-4 md:w-6 bg-primary/30" />
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              {title}
            </p>
          </div>
          <h3 className="text-xl md:text-4xl font-display font-black text-slate-900 tracking-tight">
            {value}
          </h3>
        </div>

        <div className="space-y-3 md:space-y-4">
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium line-clamp-2 md:line-clamp-none">
            {description}
          </p>
          <div className="pt-3 md:pt-4 border-t border-slate-50 flex items-center justify-between">
            <span className="text-[8px] md:text-[9px] font-black uppercase text-slate-400 tracking-widest">{detail}</span>
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-slate-200 group-hover:bg-primary transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};