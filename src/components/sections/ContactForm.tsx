"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  CheckCircle2, 
  Loader2, 
  User, 
  Mail, 
  MessageSquare, 
  Building2, 
  X, 
  Phone, 
  MapPin, 
  ChevronDown 
} from "lucide-react";
import Button from "@/components/ui/Button";

const warehouseLocations = [
  "Chakan Warehouse",
  "Kesananda",
  "Lohegaon",
  "Lonikand",
  "Talegaon",
  "Wagholi"
];

export default function ContactFormPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    // 1. AUTO-POPUP ON EVERY REFRESH
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // 2. MANUAL TRIGGER LOGIC (Navbar button)
    const handleManualOpen = () => {
      setIsVisible(true);
      setStatus("idle"); 
    };

    window.addEventListener("openContactForm", handleManualOpen);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("openContactForm", handleManualOpen);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API Call
    setTimeout(() => {
      setStatus("success");
      // Close popup automatically after success message
      setTimeout(() => setIsVisible(false), 4000);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop - onClick REMOVED to prevent closing when clicking outside */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Form Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white w-full max-w-[550px] rounded-t-[2rem] sm:rounded-[2.5rem] shadow-2xl relative overflow-hidden z-10 max-h-[95vh] flex flex-col"
          >
            {/* Mobile Handle Bar */}
            <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mt-4 mb-2 sm:hidden" />

            {/* Close Button - This is now the ONLY way to manually close */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors z-[120]"
            >
              <X size={20} />
            </button>

            {/* Scrollable Content Area */}
            <div className="p-6 pt-2 sm:p-10 md:p-12 overflow-y-auto">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center gap-6"
                >
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-emerald-500" size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-black uppercase tracking-tighter text-slate-900">Inquiry Received</h3>
                    <p className="text-slate-500 mt-2 font-medium">Our logistics expert will contact you within 2 hours.</p>
                  </div>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tighter text-slate-900">
                      Get a <span className="text-primary">Quote</span>
                    </h2>
                    <p className="text-slate-500 text-sm font-medium mt-1">Details required for fast-track processing.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {/* Name */}
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
                        <input
                          required
                          type="text"
                          name="full_name"
                          placeholder="Full Name *"
                          className="w-full bg-slate-50 border-2 border-transparent rounded-xl sm:rounded-2xl py-3.5 sm:py-4 pl-12 pr-4 text-sm font-semibold text-slate-900 focus:border-primary/20 focus:bg-white transition-all outline-none"
                        />
                      </div>

                      {/* Phone */}
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
                        <input
                          required
                          type="tel"
                          name="phone"
                          placeholder="Contact Number *"
                          className="w-full bg-slate-50 border-2 border-transparent rounded-xl sm:rounded-2xl py-3.5 sm:py-4 pl-12 pr-4 text-sm font-semibold text-slate-900 focus:border-primary/20 focus:bg-white transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Business Email *"
                        className="w-full bg-slate-50 border-2 border-transparent rounded-xl sm:rounded-2xl py-3.5 sm:py-4 pl-12 pr-4 text-sm font-semibold text-slate-900 focus:border-primary/20 focus:bg-white transition-all outline-none"
                      />
                    </div>

                    {/* Location Selection */}
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors pointer-events-none" size={18} />
                      <select
                        required
                        name="location"
                        defaultValue=""
                        className="w-full bg-slate-50 border-2 border-transparent rounded-xl sm:rounded-2xl py-3.5 sm:py-4 pl-12 pr-10 text-sm font-semibold text-slate-900 focus:border-primary/20 focus:bg-white transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select Preferred Location *</option>
                        {warehouseLocations.map((loc) => (
                          <option key={loc} value={loc.toLowerCase()}>{loc}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    </div>

                    {/* Requirements */}
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-4 text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
                      <textarea
                        rows={3}
                        placeholder="Additional requirements (Area, etc.)"
                        className="w-full bg-slate-50 border-2 border-transparent rounded-xl sm:rounded-2xl py-3.5 sm:py-4 pl-12 pr-4 text-sm font-semibold text-slate-900 focus:border-primary/20 focus:bg-white transition-all outline-none resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      disabled={status === "loading"}
                      type="submit"
                      className="w-full py-5 sm:py-6 rounded-xl sm:rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-lg shadow-primary/20 mt-2"
                    >
                      {status === "loading" ? (
                        <Loader2 className="animate-spin" size={20} />
                      ) : (
                        <>
                          Request Pricing
                          <Send size={16} />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>

            {/* Industrial Watermark */}
            <div className="absolute -bottom-6 -right-6 opacity-[0.03] pointer-events-none rotate-12 hidden sm:block">
              <Building2 size={180} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}