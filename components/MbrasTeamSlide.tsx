"use client";

import Slide from "./Slide";
import { mbrasData } from "./data";
import { motion } from "framer-motion";

export default function MbrasTeamSlide() {
    const { team } = mbrasData;

    return (
        <Slide className="bg-navy-900 text-cream-100">
            <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-navy-950/50" />

                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-serif text-cream-100 mb-8 uppercase tracking-widest text-center"
                    >
                        {team.title}
                    </motion.h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto mb-12" />
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-xl md:text-2xl lg:text-3xl text-cream-200 leading-relaxed text-center font-light"
                    >
                        {team.text}
                    </motion.p>
                </div>
            </div>
        </Slide>
    );
}
