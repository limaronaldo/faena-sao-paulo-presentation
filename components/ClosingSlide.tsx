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
      <div className="absolute inset-0 bg-gradient-to-t from-olive-dark via-olive-dark/80 to-olive-dark/60" />

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
          className="flex items-center justify-center gap-8"
        >
          <img
            src="https://img.mbras.com.br/mbras/mbras-logo-x.png?updatedAt=1766455454000"
            alt="MBRAS"
            className="h-12 md:h-16 w-auto object-contain brightness-0 invert opacity-70"
          />
          <span className="text-bronze-500/50 text-xl font-light">×</span>
          <span className="text-2xl md:text-3xl font-serif font-light tracking-[0.15em] text-cream-50/80">PINNA 5109</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
