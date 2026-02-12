"use client";

import Slide from "./Slide";
import { motion } from "framer-motion";
import { presentationData } from "./data";

export default function AccelerationPlanSlide() {
    const { acceleration } = presentationData;

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
                        <span className="text-accent-500">{acceleration.title.split(" ")[0]} </span>
                        {acceleration.title.split(" ").slice(1).join(" ")}
                    </h2>
                    <p className="text-dark-700/70 text-sm md:text-base max-w-3xl">
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
                            <div className="mt-1.5 w-3 h-3 rounded-full bg-accent-500 shrink-0" />
                            <div>
                                <p className="text-xl md:text-2xl font-sans mt-0.5">
                                    <span className="font-semibold text-dark-900">
                                        {item.month}:
                                    </span>{" "}
                                    <span className="font-semibold text-accent-500">
                                        {item.title}
                                    </span>
                                </p>
                                <p className="text-dark-700/80 text-base md:text-lg mt-2 leading-relaxed max-w-2xl">
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
