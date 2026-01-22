"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function TechStackSlide() {
    const techStack = academyData.techStack;

    return (
        <Slide className="bg-cream-200 text-text-primary">
            <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight mb-6"
                >
                    {techStack.title}
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-3xl mb-20"
                >
                    {techStack.description}
                </motion.p>

                {/* Tech logos */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-wrap items-center gap-6 md:gap-10 lg:gap-12"
                >
                    {techStack.tools.map((tool, index) => (
                        <motion.span
                            key={tool}
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                            className="text-xl md:text-2xl lg:text-3xl font-sans font-medium text-text-primary"
                        >
                            {tool}
                            {index < techStack.tools.length - 1 && (
                                <span className="ml-6 md:ml-10 lg:ml-12 text-gold-500">|</span>
                            )}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </Slide>
    );
}
