"use client";

import HeroSlide from "@/components/HeroSlide";
import MbrasIntroSlide from "@/components/MbrasIntroSlide";
import MbrasEssenceSlide from "@/components/MbrasEssenceSlide";
import MbrasTeamSlide from "@/components/MbrasTeamSlide";
import MbrasServicesSlide from "@/components/MbrasServicesSlide";
import MbrasMarketingSlide from "@/components/MbrasMarketingSlide";
import VisionSlide1 from "@/components/VisionSlide1";
import VisionSlide2 from "@/components/VisionSlide2";
import VisionSlide3 from "@/components/VisionSlide3";
import PartnersSlide from "@/components/PartnersSlide";
import PhilosophySlide from "@/components/PhilosophySlide";
import ProgramSlide from "@/components/ProgramSlide";
import ModulesSlide1 from "@/components/ModulesSlide1";
import ModulesSlide2 from "@/components/ModulesSlide2";
import TechStackSlide from "@/components/TechStackSlide";
import MethodologySlide from "@/components/MethodologySlide";
import TakeawaysSlide from "@/components/TakeawaysSlide";
import AudienceSlide from "@/components/AudienceSlide";
import SelectionSlide from "@/components/SelectionSlide";
import ClosingSlide from "@/components/ClosingSlide";
import AiTeaserSlide from "@/components/AiTeaserSlide";
import GovernanceSlide from "@/components/GovernanceSlide";
import { academyData } from "@/components/data";
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
        <MbrasIntroSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <MbrasEssenceSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <MbrasTeamSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <MbrasServicesSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <MbrasMarketingSlide />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <VisionSlide1 />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <VisionSlide2 />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <VisionSlide3 />
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
        <ModulesSlide1 />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <ModulesSlide2 />
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
        <AiTeaserSlide data={academyData.aiTeasers.fundamentals} icon="network" />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <AiTeaserSlide data={academyData.aiTeasers.architecture} icon="terminal" />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <AiTeaserSlide data={academyData.aiTeasers.governance} icon="shield" />
      </section>



      <section className="snap-start min-h-screen lg:h-screen">
        <GovernanceSlide type="context" data={academyData.governanceFramework.context} />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <GovernanceSlide type="domains" data={academyData.governanceFramework.domains} />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <GovernanceSlide type="maturity" data={academyData.governanceFramework.maturity} />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <GovernanceSlide type="program" data={academyData.governanceFramework.program} />
      </section>

      <section className="snap-start min-h-screen lg:h-screen">
        <ClosingSlide />
      </section>
    </main>
  );
}
