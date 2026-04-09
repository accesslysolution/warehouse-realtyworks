"use client";

import React, { useState, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Maximize, 
  Weight, 
  Heart, 
  MapPin, 
  Info, 
  Search,
  Star,
  Zap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Button from "@/components/ui/Button";
import { properties } from "@/data/inventory";

export default function Inventory() {
  const [shortlisted, setShortlisted] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to open the Contact Form Popup
  const handleEnquire = () => {
    const event = new CustomEvent("openContactForm");
    window.dispatchEvent(event);
  };

  const filteredProperties = useMemo(() => {
    return properties.filter(p => 
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const toggleHeart = (id: string) => {
    setShortlisted(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="inventory" className="py-12 md:py-24 bg-[#F8FAFC] min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col gap-6 mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2 md:space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
              >
                <Zap size={12} className="text-primary fill-primary" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary">
                  {properties.length} Strategic Hubs Available
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tight text-slate-950 leading-[0.9]">
                Inventory <br /> 
                <span className="text-slate-300">Live View.</span>
              </h2>
            </div>

            {/* App-Style Search Bar */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 w-full md:w-auto">
              <div className="relative flex-grow md:w-72">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text"
                  placeholder="Search area..."
                  className="w-full pl-11 pr-4 py-3 md:py-4 bg-slate-50 rounded-xl text-xs md:text-sm outline-none focus:ring-2 ring-primary/20 transition-all"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="relative p-3 text-slate-900 group">
                <Heart size={20} className={cn("transition-all", shortlisted.length > 0 ? "fill-red-500 text-red-500 scale-110" : "text-slate-300")} />
              </button>
            </div>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative group/slider">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-2 z-20 md:group-hover/slider:flex hidden md:flex">
             <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all"
             >
               <ChevronLeft size={24} />
             </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-2 z-20 md:group-hover/slider:flex hidden md:flex">
             <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all"
             >
               <ChevronRight size={24} />
             </button>
          </div>

          {/* Actual Horizontal List */}
          <motion.div 
            layout 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-8 -mx-4 px-4 md:mx-0 md:px-0"
          >
            <AnimatePresence mode="popLayout">
              {filteredProperties.map((unit) => (
                <motion.div
                  key={unit.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group/card min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center bg-white rounded-[2rem] border border-slate-100 p-2.5 md:p-3 hover:shadow-xl transition-all duration-500"
                >
                  {/* Image Area */}
                  <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-slate-100">
                    <img 
                      src={unit.image} 
                      alt={unit.location} 
                      className="w-full h-full object-cover grayscale-[0.2] group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-1000"
                    />
                    
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      <div className="bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1.5 border border-white/10 w-fit">
                        <Star size={10} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-white text-[10px] font-black">{unit.rating}</span>
                      </div>
                    </div>

                    <div className="absolute top-3 right-3">
                      <button 
                        onClick={() => toggleHeart(unit.id)}
                        className="p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 shadow-md active:scale-90 transition-all"
                      >
                        <Heart size={14} className={cn(shortlisted.includes(unit.id) && "fill-red-500 text-red-500")} />
                      </button>
                    </div>

                    {/* Rate Bar */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="bg-slate-950/80 backdrop-blur-xl p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 flex justify-between items-center">
                        <div>
                          <p className="text-[7px] font-black text-slate-400 uppercase tracking-[0.2em]">Standard Rate</p>
                          <p className="text-lg font-display font-black text-white italic">₹{unit.price}<span className="text-[10px] text-slate-400 ml-1 not-italic">/sq.ft</span></p>
                        </div>
                        <div className={cn(
                          "px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-tighter shadow-sm",
                          unit.status === "Available" ? "bg-green-500 text-white" : "bg-primary text-white"
                        )}>
                          {unit.status}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5 space-y-4 md:space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-primary">
                        <MapPin size={18} strokeWidth={3} />
                        <h4 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tighter text-slate-900">
                          {unit.location}
                        </h4>
                      </div>
                      <span className="text-[9px] font-black text-slate-300 italic uppercase">#{unit.id}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <Maximize size={12} className="text-primary shrink-0" />
                        <span className="text-[10px] font-bold text-slate-900 truncate">{unit.size} ft²</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <Weight size={12} className="text-primary shrink-0" />
                        <span className="text-[10px] font-bold text-slate-900 truncate">{unit.load}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {/* Enquire Now Button Linked to Popup */}
                      <Button 
                        onClick={handleEnquire}
                        className="flex-[4] rounded-xl py-5 text-[10px] font-black uppercase tracking-[0.2em]"
                      >
                        Enquire Now
                      </Button>
                      <button className="flex-1 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400">
                        <Info size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}