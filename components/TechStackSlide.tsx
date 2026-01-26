"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function TechStackSlide() {
    const techStack = academyData.techStack;

    const stats = [
        { number: "13,5", label: "Bilhões", description: "Volume Transacionado" },
        { number: "1000+", label: "Imóveis", description: "Negociados" },
        { number: "16", label: "Anos", description: "De Excelência" },
        { number: "98%", label: "Satisfação", description: "Dos Clientes" },
    ];

    return (
        <Slide className="bg-cream-200 text-text-primary">
            <div className="w-full h-full flex items-center px-8 md:px-12 lg:px-16 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-7xl mx-auto">

                    {/* Left Column - Marketing */}
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-gold-500 mb-3">
                            Alcance Estratégico
                        </span>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight mb-4 text-navy-900">
                            {techStack.title}
                        </h2>

                        <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6">
                            {techStack.description}
                        </p>

                        {/* Channel badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="text-xs tracking-[0.15em] uppercase text-text-muted">
                                Redes Sociais:
                            </span>
                            {techStack.tools.map((tool, index) => (
                                <motion.span
                                    key={tool}
                                    initial={{ y: 10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                                    className="px-3 py-1.5 bg-navy-900 text-cream-100 text-xs font-medium"
                                >
                                    {tool}
                                </motion.span>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-cream-400">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl md:text-3xl font-serif text-gold-500 font-semibold">
                                    70.000+
                                </span>
                                <span className="text-sm text-text-secondary">
                                    contatos em nosso mailing
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Stats with gold accents */}
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex items-center lg:pl-8"
                    >
                        <div className="grid grid-cols-2 gap-6 w-full">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                                    className="text-center"
                                >
                                    <div className="w-8 h-0.5 bg-gold-500 mx-auto mb-3" />
                                    <span className="text-2xl md:text-3xl font-serif text-navy-900 block">
                                        {stat.number}
                                    </span>
                                    <span className="text-sm md:text-base text-navy-900 font-medium block">
                                        {stat.label}
                                    </span>
                                    <span className="text-xs tracking-[0.1em] uppercase text-text-muted block mt-1">
                                        {stat.description}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
