"use client";

import Slide from "./Slide";
import { mbrasData } from "./data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MbrasIntroSlide() {
    const { intro, whatWeDo } = mbrasData;

    return (
        <Slide className="bg-navy-900 text-cream-100">
            <div className="w-full h-full flex flex-col">
                {/* Top Section: Intro and Logo */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 border-b border-navy-700">
                    <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="mb-8"
                        >
                            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
                                <Image
                                    src="/mbras-logo.png"
                                    alt="MBRAS Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-white">
                                {intro.title}
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-base md:text-lg lg:text-xl text-cream-200 leading-relaxed max-w-xl"
                        >
                            {intro.description}
                        </motion.p>
                    </div>
                </div>

                {/* Bottom Section: What We Do */}
                <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12 bg-navy-800">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-serif text-gold-500 mb-6"
                    >
                        {whatWeDo.title}
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-base md:text-lg lg:text-xl text-cream-200 leading-relaxed max-w-4xl"
                    >
                        {whatWeDo.description}
                    </motion.p>
                </div>
            </div>
        </Slide>
    );
}
