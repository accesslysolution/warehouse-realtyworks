"use client";

import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingContact() {
  const phoneNumber = "918208108473"; // Replace with your actual number
  const whatsappText = encodeURIComponent("Hi! I'm interested in your warehouse properties. Could you please share more details?");

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;
  const callUrl = `tel:+${phoneNumber}`;

  const buttonVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[150] flex flex-col gap-4 pointer-events-none">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow border-2 border-white"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </motion.a>

      {/* Calling Button */}
      <motion.a
        href={callUrl}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.1 }}
        whileHover="hover"
        whileTap="tap"
        className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-shadow border-2 border-white"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={24} />
      </motion.a>
    </div>
  );
}