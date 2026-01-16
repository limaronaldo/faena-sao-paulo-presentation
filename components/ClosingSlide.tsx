"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";

export default function ClosingSlide() {
  const closing = presentationData.closing;

  return (
    <Slide className="bg-dark-900 text-cream-100">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(/wresvita.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/90 to-dark-900/70" />

      <div className="z-10 flex flex-col items-center text-center max-w-4xl px-6">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif font-light leading-tight mb-8 whitespace-pre-line"
        >
          {closing.headline}
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-cream-100/70 max-w-2xl mb-6"
        >
          {closing.subheadline}
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gold-500 tracking-widest uppercase text-sm mb-8"
        >
          {closing.tagline}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-24 h-1 bg-gold-500 mb-8"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <img
            src="/MBRAS 4.png"
            alt="MBRAS"
            className="h-12 md:h-16 w-auto object-contain"
          />
        </motion.div>
      </div>
    </Slide>
  );
}
