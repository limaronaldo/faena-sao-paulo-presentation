"use client";

import HeroSlide from "@/components/HeroSlide";
import VisionSlide from "@/components/VisionSlide";
import PartnersSlide from "@/components/PartnersSlide";
import PhilosophySlide from "@/components/PhilosophySlide";
import ProgramSlide from "@/components/ProgramSlide";
import ModulesSlide from "@/components/ModulesSlide";
import TechStackSlide from "@/components/TechStackSlide";
import MethodologySlide from "@/components/MethodologySlide";
import TakeawaysSlide from "@/components/TakeawaysSlide";
import AudienceSlide from "@/components/AudienceSlide";
import SelectionSlide from "@/components/SelectionSlide";
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

      <section className="snap-start min-h-screen lg:h-screen">
        <HeroSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <VisionSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <PartnersSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <PhilosophySlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <ProgramSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <ModulesSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <TechStackSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <MethodologySlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <TakeawaysSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <AudienceSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <SelectionSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <ClosingSlide />
      </section>
    </main>
  );
}
