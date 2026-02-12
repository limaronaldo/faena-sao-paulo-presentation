"use client";

import Slide from "./Slide";
import { motion } from "framer-motion";
import { presentationData } from "./data";

export default function ExpertiseSlide() {
    const { expertise } = presentationData;

    return (
        <Slide className="bg-light-50 text-dark-900">
            <div className="z-10 w-full max-w-5xl px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-dark-900 leading-tight mb-6">
                        {expertise.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {expertise.stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 * index, duration: 0.5 }}
                            className="bg-light-100/50 p-8 rounded-2xl border border-light-300 text-center"
                        >
                            <p className="text-4xl md:text-5xl font-serif text-accent-500 mb-3">
                                {stat.value}
                            </p>
                            <p className="text-dark-700/70 text-sm md:text-base">
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
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-accent-500 shrink-0" />
                            <p className="text-dark-700/80 text-lg leading-relaxed">
                                {item}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
