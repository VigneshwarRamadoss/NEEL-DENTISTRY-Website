import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "motion/react";

/*
 * IntroAnimation — Self-drawing SVG stroke-path reveal
 *
 * Timeline (~5.5s total):
 *   0.0s – 0.5s   Background blobs fade in
 *   0.5s – 2.5s   "NEEL DENTISTRY" stroke draws (2s)
 *   2.3s – 3.1s   Fill layer fades in (0.8s)
 *   2.5s – 3.5s   Pink underline springs open
 *   2.5s – 3.5s   Tagline stroke draws (1s)
 *   3.5s – 4.3s   Tagline fill fades in
 *   4.7s – 5.5s   Entire overlay fades out (0.8s)
 *
 * HOLD_DELAY = 4.7s  → Layout.tsx must use >= 4.7s for content reveal
 */

// Timing constants (exported so Layout can reference)
const DRAW_DURATION = 2.0;
const FILL_DELAY = DRAW_DURATION + 0.3;      // 2.3
const FILL_DURATION = 0.8;
const TAGLINE_DELAY = FILL_DELAY + 0.2;      // 2.5
const TAGLINE_DRAW = 1.0;
const HOLD_DELAY = TAGLINE_DELAY + TAGLINE_DRAW + 1.2; // 4.7
const FADE_DURATION = 0.8;

export const INTRO_TOTAL_DURATION = HOLD_DELAY + FADE_DURATION; // ~5.5s

export function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(() => {
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  const mainSvgRef = useRef<SVGSVGElement>(null);
  const tagSvgRef = useRef<SVGSVGElement>(null);

  // Responsive dimensions
  const [dims, setDims] = useState({ fontSize: 85, taglineSize: 14 });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w <= 400)       setDims({ fontSize: 32, taglineSize: 10 });
      else if (w <= 768)  setDims({ fontSize: 44, taglineSize: 11 });
      else if (w <= 1024) setDims({ fontSize: 66, taglineSize: 12 });
      else                setDims({ fontSize: 180, taglineSize: 24 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Resize SVG viewBox to fit text after render
  const fitSvg = useCallback(
    (svg: SVGSVGElement | null) => {
      if (!svg) return;
      
      const runFit = () => {
        const texts = svg.querySelectorAll("text");
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        
        texts.forEach((t) => {
          try {
            const b = t.getBBox();
            minX = Math.min(minX, b.x);
            minY = Math.min(minY, b.y);
            maxX = Math.max(maxX, b.x + b.width);
            maxY = Math.max(maxY, b.y + b.height);
          } catch { /* getBBox can throw if not rendered */ }
        });

        if (maxX > -Infinity && maxY > -Infinity) {
          const w = maxX - minX;
          const h = maxY - minY;
          const paddingX = 100; // More breathing room
          const paddingY = 40;
          
          svg.setAttribute("viewBox", `${minX - paddingX/2} ${minY - paddingY/2} ${w + paddingX} ${h + paddingY}`);
          // Set to natural size but cap at screen width
          svg.style.width = `${w + paddingX}px`;
          svg.style.maxWidth = "95vw";
          svg.style.height = "auto";
        }
      };

      // Wait for font loading and layout
      if ("fonts" in document) {
        document.fonts.ready.then(runFit);
      } else {
        requestAnimationFrame(runFit);
      }
    },
    [],
  );

  // Fit SVGs whenever font-size changes
  useEffect(() => {
    fitSvg(mainSvgRef.current);
    fitSvg(tagSvgRef.current);
  }, [dims.fontSize, fitSvg]);

  // Lock scroll while visible
  useEffect(() => {
    if (isVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isVisible]);

  if (!isVisible) return null;

  // Fixed center for SVG coordinate system (independent of container size)
  const cx = 500;
  const cy = 500;

  const letterSpacing = dims.fontSize >= 180 ? "16px" : dims.fontSize >= 66 ? "8px" : "4px";
  const taglineSpacing = dims.taglineSize >= 14 ? "5px" : "3px";

  return (
    <motion.div
      id="intro-overlay"
      className="fixed inset-0 z-[9999] bg-white pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: FADE_DURATION, delay: HOLD_DELAY, ease: "easeIn" }}
      onAnimationComplete={() => setIsVisible(false)}
    >
      {/* ── Atmospheric floating blobs ── */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#ffc2d1]/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[#ffc2d1]/10 rounded-full blur-[150px]"
        />
      </motion.div>

      {/* ── Main centered content ── */}
      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ scale: 0.97, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Pulsing energy glow */}
          <motion.div
            className="absolute bg-[#ffc2d1]/15 blur-[80px] rounded-full"
            style={{ width: "120%", height: "120%", top: "-10%", left: "-10%" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 1], opacity: [0, 0.4, 0] }}
            transition={{ duration: 2.5, delay: 0.5, times: [0, 0.5, 1], ease: "easeInOut" }}
          />

          {/* ── MAIN TITLE SVG ── */}
          <svg
            ref={mainSvgRef}
            className="overflow-visible block mx-auto"
            /* viewBox and size set dynamically by fitSvg */
          >
            {/* Hidden sizer */}
            <text
              x={cx} y={cy}
              textAnchor="middle" dominantBaseline="central"
              style={{
                fontFamily: "'Nativera', sans-serif",
                fontSize: dims.fontSize,
                fontWeight: 900,
                letterSpacing: letterSpacing,
                visibility: "hidden",
              }}
            >
              NEEL DENTISTRY
            </text>

            {/* Stroke-draw layer */}
            <motion.text
              x={cx} y={cy}
              textAnchor="middle" dominantBaseline="central"
              style={{
                fontFamily: "'Nativera', sans-serif",
                fontSize: dims.fontSize,
                fontWeight: 900,
                letterSpacing: letterSpacing,
              }}
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: 2000, strokeDashoffset: 2000, opacity: 0 }}
              animate={{ strokeDashoffset: 0, opacity: 1 }}
              transition={{
                strokeDashoffset: { duration: DRAW_DURATION, delay: 0.5, ease: [0.45, 0, 0.55, 1] },
                opacity: { duration: 0.2, delay: 0.5 },
              }}
            >
              NEEL DENTISTRY
            </motion.text>

            {/* Fill layer */}
            <motion.text
              x={cx} y={cy}
              textAnchor="middle" dominantBaseline="central"
              style={{
                fontFamily: "'Nativera', sans-serif",
                fontSize: dims.fontSize,
                fontWeight: 900,
                letterSpacing: letterSpacing,
              }}
              fill="#1A1A1A"
              stroke="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: FILL_DURATION, delay: FILL_DELAY, ease: "easeOut" }}
            >
              NEEL DENTISTRY
            </motion.text>
          </svg>

          {/* ── Pink gradient underline (spring physics) ── */}
          <motion.div
            style={{
              height: "2px",
              background: "linear-gradient(90deg, transparent, #ffc2d1, #ffc2d1, transparent)",
              marginTop: "14px",
              width: "100%", // Scale to parent container width
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 0.8, opacity: 1 }}
            transition={{
              scaleX: { type: "spring", stiffness: 40, damping: 20, delay: FILL_DELAY + 0.2 },
              opacity: { duration: 0.5, delay: FILL_DELAY + 0.2 },
            }}
          />

          {/* ── TAGLINE SVG ── */}
          <div style={{ marginTop: "18px", width: "100%" }}>
            <svg
              ref={tagSvgRef}
              className="overflow-visible block mx-auto"
            >
              <text
                x={cx} y={cy}
                textAnchor="middle" dominantBaseline="central"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: dims.taglineSize,
                  fontWeight: 400,
                  letterSpacing: taglineSpacing,
                  textTransform: "uppercase" as const,
                  visibility: "hidden",
                }}
              >
                WHERE CARE MEETS CRAFT
              </text>

              {/* Stroke-draw layer */}
              <motion.text
                x={cx} y={cy}
                textAnchor="middle" dominantBaseline="central"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: dims.taglineSize,
                  fontWeight: 400,
                  letterSpacing: taglineSpacing,
                }}
                fill="none"
                stroke="#CED4DA"
                strokeWidth="0.5"
                strokeLinecap="round"
                initial={{ strokeDasharray: 800, strokeDashoffset: 800, opacity: 0 }}
                animate={{ strokeDashoffset: 0, opacity: 1 }}
                transition={{
                  strokeDashoffset: { duration: TAGLINE_DRAW, delay: TAGLINE_DELAY, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.3, delay: TAGLINE_DELAY },
                }}
              >
                WHERE CARE MEETS CRAFT
              </motion.text>

              {/* Fill layer */}
              <motion.text
                x={cx} y={cy}
                textAnchor="middle" dominantBaseline="central"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: dims.taglineSize,
                  fontWeight: 400,
                  letterSpacing: taglineSpacing,
                }}
                fill="#CED4DA"
                stroke="none"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: TAGLINE_DELAY + 0.5, ease: "easeOut" }}
              >
                WHERE CARE MEETS CRAFT
              </motion.text>
            </svg>
          </div>

          {/* ── Pink micro-dot pulse ── */}
          <motion.div
            className="rounded-full mx-auto"
            style={{
              width: "5px",
              height: "5px",
              backgroundColor: "#FFC2D1",
              marginTop: "22px",
              boxShadow: "0 0 15px #FFC2D1",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.8, 1, 0] }}
            transition={{
              duration: 1.5,
              delay: TAGLINE_DELAY + 0.5,
              times: [0, 0.2, 0.8, 1],
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.div>

  );
}