"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";

export default function ClosingSlide() {
  const closing = presentationData.closing;

  return (
    <Slide className="bg-light-50 text-dark-900">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(/hype-closing.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-light-50 via-light-50/90 to-light-50/75" />

      <div className="z-10 flex flex-col items-center text-center max-w-4xl px-6">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif font-light leading-tight mb-8 whitespace-pre-line text-dark-900"
        >
          {closing.headline}
        </motion.h2>



        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-accent-500 tracking-[0.2em] uppercase text-lg md:text-xl font-medium mb-12 max-w-3xl leading-relaxed"
        >
          {closing.tagline}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-24 h-1 bg-accent-500 mb-8"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex items-center justify-center gap-8"
        >
          <img
            src="https://img.mbras.com.br/mbras/mbras-logo-x.png?updatedAt=1766455454000"
            alt="MBRAS"
            className="h-12 md:h-16 w-auto object-contain"
          />
          <span className="text-accent-500/60 text-xl font-light">×</span>
          <img
            src="/hype-logo.png"
            alt="Hype Gabriel"
            className="h-20 md:h-24 w-auto object-contain"
          />
        </motion.div>
      </div>
    </Slide>
  );
}
