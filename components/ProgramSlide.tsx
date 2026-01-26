"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function ProgramSlide() {
    const structure = academyData.structure;
    const methodology = academyData.methodology;

    return (
        <Slide className="bg-cream-200 text-text-primary">
            <div className="w-full h-full flex items-center px-8 md:px-12 lg:px-16 py-10">
                {/* Two columns layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-7xl mx-auto">

                    {/* Left Column - Estrutura */}
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-gold-500 mb-3">
                            Nossa Sede
                        </span>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight mb-4 text-navy-900">
                            {structure.title}
                        </h2>

                        <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6">
                            {structure.description}
                        </p>

                        <div className="w-16 h-px bg-gold-500 mb-6" />

                        <p className="text-xs md:text-sm text-text-muted italic">
                            {structure.location}
                        </p>
                    </motion.div>

                    {/* Right Column - Nosso Time Multidisciplinar */}
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-col justify-center lg:border-l lg:border-cream-400 lg:pl-12"
                    >
                        <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-gold-500 mb-3">
                            Equipe Especializada
                        </span>

                        <h3 className="text-2xl md:text-3xl font-serif leading-tight mb-6 text-navy-900">
                            {methodology.title}
                        </h3>

                        {/* 2x2 Grid */}
                        <div className="grid grid-cols-2 gap-px bg-navy-900/10 border border-navy-900/10">
                            {methodology.formats.map((format, index) => (
                                <motion.div
                                    key={format.title}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                                    className="bg-cream-200 p-5 text-center"
                                >
                                    <h4 className="text-base md:text-lg font-serif font-semibold mb-2 text-navy-900">
                                        {format.title}
                                    </h4>
                                    <p className="text-xs md:text-sm text-text-secondary">
                                        {format.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
