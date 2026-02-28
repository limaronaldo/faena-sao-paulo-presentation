"use client";

import { useEffect } from "react";
import HeroSlide from "@/components/HeroSlide";
import PartnerSlide from "@/components/PartnerSlide";
import FeaturesSlide from "@/components/FeaturesSlide";
import LocationSlide from "@/components/LocationSlide";
import HighlightsSlide from "@/components/HighlightsSlide";
import GallerySlide from "@/components/GallerySlide";
import ExpertiseSlide from "@/components/ExpertiseSlide";
import AccelerationPlanSlide from "@/components/AccelerationPlanSlide";
import InvestmentSlide from "@/components/InvestmentSlide";
import ProjectionsSlide from "@/components/ProjectionsSlide";
import { presentationData } from "@/components/data";

/* Static closing slide — no framer-motion */
function StaticClosingSlide() {
  const closing = presentationData.closing;
  return (
    <div className="w-full min-h-screen lg:h-screen flex flex-col justify-center items-center relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/pinna-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[#0a0a08]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08] via-[#0a0a08]/80 to-[#0a0a08]/30" />

      <div className="z-10 flex flex-col items-center text-center max-w-4xl px-6">
        <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-8 whitespace-pre-line text-white">
          {closing.headline}
        </h2>
        <p className="text-bronze-400 tracking-[0.15em] uppercase text-base md:text-lg font-medium mb-12 max-w-3xl leading-relaxed">
          {closing.tagline}
        </p>
        <div className="w-24 h-px bg-bronze-500 mb-10" />
        <div className="flex items-center justify-center gap-8 mt-10">
          <img
            src="/logo-mbras.png"
            alt="MBRAS"
            className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-90"
          />
          <div className="w-px h-10 bg-cream-50/20" />
          <img
            src="/logo-sdi.svg"
            alt="SDI Desenvolvimento Imobiliário"
            className="h-16 md:h-24 w-auto object-contain opacity-90"
          />
        </div>
      </div>
    </div>
  );
}

export default function PrintPage() {
  useEffect(() => {
    // Force all framer-motion animated elements visible after render
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

    // Remove Next.js dev overlays from DOM
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

    // Run multiple times to catch delayed animations and dev overlays
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

        /* Hide fixed elements and dev overlays */
        .fixed,
        nextjs-portal,
        [data-nextjs-toast],
        [data-nextjs-dialog],
        [data-nextjs-dialog-overlay],
        #__next-build-watcher {
          display: none !important;
        }

        /* Force framer-motion inline styles visible */
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
      <div className="print-slide"><GallerySlide /></div>
      <div className="print-slide"><HighlightsSlide /></div>
      <div className="print-slide"><LocationSlide /></div>
      <div className="print-slide"><FeaturesSlide /></div>
      <div className="print-slide"><ExpertiseSlide /></div>
      <div className="print-slide"><AccelerationPlanSlide /></div>
      <div className="print-slide"><InvestmentSlide /></div>
      <div className="print-slide"><ProjectionsSlide /></div>
      <div className="print-slide"><StaticClosingSlide /></div>
    </main>
  );
}
