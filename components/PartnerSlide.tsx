"use client";

import Slide from "./Slide";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface PartnerSlideProps {
  partner: {
    name: string;
    title: string;
    description: string;
    image: string;
    logo: string;
    imagePosition?: string;
  };
  reversed?: boolean;
  centered?: boolean;
}

export default function PartnerSlide({ partner, reversed = false, centered = false }: PartnerSlideProps) {
  if (centered) {
    return (
      <Slide variant="olive">
        <div className="flex items-center justify-center h-full w-full px-6">
          <div className="max-w-3xl text-center">
            <motion.h2
              className="text-4xl md:text-6xl font-serif font-light mb-8 leading-tight text-cream-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {partner.title}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl font-sans text-cream-100/70 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {partner.description}
            </motion.p>

            <motion.div
              className="w-20 h-0.5 bg-bronze-500 mt-10 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>
        </div>
      </Slide>
    );
  }

  return (
    <Slide variant="olive">
      <div
        className={clsx(
          "grid grid-cols-1 lg:grid-cols-2 h-full w-full",
          reversed ? "direction-rtl" : ""
        )}
      >
        {/* Image Section */}
        <div
          className={clsx(
            "relative h-[40vh] lg:h-full w-full overflow-hidden",
            reversed ? "lg:order-2" : "lg:order-1"
          )}
        >
          <motion.div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: `url(${partner.image})`,
              backgroundPosition: partner.imagePosition || "center",
            }}
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-olive-dark/40 via-transparent to-transparent" />
        </div>

        {/* Content Section */}
        <div
          className={clsx(
            "flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-8 lg:py-0 h-full relative",
            reversed ? "lg:order-1" : "lg:order-2"
          )}
        >
          <div className="relative z-10">
            <motion.span
              className="text-bronze-500 text-xs tracking-[0.3em] uppercase mb-6 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {partner.name}
            </motion.span>

            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-serif font-light mb-10 leading-tight tracking-wide text-cream-50 whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {partner.title}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl font-sans text-cream-100/70 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {partner.description}
            </motion.p>

            <motion.div
              className="w-16 h-0.5 bg-bronze-500 mt-10"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
