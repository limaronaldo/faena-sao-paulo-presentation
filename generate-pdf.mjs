import puppeteer from "puppeteer";

const URL = process.env.URL || "http://localhost:3004";
const OUTPUT = "Pinna5109-MBRAS-Parceria.pdf";

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({ width: 1440, height: 810, deviceScaleFactor: 2 });

  await page.goto(URL, { waitUntil: "networkidle0", timeout: 30000 });

  // Wait for fonts and images to load
  await page.waitForFunction(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 2000));

  // Get all slide sections
  const slideCount = await page.evaluate(() => {
    return document.querySelectorAll("main > section, main > div").length;
  });

  console.log(`Found ${slideCount} slides`);

  // Force all animations to completed state
  await page.evaluate(() => {
    // Make all framer-motion elements visible
    document.querySelectorAll("[style*='opacity: 0']").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    document.querySelectorAll("[data-framer-appear-id]").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  });

  // Scroll through each section to trigger whileInView animations
  const sections = await page.$$("main > section, main > div");
  for (const section of sections) {
    await section.scrollIntoView();
    await new Promise((r) => setTimeout(r, 600));
  }

  // Wait for all animations to settle
  await new Promise((r) => setTimeout(r, 1500));

  // Force everything visible one more time
  await page.evaluate(() => {
    const allElements = document.querySelectorAll("*");
    allElements.forEach((el) => {
      const style = getComputedStyle(el);
      if (parseFloat(style.opacity) < 0.1 && el.closest("main")) {
        el.style.opacity = "1";
        el.style.transform = "none";
      }
    });
  });

  // Add print-optimized styles
  await page.addStyleTag({
    content: `
      /* Override snap scrolling */
      html, body, main {
        overflow: visible !important;
        scroll-snap-type: none !important;
        height: auto !important;
      }

      /* Each slide = one landscape page */
      main > section,
      main > div {
        page-break-after: always;
        page-break-inside: avoid;
        break-after: page;
        break-inside: avoid;
        width: 100vw;
        height: 100vh;
        min-height: 100vh;
        max-height: 100vh;
        overflow: hidden;
        scroll-snap-align: unset !important;
      }

      /* Last slide no break */
      main > *:last-child {
        page-break-after: auto;
        break-after: auto;
      }

      /* Force all animations visible */
      [style*="opacity"] {
        opacity: 1 !important;
        transform: none !important;
      }

      /* Ensure backgrounds print */
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
      }

      /* Hide progress bar */
      .fixed {
        display: none !important;
      }
    `,
  });

  await new Promise((r) => setTimeout(r, 500));

  // Generate PDF in landscape
  await page.pdf({
    path: OUTPUT,
    width: "1440px",
    height: "810px",
    printBackground: true,
    preferCSSPageSize: false,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  console.log(`PDF generated: ${OUTPUT}`);
  await browser.close();
})();
