"use client";

import Slide from "./Slide";
import { presentationData } from "./data";
import { motion } from "framer-motion";
import { Building2, Home, Trees, MapPin } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
    "Arquitetura": Building2,
    "Unidades": Home,
    "Paisagismo": Trees,
    "Localização": MapPin,
};

export default function FeaturesSlide() {
    const { features } = presentationData;

    return (
        <Slide variant="olive">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "url(/pinna-bairro.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-olive-dark/80" />
            <div className="z-10 w-full max-w-6xl px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-bronze-500 tracking-[0.3em] uppercase text-xs mb-6">
                        O Projeto
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-cream-50">
                        {features.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.categories.map((category, categoryIndex) => {
                        const IconComponent = categoryIcons[category.title] || Building2;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * categoryIndex, duration: 0.6 }}
                                className="group"
                            >
                                <div className="bg-olive-medium/40 backdrop-blur-sm border border-cream-50/10 p-6 h-full">
                                    <div className="w-10 h-10 bg-bronze-500/15 flex items-center justify-center mb-5 border border-bronze-500/20">
                                        <IconComponent className="w-5 h-5 text-bronze-500" strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-lg font-serif text-bronze-400 mb-5">
                                        {category.title}
                                    </h3>

                                    <ul className="space-y-3">
                                        {category.items.map((item, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                                className="flex items-center gap-3 text-cream-100/60 text-sm"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-bronze-500/50" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Slide>
    );
}
