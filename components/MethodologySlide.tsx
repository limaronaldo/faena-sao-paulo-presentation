"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function MethodologySlide() {
    const methodology = academyData.methodology;

    return (
        <Slide className="bg-cream-100 text-text-primary">
            <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-16 text-center"
                >
                    {methodology.title}
                </motion.h2>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream-300 border border-cream-300 max-w-5xl mx-auto w-full">
                    {methodology.formats.map((format, index) => (
                        <motion.div
                            key={format.title}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                            className="bg-cream-100 p-8 md:p-10 lg:p-12"
                        >
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold mb-4">
                                {format.title}
                            </h3>
                            <p className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed">
                                {format.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
