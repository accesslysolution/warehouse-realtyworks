"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, Gavel, AlertCircle, CheckCircle, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="bg-slate-950 min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Industrial Decorative Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-12 group">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest">Back to Dashboard</span>
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Scale size={14} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Contractual Terms</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-white mb-4 leading-[0.9]">
            Terms of <span className="text-slate-700 italic">Service.</span>
          </h1>
          <p className="text-slate-500 font-medium italic text-sm">Compliance ID: RW-2026-v1</p>
        </motion.div>

        {/* Content Blocks */}
        <div className="space-y-6">
          {[
            {
              icon: <CheckCircle className="text-primary" size={24} />,
              title: "01. Usage Rights",
              content: "All information, imagery, and inventory data on this platform are proprietary. Users are permitted to access this data for the sole purpose of evaluating property for lease."
            },
            {
              icon: <Gavel className="text-primary" size={24} />,
              title: "02. Listing Validity",
              content: "Warehouse availability is updated in real-time but remains subject to prior lease or sale. Rates quoted on the platform are 'Standard Base Rates' and do not include CAM or Taxes."
            },
            {
              icon: <AlertCircle className="text-primary" size={24} />,
              title: "03. Liability Limits",
              content: "Realty Works Pune is a facilitator for industrial space. We are not responsible for structural modifications or operational disruptions occurring post-lease agreement signing."
            }
          ].map((item, idx) => (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="bg-slate-900/50 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-950 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-display font-black uppercase tracking-tight text-white">{item.title}</h2>
              </div>
              <p className="text-slate-400 leading-relaxed font-medium">
                {item.content}
              </p>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}