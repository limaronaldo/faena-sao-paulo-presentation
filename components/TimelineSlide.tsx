"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";

export default function TimelineSlide() {
  const timeline = presentationData.timeline;

  return (
    <Slide variant="faena">
      <div className="container mx-auto px-6 py-0 md:py-12 h-full flex flex-col justify-center max-w-4xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-gold-500 tracking-[0.3em] uppercase text-xs mb-6 block">
            Estratégia
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light leading-tight mb-4">
            {timeline.title}
          </h2>
          <p className="text-cream-100/50 text-sm md:text-base max-w-3xl">
            {timeline.description}
          </p>
        </motion.div>

        <div className="space-y-6">
          {timeline.steps.map((step, index) => (
            <motion.div
              key={step.month}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.15 * index, duration: 0.5 }}
              className="flex gap-4 items-start"
            >
              <div className="mt-2 w-2.5 h-2.5 rounded-full bg-gold-500 shrink-0" />
              <div>
                <p className="text-xl md:text-2xl font-sans mt-0.5">
                  <span className="font-semibold text-cream-100">
                    {step.month}:
                  </span>{" "}
                  <span className="font-semibold text-gold-500">
                    {step.title}
                  </span>
                </p>
                <p className="text-cream-100/50 text-base md:text-lg mt-2 leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
