"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";

export default function HeroSlide() {
  return (
    <Slide className="bg-dark-900 text-cream-100">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-dark-900/60" />

      <div className="z-10 flex flex-col items-center text-center max-w-4xl px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-8 mb-12"
        >
          {/* Logos */}
          <img
            src={presentationData.partners[1].logo}
            alt="MBRAS"
            className="h-8 md:h-10 object-contain brightness-0 invert"
          />
          <div className="h-12 w-[1px] bg-gold-500/50" />
          <img
            src="/FAENA 2.png"
            alt="Faena"
            className="h-14 md:h-16 object-contain brightness-0 invert"
          />
          <div className="h-12 w-[1px] bg-gold-500/50" />
          <img
            src="/EVEN.png"
            alt="Even"
            className="h-14 md:h-16 object-contain brightness-0 invert"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl md:text-6xl lg:text-7xl font-serif font-light leading-tight tracking-wide whitespace-pre-line"
        >
          {presentationData.hero.title}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-24 h-1 bg-gold-500 mt-12 mb-8"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-gold-500 text-lg tracking-widest uppercase">
            Faena São Paulo
          </p>
          <p className="text-cream-100/60 text-sm">
            O primeiro distrito Faena do Brasil • VGV R$ 3 bilhões
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}
