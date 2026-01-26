"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function PartnersSlide() {
    const partners = academyData.partners;

    return (
        <Slide className="bg-cream-100 text-text-primary">
            <div className="w-full h-full flex flex-col justify-center items-center px-8 md:px-16 lg:px-24 py-12">
                {/* Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <span className="text-sm md:text-base tracking-[0.2em] uppercase text-gold-500 mb-2 block">
                        Nossos Fundamentos
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-navy-900">
                        {partners.title}
                    </h2>
                </motion.div>

                {/* Partners Grid - Smaller cards with hover effect */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl w-full">
                    {partners.items.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                            className="group bg-cream-200 p-6 md:p-8 border-l-4 border-gold-500 
                                       transition-all duration-300 ease-in-out cursor-pointer
                                       hover:bg-gold-500 hover:border-l-navy-200"
                        >
                            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3 text-navy-900
                                          group-hover:text-white transition-colors duration-300">
                                {partner.name}
                            </h3>

                            <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-4
                                         group-hover:text-white/90 transition-colors duration-300">
                                {partner.description}
                            </p>


                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
