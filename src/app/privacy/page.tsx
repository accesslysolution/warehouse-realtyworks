"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-950 min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Industrial Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-12 group">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest">Return to Hub</span>
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <ShieldCheck size={14} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Security Protocol</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-white mb-4 leading-[0.9]">
            Privacy <span className="text-slate-700 italic">Policy.</span>
          </h1>
          <p className="text-slate-500 font-medium italic text-sm">Last Revised: April 09, 2026</p>
        </motion.div>

        {/* Content Blocks */}
        <div className="space-y-6">
          {[
            {
              icon: <Eye className="text-primary" size={24} />,
              title: "01. Data Acquisition",
              content: "We collect information provided during quote requests, including business identity, contact details, and warehouse specifications. This data is used exclusively to facilitate logistics solutions."
            },
            {
              icon: <Lock className="text-primary" size={24} />,
              title: "02. Encryption & Safety",
              content: "All client data is processed through encrypted channels. We maintain a zero-leak policy, ensuring your business expansion plans remain confidential and secure from external competition."
            },
            {
              icon: <FileText className="text-primary" size={24} />,
              title: "03. Third-Party Clause",
              content: "Realty Works Pune does not sell or distribute your contact information. Data is shared with logistics partners only upon your explicit request for physical site inspections."
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