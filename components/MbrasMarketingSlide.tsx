"use client";

import Slide from "./Slide";
import { mbrasData } from "./data";
import { motion } from "framer-motion";

export default function MbrasMarketingSlide() {
    const { marketing, socialMedia, press } = mbrasData;

    return (
        <Slide className="bg-cream-100 text-text-primary">
            <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Marketing */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-col mr-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-6 leading-tight">
                            {marketing.title}
                        </h2>
                        <div className="w-12 h-1 bg-gold-500 mb-6" />
                        <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                            {marketing.text}
                        </p>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col mr-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-6 leading-tight">
                            {socialMedia.title}
                        </h2>
                        <div className="w-12 h-1 bg-gold-500 mb-6" />
                        <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                            {socialMedia.text}
                        </p>
                    </motion.div>

                    {/* Press */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-col"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-6 leading-tight">
                            {press.title}
                        </h2>
                        <div className="w-12 h-1 bg-gold-500 mb-6" />
                        <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                            {press.text}
                        </p>
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
