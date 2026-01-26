"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function ClosingSlide() {
  const closing = academyData.closing;

  return (
    <Slide className="bg-navy-900 text-cream-100">
      {/* Background Image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/vistaarco.jpg')" }}
      />
      <div className="absolute inset-0 navy-gradient-overlay" />

      <div className="z-10 flex flex-col items-center justify-center max-w-3xl px-8 md:px-16 lg:px-24 py-12 h-full text-center">
        <motion.img
          src="https://img.mbras.com.br/logos/LOGO%20MBRAS%20HORZ%20BRANCA.png?updatedAt=1768416071539"
          alt="MBRAS"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="h-16 md:h-20 lg:h-24 object-contain mb-8"
        />

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl font-serif font-medium leading-tight mb-6 text-gray-300"
        >
          {closing.headline}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-16 h-px bg-gold-500 mb-6"
        />

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-sm md:text-base text-cream-100/80 mb-8 max-w-xl"
        >
          {closing.cta}
        </motion.p>

        <motion.a
          href="https://mbras.com.br"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-2.5 border border-gold-500 text-gold-400 text-xs tracking-[0.2em] uppercase hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
        >
          {closing.partnership}
        </motion.a>
      </div>
    </Slide>
  );
}
