"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    /**
     * FIX: Use h-[100svh] instead of min-h-screen to prevent layout jumps 
     * and "enlarging" on production deployments. 
     */
    <section className="relative h-[100svh] min-h-[650px] flex items-center justify-center overflow-hidden bg-foreground">
      
      {/* 1. Background Image with Correct Production Attributes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/hero-logistics.avif"
          alt="Modern Grade-A Industrial Warehouse Pune"
          className="w-full h-full object-cover grayscale-[0.2] opacity-60 transition-transform duration-[10000ms] ease-out hover:scale-110"
          // @ts-ignore - Standard HTML attribute for high-priority loading
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/90 to-foreground" />
        <div className="absolute inset-0 bg-grid opacity-10 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 md:mb-10 tracking-tighter"
          >
            {/* Sub-headline: Balanced spacing for Desktop */}
            <span className="block font-sans text-sm md:text-xl lg:text-2xl font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary mb-4 md:mb-8">
              Grade-A Industrial Solutions
            </span>
            
            {/* Main Headline: Tightened leading for massive desktop fonts */}
            <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent font-display font-black uppercase leading-[1.1] md:leading-[0.85] block">
              Infrastructure <br className="hidden md:block" />
              Built for <span className="text-primary italic">Precision</span> <br className="hidden md:block" />
              <span className="font-light">at Scale.</span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 md:mb-16 max-w-xl md:max-w-2xl lg:max-w-3xl leading-relaxed font-sans font-medium text-balance"
          >
            Strategic warehouse rentals in Pune&apos;s core industrial zones, engineered for high-performance logistics and 3PL operations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 md:gap-10 items-center justify-center w-full sm:w-auto"
          >
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto px-10 py-4 text-base md:text-lg font-bold"
              rightIcon={<ArrowRight size={20} />}
              onClick={() => document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Inventory
            </Button>
            
            <a 
              href="#specs" 
              className="group text-[10px] md:text-xs lg:text-sm font-display font-black uppercase tracking-[0.2em] text-white hover:text-primary transition-colors flex items-center gap-3 py-2"
            >
              Technical Specifications
              <span className="w-6 md:w-10 h-[2px] bg-white/30 group-hover:bg-primary transition-all group-hover:w-14"></span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}