"use client";

import Slide from "./Slide";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function GallerySlide() {
    const photos = [
        { src: "/hype6.png", alt: "Hype Gabriel — Vista 1" },
        { src: "/hype.png", alt: "Hype Gabriel — Vista 1" },
        { src: "/hype1.png", alt: "Hype Gabriel — Vista 1" },
        { src: "/hype2.png", alt: "Hype Gabriel — Vista 2" },
        { src: "/hype3.png", alt: "Hype Gabriel — Vista 3" },
        { src: "/hype4.png", alt: "Hype Gabriel — Vista 4" },
        { src: "/hype5.png", alt: "Hype Gabriel — Vista 4" },
    ];

    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrent((prev) => (prev + newDirection + photos.length) % photos.length);
    };

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 600 : -600,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -600 : 600,
            opacity: 0,
        }),
    };

    return (
        <Slide className="bg-light-50 text-dark-900">
            <div className="z-10 w-full max-w-6xl px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <p className="text-accent-500 tracking-[0.3em] uppercase text-xs mb-6">
                        Galeria
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-dark-900">
                        Conheça o Hype Gabriel
                    </h2>
                </motion.div>

                {/* Carousel */}
                <div className="relative w-full overflow-hidden" style={{ height: "65vh" }}>
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.img
                            key={current}
                            src={photos[current].src}
                            alt={photos[current].alt}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-light-300 flex items-center justify-center hover:bg-white transition-colors cursor-pointer shadow-lg"
                    >
                        <ChevronLeft className="w-5 h-5 text-dark-900" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-light-300 flex items-center justify-center hover:bg-white transition-colors cursor-pointer shadow-lg"
                    >
                        <ChevronRight className="w-5 h-5 text-dark-900" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                    {photos.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > current ? 1 : -1);
                                setCurrent(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${index === current
                                ? "bg-accent-500 w-6"
                                : "bg-light-400 hover:bg-accent-500/50"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </Slide>
    );
}
