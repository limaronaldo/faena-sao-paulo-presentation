"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function ModulesSlide() {
    const modules = academyData.modules;

    return (
        <Slide className="bg-cream-200 text-text-primary">
            <div className="w-full h-full flex flex-col px-8 md:px-16 py-8 overflow-y-auto">
                {/* Section 1: Do Posicionamento à Prospecção */}
                <div className="mb-8">
                    <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-2xl md:text-3xl font-serif underline decoration-1 underline-offset-8 mb-6"
                    >
                        {modules.section1.title}
                    </motion.h3>

                    <div className="space-y-4">
                        {modules.section1.items.map((module, index) => (
                            <motion.div
                                key={module.title}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                            >
                                <h4 className="text-base md:text-lg font-serif font-semibold mb-1">
                                    Módulo {module.number}: {module.title}
                                </h4>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    {module.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Divider with curve */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="relative h-16 mb-8"
                >
                    <svg viewBox="0 0 800 60" className="w-full h-full" preserveAspectRatio="none">
                        <path
                            d="M 0 30 Q 200 60 400 30 T 800 30"
                            fill="none"
                            stroke="#b08d4b"
                            strokeWidth="1.5"
                            opacity="0.4"
                        />
                    </svg>
                </motion.div>

                {/* Section 2: Da Narrativa ao Fechamento */}
                <div>
                    <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-2xl md:text-3xl font-serif underline decoration-1 underline-offset-8 mb-6"
                    >
                        {modules.section2.title}
                    </motion.h3>

                    <div className="space-y-4">
                        {modules.section2.items.map((module, index) => (
                            <motion.div
                                key={module.title}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                            >
                                <h4 className="text-base md:text-lg font-serif font-semibold mb-1">
                                    Módulo {module.number}: {module.title}
                                </h4>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    {module.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Slide>
    );
}
