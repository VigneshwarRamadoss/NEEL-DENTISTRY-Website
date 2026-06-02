/**
 * ═══════════════════════════════════════════════════════════
 *  NEEL DENTISTRY — Premium Pre-Loader
 *  "The Smile Forms Before the Page"
 *
 *  A cinematic, award-level pre-loader that tells a micro-story:
 *    1. Dark calm arrival → 2. Dental-light sweep reveals logo →
 *    3. Logo reveals seamlessly via clip-path →
 *    4. Smile arc sweeps below → 5. Sparkle glow pulses →
 *    6. Page reveal transition
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

/* ── Animation timeline durations (seconds) ────────────── */
const TIMING = {
  BLACK_ARRIVAL:    0.30,  // 0ms–300ms
  LIGHT_SWEEP:      0.60,  // 300ms–900ms
  LOGO_REVEAL:      0.80,  // 800ms–1600ms (replaces stroke draw)
  SMILE_ARC:        0.60,  // 1500ms–2100ms
  SPARKLE_PULSE:    0.50,  // 2100ms–2600ms
  PAGE_REVEAL:      0.60,  // 2600ms–3200ms
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
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    /* ── Reduced-motion fast path ──────────────────────── */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = setTimeout(handleComplete, 600);
      return () => clearTimeout(timer);
    }

    /* ── Lock body scroll ──────────────────────────────── */
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    /* ── Element references ────────────────────────────── */
    const container = containerRef.current;
    if (!container) return;

    const ambient       = container.querySelector(".preloader__ambient") as HTMLElement;
    const logoWrap      = container.querySelector(".preloader__logo-wrap") as HTMLElement;
    const logoReveal    = container.querySelector(".preloader__logo--reveal") as HTMLElement;
    const lightSweep    = container.querySelector(".preloader__light-sweep") as HTMLElement;
    const smileArcPath  = container.querySelector(".preloader__smile-arc-path") as SVGPathElement;
    const edgeGlow      = container.querySelector(".preloader__edge-glow") as HTMLElement;

    /* ── Initialize SVG stroke for Smile Arc ───────────── */
    if (smileArcPath) {
      const length = smileArcPath.getTotalLength();
      gsap.set(smileArcPath, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0,
      });
    }

    /* ── Build GSAP master timeline ────────────────────── */
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = originalOverflow;
        handleComplete();
      },
    });
    timelineRef.current = tl;

    const ease = "power3.out";

    /* ─── PHASE 1: Black Arrival + Ambient Glow (0–300ms) ── */
    tl.to(ambient, {
      opacity: 1,
      duration: TIMING.BLACK_ARRIVAL,
      ease: "power2.inOut",
    });

    // Fade in the wrap slightly so the sweep is visible
    tl.to(logoWrap, {
      opacity: 1,
      duration: TIMING.BLACK_ARRIVAL,
      ease: "power1.in",
    }, 0);

    /* ─── PHASE 2: Light Scan Reveal (300ms–900ms) ─────── */
    const sweepStart = TIMING.BLACK_ARRIVAL;

    tl.fromTo(lightSweep,
      { x: "-100%" },
      {
        x: "150%",
        duration: TIMING.LIGHT_SWEEP,
        ease: "power2.inOut",
      },
      sweepStart
    );

    /* ─── PHASE 3: Logo Draw / Reveal (800ms–1600ms) ───── */
    // Instead of SVG strokes, we use a custom clip-path wipe to simulate the logo drawing from bottom to top
    const revealStart = sweepStart + 0.4;

    tl.fromTo(logoReveal,
      { clipPath: "inset(100% 0 0 0)" },
      {
        clipPath: "inset(0% 0 0 0)",
        duration: TIMING.LOGO_REVEAL,
        ease: "power3.inOut",
      },
      revealStart
    );

    /* ─── PHASE 4: Smile Arc Sweep (1500ms–2100ms) ─────── */
    const smileStart = revealStart + TIMING.LOGO_REVEAL * 0.7; // slight overlap

    if (smileArcPath) {
      tl.to(smileArcPath, {
        opacity: 1,
        duration: 0.1,
      }, smileStart);

      tl.to(smileArcPath, {
        strokeDashoffset: 0,
        stroke: "#FFFFFF", // Brighter white for the smile
        duration: TIMING.SMILE_ARC,
        ease,
      }, smileStart);
    }

    /* ─── PHASE 5: Sparkle/Edge Glow Pulse (2100ms–2600ms) ── */
    const pulseStart = smileStart + TIMING.SMILE_ARC * 0.8;

    // The whole logo brightens slightly
    tl.to(logoReveal, {
      filter: "brightness(0) invert(1) drop-shadow(0 0 15px rgba(255,255,255,0.4))",
      duration: 0.3,
      ease: "power2.out",
    }, pulseStart);

    // Pulse the edge glow behind it
    tl.to(edgeGlow, {
      opacity: 1,
      scale: 1.15,
      duration: 0.25,
      ease: "power2.out",
    }, pulseStart);

    tl.to(edgeGlow, {
      opacity: 0,
      scale: 1.25,
      duration: 0.3,
      ease: "power2.in",
    }, pulseStart + 0.25);

    // Reset logo brightness down a bit
    tl.to(logoReveal, {
      filter: "brightness(0) invert(1) drop-shadow(0 0 10px rgba(255,255,255,0.1))",
      duration: 0.3,
      ease: "power2.inOut",
    }, pulseStart + 0.3);

    /* ─── PHASE 6: Page Reveal Exit (2600ms–3200ms) ────── */
    const exitStart = pulseStart + TIMING.SPARKLE_PULSE;

    // Logo scales up slightly, blurs, fades
    tl.to(logoWrap, {
      scale: 1.1,
      filter: "blur(6px)",
      opacity: 0,
      duration: TIMING.PAGE_REVEAL * 0.6,
      ease: "power2.inOut",
    }, exitStart);

    // Smile arc fades
    if (smileArcPath) {
      tl.to(smileArcPath, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      }, exitStart);
    }

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

      {/* Logo composition */}
      <div className="preloader__logo-wrap">
        {/* Clinical light sweep beam */}
        <div className="preloader__light-sweep" />

        {/* Edge glow around logo */}
        <div className="preloader__edge-glow" />

        {/* Base Logo (faint background silhouette) */}
        <img
          src={LOGO_SRC}
          alt=""
          className="preloader__logo preloader__logo--base"
          draggable={false}
        />

        {/* Reveal Logo (animated via clip-path) */}
        <img
          src={LOGO_SRC}
          alt=""
          className="preloader__logo preloader__logo--reveal"
          draggable={false}
        />

        {/* Independent Smile Arc element for the sweep */}
        <div className="preloader__smile-arc">
          <svg viewBox="0 0 200 40" preserveAspectRatio="none">
            <path
              className="preloader__smile-arc-path"
              d="M10,20 Q100,40 190,20"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
