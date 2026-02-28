"use client";

import { presentationData } from "./data";
import { motion, Variants } from "framer-motion";

export default function HeroSlide() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
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
    <motion.div className="w-full min-h-screen lg:h-screen flex flex-col justify-center items-center relative lg:snap-start lg:overflow-hidden">
      {/* Full-bleed background */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/pinna-hero.jpg')` }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-olive-dark via-olive-dark/60 to-olive-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-olive-dark/50 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 flex flex-col items-center text-center max-w-5xl px-6"
      >
        {/* Logos */}
        <motion.div variants={item} className="flex items-center justify-center gap-8 mb-14">
          <img
            src="https://img.mbras.com.br/mbras/mbras-logo-x.png?updatedAt=1766455454000"
            alt="MBRAS"
            className="h-16 md:h-20 object-contain brightness-0 invert opacity-80"
          />
          <span className="text-bronze-500/60 text-xl font-light">×</span>
          <span className="text-3xl md:text-4xl font-serif font-light tracking-[0.15em] text-cream-50/90">PINNA 5109</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="flex flex-col items-center justify-center text-center mb-10"
        >
          <span className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1] tracking-wide">
            {presentationData.hero.title}
          </span>
          {presentationData.hero.highlight && (
            <span className="block text-3xl md:text-5xl lg:text-6xl font-serif italic text-bronze-400 mt-4 leading-tight">
              {presentationData.hero.highlight}
            </span>
          )}
        </motion.h1>

        <motion.div
          variants={item}
          className="w-24 h-px bg-bronze-500/50 mb-10"
        />

        <motion.div variants={item} className="flex flex-col items-center gap-3">
          <p className="text-cream-100/70 text-sm md:text-base tracking-[0.3em] uppercase font-medium">
            {presentationData.hero.subtitle}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
