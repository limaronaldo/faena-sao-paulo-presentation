"use client";

import Slide from "./Slide";
import { motion } from "framer-motion";
import { presentationData } from "./data";

export default function InvestmentSlide() {
    const { investment } = presentationData;

    return (
        <Slide className="bg-light-50 text-dark-900">
            <div className="z-10 w-full max-w-5xl px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-dark-900 leading-tight mb-4">
                        {investment.title}
                    </h2>
                    <p className="text-dark-700/70 text-sm md:text-base max-w-3xl">
                        {investment.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {investment.cards.map((card, index) => (
                        <motion.div
                            key={card.label}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15 * index, duration: 0.5 }}
                            className={`p-6 rounded-xl border ${card.highlight
                                ? "border-accent-500/40 bg-gradient-to-b from-accent-500/5 to-transparent"
                                : "border-light-300 bg-light-100/50"
                                }`}
                        >
                            <p className="text-xs tracking-[0.2em] uppercase text-dark-700/50 mb-4">
                                {card.label}
                            </p>
                            <div className="mb-3">
                                <span
                                    className={`text-3xl md:text-4xl font-serif ${card.highlight ? "text-accent-500" : "text-dark-900"
                                        }`}
                                >
                                    {card.pro}
                                </span>
                            </div>
                            <p className="text-dark-700/60 text-sm leading-relaxed">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
