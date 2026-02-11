"use client";

import Slide from "./Slide";
import { motion } from "framer-motion";

const months = [
    {
        month: "Mês 1",
        title: "Planejamento & Imersão",
        description:
            "Fundação estratégica, alinhamento de posicionamento e desenvolvimento de criativos.",
    },
    {
        month: "Mês 2",
        title: "Otimização & Alcance",
        description:
            "Lançamento de campanhas, ajuste fino de canais (Meta, Google) e otimizações semanais.",
    },
    {
        month: "Mês 3",
        title: "Relacionamento & Nutrição",
        description:
            "Aprofundamento com leads estratégicos, conteúdos de valor e ativações personalizadas.",
    },
    {
        month: "Mês 4",
        title: "Intensificação & Conversão",
        description:
            "Foco em oportunidades quentes, reforço de escassez e ações de fechamento.",
    },
];

export default function AccelerationPlanSlide() {
    return (
        <Slide className="bg-light-50 text-dark-900">
            <div className="z-10 w-full max-w-4xl px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-dark-900 leading-tight mb-4">
                        <span className="text-accent-500">Plano de Aceleração:</span> Foco,
                        Gestão e Resultados em 4 Meses.
                    </h2>
                    <p className="text-dark-700/70 text-sm md:text-base max-w-3xl">
                        Um plano intensivo com gestão completa da MBRAS, desenhado para
                        construir presença, otimizar a performance e acelerar a conversão de
                        forma consistente.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {months.map((item, index) => (
                        <motion.div
                            key={item.month}
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.15 * index, duration: 0.5 }}
                            className="flex gap-4 items-start"
                        >
                            <div className="mt-1.5 w-3 h-3 rounded-full bg-accent-500 shrink-0" />
                            <div>
                                <p className="text-sm md:text-base font-sans">
                                    <span className="font-semibold text-dark-900">
                                        {item.month}:
                                    </span>{" "}
                                    <span className="font-semibold text-accent-500">
                                        {item.title}
                                    </span>
                                </p>
                                <p className="text-dark-700/60 text-sm mt-1">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
