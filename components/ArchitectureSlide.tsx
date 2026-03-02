"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function ArchitectureSlide() {
  const arch = presentationData.architecture;

  return (
    <Slide variant="dark">
      <div className="container mx-auto px-6 py-8 md:py-12 h-full flex flex-col justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-gold-500 text-sm tracking-widest uppercase mb-3 block">
            Arquitetura
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">{arch.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Concept */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <div className="bg-dark-800/50 border border-gold-500/30 rounded-xl p-5 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-xs text-cream-100/50 uppercase tracking-wider">Conceito</p>
                  <p className="text-xl font-serif text-gold-500">{arch.concept}</p>
                </div>
              </div>
              <p className="text-cream-100/70 text-sm leading-relaxed">{arch.conceptDescription}</p>
            </div>
          </motion.div>

          {/* Architects Header */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-lg font-serif text-gold-500 mb-4">Time de Arquitetos</h3>
            <div className="grid grid-cols-2 gap-3">
              {arch.architects.map((architect, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.06, duration: 0.5 }}
                  className="bg-dark-800/30 border border-cream-100/5 rounded-lg p-3 hover:border-gold-500/20 transition-colors"
                >
                  <h4 className="text-cream-100 font-medium text-sm">{architect.name}</h4>
                  <p className="text-gold-500/80 text-xs">{architect.role}</p>
                  <p className="text-cream-100/40 text-xs mt-1">{architect.credential}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
