"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function ModulesSlide1() {
    const section1 = academyData.modules.section1;
    const section2 = academyData.modules.section2;

    // Combine all items from both sections
    const allItems = [...section1.items, ...section2.items];

    return (
        <Slide className="bg-navy-800 text-cream-100">
            <div className="absolute inset-0 navy-gradient-overlay opacity-50" />

            <div className="relative z-10 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-20 py-10">
                {/* Section Title */}
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-2"
                >
                    MBRAS Club
                </motion.span>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl md:text-2xl lg:text-3xl font-serif mb-8 text-cream-100"
                >
                    Diferenciais MBRAS
                </motion.h2>

                {/* 2 rows x 3 columns grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl">
                    {allItems.map((module, index) => (
                        <motion.div
                            key={module.title}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                            className="border border-cream-100/20 p-4 hover:border-gold-500 transition-colors duration-300"
                        >
                            <span className="text-gold-400 text-xl md:text-2xl font-serif mb-2 block">
                                0{module.number}
                            </span>
                            <h3 className="text-sm md:text-base font-serif font-semibold mb-1 text-cream-100">
                                {module.title}
                            </h3>
                            <p className="text-xs md:text-sm text-cream-100/70 leading-relaxed">
                                {module.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
