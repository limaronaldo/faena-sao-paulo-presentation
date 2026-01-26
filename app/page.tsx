"use client";

import HeroSlide from "@/components/HeroSlide";
import VisionSlide1 from "@/components/VisionSlide1";
import VisionSlide2 from "@/components/VisionSlide2";
import PhilosophySlide from "@/components/PhilosophySlide";
import ProgramSlide from "@/components/ProgramSlide";
import ModulesSlide1 from "@/components/ModulesSlide1";
import TechStackSlide from "@/components/TechStackSlide";
import TakeawaysSlide from "@/components/TakeawaysSlide";
import ClosingSlide from "@/components/ClosingSlide";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero - A MBRAS */}
      <section className="snap-start min-h-screen lg:h-screen">
        <HeroSlide />
      </section>

      {/* Sobre a MBRAS */}
      <section className="snap-start min-h-screen lg:h-screen">
        <VisionSlide1 />
      </section>

      {/* Serviços */}
      <section className="snap-start min-h-screen lg:h-screen">
        <VisionSlide2 />
      </section>

      {/* Valores */}
      <section className="snap-start min-h-screen lg:h-screen">
        <PhilosophySlide />
      </section>

      {/* Estrutura + Nosso Time */}
      <section className="snap-start min-h-screen lg:h-screen">
        <ProgramSlide />
      </section>

      {/* MBRAS Club */}
      <section className="snap-start min-h-screen lg:h-screen">
        <ModulesSlide1 />
      </section>

      {/* Estratégias de Marketing */}
      <section className="snap-start min-h-screen lg:h-screen">
        <TechStackSlide />
      </section>

      {/* Por que escolher a MBRAS + Assessoria */}
      <section className="snap-start min-h-screen lg:h-screen">
        <TakeawaysSlide />
      </section>

      {/* Closing */}
      <section className="snap-start min-h-screen lg:h-screen">
        <ClosingSlide />
      </section>
    </main>
  );
}
