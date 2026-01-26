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
                    Soluções Completas
                </motion.span>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-10 md:mb-20 text-center text-navy-900"
                >
                    {services.title}
                </motion.h2>

                {/* Services grid - responsive */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10 max-w-6xl w-full overflow-hidden">
                    {services.items.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                            className={`text-center ${index === services.items.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
                        >
                            <div className="w-8 md:w-10 h-0.5 bg-gold-500 mx-auto mb-4 md:mb-6" />
                            <h3 className="text-sm md:text-lg font-serif font-semibold mb-2 md:mb-3 text-navy-900 leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-xs md:text-sm text-text-secondary">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
