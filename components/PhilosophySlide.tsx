"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function PhilosophySlide() {
    const philosophy = academyData.philosophy;

    return (
        <Slide className="bg-navy-900 text-cream-100">
            <div className="absolute inset-0 navy-gradient-overlay opacity-50" />

            <div className="relative z-10 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-4 text-white"
                >
                    {philosophy.title}
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-sm md:text-base text-cream-100/80 mb-12 max-w-xl"
                >
                    {philosophy.subtitle}
                </motion.p>

                {/* Values in a row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl">
                    {philosophy.pillars.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                            className="border-t border-gold-500/50 pt-5"
                        >
                            <span className="text-gold-400 text-2xl md:text-3xl font-serif mb-3 block">
                                {index + 1}
                            </span>
                            <h3 className="text-base md:text-lg font-serif font-semibold mb-2 text-cream-100">
                                {value.title}
                            </h3>
                            <p className="text-xs md:text-sm text-cream-100/70 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
