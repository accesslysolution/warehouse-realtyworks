"use client";

import React, { useState, useEffect } from "react";
import { Warehouse, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  // Synchronized with your Navbar navLinks
  navigation: [
    { name: "Home", href: "#" },
    { name: "Inventory", href: "#inventory" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Technical Specs", href: "#specs" },
  ],
  support: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | string>("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden border-t-4 border-primary pt-24 pb-8">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      {/* Huge Background Text - Industrial Style */}
      <div className="absolute -bottom-10 -left-10 text-[15rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter uppercase italic leading-none">
        PUNE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 group cursor-default">
                <div className="bg-primary p-2 rounded-xl transition-transform group-hover:rotate-6">
                  <Warehouse className="text-white" size={24} />
                </div>
                <span className="font-display font-black text-2xl tracking-tighter uppercase transition-colors duration-500">
                  Realty<span className="italic text-white/60">Works</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-medium max-w-xs">
                Setting the standard for Grade-A industrial infrastructure in Maharashtra. 
                Innovative space solutions for the modern supply chain.
              </p>
            </div>
          </div>

          {/* Directory Column - Updated to match NavLinks */}
          <div>
            <h4 className="font-display font-black uppercase text-[11px] tracking-[0.2em] mb-8 text-primary">Directory</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white flex items-center gap-2 group transition-colors">
                    <span className="h-px w-0 bg-primary group-hover:w-4 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="font-display font-black uppercase text-[11px] tracking-[0.2em] mb-8 text-primary">Reach Us</h4>
            <div className="flex flex-col gap-6 text-sm">
              <a href="tel:+918208108473" className="group flex flex-col">
                <span className="text-slate-500 text-[10px] uppercase font-bold mb-1 flex items-center gap-2">
                  <Phone size={10} /> Direct Line
                </span>
                <span className="flex items-center gap-2 group-hover:text-primary transition-colors font-bold text-base">
                  +91 8208108473
                  <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </span>
              </a>
              <a href="mailto:info@punewarehouse.com" className="group flex flex-col">
                <span className="text-slate-500 text-[10px] uppercase font-bold mb-1 flex items-center gap-2">
                  <Mail size={10} /> Business Email
                </span>
                <span className="group-hover:text-primary transition-colors font-bold">info@punewarehouse.com</span>
              </a>
            </div>
          </div>

          {/* Address Column */}
          <div>
            <h4 className="font-display font-black uppercase text-[11px] tracking-[0.2em] mb-8 text-primary">Location</h4>
            <div className="flex flex-col">
              <span className="text-slate-500 text-[10px] uppercase font-bold mb-1 flex items-center gap-2">
                <MapPin size={10} /> HQ Address
              </span>
              <span className="text-slate-300 leading-relaxed font-medium text-sm">
                Corporate Hub, Baner Road,<br /> 
                Pune, Maharashtra<br /> 
                India - 411045
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-[10px] uppercase font-black tracking-[0.25em] text-slate-500">
              © {currentYear || "2026"} Realty Works Pune. ALL RIGHTS RESERVED.
            </p>
            {/* Lupa Entertainment Attribution */}
            <p className="text-[9px] uppercase font-bold tracking-[0.1em] text-slate-600">
              Website by{" "}
              <a 
                href="https://lupaentertainment.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-white transition-colors"
              >
                Lupa Entertainment
              </a>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {footerLinks.support.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] uppercase font-black tracking-widest text-slate-500 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}