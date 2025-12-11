"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function TypologiesSlide() {
  const typo = presentationData.typologies;

  return (
    <Slide variant="faena">
      <div className="container mx-auto px-6 py-0 md:py-12 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-gold-500 text-sm tracking-widest uppercase mb-4 block">
            Produto
          </span>
          <h2 className="text-3xl md:text-5xl font-serif">{typo.title}</h2>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="overflow-x-auto mb-10"
        >
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="border-b border-cream-100/20">
                <th className="py-3 text-sm font-medium text-cream-100/60">Tipologia</th>
                <th className="py-3 text-sm font-medium text-cream-100/60 text-center">Unidades</th>
                <th className="py-3 text-sm font-medium text-cream-100/60">Configuração</th>
                <th className="py-3 text-sm font-medium text-cream-100/60 text-right">Preço Est.</th>
              </tr>
            </thead>
            <tbody>
              {typo.units.map((unit, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                  className="border-b border-cream-100/5 hover:bg-cream-100/5 transition-colors"
                >
                  <td className="py-3 text-cream-100">{unit.type}</td>
                  <td className="py-3 text-cream-100 text-center">{unit.units}</td>
                  <td className="py-3 text-cream-100/70 text-sm">{unit.config}</td>
                  <td className="py-3 text-gold-500 font-medium text-right">{unit.price}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {typo.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-gold-500 shrink-0" />
              <span className="text-cream-100/70">{feature}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </Slide>
  );
}
