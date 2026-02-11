"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { Bath, Car, Maximize, Home } from "lucide-react";

export default function PropertySlide() {
    const { development } = presentationData;

    const specs = [
        { icon: Bath, label: "Suítes", value: "4" },
        { icon: Car, label: "Vagas", value: "4" },
        { icon: Maximize, label: "Área Privativa", value: "620 m²" },
        { icon: Home, label: "Unidades", value: "3 casas" },
    ];

    return (
        <Slide className="bg-light-50 text-dark-900">
            <div className="absolute inset-0 bg-gradient-to-br from-light-200/50 via-light-50 to-light-50" />

            <div className="z-10 w-full max-w-5xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-accent-500 tracking-[0.3em] uppercase text-xs mb-6">
                        Propriedade Exclusiva
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light mb-3 text-dark-900">
                        {development.name}
                    </h2>
                    <p className="text-dark-700/50 text-lg">
                        {development.location}
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
                                className="flex flex-col items-center p-6 md:p-8 bg-light-200/60 rounded-2xl border border-light-300/60 backdrop-blur-sm min-w-[140px]"
                            >
                                <IconComponent className="w-6 h-6 text-accent-500 mb-3" strokeWidth={1.5} />
                                <p className="text-2xl md:text-3xl font-serif text-dark-900 mb-1">
                                    {spec.value}
                                </p>
                                <p className="text-dark-700/40 text-xs uppercase tracking-wider">
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
                    className="w-16 h-0.5 bg-accent-500/50 mx-auto mt-16"
                />
            </div>
        </Slide>
    );
}
