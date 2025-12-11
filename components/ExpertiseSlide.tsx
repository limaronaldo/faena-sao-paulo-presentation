"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ExpertiseSlide() {
  const expertise = presentationData.expertise;

  return (
    <Slide variant="dark">
      <div className="container mx-auto px-6 py-0 md:py-12 h-full flex flex-col justify-center">
        <motion.h2
          className="text-4xl md:text-5xl font-serif mb-16 max-w-4xl leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {expertise.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {expertise.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <p className="text-4xl md:text-5xl font-serif text-gold-500 mb-2 font-bold">
                {stat.value}
              </p>
              <p className="text-cream-100/70 text-lg leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-dark-800/50 p-8 rounded-xl border border-cream-100/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-cream-100">
            Experiência Direta no Segmento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertise.portfolioExperience.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-gold-500 shrink-0 mt-1" />
                <p className="text-lg text-cream-100/80">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
