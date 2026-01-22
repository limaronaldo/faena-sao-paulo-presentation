"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function ModulesSlide2() {
    const modules = academyData.modules.section2;

    return (
        <Slide className="bg-cream-200 text-text-primary">
            {/* Decorative curve */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute right-0 top-1/3 w-1/2 h-1/3 pointer-events-none"
            >
                <svg
                    viewBox="0 0 400 200"
                    className="w-full h-full"
                    preserveAspectRatio="xMaxYMid slice"
                >
                    <path
                        d="M 0 100 Q 100 50 200 100 T 400 100"
                        fill="none"
                        stroke="#b08d4b"
                        strokeWidth="1.5"
                        opacity="0.3"
                    />
                </svg>
            </motion.div>

            <div className="relative z-10 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
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
