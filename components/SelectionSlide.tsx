"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function SelectionSlide() {
    const selection = academyData.selection;

    return (
        <Slide className="bg-cream-100 text-text-primary">
            <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-12 text-center">
                {/* Keyhole icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-10"
                >
                    <svg
                        width="56"
                        height="72"
                        viewBox="0 0 48 64"
                        fill="none"
                        className="text-gold-500"
                    >
                        <circle cx="24" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path
                            d="M18 36 L18 58 L30 58 L30 36 L24 32 Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </motion.div>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8"
                >
                    {selection.title}
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-2xl mb-6"
                >
                    {selection.description}
                </motion.p>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-base md:text-lg lg:text-xl text-text-muted max-w-xl"
                >
                    {selection.process}
                </motion.p>
            </div>
        </Slide>
    );
}
