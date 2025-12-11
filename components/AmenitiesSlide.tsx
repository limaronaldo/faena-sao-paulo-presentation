"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { Dumbbell, Sparkles, Users } from "lucide-react";

const categoryIcons = {
  0: Dumbbell,
  1: Sparkles,
  2: Users,
};

export default function AmenitiesSlide() {
  const amenities = presentationData.amenities;

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
            Lazer & Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-serif">{amenities.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {amenities.categories.map((category, index) => {
            const Icon = categoryIcons[index as keyof typeof categoryIcons];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="bg-dark-800/50 border border-cream-100/10 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-serif text-cream-100">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-cream-100/60 text-sm flex items-start gap-2">
                      <span className="text-gold-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}
