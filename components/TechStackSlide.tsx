"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function TechStackSlide() {
    const techStack = academyData.techStack;

    return (
        <Slide className="bg-cream-200 text-text-primary">
            <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 py-12">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-4"
                >
                    {techStack.title}
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-sm md:text-base text-text-secondary leading-relaxed max-w-2xl mb-16"
                >
                    {techStack.description}
                </motion.p>

                {/* Tech logos */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-wrap items-center gap-6 md:gap-10"
                >
                    {techStack.tools.map((tool, index) => (
                        <motion.span
                            key={tool}
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                            className="text-lg md:text-xl font-sans font-medium text-text-primary"
                        >
                            {tool}
                            {index < techStack.tools.length - 1 && (
                                <span className="ml-6 md:ml-10 text-gold-500">|</span>
                            )}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </Slide>
    );
}
