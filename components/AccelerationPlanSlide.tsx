"use client";

import Slide from "./Slide";
import { motion } from "framer-motion";
import { presentationData } from "./data";

export default function AccelerationPlanSlide() {
    const { acceleration } = presentationData;

    return (
        <Slide variant="dark">
            <div className="z-10 w-full max-w-4xl px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10"
                >
                    <p className="text-bronze-500 tracking-[0.3em] uppercase text-xs mb-6">Estratégia</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-light text-cream-50 leading-tight mb-4">
                        {acceleration.title}
                    </h2>
                    <p className="text-cream-200/50 text-sm md:text-base max-w-3xl">
                        {acceleration.subtitle}
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {acceleration.phases.map((item, index) => (
                        <motion.div
                            key={item.month}
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.15 * index, duration: 0.5 }}
                            className="flex gap-4 items-start"
                        >
                            <div className="mt-2 w-2.5 h-2.5 rounded-full bg-bronze-500 shrink-0" />
                            <div>
                                <p className="text-xl md:text-2xl font-sans mt-0.5">
                                    <span className="font-semibold text-cream-50">
                                        {item.month}:
                                    </span>{" "}
                                    <span className="font-semibold text-bronze-500">
                                        {item.title}
                                    </span>
                                </p>
                                <p className="text-cream-200/50 text-base md:text-lg mt-2 leading-relaxed max-w-2xl">
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
