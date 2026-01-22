"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function PhilosophySlide() {
    const philosophy = academyData.philosophy;

    return (
        <Slide className="bg-cream-200 text-text-primary">
            <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
                {/* Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-6"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
                        {philosophy.title}
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-base md:text-lg lg:text-xl text-text-secondary mb-16 max-w-3xl"
                >
                    {philosophy.subtitle}
                </motion.p>

                {/* Three Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                    {philosophy.pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                            className="flex flex-col"
                        >
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold mb-4">
                                <span className="text-gold-500">{pillar.number}.</span> {pillar.title}
                            </h3>
                            <p className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
