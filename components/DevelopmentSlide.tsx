"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { MapPin, Building2, Ruler, Calendar, DollarSign, TrendingUp } from "lucide-react";

export default function DevelopmentSlide() {
  const dev = presentationData.development;

  const specs = [
    { icon: MapPin, label: "Localização", value: dev.location },
    { icon: Building2, label: "Torres", value: dev.towers },
    { icon: Ruler, label: "Metragens", value: dev.sizes },
    { icon: Calendar, label: "Entrega", value: dev.delivery },
    { icon: DollarSign, label: "Preço/m²", value: dev.pricePerSqm },
    { icon: TrendingUp, label: "VGV Total", value: dev.vgv },
  ];

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
            O Empreendimento
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-4">{dev.name}</h2>
          <p className="text-xl text-cream-100/60">{dev.tagline}</p>
        </motion.div>

        {/* Main Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-dark-800/50 border border-cream-100/10 rounded-xl p-6 text-center">
            <p className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">140</p>
            <p className="text-sm text-cream-100/60">Residências</p>
          </div>
          <div className="bg-dark-800/50 border border-cream-100/10 rounded-xl p-6 text-center">
            <p className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">~100</p>
            <p className="text-sm text-cream-100/60">Quartos Hotel</p>
          </div>
          <div className="bg-dark-800/50 border border-cream-100/10 rounded-xl p-6 text-center">
            <p className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">155m</p>
            <p className="text-sm text-cream-100/60">Altura das Torres</p>
          </div>
          <div className="bg-dark-800/50 border border-cream-100/10 rounded-xl p-6 text-center">
            <p className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">~35%</p>
            <p className="text-sm text-cream-100/60">Vendido</p>
          </div>
        </motion.div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="flex items-start gap-3 bg-dark-800/30 rounded-lg p-4"
            >
              <spec.icon className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
              <div>
                <p className="text-xs text-cream-100/50 uppercase tracking-wider">{spec.label}</p>
                <p className="text-cream-100 font-medium">{spec.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
