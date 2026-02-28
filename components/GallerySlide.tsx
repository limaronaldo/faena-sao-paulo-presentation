"use client";

import { useState } from "react";
import Slide from "./Slide";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/galleria1-01.jpg", title: "Fachada" },
  { src: "/galleria1-02.jpg", title: "Jardim" },
  { src: "/galleria1-03.jpg", title: "Entrada" },
  { src: "/galleria1-04.jpg", title: "Vista" },
  { src: "/galleria1-05.jpg", title: "Área Comum" },
  { src: "/galleria1-06.jpg", title: "Paisagismo" },
];

export default function GallerySlide() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <Slide variant="cream">
      <div className="z-10 w-full h-full flex flex-col justify-center px-6 lg:px-12 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-bronze-500 text-xs tracking-[0.3em] uppercase block mb-3">Galeria</span>
          <h2 className="font-serif text-charcoal-900 text-3xl lg:text-4xl font-light">
            CONHEÇA O PROJETO
          </h2>
        </motion.div>

        {/* Main carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative flex-1 max-h-[65vh] overflow-hidden"
        >
          {/* All images stacked with crossfade */}
          {galleryImages.map((image, index) => (
            <div
              key={image.title}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
              style={{ backgroundImage: `url('${image.src}')` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/40 bg-charcoal-900/20 backdrop-blur-sm hover:bg-charcoal-900/40 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/40 bg-charcoal-900/20 backdrop-blur-sm hover:bg-charcoal-900/40 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Caption & dots */}
          <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3">
            <span className="text-white/80 text-sm tracking-widest uppercase">
              {galleryImages[currentSlide].title}
            </span>
            <div className="flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-bronze-500 w-6" : "bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
