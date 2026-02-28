"use client";

import { presentationData } from "./data";
import { motion } from "framer-motion";

export default function ClosingSlide() {
  const closing = presentationData.closing;

  return (
    <motion.div
      className="w-full min-h-screen lg:h-screen flex flex-col justify-center items-center relative lg:snap-start lg:overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/pinna-hero.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[#0a0a08]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08] via-[#0a0a08]/80 to-[#0a0a08]/30" />

      <div className="z-10 flex flex-col items-center text-center max-w-4xl px-6">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif font-light leading-tight mb-8 whitespace-pre-line text-white"
        >
          {closing.headline}
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-bronze-400 tracking-[0.15em] uppercase text-base md:text-lg font-medium mb-12 max-w-3xl leading-relaxed"
        >
          {closing.tagline}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-24 h-px bg-bronze-500 mb-10"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex items-center justify-center gap-8 mt-10"
        >
          <img
            src="/logo-mbras.png"
            alt="MBRAS"
            className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-90 transition-opacity"
          />
          <div className="w-px h-10 bg-cream-50/20" />
          <img
            src="/logo-sdi.svg"
            alt="SDI Desenvolvimento Imobiliário"
            className="h-16 md:h-24 w-auto object-contain opacity-90 transition-opacity"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
