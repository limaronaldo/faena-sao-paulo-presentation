"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";

export default function HeroSlide() {
  return (
    <Slide className="bg-dark-900 text-cream-100">
      <div className="absolute inset-0 bg-[url('/wresapartment.png')] bg-cover bg-center opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-dark-900/60" />

      <div className="z-10 flex flex-col items-center text-center max-w-4xl px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center justify-center mb-12"
        >
          <img
            src={presentationData.partners[0].logo}
            alt="MBRAS"
            className="h-12 md:h-16 object-contain"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-5xl lg:text-6xl font-serif font-light leading-tight tracking-wide whitespace-pre-line"
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
            {presentationData.hero.subtitle}
          </p>
          <p className="text-cream-100/60 text-sm">
            {presentationData.development.usefulArea} de área útil
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}
