"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";

export default function HeroSlide() {
  return (
    <Slide className="bg-light-50 text-dark-900">
      <div className="absolute inset-0 bg-[url('/hype.png')] bg-cover bg-center opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-light-50 via-light-50/90 to-light-20/70" />

      <div className="z-10 flex flex-col items-center text-center max-w-4xl px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <img
            src={presentationData.partners[0].logo}
            alt="MBRAS"
            className="h-22 md:h-26 object-contain"
          />
          <span className="text-dark-700/30 text-2xl font-light">×</span>
          <img
            src="/logo-hype.png"
            alt="Hype Gabriel"
            className="h-22 md:h-26 object-contain"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-5xl lg:text-6xl font-serif font-light leading-tight tracking-wide whitespace-pre-line text-dark-900"
        >
          {presentationData.hero.title}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-24 h-1 bg-accent-500 mt-12 mb-8"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-accent-500 text-lg tracking-widest uppercase">
            {presentationData.hero.subtitle}
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}
