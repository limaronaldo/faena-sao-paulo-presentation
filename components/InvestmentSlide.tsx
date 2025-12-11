"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { clsx } from "clsx";

export default function InvestmentSlide() {
  const investment = presentationData.investment;

  return (
    <Slide variant="dark">
      <div className="container mx-auto px-6 py-0 md:py-12 h-full flex flex-col justify-center">
        <motion.div
          className="mb-8 md:mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-500 text-sm tracking-widest uppercase mb-4 block">
            Proposta
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6 leading-tight">
            {investment.title}
          </h2>
          <p className="text-lg md:text-xl font-sans text-cream-100/70 leading-relaxed">
            {investment.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {investment.details.map((detail, index) => (
            <motion.div
              key={index}
              className={clsx(
                "flex flex-col p-5 md:p-8 bg-dark-800/50 rounded-xl border",
                detail.highlight ? "border-gold-500/50" : "border-cream-100/10",
                index === 2 ? "col-span-2 md:col-span-1" : "col-span-1"
              )}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-cream-100/50 mb-2 md:mb-4">
                {detail.label}
              </span>
              <p
                className={clsx(
                  "font-serif mb-2 md:mb-4 font-medium",
                  detail.highlight
                    ? "text-3xl md:text-6xl text-gold-500"
                    : "text-2xl md:text-5xl text-cream-100"
                )}
              >
                {detail.value}
              </p>
              <p className="text-sm md:text-lg text-cream-100/60 leading-relaxed border-t border-cream-100/10 pt-2 md:pt-4">
                {detail.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
