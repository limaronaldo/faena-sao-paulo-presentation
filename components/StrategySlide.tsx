"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { Crown, Brain, Route } from "lucide-react";

const icons = {
  crown: Crown,
  brain: Brain,
  map: Route,
};

export default function StrategySlide() {
  const strategy = presentationData.strategy;

  return (
    <Slide variant="faena">
      <div className="container mx-auto px-6 py-0 md:py-12 h-full flex flex-col justify-center">
        <motion.div
          className="max-w-4xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-500 text-sm tracking-widest uppercase mb-4 block">
            Nossa Abordagem
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            {strategy.title}
          </h2>
          <p className="text-lg md:text-xl font-sans text-cream-100/70 leading-relaxed max-w-3xl">
            {strategy.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {strategy.pillars.map((pillar, index) => {
            const Icon = icons[pillar.icon as keyof typeof icons];
            return (
              <motion.div
                key={index}
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="mb-4 md:mb-6 text-gold-500">
                  <Icon className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-cream-100">{pillar.title}</h3>
                <p className="text-cream-100/60 leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}
