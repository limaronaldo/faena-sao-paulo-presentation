"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function HeroSlide() {
  const hero = academyData.hero;

  return (
    <Slide className="bg-cream-100 text-text-primary">
      <div className="z-10 flex flex-col items-center text-center max-w-4xl px-6 py-16">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide mb-6"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-text-secondary whitespace-pre-line mb-12"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-32 h-px bg-gold-500 mb-12"
        />

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl font-serif italic text-text-secondary mb-16"
        >
          {hero.tagline}
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xs tracking-[0.2em] uppercase text-text-muted"
        >
          {hero.partnership}
        </motion.p>
      </div>
    </Slide>
  );
}
