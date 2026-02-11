"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx } from "clsx";

interface SlideProps {
  children: ReactNode;
  className?: string;
  variant?: "white" | "light" | "contrast";
}

export default function Slide({ children, className, variant = "white" }: SlideProps) {
  const variantStyles = {
    white: "bg-light-50 text-dark-900",
    light: "bg-light-200 text-dark-900",
    contrast: "bg-dark-900 text-light-50",
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
