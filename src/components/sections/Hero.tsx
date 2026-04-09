"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24 overflow-hidden bg-foreground">
      
      {/* 1. Immersive Full-Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-logistics.avif"
          alt="Modern Grade-A Industrial Warehouse Pune"
          className="w-full h-full object-cover grayscale-[0.2] opacity-60 transition-transform duration-[10000ms] ease-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/90 to-foreground" />
        <div className="absolute inset-0 bg-grid opacity-10 mix-blend-overlay" />
      </div>

      {/* Main Container: Added px-6 to ensure content doesn't hit screen edges */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* 2. Headline: 
              - Responsive sizing: text-4xl on mobile, text-7xl/9xl on desktop 
              - Adjusted leading (line height) for tighter mobile look
          */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 md:mb-8 leading-[1] md:leading-[0.9] text-white tracking-tighter text-balance"
          >
            <span className="block font-sans text-sm md:text-2xl font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary mb-4 md:mb-5">
              Grade-A Industrial Solutions
            </span>
            <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent font-display font-black uppercase">
              Infrastructure <br />
              Built for <span className="text-primary italic">Precision</span> <br />
              <span className="font-light">at Scale.</span>
            </span>
          </motion.h1>

          {/* 3. Prose:
              - text-lg on mobile, text-2xl on desktop
              - max-w-xl on mobile to keep line lengths readable
          */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-muted-foreground mb-10 md:mb-16 max-w-xl md:max-w-3xl leading-relaxed font-sans font-medium text-balance"
          >
            Strategic warehouse rentals in Pune&apos;s core industrial zones, engineered for high-performance logistics and 3PL operations.
          </motion.p>

          {/* 4. Balanced CTAs:
              - Flex-col on mobile for easy clicking, flex-row on desktop
          */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center justify-center w-full sm:w-auto"
          >
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto px-8 py-4 text-base md:text-lg"
              rightIcon={<ArrowRight size={20} />}
              onClick={() => document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Inventory
            </Button>
            
            <a 
              href="#specs" 
              className="group text-[10px] md:text-sm font-display font-black uppercase tracking-[0.2em] text-white hover:text-primary transition-colors flex items-center gap-2 py-2"
            >
              Technical Specifications
              <span className="w-4 md:w-6 h-[2px] bg-white group-hover:bg-primary transition-colors"></span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}