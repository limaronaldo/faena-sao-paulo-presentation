"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx } from "clsx";

interface SlideProps {
  children: ReactNode;
  className?: string;
  variant?: "dark" | "light" | "cream" | "cream-alt";
}

export default function Slide({ children, className, variant = "cream" }: SlideProps) {
  const variantStyles = {
    dark: "bg-dark-900 text-cream-100",
    light: "bg-white text-text-primary",
    cream: "bg-cream-100 text-text-primary",
    "cream-alt": "bg-cream-200 text-text-primary",
  };

  return (
    <motion.div
      className={clsx(
        "w-full min-h-screen lg:h-screen flex flex-col justify-center items-center relative snap-start py-12 lg:py-0 lg:overflow-hidden",
        variantStyles[variant],
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
