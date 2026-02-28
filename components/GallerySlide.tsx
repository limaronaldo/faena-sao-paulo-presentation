"use client";

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
  return (
    <Slide variant="cream">
      <div className="z-10 w-full h-full flex flex-col justify-center px-4 lg:px-8 py-8">
        {/* Mosaic grid - 3 cols, 2 rows */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full flex-1 max-h-[85vh]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.08 * index, duration: 0.6 }}
              className="relative overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-white/90 text-xs tracking-widest uppercase">
                {image.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
