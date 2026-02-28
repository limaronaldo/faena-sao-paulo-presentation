"use client";

import Slide from "./Slide";
import { motion } from "framer-motion";
import { presentationData } from "./data";

export default function ProjectionsSlide() {
    const { projections } = presentationData;

    return (
        <Slide variant="olive">
            <div className="z-10 w-full max-w-6xl px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <p className="text-bronze-500 tracking-[0.3em] uppercase text-xs mb-6">Resultados</p>
                    <h2 className="text-4xl md:text-5xl font-serif font-light text-cream-50 leading-tight mb-4">
                        {projections.title}
                    </h2>
                    <p className="text-cream-200/50 text-base md:text-lg max-w-3xl">
                        {projections.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projections.metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            className="p-8 border border-cream-50/10 bg-olive-medium/30 backdrop-blur-sm flex flex-col justify-between min-h-[200px]"
                        >
                            <div>
                                <p className="text-sm tracking-[0.2em] uppercase text-cream-200/40 mb-4">
                                    {metric.label}
                                </p>
                                <p className="text-4xl md:text-5xl font-serif text-bronze-400 mb-2">
                                    {metric.range}
                                </p>
                            </div>
                            <p className="text-cream-200/40 text-sm mt-6 border-t border-cream-50/10 pt-4 leading-relaxed">
                                {metric.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
