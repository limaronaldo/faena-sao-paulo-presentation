"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function SelectionSlide() {
    const selection = academyData.selection;

    return (
        <Slide className="bg-cream-200 text-text-primary">
            <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-12 text-center">
                {/* Icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-6"
                >
                    <svg
                        width="40"
                        height="40"
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
                </motion.div>

                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                    className="text-xs tracking-[0.2em] uppercase text-gold-500 mb-3"
                >
                    Comunicação Estratégica
                </motion.span>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight mb-5 text-navy-900"
                >
                    {selection.title}
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-sm md:text-base lg:text-lg text-text-secondary max-w-xl mb-4"
                >
                    {selection.description}
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="w-16 h-px bg-gold-500 my-4"
                />

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-xs md:text-sm text-text-muted max-w-lg italic"
                >
                    {selection.process}
                </motion.p>
            </div>
        </Slide>
    );
}
