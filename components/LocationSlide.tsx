"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";

export default function LocationSlide() {
    const { location } = presentationData;

    return (
        <Slide variant="cream">
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url('/pinna-detail.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cream-50 via-cream-50/90 to-cream-50/80" />

            <div className="z-10 w-full max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="text-bronze-500 tracking-[0.3em] uppercase text-xs mb-6">Localização</p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light mb-4 text-charcoal-900">
                        {location.title}
                    </h2>
                    <div className="w-16 h-px bg-bronze-500 mx-auto" />
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex justify-center gap-8 md:gap-16 mb-12"
                >
                    {location.details.map((detail, index) => (
                        <div key={index} className="text-center">
                            <p className="text-charcoal-600 text-xs uppercase tracking-[0.2em] mb-2">
                                {detail.label}
                            </p>
                            <p className="text-xl md:text-2xl font-serif text-olive-dark">
                                {detail.value}
                            </p>
                        </div>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg md:text-xl text-charcoal-600 leading-relaxed max-w-3xl mx-auto"
                >
                    {location.description}
                </motion.p>
            </div>
        </Slide>
    );
}
