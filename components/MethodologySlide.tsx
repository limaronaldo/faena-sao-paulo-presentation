"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function MethodologySlide() {
    const methodology = academyData.methodology;

    return (
        <Slide className="bg-cream-100 text-text-primary">
            <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 py-12">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight mb-12 text-center"
                >
                    {methodology.title}
                </motion.h2>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream-300 border border-cream-300 max-w-4xl mx-auto w-full">
                    {methodology.formats.map((format, index) => (
                        <motion.div
                            key={format.title}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                            className="bg-cream-100 p-6 md:p-8"
                        >
                            <h3 className="text-lg md:text-xl font-serif font-semibold mb-3">
                                {format.title}
                            </h3>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                {format.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
