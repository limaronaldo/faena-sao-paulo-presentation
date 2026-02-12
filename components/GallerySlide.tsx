"use client";

import Slide from "./Slide";
import { motion } from "framer-motion";

export default function GallerySlide() {
    const photos = [
        { src: "/hype6.png", alt: "Hype Gabriel — Vista 1", className: "col-span-1 md:col-span-2 row-span-2 h-full" },
        { src: "/hype.png", alt: "Hype Gabriel — Vista 2", className: "col-span-1 md:col-span-1 h-64 md:h-auto" },
        { src: "/hype3.png", alt: "Hype Gabriel — Vista 3", className: "col-span-1 md:col-span-1 h-64 md:h-auto" },
        { src: "/hype4.png", alt: "Hype Gabriel — Vista 4", className: "col-span-1 md:col-span-2 h-64 md:h-80" },
    ];

    return (
        <Slide className="bg-light-50 text-dark-900">
            <div className="z-10 w-full max-w-7xl px-6 h-full flex flex-col justify-center py-10">


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full max-h-[70vh]">
                    {/* Main large image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-lg group"
                    >
                        <img
                            src="/hype6.png"
                            alt="Hype Gabriel - Principal"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>

                    {/* Secondary images */}
                    <div className="flex flex-col gap-4 md:col-span-1 md:row-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="relative flex-1 overflow-hidden rounded-lg group"
                        >
                            <img
                                src="/hype.png"
                                alt="Hype Gabriel - Fachada"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="relative flex-1 overflow-hidden rounded-lg group"
                        >
                            <img
                                src="/hype3.png"
                                alt="Hype Gabriel - Interior"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="relative flex-1 overflow-hidden rounded-lg group"
                        >
                            <img
                                src="/hype4.png"
                                alt="Hype Gabriel - Detalhe"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}
