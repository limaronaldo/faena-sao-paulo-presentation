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
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.05]"
        style={{ backgroundImage: `url('/pinna-hero.jpg')` }}
      />

      {/* Dark gradient & tint overlays for better contrast */}
      <div className="absolute inset-0 bg-[#0a0a08]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08] via-[#0a0a08]/80 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#c5a467]/10 via-transparent to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 flex flex-col items-center text-center max-w-5xl px-6"
      >
        {/* Logos MBRAS & SDI */}
        <motion.div variants={item} className="flex items-center justify-center gap-8 mb-20">
          <img
            src="/logo-mbras.png"
            alt="MBRAS"
            className="h-16 md:h-20 object-contain brightness-0 invert opacity-90"
          />
          <div className="w-px h-10 bg-cream-50/20" />
          <img
            src="/logo-sdi.svg"
            alt="SDI Desenvolvimento Imobiliário"
            className="h-12 md:h-16 w-auto object-contain opacity-90"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="flex flex-col items-center justify-center text-center mb-6"
        >
          <span className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1] tracking-wide">
            {presentationData.hero.title}
          </span>
          {presentationData.hero.highlight && (
            <span className="block text-3xl md:text-5xl lg:text-6xl font-serif italic text-bronze-400 mt-3 leading-tight">
              {presentationData.hero.highlight}
            </span>
          )}
        </motion.h1>

        {/* Divider */}
        <motion.div variants={item} className="w-16 h-px bg-bronze-500/40 my-6" />

        {/* Pinna logo */}
        <motion.div variants={item}>
          <img
            src="/pinna-logo-off-white.svg"
            alt="Pinna 5109"
            className="h-6 md:h-8 w-auto object-contain opacity-60"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
