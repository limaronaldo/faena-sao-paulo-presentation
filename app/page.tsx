"use client";

import HeroSlide from "@/components/HeroSlide";
import PartnerSlide from "@/components/PartnerSlide";
import PropertySlide from "@/components/PropertySlide";
import FeaturesSlide from "@/components/FeaturesSlide";
import LocationSlide from "@/components/LocationSlide";
import HighlightsSlide from "@/components/HighlightsSlide";
import GallerySlide from "@/components/GallerySlide";
import ExpertiseSlide from "@/components/ExpertiseSlide";
import AccelerationPlanSlide from "@/components/AccelerationPlanSlide";
import InvestmentSlide from "@/components/InvestmentSlide";
import ProjectionsSlide from "@/components/ProjectionsSlide";
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
    <main className="h-screen w-full overflow-y-scroll lg:snap-y lg:snap-mandatory scroll-smooth">
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-bronze-500 origin-left z-50"
        style={{ scaleX }}
      />

      <section className="snap-start min-h-screen lg:h-screen">
        <HeroSlide />
      </section>

      {/* THE PRODUCT */}
      <section className="snap-start min-h-screen lg:h-screen">
        <PartnerSlide partner={presentationData.partners[0]} />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <GallerySlide />
      </section>

      {/* THE ARGUMENT */}
      <section className="snap-start min-h-screen lg:h-screen">
        <HighlightsSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <LocationSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <FeaturesSlide />
      </section>

      {/* THE AUTHORITY & STRATEGY */}


      <section className="snap-start min-h-screen lg:h-screen">
        <ExpertiseSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <AccelerationPlanSlide />
      </section>

      {/* THE DEAL */}
      <section className="snap-start min-h-screen lg:h-screen">
        <InvestmentSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <ProjectionsSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <ClosingSlide />
      </section>
    </main>
  );
}
