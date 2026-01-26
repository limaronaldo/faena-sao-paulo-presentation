"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function MethodologySlide() {
    const methodology = academyData.methodology;

    return (
        <Slide className="bg-cream-100 text-text-primary">
            <div className="w-full h-full flex flex-col justify-center items-center px-8 md:px-16 lg:px-24 py-12 text-center">
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-xs md:text-sm tracking-[0.2em] uppercase text-gold-500 mb-4"
                >
                    Equipe Especializada
                </motion.span>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight mb-14 text-navy-900"
                >
                    {methodology.title}
                </motion.h2>

                {/* 2x2 Grid - Medium size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy-900/10 border border-navy-900/10 max-w-4xl w-full">
                    {methodology.formats.map((format, index) => (
                        <motion.div
                            key={format.title}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                            className="bg-cream-100 p-8 md:p-10 text-center"
                        >
                            <h3 className="text-lg md:text-xl lg:text-2xl font-serif font-semibold mb-3 text-navy-900">
                                {format.title}
                            </h3>
                            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                                {format.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
