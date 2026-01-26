"use client";

import Slide from "./Slide";
import { mbrasData } from "./data";
import { motion } from "framer-motion";

export default function MbrasEssenceSlide() {
    const { essence, structure } = mbrasData;

    return (
        <Slide className="bg-cream-100 text-text-primary">
            <div className="w-full h-full flex flex-col">
                {/* Top Section: Essence */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 border-b border-cream-300">
                    <div className="lg:col-span-2 flex items-center justify-center p-8 md:p-12 bg-white">
                        <motion.h2
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-900"
                        >
                            {essence.title}
                        </motion.h2>
                    </div>
                    <div className="lg:col-span-3 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12">
                        <motion.blockquote
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-xl md:text-2xl lg:text-3xl font-serif italic text-text-primary mb-6"
                        >
                            "{essence.quote}"
                        </motion.blockquote>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-base md:text-lg text-text-secondary leading-relaxed"
                        >
                            {essence.text}
                        </motion.p>
                    </div>
                </div>

                {/* Bottom Section: Structure */}
                <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12 bg-cream-50">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-3xl md:text-4xl font-serif text-gold-600 mb-6 uppercase tracking-wider"
                    >
                        {structure.title}
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-lg md:text-xl lg:text-2xl text-text-primary leading-relaxed max-w-4xl font-light"
                    >
                        {structure.text}
                    </motion.p>
                </div>
            </div>
        </Slide>
    );
}
