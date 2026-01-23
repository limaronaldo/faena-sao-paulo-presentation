"use client";

import Slide from "./Slide";
import { motion } from "framer-motion";
import { Terminal, Shield, Network } from "lucide-react";

interface AiTeaserProps {
    data: {
        title: string;
        items: {
            title: string;
            description: string;
        }[];
        principle: string;
    };
    icon?: "terminal" | "shield" | "network";
}

const icons = {
    terminal: Terminal,
    shield: Shield,
    network: Network,
};

export default function AiTeaserSlide({ data, icon = "terminal" }: AiTeaserProps) {
    const Icon = icons[icon];

    return (
        <Slide variant="dark">
            <div className="w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-24">
                <div className="max-w-5xl w-full">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="p-2 bg-neutral-800 rounded-full border border-neutral-700 text-emerald-500">
                            <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono text-emerald-500 tracking-widest uppercase">
                            Conceitos Avançados
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12"
                    >
                        {data.title}
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="bg-neutral-800/30 p-8 rounded-xl border border-neutral-800"
                        >
                            <ul className="space-y-6">
                                {data.items.map((item, idx) => (
                                    <li key={idx} className="border-b border-neutral-800 pb-4 last:border-0 last:pb-0">
                                        <h4 className="text-white font-medium mb-1">{item.title}</h4>
                                        <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-col justify-center"
                        >
                            <div className="relative">
                                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-500/50 to-transparent rounded-full" />
                                <h3 className="text-lg font-medium text-white mb-4">Princípio Fundamental</h3>
                                <p className="text-xl md:text-2xl text-neutral-400 font-serif italic leading-relaxed">
                                    "{data.principle}"
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}
