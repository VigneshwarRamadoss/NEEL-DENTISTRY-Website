import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const PHASES = {
  BLOBS:     { start: 0,    end: 0.4  },
  LINE:      { start: 0.4,  end: 1.1  },
  TEXT:      { start: 1.1,  end: 2.2  },
  TAGLINE:   { start: 2.2,  end: 3.0  },
  HOLD:      { start: 3.0,  end: 4.2  },
  EXIT:      { start: 4.2,  end: 5.0  },
};

export function IntroAnimation() {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);
  const [windowW, setWindowW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  
  // Responsive font sizes
  const fontSize = windowW <= 400 ? 28 : windowW <= 768 ? 38 : windowW <= 1024 ? 52 : 72;
  const lineWidth = { rest: windowW <= 400 ? 80 : windowW <= 768 ? 100 : 120, extended: windowW <= 400 ? 140 : windowW <= 768 ? 180 : 240 };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }

    const handleResize = () => setWindowW(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const timers = [
      setTimeout(() => setPhase(1), PHASES.LINE.start * 1000),
      setTimeout(() => setPhase(2), PHASES.TEXT.start * 1000),
      setTimeout(() => setPhase(3), PHASES.TAGLINE.start * 1000),
      setTimeout(() => setPhase(4), PHASES.HOLD.start * 1000),
      setTimeout(() => setPhase(5), PHASES.EXIT.start * 1000),
      setTimeout(() => {
        setVisible(false);
      }, PHASES.EXIT.end * 1000),
    ];

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        animate={phase >= 5 ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.84, 0] }}
        style={{ pointerEvents: phase >= 5 ? "none" : "all" }}
      >
        {/* Ambient Pink Blob — Top Left */}
        <motion.div
          className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,194,209,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: phase >= 0 ? 1 : 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        
        {/* Ambient Pink Blob — Bottom Right */}
        <motion.div
          className="absolute bottom-[15%] right-[10%] w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,194,209,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: phase >= 0 ? 1 : 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Composition Container */}
        <div className="flex flex-col items-center gap-0 relative">
          
          {/* PHASE 1 — Silver Line + Pink Dot */}
          <div className="relative flex items-center justify-center mb-5">
            {/* Line Left */}
            <motion.div
              className="absolute right-1/2 h-px bg-[#CED4DA] origin-right"
              initial={{ width: 0 }}
              animate={{ width: phase >= 1 ? lineWidth.rest / 2 : 0 }}
              transition={{ duration: 0.55, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            />
            
            {/* Pink Centre Dot */}
            <motion.div
              className="w-1 h-1 rounded-full bg-[#FFC2D1] z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: phase === 1 ? [0, 1, 0] : 0,
                scale: phase === 1 ? [0, 1.5, 0] : 0,
              }}
              transition={{ duration: 0.5, delay: 0.45, ease: "easeInOut" }}
            />
            
            {/* Line Right */}
            <motion.div
              className="absolute left-1/2 h-px bg-[#CED4DA] origin-left"
              initial={{ width: 0 }}
              animate={{ width: phase >= 1 ? lineWidth.rest / 2 : 0 }}
              transition={{ duration: 0.55, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* PHASE 2 — Clinic Name Slice/Split Reveal */}
          <div className="relative overflow-hidden" style={{ height: fontSize * 1.25 }}>
            {/* TOP HALF */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 0 50% 0)` }}
              initial={{ y: -10 }}
              animate={{ y: phase >= 2 ? 0 : -10, opacity: phase >= 2 ? 1 : 0.85 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: fontSize,
                  letterSpacing: windowW <= 400 ? "3px" : windowW <= 768 ? "5px" : "8px",
                  color: "#333333", // PREMIUM GREY instead of 1A1A1A
                  display: "block",
                  whiteSpace: "nowrap",
                  lineHeight: 1.25,
                }}
              >
                NEEL DENTISTRY
              </span>
            </motion.div>
            
            {/* BOTTOM HALF */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(50% 0 0 0)` }}
              initial={{ y: 10 }}
              animate={{ y: phase >= 2 ? 0 : 10, opacity: phase >= 2 ? 1 : 0.85 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: fontSize,
                  letterSpacing: windowW <= 400 ? "3px" : windowW <= 768 ? "5px" : "8px",
                  color: "#333333", // PREMIUM GREY
                  display: "block",
                  whiteSpace: "nowrap",
                  lineHeight: 1.25,
                }}
              >
                NEEL DENTISTRY
              </span>
            </motion.div>
          </div>

          {/* Extended Underline Rule */}
          <div className="relative flex justify-center mt-2 mb-5">
            <motion.div
              className="h-px bg-[#CED4DA] origin-center"
              initial={{ width: 0 }}
              animate={{ width: phase >= 2 ? lineWidth.extended : phase >= 1 ? lineWidth.rest : 0 }}
              transition={{ duration: 0.4, delay: phase >= 2 ? 0.65 : 0, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* PHASE 3 — Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: phase >= 3 ? 1 : 0, y: phase >= 3 ? 0 : 8 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              fontSize: windowW <= 400 ? 10 : windowW <= 768 ? 11 : 13,
              letterSpacing: "4px",
              color: "#CED4DA",
              textTransform: "uppercase",
            }}
          >
            Where Care Meets Craft
          </motion.div>
          
          {/* Optional Pink Glow behind tagline */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              width: 200,
              height: 80,
              bottom: -20,
              background: "radial-gradient(ellipse, rgba(255,194,209,0.10) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 3 ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
