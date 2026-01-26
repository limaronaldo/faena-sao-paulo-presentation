"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function VisionSlide1() {
    const about = academyData.about;

    return (
        <Slide className="bg-cream-100 text-text-primary">
            <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-12">
                <div className="max-w-3xl text-center">
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-xs md:text-sm tracking-[0.2em] uppercase text-gold-500 mb-4 block"
                    >
                        Founded in 2010
                    </motion.span>

                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8"
                    >
                        {about.title}
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="w-16 h-px bg-gold-500 mx-auto mb-8"
                    />

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-sm md:text-base lg:text-lg text-text-secondary leading-relaxed mb-6"
                    >
                        {about.description}
                    </motion.p>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-xs md:text-sm text-text-muted leading-relaxed italic mt-18"
                    >
                        {about.location}
                    </motion.p>
                </div>
            </div>
        </Slide>
    );
}
