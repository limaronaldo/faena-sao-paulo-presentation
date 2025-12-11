"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";

export default function TimelineSlide() {
  const timeline = presentationData.timeline;

  return (
    <Slide variant="faena">
      <div className="container mx-auto px-6 py-0 md:py-12 h-full flex flex-col justify-center">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-500 text-sm tracking-widest uppercase mb-4 block">
            Plano de Ação
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            {timeline.title}
          </h2>
          <p className="text-lg md:text-xl font-sans text-cream-100/70 leading-relaxed max-w-4xl">
            {timeline.description}
          </p>
        </motion.div>

        <div className="relative pl-8 md:pl-12 border-l-2 border-gold-500/30 space-y-12">
          {timeline.steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 md:w-7 md:h-7 rounded-full border-4 border-dark-900 bg-gold-500" />

              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <h3 className="text-xl md:text-2xl font-bold font-serif text-gold-500">
                  {step.month}:
                </h3>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-cream-100">
                  {step.title}
                </h3>
              </div>
              <p className="text-lg text-cream-100/60 max-w-3xl">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
