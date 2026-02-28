"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx } from "clsx";

interface SlideProps {
  children: ReactNode;
  className?: string;
  variant?: "cream" | "white" | "light" | "dark" | "olive";
}

export default function Slide({ children, className, variant = "cream" }: SlideProps) {
  const variantStyles = {
    cream: "bg-cream-50 text-charcoal-900",
    white: "bg-white text-charcoal-900",
    light: "bg-cream-100 text-charcoal-900",
    dark: "bg-charcoal-900 text-cream-50",
    olive: "bg-olive-dark text-cream-50",
  };

  return (
    <motion.div
      className={clsx(
        "w-full min-h-screen lg:h-screen flex flex-col justify-center items-center relative lg:snap-start py-12 lg:py-0 lg:overflow-hidden",
        variantStyles[variant],
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
