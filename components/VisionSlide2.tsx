"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function VisionSlide2() {
    const vision = academyData.vision;

    return (
        <Slide className="bg-cream-200 text-text-primary">
            <div className="absolute inset-0 marble-texture opacity-30" />
            <div className="relative z-10 w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-24">
                <motion.blockquote
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="max-w-4xl text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif italic text-text-primary leading-relaxed text-center"
                >
                    "{vision.section1.quote}"
                </motion.blockquote>
            </div>
        </Slide>
    );
}
