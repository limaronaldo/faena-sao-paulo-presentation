"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function HeroSlide() {
  const hero = academyData.hero;

  return (
    <Slide className="bg-navy-900 text-cream-100">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 navy-gradient-overlay" />

      <div className="z-10 flex flex-col items-center text-center max-w-4xl px-6 py-16">
        <motion.img
          src="https://img.mbras.com.br/logos/LOGO%20MBRAS%20HORZ%20BRANCA.png?updatedAt=1768416071539"
          alt="MBRAS"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="h-16 md:h-20 lg:h-24 object-contain mb-12"
        />

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-32 h-px bg-gold-500 mb-12"
        />

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-cream-100/70 whitespace-pre-line mb-8"
        >
          {hero.subtitle}
        </motion.p>



        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xs tracking-[0.2em] uppercase text-cream-100/50"
        >
          {hero.partnership}
        </motion.p>
      </div>
    </Slide>
  );
}
