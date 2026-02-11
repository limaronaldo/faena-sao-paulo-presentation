"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";

export default function LocationSlide() {
    const { location } = presentationData;

    return (
        <Slide className="bg-light-50 text-dark-900">
            <div
                className="absolute inset-0 opacity-15"
                style={{
                    backgroundImage: `url('/hype-location.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-light-50 via-light-50/85 to-light-50/70" />

            <div className="z-10 w-full max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-light mb-4 text-dark-900">
                        {location.title}
                    </h2>
                    <div className="w-16 h-1 bg-accent-500 mx-auto" />
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex justify-center gap-8 md:gap-16 mb-12"
                >
                    {location.details.map((detail, index) => (
                        <div key={index} className="text-center">
                            <p className="text-dark-700/50 text-sm uppercase tracking-wide mb-1">
                                {detail.label}
                            </p>
                            <p className="text-xl md:text-2xl font-serif text-accent-500">
                                {detail.value}
                            </p>
                        </div>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg md:text-xl text-dark-700/70 leading-relaxed max-w-3xl mx-auto"
                >
                    {location.description}
                </motion.p>
            </div>
        </Slide>
    );
}
