"use client";

import Slide from "./Slide";
import { motion } from "framer-motion";
import { presentationData } from "./data";

export default function ExpertiseSlide() {
    const { expertise } = presentationData;

    return (
        <Slide variant="cream">
            <div className="z-10 w-full max-w-5xl px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-charcoal-900 leading-tight">
                        {expertise.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {expertise.stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 * index, duration: 0.5 }}
                            className="bg-cream-100 border border-cream-300 p-8 text-center"
                        >
                            <p className="text-4xl md:text-5xl font-serif text-olive-dark mb-3">
                                {stat.value}
                            </p>
                            <p className="text-charcoal-600 text-sm md:text-base">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {expertise.portfolioExperience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 + (0.1 * index), duration: 0.5 }}
                            className="flex items-start gap-3"
                        >
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-bronze-500 shrink-0" />
                            <p className="text-charcoal-700 text-lg leading-relaxed">
                                {item}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
