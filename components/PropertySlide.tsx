"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { Bed, Bath, Car, Maximize, Trees } from "lucide-react";

export default function PropertySlide() {
    const { development } = presentationData;

    const specs = [
        { icon: Bed, label: "Quartos", value: "6" },
        { icon: Bath, label: "Suítes", value: "5" },
        { icon: Car, label: "Vagas", value: "6" },
        { icon: Maximize, label: "Área Útil", value: "750 m²" },
        { icon: Trees, label: "Terreno", value: "22.000 m²" },
    ];

    return (
        <Slide className="bg-dark-900 text-cream-100">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-800/30 via-dark-900 to-dark-900" />

            <div className="z-10 w-full max-w-5xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-gold-500 tracking-[0.3em] uppercase text-xs mb-6">
                        Propriedade Exclusiva
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light mb-3">
                        {development.name}
                    </h2>
                    <p className="text-cream-100/50 text-lg">
                        {development.location}
                    </p>
                </motion.div>

                {/* Price - Featured */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-cream-100/40 text-sm uppercase tracking-widest mb-2">
                        Valor do Investimento
                    </p>
                    <p className="text-5xl md:text-7xl font-serif text-gold-500 font-light">
                        R$ 21.000.000
                    </p>
                </motion.div>

                {/* Specs Grid */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-6"
                >
                    {specs.map((spec, index) => {
                        const IconComponent = spec.icon;
                        return (
                            <motion.div
                                key={spec.label}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center p-6 md:p-8 bg-dark-800/40 rounded-2xl border border-cream-100/5 backdrop-blur-sm min-w-[140px]"
                            >
                                <IconComponent className="w-6 h-6 text-gold-500 mb-3" strokeWidth={1.5} />
                                <p className="text-2xl md:text-3xl font-serif text-cream-100 mb-1">
                                    {spec.value}
                                </p>
                                <p className="text-cream-100/40 text-xs uppercase tracking-wider">
                                    {spec.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="w-16 h-0.5 bg-gold-500/50 mx-auto mt-16"
                />
            </div>
        </Slide>
    );
}
