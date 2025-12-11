"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { Building2, Hotel, Palette } from "lucide-react";

const icons = {
  "building-2": Building2,
  hotel: Hotel,
  palette: Palette,
};

export default function ComplexSlide() {
  const complex = presentationData.complex;

  return (
    <Slide variant="dark">
      <div className="container mx-auto px-6 py-0 md:py-12 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-sm tracking-widest uppercase mb-4 block">
            Conceito
          </span>
          <h2 className="text-4xl md:text-5xl font-serif">{complex.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {complex.components.map((component, index) => {
            const Icon = icons[component.icon as keyof typeof icons];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="bg-dark-800/50 border border-cream-100/10 rounded-xl p-8 text-center hover:border-gold-500/30 transition-colors duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="text-2xl font-serif text-cream-100 mb-4">{component.title}</h3>
                <p className="text-cream-100/60 leading-relaxed">{component.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}
