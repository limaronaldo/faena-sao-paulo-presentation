"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function ModulesSlide2() {
    const modules = academyData.modules.section2;

    return (
        <Slide className="bg-navy-900 text-cream-100">
            <div className="absolute inset-0 navy-gradient-overlay opacity-50" />

            <div className="relative z-10 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
                {/* Section Title */}
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-xs md:text-sm tracking-[0.2em] uppercase text-gold-400 mb-3"
                >
                    MBRAS Club
                </motion.span>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-serif mb-10 text-cream-100"
                >
                    {modules.title}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl">
                    {modules.items.map((module, index) => (
                        <motion.div
                            key={module.title}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                            className="border border-cream-100/20 p-5 md:p-6 hover:border-gold-500 transition-colors duration-300"
                        >
                            <span className="text-gold-400 text-2xl md:text-3xl font-serif mb-3 block">
                                0{module.number}
                            </span>
                            <h3 className="text-base md:text-lg font-serif font-semibold mb-2 text-cream-100">
                                {module.title}
                            </h3>
                            <p className="text-sm text-cream-100/70 leading-relaxed">
                                {module.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
