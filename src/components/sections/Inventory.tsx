'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Maximize2, ArrowUpRight, FileSpreadsheet, PhoneCall } from 'lucide-react';
import { inventoryData, Property } from '@/data/inventory';
import PropertyModal from '@/components/sections/PropertyModal';
import ContactFormPopup from '@/components/sections/ContactForm';
import PriceSheetPopup from '@/components/sections/PriceSheetPopup';

const InventorySection = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isPriceSheetOpen, setIsPriceSheetOpen] = useState(false);
  const [inquiryPropertyTitle, setInquiryPropertyTitle] = useState("");

  const handleInquiryTrigger = (title: string) => {
    setInquiryPropertyTitle(title);
    setSelectedProperty(null); 
    setTimeout(() => setIsInquiryOpen(true), 300);
  };

  return (
    <section id="inventory" className="py-24 bg-gray-50 text-gray-950 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#fd610d] font-bold tracking-widest uppercase text-[10px] bg-orange-50 px-4 py-2 rounded-full inline-block mb-4"
          >
            Premium Logistics Inventory
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-none"
          >
            Available Warehouses in <span className="text-blue-600">Pune</span>
          </motion.h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Grade-A industrial spaces with high-load flooring and prime connectivity in the industrial corridors.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {inventoryData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProperty(item)}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 cursor-pointer flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-[#fd610d] text-white text-[10px] font-black px-4 py-2 rounded-full shadow-xl uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-blue-600 mb-3">
                  <MapPin size={14} strokeWidth={3} />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">{item.location}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-[#fd610d] transition-colors leading-tight uppercase tracking-tighter">
                  {item.title}
                </h3>
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Total Area</span>
                    <div className="flex items-center gap-2 text-slate-900">
                      <Maximize2 size={16} className="text-blue-600" />
                      <span className="text-lg font-black">{item.area}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#fd610d] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM ACTION BUTTONS - Positioned at the end of the inventory list */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10 border-t border-gray-200"
        >
          {/* Price Sheet & Floor Plan Button */}
          <button 
            onClick={() => setIsPriceSheetOpen(true)}
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 transition-all shadow-xl active:scale-95 group"
          >
            <FileSpreadsheet size={20} className="text-[#fd610d] group-hover:text-white" />
            Get Price Sheet & Floor Plan
          </button>

        {/* Unlock Deal Button (Direct Call) */}
        <a
          href="tel:+919765464333"
          className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-slate-900 border-2 border-slate-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-[#fd610d] hover:border-[#fd610d] hover:text-white transition-all shadow-xl active:scale-95 relative group"
        >
          <div className="flex items-center gap-2">
            <PhoneCall size={18} className="animate-pulse group-hover:animate-none" />
            <span>+91 97654 64333</span>
          </div>
          <span className="h-4 w-[1px] bg-slate-200 group-hover:bg-white/30 hidden md:block" />
          <span>Call & Unlock Best Deal</span>
          
          {/* Notification Ping */}
          <span className="absolute -top-3 -right-3 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-[#fd610d] text-[10px] items-center justify-center text-white">!</span>
          </span>
        </a>
        </motion.div>
      </div>

      {/* POPUPS */}
      <PriceSheetPopup isOpen={isPriceSheetOpen} onClose={() => setIsPriceSheetOpen(false)} />
      
      <AnimatePresence mode="wait">
        {selectedProperty && (
          <PropertyModal 
            property={selectedProperty} 
            onClose={() => setSelectedProperty(null)}
            onInquiry={() => handleInquiryTrigger(selectedProperty.title)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isInquiryOpen && (
          <ContactFormPopup 
            onClose={() => setIsInquiryOpen(false)}
            propertyTitle={inquiryPropertyTitle}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default InventorySection;