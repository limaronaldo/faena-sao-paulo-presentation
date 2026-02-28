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
        <Slide variant="dark">
            <div className="z-10 w-full max-w-6xl px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-bronze-500 tracking-[0.3em] uppercase text-xs mb-6">
                        Diferenciais
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-cream-50">
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
                                <div className="relative bg-charcoal-800/50 backdrop-blur-sm border border-cream-300/10 p-8 h-full">
                                    <div className="relative flex gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-14 h-14 bg-olive-dark/80 flex items-center justify-center border border-bronze-500/20">
                                                <IconComponent className="w-6 h-6 text-bronze-500" strokeWidth={1.5} />
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-xl font-serif text-cream-50 mb-3 group-hover:text-bronze-500 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-cream-200/50 leading-relaxed text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Slide>
    );
}
