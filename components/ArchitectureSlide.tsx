"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function ArchitectureSlide() {
  const arch = presentationData.architecture;

  return (
    <Slide variant="dark">
      <div className="container mx-auto px-6 py-0 md:py-12 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Concept */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 text-sm tracking-widest uppercase mb-4 block">
              Arquitetura
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">{arch.title}</h2>

            <div className="bg-dark-800/50 border border-gold-500/30 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <p className="text-xs text-cream-100/50 uppercase tracking-wider">Conceito</p>
                  <p className="text-2xl font-serif text-gold-500">{arch.concept}</p>
                </div>
              </div>
              <p className="text-cream-100/70 leading-relaxed">{arch.conceptDescription}</p>
            </div>
          </motion.div>

          {/* Architects */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-xl font-serif text-gold-500 mb-6">Time de Arquitetos</h3>
            <div className="space-y-4">
              {arch.architects.map((architect, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.08, duration: 0.6 }}
                  className="bg-dark-800/30 border border-cream-100/5 rounded-lg p-4 hover:border-gold-500/20 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-cream-100 font-medium">{architect.name}</h4>
                      <p className="text-gold-500/80 text-sm">{architect.role}</p>
                    </div>
                  </div>
                  <p className="text-cream-100/50 text-xs mt-2">{architect.credential}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
