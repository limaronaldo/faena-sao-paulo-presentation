"use client";

import Slide from "./Slide";
import { motion } from "framer-motion";
import { presentationData } from "./data";

export default function InvestmentSlide() {
    const { investment } = presentationData;

    return (
        <Slide variant="cream">
            <div className="z-10 w-full max-w-5xl px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="text-bronze-500 tracking-[0.3em] uppercase text-xs mb-6">Investimento</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-light text-charcoal-900 leading-tight mb-4">
                        {investment.title}
                    </h2>
                    <p className="text-charcoal-600 text-sm md:text-base max-w-3xl">
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
                            className={`p-8 border ${card.highlight
                                ? "border-bronze-500/40 bg-olive-dark text-cream-50"
                                : "border-cream-300 bg-cream-100"
                                }`}
                        >
                            <p className={`text-xs tracking-[0.2em] uppercase mb-4 ${card.highlight ? "text-bronze-400" : "text-charcoal-600"}`}>
                                {card.label}
                            </p>
                            <div className="mb-3">
                                <span
                                    className={`text-3xl md:text-4xl font-serif ${card.highlight ? "text-bronze-400" : "text-charcoal-900"
                                        }`}
                                >
                                    {card.pro}
                                </span>
                            </div>
                            <p className={`text-sm leading-relaxed ${card.highlight ? "text-cream-200/60" : "text-charcoal-600"}`}>
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
