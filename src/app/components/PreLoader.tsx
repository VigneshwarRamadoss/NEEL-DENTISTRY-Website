/**
 * ═══════════════════════════════════════════════════════════
 *  NEEL DENTISTRY — Premium Pre-Loader
 *  "The Smile Forms Before the Page"
 *
 *  A cinematic, award-level pre-loader that tells a micro-story:
 *    1. Dark calm arrival → 2. Dental-light sweep reveals logo →
 *    3. SVG tooth outline draws → 4. Inner curve blooms →
 *    5. Smile arc sweeps → 6. Sparkles pulse → 7. Page reveal
 *
 *  Stack: React 18 · TypeScript · GSAP Timeline · CSS
 *  Duration: 2.5–3.2 seconds
 * ═══════════════════════════════════════════════════════════
 */

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import "./preloader.css";

/* ── Logo PNG path (public/assets) ─────────────────────── */
const LOGO_SRC = "/assets/neel-dentistry-logo.png";

/* ── Session-once logic key ────────────────────────────── */
const SESSION_KEY = "neel-preloader-shown";

/* ── Animation timeline durations (seconds) ────────────── */
const TIMING = {
  BLACK_ARRIVAL:    0.30,  // 0ms–300ms
  LIGHT_SWEEP:      0.60,  // 300ms–900ms
  TOOTH_OUTLINE:    0.70,  // 900ms–1600ms
  INNER_BLOOM:      0.70,  // 1300ms–2000ms
  SMILE_ARC:        0.60,  // 1700ms–2300ms
  SPARKLE_PULSE:    0.60,  // 2100ms–2700ms
  PAGE_REVEAL:      0.50,  // 2700ms–3200ms
} as const;

interface PreLoaderProps {
  /** Called when the pre-loader animation finishes and is safe to unmount */
  onComplete: () => void;
}

export function PreLoader({ onComplete }: PreLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = useCallback(() => {
    setIsComplete(true);
    // Mark session as shown
    try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* noop */ }
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    /* ── Reduced-motion fast path ──────────────────────── */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Show static logo briefly, then reveal
      const timer = setTimeout(handleComplete, 500);
      return () => clearTimeout(timer);
    }

    /* ── Session-once check ────────────────────────────── */
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") {
        handleComplete();
        return;
      }
    } catch { /* noop — private browsing, etc. */ }

    /* ── Lock body scroll ──────────────────────────────── */
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    /* ── Element references ────────────────────────────── */
    const container = containerRef.current;
    if (!container) return;

    const ambient       = container.querySelector(".preloader__ambient") as HTMLElement;
    const logoWrap      = container.querySelector(".preloader__logo-wrap") as HTMLElement;
    const lightSweep    = container.querySelector(".preloader__light-sweep") as HTMLElement;
    const toothPath     = container.querySelector(".preloader__tooth-outline") as SVGPathElement;
    const innerPath     = container.querySelector(".preloader__inner-curve") as SVGPathElement;
    const smileArcPath  = container.querySelector(".preloader__smile-arc") as SVGPathElement;
    const sparkles      = container.querySelectorAll(".preloader__sparkle");
    const edgeGlow      = container.querySelector(".preloader__edge-glow") as HTMLElement;
    const smileWipeLine = container.querySelector(".preloader__smile-wipe-line") as HTMLElement;

    /* ── Initialize SVG stroke-dasharray/offset ────────── */
    const initStroke = (path: SVGPathElement | null) => {
      if (!path) return;
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0,
      });
    };
    initStroke(toothPath);
    initStroke(innerPath);
    initStroke(smileArcPath);

    /* ── Build GSAP master timeline ────────────────────── */
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = originalOverflow;
        handleComplete();
      },
    });
    timelineRef.current = tl;

    const ease = "power3.out";
    const smoothEase = "cubic-bezier(0.22, 1, 0.36, 1)";

    /* ─── PHASE 1: Black Arrival + Ambient Glow (0–300ms) ── */
    tl.to(ambient, {
      opacity: 1,
      duration: TIMING.BLACK_ARRIVAL,
      ease: "power2.inOut",
    });

    /* ─── PHASE 2: Light Scan Reveal (300ms–900ms) ─────── */
    // Reveal logo wrap with low opacity first
    tl.to(logoWrap, {
      opacity: 0.15,
      duration: 0.2,
      ease: "power1.in",
    }, TIMING.BLACK_ARRIVAL);

    // Clinical light sweep pass
    tl.fromTo(lightSweep,
      { x: "0%" },
      {
        x: "350%",
        duration: TIMING.LIGHT_SWEEP,
        ease: "power2.inOut",
      },
      TIMING.BLACK_ARRIVAL
    );

    // Logo becomes more visible during sweep
    tl.to(logoWrap, {
      opacity: 0.5,
      duration: TIMING.LIGHT_SWEEP * 0.6,
      ease: "power1.out",
    }, TIMING.BLACK_ARRIVAL + TIMING.LIGHT_SWEEP * 0.4);

    /* ─── PHASE 3: Tooth Outline Draw (900ms–1600ms) ───── */
    const toothStart = TIMING.BLACK_ARRIVAL + TIMING.LIGHT_SWEEP;

    if (toothPath) {
      tl.to(toothPath, {
        opacity: 1,
        duration: 0.1,
      }, toothStart);

      tl.to(toothPath, {
        strokeDashoffset: 0,
        stroke: "#F5F5F2",
        duration: TIMING.TOOTH_OUTLINE,
        ease,
      }, toothStart);
    }

    // Bring logo to near-full visibility
    tl.to(logoWrap, {
      opacity: 0.85,
      duration: TIMING.TOOTH_OUTLINE,
      ease,
    }, toothStart);

    /* ─── PHASE 4: Inner Curve Bloom (1300ms–2000ms) ───── */
    const innerStart = toothStart + 0.4; // staggered overlap

    if (innerPath) {
      tl.to(innerPath, {
        opacity: 1,
        duration: 0.1,
      }, innerStart);

      tl.to(innerPath, {
        strokeDashoffset: 0,
        stroke: "#F5F5F2",
        duration: TIMING.INNER_BLOOM,
        ease: "power2.out",
      }, innerStart);
    }

    /* ─── PHASE 5: Smile Arc Sweep (1700ms–2300ms) ─────── */
    const smileStart = innerStart + 0.4;

    if (smileArcPath) {
      tl.to(smileArcPath, {
        opacity: 1,
        duration: 0.1,
      }, smileStart);

      tl.to(smileArcPath, {
        strokeDashoffset: 0,
        stroke: "#F5F5F2",
        duration: TIMING.SMILE_ARC,
        ease,
      }, smileStart);
    }

    // Smile wipe line expands horizontally
    tl.to(smileWipeLine, {
      width: "60vw",
      opacity: 1,
      duration: TIMING.SMILE_ARC,
      ease,
    }, smileStart + 0.15);

    /* ─── PHASE 6: Sparkle Pulse + Full Logo (2100ms–2700ms) ── */
    const sparkleStart = smileStart + 0.4;

    // Logo to full brightness
    tl.to(logoWrap, {
      opacity: 1,
      duration: 0.3,
      ease: "power1.out",
    }, sparkleStart);

    // Edge glow pulse
    tl.to(edgeGlow, {
      opacity: 1,
      scale: 1.08,
      duration: 0.35,
      ease: "power2.out",
    }, sparkleStart);

    tl.to(edgeGlow, {
      opacity: 0.4,
      scale: 1,
      duration: 0.25,
      ease: "power2.inOut",
    }, sparkleStart + 0.35);

    // Sparkles sequence
    sparkles.forEach((sparkle, i) => {
      const delay = sparkleStart + i * 0.08;
      tl.to(sparkle, {
        opacity: 1,
        scale: 1.1,
        duration: 0.2,
        ease: "power2.out",
      }, delay);
      tl.to(sparkle, {
        opacity: 0.7,
        scale: 1,
        duration: 0.2,
        ease: "power2.inOut",
      }, delay + 0.2);
    });

    /* ─── PHASE 7: Page Reveal Exit (2700ms–3200ms) ────── */
    const exitStart = sparkleStart + TIMING.SPARKLE_PULSE;

    // Smile wipe line fades
    tl.to(smileWipeLine, {
      opacity: 0,
      width: "120vw",
      duration: 0.3,
      ease: "power2.in",
    }, exitStart);

    // Logo scales up slightly, blurs, fades
    tl.to(logoWrap, {
      scale: 1.06,
      filter: "blur(4px)",
      opacity: 0,
      duration: TIMING.PAGE_REVEAL,
      ease: "power2.inOut",
    }, exitStart);

    // All sparkles fade
    tl.to(sparkles, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    }, exitStart);

    // Edge glow fades
    tl.to(edgeGlow, {
      opacity: 0,
      duration: 0.25,
    }, exitStart);

    // SVG strokes fade
    tl.to([toothPath, innerPath, smileArcPath].filter(Boolean), {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    }, exitStart);

    // Ambient glow fades
    tl.to(ambient, {
      opacity: 0,
      duration: 0.3,
    }, exitStart);

    // Container curtain reveal — rise up
    tl.to(container, {
      clipPath: "inset(0 0 100% 0)",
      duration: TIMING.PAGE_REVEAL,
      ease: "power3.inOut",
    }, exitStart + 0.15);

    /* ── Cleanup ───────────────────────────────────────── */
    return () => {
      tl.kill();
      document.body.style.overflow = originalOverflow;
    };
  }, [handleComplete]);

  /* ── Session-already-shown: skip render entirely ─────── */
  try {
    if (typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "1") {
      return null;
    }
  } catch { /* noop */ }

  if (isComplete) return null;

  return (
    <div
      ref={containerRef}
      className={`preloader ${isComplete ? "preloader--hidden" : ""}`}
      aria-hidden="true"
      role="presentation"
    >
      {/* Film grain texture */}
      <div className="preloader__grain" />

      {/* Radial ambient glow */}
      <div className="preloader__ambient" />

      {/* Smile wipe transition line */}
      <div className="preloader__smile-wipe-line" />

      {/* Logo composition */}
      <div className="preloader__logo-wrap">
        {/* Clinical light sweep beam */}
        <div className="preloader__light-sweep" />

        {/* Edge glow around logo */}
        <div className="preloader__edge-glow" />

        {/* PNG logo */}
        <img
          src={LOGO_SRC}
          alt=""
          className="preloader__logo"
          draggable={false}
        />

        {/* SVG overlay for stroke-draw animations
            These paths are traced approximations of the logo's key shapes:
            - Outer tooth outline
            - Inner organic curve
            - Bottom smile arc
        */}
        <svg
          className="preloader__svg-overlay"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer tooth outline — two lobes meeting at center */}
          <path
            className="preloader__tooth-outline"
            d="M50 25 C30 25, 14 45, 16 70 C18 95, 35 115, 55 130 
               C65 137, 72 138, 80 135
               C88 138, 95 137, 105 130
               C125 115, 142 95, 144 70
               C146 45, 130 25, 110 25
               C95 25, 90 40, 80 55
               C70 40, 65 25, 50 25Z"
            stroke="#5B5B5B"
            strokeWidth="1.2"
          />

          {/* Inner organic curve — the swooping inner line */}
          <path
            className="preloader__inner-curve"
            d="M48 50 C55 65, 65 85, 80 95 C95 85, 105 65, 112 50"
            stroke="#5B5B5B"
            strokeWidth="1"
          />

          {/* Bottom smile arc */}
          <path
            className="preloader__smile-arc"
            d="M15 130 C40 145, 65 150, 80 148 C95 150, 120 145, 145 130"
            stroke="#5B5B5B"
            strokeWidth="1.2"
          />
        </svg>

        {/* Sparkle marks — 3 four-pointed stars */}
        <div
          className="preloader__sparkle"
          style={{ top: "8%", right: "5%", width: 14, height: 14 }}
        >
          <svg viewBox="0 0 24 24" width="14" height="14">
            <path
              d="M12 2 L13.5 9 L20 12 L13.5 15 L12 22 L10.5 15 L4 12 L10.5 9 Z"
              fill="#F5F5F2"
              opacity="0.9"
            />
          </svg>
        </div>
        <div
          className="preloader__sparkle"
          style={{ top: "2%", right: "-5%", width: 10, height: 10 }}
        >
          <svg viewBox="0 0 24 24" width="10" height="10">
            <path
              d="M12 2 L13.5 9 L20 12 L13.5 15 L12 22 L10.5 15 L4 12 L10.5 9 Z"
              fill="#F5F5F2"
              opacity="0.7"
            />
          </svg>
        </div>
        <div
          className="preloader__sparkle"
          style={{ top: "14%", right: "-8%", width: 8, height: 8 }}
        >
          <svg viewBox="0 0 24 24" width="8" height="8">
            <path
              d="M12 2 L13.5 9 L20 12 L13.5 15 L12 22 L10.5 15 L4 12 L10.5 9 Z"
              fill="#F5F5F2"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
