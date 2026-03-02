"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";

export default function GoalsSlide() {
  const goals = presentationData.goals;

  return (
    <Slide variant="faena">
      <div className="container mx-auto px-6 py-0 md:py-12 h-full flex flex-col justify-center">
        <motion.h2
          className="text-3xl md:text-5xl font-serif mb-4 max-w-4xl leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {goals.title}
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-cream-100/50 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          {goals.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {goals.metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-dark-800/50 p-8 rounded-lg border border-cream-100/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index, duration: 0.8 }}
            >
              <h3 className="text-lg font-medium text-cream-100/60 mb-3">
                {metric.label}
              </h3>
              <p className="text-3xl md:text-4xl font-serif text-gold-500 font-bold mb-2">
                {metric.range}
              </p>
              <p className="text-base text-cream-100/40">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
