'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Maximize2, ArrowUpRight } from 'lucide-react';
import { inventoryData, Property } from '@/data/inventory';
import PropertyModal from '@/components/sections/PropertyModal';
import ContactFormPopup from '@/components/sections/ContactForm';

const InventorySection = () => {
  // States for two-step lead conversion
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryPropertyTitle, setInquiryPropertyTitle] = useState("");

  // Handler to bridge the Modal and the Contact Form
  const handleInquiryTrigger = (title: string) => {
    setInquiryPropertyTitle(title);
    setSelectedProperty(null); // Close the detail modal
    setTimeout(() => setIsInquiryOpen(true), 300); // Small delay for smooth transition
  };

  return (
    <section id="inventory" className="py-24 bg-gray-50 text-gray-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Industrial/Bold Aesthetic */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#fd610d] font-bold tracking-widest uppercase text-[10px] sm:text-xs bg-orange-50 px-4 py-2 rounded-full inline-block mb-4"
          >
            Premium Logistics Inventory
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-none"
          >
            Available Warehouses in <span className="text-blue-600">Pune</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-medium"
          >
            Grade-A industrial spaces with high-load flooring and prime connectivity in 
            Chakan, Talegaon, and Wagholi industrial corridors.
          </motion.p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-[#fd610d] text-white text-[10px] font-black px-4 py-2 rounded-full shadow-xl uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Container */}
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
      </div>

      {/* STEP 1: Property Detail Modal */}
      <AnimatePresence mode="wait">
        {selectedProperty && (
          <PropertyModal 
            key="property-modal"
            property={selectedProperty} 
            onClose={() => setSelectedProperty(null)}
            onInquiry={() => handleInquiryTrigger(selectedProperty.title)}
          />
        )}
      </AnimatePresence>

      {/* STEP 2: Lead Inquiry Form */}
      <AnimatePresence>
        {isInquiryOpen && (
          <ContactFormPopup 
            key="inquiry-form"
            onClose={() => setIsInquiryOpen(false)}
            propertyTitle={inquiryPropertyTitle}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default InventorySection;