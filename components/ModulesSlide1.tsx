"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function ModulesSlide1() {
    const modules = academyData.modules.section1;

    return (
        <Slide className="bg-cream-200 text-text-primary">
            <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
                {/* Section Title */}
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif underline decoration-1 underline-offset-8 mb-12"
                >
                    {modules.title}
                </motion.h2>

                <div className="space-y-8 md:space-y-10">
                    {modules.items.map((module, index) => (
                        <motion.div
                            key={module.title}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                        >
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold mb-3">
                                Módulo {module.number}: {module.title}
                            </h3>
                            <p className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-4xl">
                                {module.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
