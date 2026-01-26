"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function VisionSlide2() {
    const services = academyData.services;

    return (
        <Slide className="bg-cream-200 text-text-primary">
            <div className="w-full h-full flex flex-col justify-center items-center px-8 md:px-16 lg:px-24 py-12">
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-sm md:text-base tracking-[0.2em] uppercase text-gold-500 mb-4"
                >
                    Complete Solutions
                </motion.span>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-20 text-center"
                >
                    {services.title}
                </motion.h2>

                {/* Services row with dividers */}
                <div className="flex items-start justify-center gap-12 md:gap-16 lg:gap-20 max-w-6xl">
                    {services.items.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                            className="text-center flex-1"
                        >
                            <div className="w-10 h-0.5 bg-gold-500 mx-auto mb-6" />
                            <h3 className="text-lg md:text-xl font-serif font-semibold mb-3 text-navy-900">
                                {service.title}
                            </h3>
                            <p className="text-sm md:text-base text-text-secondary">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
