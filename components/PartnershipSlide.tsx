"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";

export default function PartnershipSlide() {
  const partnership = presentationData.partnership;

  return (
    <Slide variant="faena">
      <div className="container mx-auto px-6 py-0 md:py-12 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gold-500 text-sm tracking-widest uppercase mb-4 block">
            Estrutura
          </span>
          <h2 className="text-4xl md:text-5xl font-serif">{partnership.title}</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {partnership.partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-dark-800/50 border border-cream-100/10 rounded-xl p-6 text-center hover:border-gold-500/30 transition-colors duration-500"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain brightness-0 invert opacity-80"
                />
              </div>
              <h3 className="text-lg font-serif text-cream-100 mb-1">{partner.name}</h3>
              <p className="text-gold-500 text-sm mb-2">{partner.role}</p>
              <p className="text-cream-100/50 text-xs">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
