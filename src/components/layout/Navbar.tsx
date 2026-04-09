"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Warehouse, ArrowUpRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link"; // Import Link
import { usePathname } from "next/navigation"; // To detect current page

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Inventory", href: "/#inventory" },
  { name: "About", href: "/#about" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Technical Specs", href: "/#specs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = mounted ? scrolled : false;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "unset";
    }
  }, [isOpen]);

  const handleQuoteClick = () => {
    setIsOpen(false);
    const event = new CustomEvent("openContactForm");
    window.dispatchEvent(event);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] px-4 md:px-10",
          isScrolled ? "py-4" : "py-8"
        )}
      >
        <nav
          className={cn(
            "mx-auto max-w-7xl transition-all duration-500 px-6 py-3 flex items-center justify-between relative",
            isScrolled
              ? "bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] rounded-2xl"
              : "bg-transparent"
          )}
        >
          {/* Logo Section - Now a Link */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 group cursor-pointer relative z-[110]"
              onClick={() => setIsOpen(false)}
            >
              <div
                className={cn(
                  "p-2 transition-all duration-500 rounded-xl group-hover:rotate-6 shadow-sm",
                  isScrolled ? "bg-primary text-white" : "bg-white text-primary shadow-lg"
                )}
              >
                <Warehouse size={18} strokeWidth={2.5} />
              </div>
              <span
                className={cn(
                  "font-display font-black text-lg tracking-tighter uppercase transition-colors duration-500",
                  isScrolled ? "text-slate-900" : "text-white"
                )}
              >
                Realty
                <span
                  className={cn(
                    "italic transition-colors",
                    isScrolled ? "text-primary/80" : "text-white/60"
                  )}
                >
                  Works
                </span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center gap-1 relative"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredPath(link.name)}
                className={cn(
                  "px-4 py-2 rounded-full font-display text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 relative z-10",
                  isScrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                {hoveredPath === link.name && (
                  <motion.span
                    layoutId="nav-hover"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    className={cn(
                      "absolute inset-0 z-[-1] rounded-full",
                      isScrolled ? "bg-slate-100" : "bg-white/10"
                    )}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <motion.a
              whileHover={{ x: 3 }}
              href="tel:+918208108473"
              className={cn(
                "group flex items-center gap-2 font-display text-[10px] font-black uppercase tracking-widest transition-colors",
                isScrolled ? "text-slate-900" : "text-white"
              )}
            >
              <Phone size={14} className="text-primary group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-primary transition-colors">+91 8208108473</span>
            </motion.a>

            <Button
              onClick={handleQuoteClick}
              variant={isScrolled ? "primary" : "outline"}
              className={cn(
                "rounded-full px-5 py-2.5 h-auto font-bold text-[10px] uppercase tracking-tighter transition-all hover:shadow-xl active:scale-95",
                !isScrolled && "border-white/30 text-white hover:bg-white hover:text-black shadow-none"
              )}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-all relative z-[110] active:scale-90",
              isOpen ? "text-white" : isScrolled ? "text-slate-900" : "text-white"
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-slate-950 z-[90] lg:hidden flex flex-col"
          >
            <div className="relative z-10 flex flex-col h-full pt-32 px-10 pb-10">
              <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

              <div className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-center justify-between border-b border-white/5 py-6"
                    >
                      <span className="text-3xl font-display font-black text-white uppercase tracking-tighter group-hover:text-primary group-hover:translate-x-2 transition-all duration-300">
                        {link.name}
                      </span>
                      <div className="p-2 rounded-full border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <ArrowUpRight size={20} className="text-white group-hover:rotate-45 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Mobile Footer Area */}
              <div className="mt-auto flex flex-col gap-6">
                <div className="space-y-1">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Direct Line</p>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="tel:+918208108473"
                    className="text-lg font-display font-bold text-white block hover:text-primary transition-colors"
                  >
                    +91 8208108473
                  </motion.a>
                </div>

                <Button 
                  onClick={handleQuoteClick}
                  className="w-full py-5 h-auto rounded-xl text-[10px] font-black uppercase tracking-widest bg-primary hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all border-none text-white"
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}