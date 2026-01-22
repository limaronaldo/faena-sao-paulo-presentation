"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function VisionSlide1() {
    const vision = academyData.vision;

    return (
        <Slide className="bg-cream-100 text-text-primary">
            <div className="w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-24">
                <div className="max-w-4xl">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight mb-8"
                    >
                        {vision.section1.title}
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-lg md:text-xl lg:text-2xl text-text-secondary leading-relaxed"
                    >
                        {vision.section1.description}
                    </motion.p>
                </div>
            </div>
        </Slide>
    );
}
