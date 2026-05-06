import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(() => {
    return !window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  });

  const [dimensions, setDimensions] = useState({
    lineW1: 120,
    lineW2: 220,
    fontSize: 48,
    letterSpacing: 6,
    sliceOffset: 8,
    taglineSize: 13,
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w <= 768) {
        setDimensions({
          lineW1: 80,
          lineW2: 140,
          fontSize: 30,
          letterSpacing: 4,
          sliceOffset: 5,
          taglineSize: 11,
        });
      } else if (w <= 1024) {
        setDimensions({
          lineW1: 100,
          lineW2: 180,
          fontSize: 40,
          letterSpacing: 5,
          sliceOffset: 7,
          taglineSize: 12,
        });
      } else {
        setDimensions({
          lineW1: 120,
          lineW2: 240,
          fontSize: 50,
          letterSpacing: 7,
          sliceOffset: 9,
          taglineSize: 14,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const cubicBezier = [0.16, 1, 0.3, 1] as const;

  return (
    <motion.div
      id="intro-overlay"
      className="fixed inset-0 z-[9999] bg-white/95 backdrop-blur-2xl pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: 2.1, ease: "easeIn" }}
      onAnimationComplete={() => setIsVisible(false)}
    >
      <div className="relative w-full h-full">
        {/* Phase 2: Silver Line Draw */}
        <motion.div
          className="absolute h-[1px] bg-[#CED4DA] top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ width: 0 }}
          animate={{
            width: [
              0,
              dimensions.lineW1,
              dimensions.lineW1,
              dimensions.lineW2,
            ],
          }}
          transition={{
            duration: 1.4,
            delay: 0.3,
            times: [0, 0.4 / 1.4, 1.2 / 1.4, 1.4 / 1.4],
            ease: [cubicBezier, "linear", cubicBezier] as any,
          }}
        />

        {/* Phase 2: Pink Micro-dot Pulse */}
        <motion.div
          className="absolute w-[4px] h-[4px] rounded-full bg-[#FFC2D1] top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.25,
            delay: 0.65,
            times: [0, 0.5, 1],
            ease: "easeInOut",
          }}
        />

        {/* Phase 3: Text Slice Reveal */}
        <div
          className="absolute top-[calc(50vh+16px)] left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-[#1A1A1A] whitespace-nowrap"
          style={{
            fontFamily: "'Nativera', sans-serif",
            fontSize: dimensions.fontSize,
            letterSpacing: dimensions.letterSpacing,
          }}
        >
          {/* Base invisible text to establish layout size */}
          <div className="invisible">NEEL DENTISTRY</div>

          {/* Top Half */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ clipPath: "inset(0 0 49.5% 0)" }}
            initial={{ y: -dimensions.sliceOffset, opacity: 0 }}
            animate={{ y: 0, opacity: [0, 0.85, 1] }}
            transition={{
              duration: 0.5,
              delay: 1.0,
              y: {
                ease: cubicBezier as any,
                duration: 0.5,
                delay: 1.0,
              },
              opacity: {
                times: [0, 0.01, 1],
                ease: "linear",
                duration: 0.5,
                delay: 1.0,
              },
            }}
          >
            NEEL DENTISTRY
          </motion.div>

          {/* Bottom Half */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ clipPath: "inset(49.5% 0 0 0)" }}
            initial={{ y: dimensions.sliceOffset, opacity: 0 }}
            animate={{ y: 0, opacity: [0, 0.85, 1] }}
            transition={{
              duration: 0.5,
              delay: 1.0,
              y: {
                ease: cubicBezier as any,
                duration: 0.5,
                delay: 1.0,
              },
              opacity: {
                times: [0, 0.01, 1],
                ease: "linear",
                duration: 0.5,
                delay: 1.0,
              },
            }}
          >
            NEEL DENTISTRY
          </motion.div>
        </div>

        {/* Phase 4: Pink Glow Behind Tagline */}
        <motion.div
          className="absolute top-[calc(50vh+52px)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] rounded-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,194,209,0.08) 0%, rgba(255,194,209,0) 70%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 1.6,
            ease: "easeOut",
          }}
        />

        {/* Phase 4: Tagline */}
        <motion.div
          className="absolute top-[calc(50vh+52px)] left-1/2 -translate-x-1/2 -translate-y-1/2 font-normal uppercase whitespace-nowrap text-[#CED4DA]"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: dimensions.taglineSize,
            letterSpacing: "4px",
          }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 1.6,
            ease: "easeOut",
          }}
        >
          WHERE CARE MEETS CRAFT
        </motion.div>
      </div>
    </motion.div>
  );
}