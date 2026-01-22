"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function ClosingSlide() {
  const closing = academyData.closing;

  return (
    <Slide className="bg-dark-900 text-cream-100">
      <div className="z-10 flex flex-col items-start justify-center max-w-4xl px-8 md:px-16 py-12 h-full">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-8"
        >
          {closing.headline}
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base md:text-lg text-cream-100/80 mb-12"
        >
          {closing.cta}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-24 h-px bg-gold-500 mb-6"
        />

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xs tracking-[0.2em] uppercase text-cream-100/60"
        >
          {closing.partnership}
        </motion.p>
      </div>
    </Slide>
  );
}
