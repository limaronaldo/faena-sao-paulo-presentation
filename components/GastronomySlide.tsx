"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { Flame, UtensilsCrossed } from "lucide-react";

export default function GastronomySlide() {
  const gastro = presentationData.gastronomy;

  return (
    <Slide variant="faena">
      <div className="container mx-auto px-6 py-0 md:py-12 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Title and Highlight */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 text-sm tracking-widest uppercase mb-4 block">
              Experiência
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">{gastro.title}</h2>

            {/* Francis Mallmann Highlight */}
            <div className="bg-dark-800/50 border border-gold-500/30 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center">
                  <Flame className="w-7 h-7 text-gold-500" />
                </div>
                <div>
                  <p className="text-2xl font-serif text-cream-100">{gastro.highlight.name}</p>
                  <p className="text-gold-500 text-sm">Chef&apos;s Table • Netflix</p>
                </div>
              </div>
              <p className="text-cream-100/70 leading-relaxed">{gastro.highlight.description}</p>
            </div>
          </motion.div>

          {/* Right: Venues List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-xl font-serif text-gold-500 mb-6 flex items-center gap-3">
              <UtensilsCrossed className="w-5 h-5" />
              Espaços Gastronômicos
            </h3>
            <div className="space-y-4">
              {gastro.venues.map((venue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="bg-dark-800/30 border border-cream-100/5 rounded-lg p-4 hover:border-gold-500/20 transition-colors"
                >
                  <p className="text-cream-100">{venue}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
