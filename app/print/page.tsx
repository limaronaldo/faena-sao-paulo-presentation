"use client";

import { useEffect } from "react";
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
import { presentationData } from "@/components/data";

/* Static closing slide — no framer-motion */
function StaticClosingSlide() {
  const closing = presentationData.closing;
  return (
    <div className="w-full min-h-screen lg:h-screen flex flex-col justify-center items-center relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/90 to-dark-900/70" />

      <div className="z-10 flex flex-col items-center text-center max-w-4xl px-6">
        <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-8 whitespace-pre-line text-cream-100">
          {closing.headline}
        </h2>
        <p className="text-lg md:text-xl text-cream-100/70 max-w-2xl mb-6 whitespace-pre-line">
          {closing.subheadline}
        </p>
        <p className="text-gold-500 tracking-widest uppercase text-lg md:text-xl mt-4 mb-12">
          {closing.tagline}
        </p>
        <div className="w-16 h-0.5 bg-gold-500 mb-8" />
        <div className="flex items-center justify-center gap-6 md:gap-10">
          <img
            src="https://img.mbras.com.br/2026/logos/logo-mbras-br.png"
            alt="MBRAS"
            className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-80"
          />
          <span className="text-gold-500/50 text-2xl">×</span>
          <img
            src="/FAENA 2.png"
            alt="Faena"
            className="h-14 md:h-16 w-auto object-contain brightness-0 invert opacity-80"
          />
          <span className="text-gold-500/50 text-2xl">×</span>
          <img
            src="/EVEN.png"
            alt="Even"
            className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-80"
          />
        </div>
      </div>
    </div>
  );
}

export default function PrintPage() {
  useEffect(() => {
    const forceVisible = () => {
      document.querySelectorAll("*").forEach((el) => {
        const style = window.getComputedStyle(el);
        if (parseFloat(style.opacity) < 0.5) {
          (el as HTMLElement).style.setProperty("opacity", "1", "important");
        }
        const transform = style.transform;
        if (transform && transform !== "none") {
          (el as HTMLElement).style.setProperty("transform", "none", "important");
        }
      });
    };

    const removeDevOverlays = () => {
      document.querySelectorAll("nextjs-portal, [data-nextjs-toast], [data-nextjs-dialog], #__next-build-watcher").forEach((el) => {
        el.remove();
      });
      document.querySelectorAll("body > *").forEach((el) => {
        if (el.id === "__next" || el.id === "print-root" || el.tagName === "SCRIPT" || el.tagName === "STYLE" || el.tagName === "LINK") return;
        const style = window.getComputedStyle(el);
        if (style.position === "fixed") {
          (el as HTMLElement).style.display = "none";
        }
      });
    };

    forceVisible();
    removeDevOverlays();
    setTimeout(() => { forceVisible(); removeDevOverlays(); }, 500);
    setTimeout(() => { forceVisible(); removeDevOverlays(); }, 1000);
    setTimeout(() => { forceVisible(); removeDevOverlays(); }, 2000);
    setTimeout(removeDevOverlays, 5000);
  }, []);

  return (
    <main id="print-root">
      <style>{`
        html, body, main {
          overflow: visible !important;
          height: auto !important;
          width: 1440px !important;
          scroll-snap-type: none !important;
        }
        html, body {
          background: #0a0a08 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        #print-root > .print-slide {
          width: 1440px !important;
          height: 810px !important;
          min-height: 810px !important;
          max-height: 810px !important;
          overflow: hidden !important;
          position: relative !important;
        }
        #print-root [class*="h-screen"],
        #print-root [class*="min-h-screen"] {
          height: 810px !important;
          min-height: 810px !important;
          max-height: 810px !important;
        }
        #print-root [class*="snap"] {
          scroll-snap-type: none !important;
          scroll-snap-align: unset !important;
        }
        #print-root [class*="overflow"] {
          overflow: visible !important;
        }
        #print-root > .print-slide {
          overflow: hidden !important;
        }
        .fixed,
        nextjs-portal,
        [data-nextjs-toast],
        [data-nextjs-dialog],
        [data-nextjs-dialog-overlay],
        #__next-build-watcher {
          display: none !important;
        }
        #print-root [style*="opacity"],
        #print-root [data-framer-appear-id] {
          opacity: 1 !important;
        }
        #print-root [style*="transform"] {
          transform: none !important;
        }
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      `}</style>

      <div className="print-slide"><HeroSlide /></div>
      <div className="print-slide"><PartnerSlide partner={presentationData.partners[0]} /></div>
      <div className="print-slide"><PartnerSlide partner={presentationData.partners[1]} centered /></div>
      <div className="print-slide"><DevelopmentSlide /></div>
      <div className="print-slide"><ComplexSlide /></div>
      <div className="print-slide"><PartnershipSlide /></div>
      <div className="print-slide"><ArchitectureSlide /></div>
      <div className="print-slide"><TypologiesSlide /></div>
      <div className="print-slide"><AmenitiesSlide /></div>
      <div className="print-slide"><GastronomySlide /></div>
      <div className="print-slide"><FaenaLegacySlide /></div>
      <div className="print-slide"><StrategySlide /></div>
      <div className="print-slide"><ExpertiseSlide /></div>
      <div className="print-slide"><TimelineSlide /></div>
      <div className="print-slide"><InvestmentSlide /></div>
      <div className="print-slide"><GoalsSlide /></div>
      <div className="print-slide"><StaticClosingSlide /></div>
    </main>
  );
}
