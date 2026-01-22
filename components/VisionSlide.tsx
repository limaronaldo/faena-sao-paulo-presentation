"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function VisionSlide() {
    const vision = academyData.vision;

    return (
        <Slide className="bg-cream-100 text-text-primary">
            <div className="w-full h-full flex flex-col">
                {/* Section 1: Uma mudança silenciosa */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 border-b border-cream-300">
                    {/* Left: Text content */}
                    <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight mb-6"
                        >
                            {vision.section1.title}
                        </motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed"
                        >
                            {vision.section1.description}
                        </motion.p>
                    </div>

                    {/* Right: Quote with marble background */}
                    <div className="relative flex items-center justify-center p-8 md:p-16 bg-cream-200">
                        <div className="absolute inset-0 marble-texture opacity-30" />
                        <motion.blockquote
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="relative z-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif italic text-text-primary leading-relaxed text-center"
                        >
                            "{vision.section1.quote}"
                        </motion.blockquote>
                    </div>
                </div>

                {/* Section 2: O luxo exige método */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
                    {/* Left: Content */}
                    <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight mb-2"
                        >
                            {vision.section2.title}
                        </motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-sm md:text-base tracking-[0.2em] uppercase text-gold-500 mb-6"
                        >
                            {vision.section2.label}
                        </motion.p>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed mb-8"
                        >
                            {vision.section2.description}
                        </motion.p>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-lg md:text-xl lg:text-2xl font-serif italic text-text-secondary"
                        >
                            "{vision.section2.quote}"
                        </motion.p>
                    </div>

                    {/* Right: Venn Diagram */}
                    <div className="flex items-center justify-center p-8 md:p-16">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="relative w-64 h-64 md:w-80 md:h-80"
                        >
                            {/* Venn circles */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 border-2 border-gold-500 rounded-full" />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 border-2 border-text-primary rounded-full opacity-20"
                                style={{
                                    background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
                                }}
                            />

                            {/* Labels */}
                            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm md:text-base lg:text-lg text-text-secondary px-4">
                                <span>{vision.section2.diagram.left}</span>
                                <span>{vision.section2.diagram.right}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}
