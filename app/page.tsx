"use client";

import HeroSlide from "@/components/HeroSlide";
import PartnerSlide from "@/components/PartnerSlide";
import PropertySlide from "@/components/PropertySlide";
import FeaturesSlide from "@/components/FeaturesSlide";
import LocationSlide from "@/components/LocationSlide";
import HighlightsSlide from "@/components/HighlightsSlide";
import AdsPerformanceSlide from "@/components/AdsPerformanceSlide";
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
        <PropertySlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <FeaturesSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <HighlightsSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <LocationSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <AdsPerformanceSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <ClosingSlide />
      </section>
    </main>
  );
}
