"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function PartnersSlide() {
    const partners = academyData.partners;

    return (
        <Slide className="bg-cream-100 text-text-primary">
            <div className="w-full h-full flex flex-col px-8 md:px-16 py-12">
                {/* Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-12"
                >
                    <span className="text-sm text-text-secondary">A codificação de uma</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium">
                        prática real.
                    </h2>
                </motion.div>

                {/* Partners Grid */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-px bg-gold-500">
                    {partners.items.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                            className="bg-cream-100 p-8 md:p-12 flex flex-col"
                        >
                            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-1 text-gold-500">
                                {partner.name} <span className="font-normal text-text-secondary">{partner.subtitle}</span>
                            </h3>

                            <p className="text-sm md:text-base text-text-secondary leading-relaxed mt-4 mb-6">
                                {partner.description}
                            </p>

                            <p className="text-sm md:text-base font-serif italic text-text-secondary mt-auto">
                                "{partner.quote}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
