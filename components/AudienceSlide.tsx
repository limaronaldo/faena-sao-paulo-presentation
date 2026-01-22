"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function AudienceSlide() {
    const audience = academyData.audience;

    return (
        <Slide className="bg-cream-100 text-text-primary">
            <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-16 text-center"
                >
                    {audience.title}
                </motion.h2>

                {/* Persona Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
                    {audience.personas.map((persona, index) => (
                        <motion.div
                            key={persona.title}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                            className="bg-cream-200 border border-cream-300 p-6 md:p-8 text-center"
                        >
                            <h3 className="text-lg md:text-xl lg:text-2xl font-serif font-semibold mb-4 leading-tight">
                                {persona.title}
                            </h3>
                            <p className="text-sm md:text-base lg:text-lg text-text-secondary leading-relaxed">
                                {persona.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
