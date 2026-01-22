"use client";

import Slide from "./Slide";
import { academyData } from "./data";
import { motion } from "framer-motion";

export default function TakeawaysSlide() {
    const takeaways = academyData.takeaways;

    return (
        <Slide className="bg-cream-200 text-text-primary">
            {/* Decorative geometric lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg
                    className="absolute top-1/4 right-0 w-1/2 h-1/2 opacity-10"
                    viewBox="0 0 400 400"
                >
                    <g stroke="#b08d4b" strokeWidth="1" fill="none">
                        <line x1="0" y1="0" x2="400" y2="400" />
                        <line x1="100" y1="0" x2="400" y2="300" />
                        <line x1="200" y1="0" x2="400" y2="200" />
                        <line x1="300" y1="0" x2="400" y2="100" />
                        <line x1="0" y1="100" x2="300" y2="400" />
                        <line x1="0" y1="200" x2="200" y2="400" />
                        <line x1="0" y1="300" x2="100" y2="400" />
                    </g>
                </svg>
            </div>

            <div className="relative z-10 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight mb-8"
                >
                    {takeaways.title}
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl mb-12 whitespace-pre-line"
                >
                    {takeaways.intro}
                </motion.p>

                {/* Takeaways list */}
                <div className="space-y-5 max-w-2xl">
                    {takeaways.items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                            className="flex items-start gap-4"
                        >
                            <span className="text-gold-500 text-xl md:text-2xl">◆</span>
                            <div className="text-base md:text-lg lg:text-xl">
                                <span className="font-semibold text-text-primary">{item.title}:</span>{" "}
                                <span className="text-text-secondary">{item.description}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
