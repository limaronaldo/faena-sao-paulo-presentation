"use client";

import HeroSlide from "@/components/HeroSlide";
import PartnerSlide from "@/components/PartnerSlide";
import DevelopmentSlide from "@/components/DevelopmentSlide";
import ComplexSlide from "@/components/ComplexSlide";
import PartnershipSlide from "@/components/PartnershipSlide";
import ArchitectureSlide from "@/components/ArchitectureSlide";
import TypologiesSlide from "@/components/TypologiesSlide";
import AmenitiesSlide from "@/components/AmenitiesSlide";
import GastronomySlide from "@/components/GastronomySlide";
import FaenaLegacySlide from "@/components/FaenaLegacySlide";
import StrategySlide from "@/components/StrategySlide";
import ExpertiseSlide from "@/components/ExpertiseSlide";
import TimelineSlide from "@/components/TimelineSlide";
import InvestmentSlide from "@/components/InvestmentSlide";
import GoalsSlide from "@/components/GoalsSlide";
import ClosingSlide from "@/components/ClosingSlide";
import { presentationData } from "@/components/data";
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
        <PartnerSlide partner={presentationData.partners[0]} />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <PartnerSlide partner={presentationData.partners[1]} centered />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <DevelopmentSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <ComplexSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <PartnershipSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <ArchitectureSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <TypologiesSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <AmenitiesSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <GastronomySlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <FaenaLegacySlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <StrategySlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <ExpertiseSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <TimelineSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <InvestmentSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <GoalsSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <ClosingSlide />
      </section>
    </main>
  );
}
