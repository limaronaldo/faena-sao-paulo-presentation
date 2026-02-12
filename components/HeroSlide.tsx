"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion, Variants } from "framer-motion";

export default function HeroSlide() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <Slide className="bg-light-50 text-dark-900 overflow-hidden relative">
      {/* Background with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 10, ease: "easeOut" }} // Slow "Ken Burns" zoom out
        className="absolute inset-0 bg-[url('/hype.png')] bg-cover bg-center"
      />

      {/* Gradient Overlay - Refined for better text contrast while keeping image visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-light-50 via-light-50/80 to-light-50/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-light-50" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="z-10 flex flex-col items-center text-center max-w-5xl px-6"
      >
        <motion.div variants={item} className="flex items-center justify-center gap-8 mb-14">
          <img
            src="https://img.mbras.com.br/mbras/mbras-logo-x.png?updatedAt=1766455454000"
            alt="MBRAS"
            className="h-16 md:h-20 object-contain opacity-90"
          />
          <span className="text-accent-500/60 text-xl font-light">×</span>
          <img
            src="/hype-logo.png"
            alt="Hype Gabriel"
            className="h-24 md:h-32 object-contain opacity-90"
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="flex flex-col items-center justify-center text-center mb-10"
        >
          <span className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-dark-900 leading-[1] tracking-tight drop-shadow-sm">
            {presentationData.hero.title}
          </span>
          {/* @ts-ignore */}
          {presentationData.hero.highlight && (
            <span className="block text-3xl md:text-5xl lg:text-6xl font-serif italic text-dark-500/90 mt-4 leading-tight">
              {/* @ts-ignore */}
              {presentationData.hero.highlight}
            </span>
          )}
        </motion.h1>

        <motion.div
          variants={item}
          className="w-32 h-[1px] bg-accent-500/60 mb-12"
        />

        <motion.div variants={item} className="flex flex-col items-center gap-3">
          <p className="text-accent-600 text-sm md:text-base tracking-[0.3em] uppercase font-medium">
            {presentationData.hero.subtitle}
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
