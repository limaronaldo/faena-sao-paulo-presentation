"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function FaenaLegacySlide() {
  const legacy = presentationData.faenaLegacy;

  return (
    <Slide variant="dark">
      <div className="container mx-auto px-6 py-0 md:py-12 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gold-500 text-sm tracking-widest uppercase mb-4 block">
            A Marca
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">{legacy.title}</h2>
          <p className="text-lg text-cream-100/60 max-w-2xl mx-auto">
            Fundado por <span className="text-gold-500">{legacy.founder}</span> — {legacy.founderBio}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {legacy.districts.map((district, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className={`bg-dark-800/50 border rounded-xl p-6 ${
                index === 2 ? "border-gold-500/50" : "border-cream-100/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-gold-500" />
                <div>
                  <h3 className="text-xl font-serif text-cream-100">{district.name}</h3>
                  <p className="text-gold-500 text-sm">{district.year}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {district.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="text-cream-100/60 text-sm flex items-start gap-2">
                    <span className="text-gold-500 mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              {index === 2 && (
                <div className="mt-4 pt-4 border-t border-gold-500/30">
                  <span className="text-gold-500 text-xs uppercase tracking-wider">
                    Próximo Distrito
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
