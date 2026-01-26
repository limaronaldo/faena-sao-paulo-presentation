"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function TakeawaysSlide() {
    const takeaways = academyData.takeaways;
    const selection = academyData.selection;

    return (
        <Slide className="bg-cream-100 text-text-primary">
            <div className="relative z-10 w-full h-full flex items-center px-8 md:px-12 lg:px-16 py-10">
                {/* Two columns layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-7xl mx-auto">

                    {/* Left Column - Por que escolher a MBRAS */}
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-col"
                    >
                        <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-gold-500 mb-3">
                            Differentials
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight mb-4 text-navy-900">
                            {takeaways.title}
                        </h2>
                        <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6 whitespace-pre-line">
                            {takeaways.intro}
                        </p>

                        {/* 2x2 grid for takeaways */}
                        <div className="grid grid-cols-2 gap-3">
                            {takeaways.items.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                                    className="p-4 bg-cream-200 border-t-2 border-gold-500"
                                >
                                    <span className="font-serif font-semibold text-navy-900 text-sm md:text-base block mb-1">
                                        {item.title}
                                    </span>
                                    <p className="text-text-secondary text-xs md:text-sm">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Assessoria de Imprensa */}
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-col justify-center lg:border-l lg:border-cream-400 lg:pl-12"
                    >
                        {/* Icon */}
                        <div className="mb-6">
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 56 56"
                                fill="none"
                                className="text-gold-500"
                            >
                                <circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="2" fill="none" />
                                <path
                                    d="M28 12 L28 44 M12 28 L44 28 M18 18 L38 38 M38 18 L18 38"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    opacity="0.5"
                                />
                                <circle cx="28" cy="28" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </div>

                        <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-gold-500 mb-3">
                            Strategic Communication
                        </span>

                        <h3 className="text-2xl md:text-3xl font-serif leading-tight mb-4 text-navy-900">
                            {selection.title}
                        </h3>

                        <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6">
                            {selection.description}
                        </p>

                        <div className="w-16 h-px bg-gold-500 mb-6" />

                        <p className="text-xs md:text-sm text-text-muted italic">
                            {selection.process}
                        </p>
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
