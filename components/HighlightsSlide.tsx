"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { Trees, Building2, Sparkles, MapPin } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    trees: Trees,
    "building-2": Building2,
    sparkles: Sparkles,
    "map-pin": MapPin,
};

export default function HighlightsSlide() {
    const { highlights } = presentationData;

    return (
        <Slide className="bg-dark-900 text-cream-100">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-800/20 via-dark-900 to-dark-900" />

            <div className="z-10 w-full max-w-6xl px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-gold-500 tracking-[0.3em] uppercase text-xs mb-6">
                        Diferenciais
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light">
                        {highlights.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {highlights.items.map((item, index) => {
                        const IconComponent = iconMap[item.icon] || Sparkles;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * index, duration: 0.6 }}
                                className="group relative overflow-hidden"
                            >
                                {/* Gradient border */}
                                <div className="absolute -inset-[1px] bg-gradient-to-br from-gold-500/40 via-gold-500/10 to-transparent rounded-2xl" />

                                <div className="relative bg-dark-800/60 backdrop-blur-sm rounded-2xl p-8 h-full">
                                    {/* Decorative glow */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl" />

                                    <div className="relative flex gap-6">
                                        {/* Icon container */}
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/5 flex items-center justify-center border border-gold-500/20 shadow-lg shadow-gold-500/5">
                                                <IconComponent className="w-7 h-7 text-gold-500" strokeWidth={1.5} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-serif text-cream-100 mb-3 group-hover:text-gold-500 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-cream-100/60 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Decorative element */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="w-16 h-0.5 bg-gold-500/30 mx-auto mt-16"
                />
            </div>
        </Slide>
    );
}
