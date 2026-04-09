"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Ruler, 
  Wind, 
  HardHat, 
  Truck, 
  Layers,
  FlameKindling,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// @ts-ignore
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/navigation';

import { SpecCard } from "@/components/ui/Card";

const technicalSpecs = [
  {
    icon: <Ruler />,
    title: "Clear Height",
    value: "12 Meters",
    description: "Maximum vertical storage optimization for high-density racking systems.",
    detail: "Vertical Efficiency"
  },
  {
    icon: <Layers />,
    title: "Flooring",
    value: "FM2 Compliant",
    description: "Laser-screed SFRC flooring with 5-8 Ton/sqm load-bearing capacity.",
    detail: "SFRC Technology"
  },
  {
    icon: <FlameKindling />,
    title: "Fire Safety",
    value: "ESFR Sprinklers",
    description: "NFPA-compliant suppression systems with high-velocity roof vents.",
    detail: "NFPA Standards"
  },
  {
    icon: <Wind />,
    title: "Ventilation",
    value: "6 Air Changes",
    description: "Natural ridge ventilators ensuring optimal ambient temperature control.",
    detail: "Passive Cooling"
  },
  {
    icon: <Truck />,
    title: "Docking",
    value: "Hydraulic Levers",
    description: "Precision-engineered docking bays with 45-degree apron space.",
    detail: "Rapid Loading"
  },
  {
    icon: <ShieldCheck />,
    title: "Security",
    value: "AI Surveillance",
    description: "24/7 Peripheral monitoring with integrated motion-sensor technology.",
    detail: "Smart Perimeter"
  },
];

export default function Specs() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="specs" className="py-16 md:py-32 bg-[#F8FAFC] px-4 sm:px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, 
          backgroundSize: '30px 30px' 
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-row justify-between items-end gap-4 mb-10 md:mb-20">
          <div className="space-y-3 md:space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm"
            >
              <HardHat size={12} className="text-primary" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                Grade-A Infrastructure
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-8xl font-display font-black uppercase tracking-tighter text-slate-950 leading-[0.9]">
              Technical <br className="hidden md:block" /> 
              <span className="text-slate-300 italic">Core.</span>
            </h2>
          </div>

          {/* Navigation Buttons - Now visible on all screens */}
          <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
            <button className="swiper-prev-button w-10 h-10 md:w-14 md:h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm active:scale-90 disabled:opacity-20 disabled:pointer-events-none">
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <button className="swiper-next-button w-10 h-10 md:w-14 md:h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm active:scale-90 disabled:opacity-20 disabled:pointer-events-none">
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Sliding View */}
        <div className="relative cursor-grab active:cursor-grabbing min-h-[400px]">
          {isMounted ? (
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={16}
              slidesPerView={1.1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={{
                prevEl: '.swiper-prev-button',
                nextEl: '.swiper-next-button',
              }}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2, spaceBetween: 30 }
              }}
              className="pb-16 !overflow-visible"
            >
              {technicalSpecs.map((spec, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <SpecCard 
                    index={index}
                    icon={spec.icon}
                    title={spec.title}
                    value={spec.value}
                    description={spec.description}
                    detail={spec.detail}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="w-full flex gap-4 overflow-hidden">
                <div className="w-full md:w-1/2 h-80 bg-slate-100 rounded-[2rem] animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}