"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function ProgramSlide() {
    const program = academyData.program;

    return (
        <Slide className="bg-cream-200 text-text-primary">
            <div className="w-full h-full flex flex-col">
                {/* Main content area */}
                <div className="flex-1 flex items-center px-8 md:px-16 lg:px-24 py-12">
                    <div className="max-w-3xl">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight mb-6"
                        >
                            {program.title}
                        </motion.h2>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-xl md:text-2xl lg:text-3xl text-gold-500 font-serif mb-10"
                        >
                            {program.subtitle}
                        </motion.p>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed"
                        >
                            {program.description}
                        </motion.p>
                    </div>
                </div>

                {/* Decorative curve */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute right-0 bottom-0 w-1/2 h-1/2 pointer-events-none"
                >
                    <svg
                        viewBox="0 0 400 300"
                        className="w-full h-full"
                        preserveAspectRatio="xMaxYMax slice"
                    >
                        <path
                            d="M 0 300 Q 100 200 200 150 T 400 50"
                            fill="none"
                            stroke="#b08d4b"
                            strokeWidth="2"
                            opacity="0.5"
                        />
                    </svg>
                </motion.div>
            </div>
        </Slide>
    );
}
