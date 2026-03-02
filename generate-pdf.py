#!/usr/bin/env python3
"""
Capture the /print route as a tall screenshot,
slice into individual slides, and combine into a landscape PDF.
"""
import subprocess, os, glob
from PIL import Image

URL = "http://localhost:3005/print"
OUTPUT = "Faena-MBRAS-Parceria.pdf"
SLIDES = 17
WIDTH = 1440
HEIGHT = 810
TMPDIR = "/tmp/faena-slides"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

os.makedirs(TMPDIR, exist_ok=True)

for f in glob.glob(f"{TMPDIR}/*.png"):
    os.remove(f)

full_screenshot = f"{TMPDIR}/full-page.png"

print(f"Capturing /print route ({SLIDES} slides × {WIDTH}x{HEIGHT})...")

TOTAL_H = HEIGHT * SLIDES

cmd = [
    CHROME,
    "--headless=new",
    f"--window-size={WIDTH},{TOTAL_H}",
    "--hide-scrollbars",
    "--disable-gpu",
    "--force-device-scale-factor=2",
    f"--screenshot={full_screenshot}",
    "--virtual-time-budget=30000",
    "--run-all-compositor-stages-before-draw",
    URL,
]

result = subprocess.run(cmd, capture_output=True, timeout=60)

if not os.path.exists(full_screenshot):
    print("ERROR: Could not capture screenshot")
    print(result.stderr.decode() if result.stderr else "No stderr")
    exit(1)

print("Slicing into individual slides...")

img = Image.open(full_screenshot)
actual_w, actual_h = img.size
scale = actual_w / WIDTH
slide_h = int(HEIGHT * scale)

print(f"  Image: {actual_w}x{actual_h}, scale={scale:.1f}, slide_h={slide_h}")

slides = []
for i in range(SLIDES):
    top = i * slide_h
    bottom = min(top + slide_h, actual_h)
    if top >= actual_h:
        break

    slide_img = img.crop((0, top, actual_w, bottom))

    if slide_img.mode == "RGBA":
        slide_img = slide_img.convert("RGB")

    slides.append(slide_img)
    print(f"  Slide {i+1}: {slide_img.size}")

if not slides:
    print("ERROR: No slides captured")
    exit(1)

print(f"\nGenerating PDF with {len(slides)} pages...")

first = slides[0]
rest = slides[1:] if len(slides) > 1 else []

first.save(
    OUTPUT,
    "PDF",
    resolution=150,
    save_all=True,
    append_images=rest,
)

size_mb = os.path.getsize(OUTPUT) / (1024 * 1024)
print(f"Done! {OUTPUT} ({size_mb:.1f} MB, {len(slides)} pages)")
