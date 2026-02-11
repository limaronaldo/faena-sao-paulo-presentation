"use client";

import Slide from "./Slide";
import { motion } from "framer-motion";

const investmentCards = [
    {
        label: "Investimento Mensal",
        prefix: "R$",
        value: "13.000",
        description: "Gestão + mídia, distribuídos entre os três empreendimentos.",
    },
    {
        label: "Duração do Projeto",
        prefix: "",
        value: "4 meses",
        description:
            "Período ideal para construir presença, testar criativos e acelerar conversão.",
    },
    {
        label: "Investimento Total",
        prefix: "R$",
        value: "52.000",
        description:
            "Com gestão completa de campanhas sob responsabilidade da MBRAS.",
        highlight: true,
    },
];

export default function InvestmentSlide() {
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
                        O Investimento Estratégico na Valorização do Legado.
                    </h2>
                    <p className="text-dark-700/70 text-sm md:text-base max-w-3xl">
                        Um plano dedicado a impulsionar a performance comercial do Hype
                        Gabriel, com visão de portfólio e consistência de marca.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {investmentCards.map((card, index) => (
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
                                {card.prefix && (
                                    <span className="text-accent-500 font-serif text-lg mr-1">
                                        {card.prefix}
                                    </span>
                                )}
                                <span
                                    className={`text-3xl md:text-4xl font-serif ${card.highlight ? "text-accent-500" : "text-dark-900"
                                        }`}
                                >
                                    {card.value}
                                </span>
                            </div>
                            <p className="text-dark-700/60 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
