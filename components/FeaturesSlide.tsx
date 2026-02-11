"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { Waves, Shield, Home, Sparkles } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
    "Lazer e Bem-Estar": Waves,
    "Segurança": Shield,
    "Infraestrutura": Home,
    "Áreas Comuns": Sparkles,
};

export default function FeaturesSlide() {
    const { features } = presentationData;

    return (
        <Slide className="bg-light-100 text-dark-900">
            <div className="absolute inset-0 bg-gradient-to-b from-light-50/30 via-light-100 to-light-100" />

            <div className="z-10 w-full max-w-6xl px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-accent-500 tracking-[0.3em] uppercase text-xs mb-6">
                        Amenidades
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-dark-900">
                        {features.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.categories.map((category, categoryIndex) => {
                        const IconComponent = categoryIcons[category.title] || Sparkles;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * categoryIndex, duration: 0.6 }}
                                className="group relative"
                            >
                                {/* Gradient border effect */}
                                <div className="absolute -inset-[1px] bg-gradient-to-b from-accent-500/30 via-accent-500/10 to-transparent rounded-2xl" />

                                <div className="relative bg-light-50 backdrop-blur-sm rounded-2xl p-6 h-full shadow-sm">
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/15 to-accent-600/5 flex items-center justify-center mb-5 border border-accent-500/20">
                                        <IconComponent className="w-5 h-5 text-accent-500" strokeWidth={1.5} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-serif text-accent-600 mb-5">
                                        {category.title}
                                    </h3>

                                    {/* Items */}
                                    <ul className="space-y-3">
                                        {category.items.map((item, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                                className="flex items-center gap-3 text-dark-700/70 text-sm"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-accent-500/60" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Decorative element */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="w-16 h-0.5 bg-accent-500/30 mx-auto mt-16"
                />
            </div>
        </Slide>
    );
}
