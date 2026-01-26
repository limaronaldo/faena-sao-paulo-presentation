"use client";

import Slide from "./Slide";
import { mbrasData } from "./data";
import { motion } from "framer-motion";

export default function MbrasServicesSlide() {
    const { club, offMarket } = mbrasData;

    return (
        <Slide className="bg-navy-950 text-cream-100">
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
                {/* Left: MBRAS Club */}
                <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12 border-r border-navy-800">
                    <motion.h2
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-5xl font-serif text-gold-400 mb-8"
                    >
                        {club.title}
                    </motion.h2>
                    <ul className="space-y-4">
                        {club.items.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                                className="flex items-center text-lg md:text-xl text-cream-200"
                            >
                                <span className="w-2 h-2 bg-gold-500 rounded-full mr-4" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Right: Off Market */}
                <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12 bg-navy-900">
                    <motion.h2
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-5xl font-serif text-cream-100 mb-8"
                    >
                        {offMarket.title}
                    </motion.h2>
                    <ul className="space-y-4">
                        {offMarket.items.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                                className="flex items-center text-lg md:text-xl text-cream-200"
                            >
                                <span className="w-2 h-2 bg-cream-400 rounded-full mr-4" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </Slide>
    );
}
