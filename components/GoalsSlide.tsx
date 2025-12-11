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
          className="text-3xl md:text-5xl font-serif mb-12 max-w-4xl leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {goals.title}
          <span className="block text-2xl md:text-3xl text-cream-100/50 mt-2">
            {goals.subtitle}
          </span>
        </motion.h2>

        {/* Desktop Table View */}
        <motion.div
          className="w-full overflow-x-auto hidden md:block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-cream-100/20">
                <th className="py-4 text-xl font-bold font-serif w-1/3">Métrica</th>
                <th className="py-4 text-xl font-bold font-serif w-1/3">Meta Conservadora</th>
                <th className="py-4 text-xl font-bold font-serif w-1/3">Meta Otimista</th>
              </tr>
            </thead>
            <tbody>
              {goals.metrics.map((metric, index) => (
                <tr
                  key={index}
                  className="border-b border-cream-100/10 hover:bg-cream-100/5 transition-colors"
                >
                  <td className="py-6 text-lg font-medium text-cream-100/80">{metric.label}</td>
                  <td className="py-6 text-xl font-serif text-cream-100">{metric.conservative}</td>
                  <td className="py-6 text-xl font-serif text-gold-500">{metric.optimistic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Card View */}
        <motion.div
          className="w-full md:hidden space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {goals.metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-dark-800/50 p-6 rounded-lg border border-cream-100/10"
            >
              <h3 className="text-lg font-bold text-cream-100 mb-4 border-b border-gold-500/30 pb-2">
                {metric.label}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-cream-100/50 mb-1">
                    Conservadora
                  </p>
                  <p className="text-xl font-serif text-cream-100 font-medium">
                    {metric.conservative}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold-500 mb-1">Otimista</p>
                  <p className="text-xl font-serif text-gold-500 font-bold">{metric.optimistic}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="mt-12 text-lg text-cream-100/60 border-l-4 border-gold-500 pl-6 py-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {goals.footer}
        </motion.p>
      </div>
    </Slide>
  );
}
