# NEEL DENTISTRY — Award-Winning Framer Parallax Scroll Animation
## World-Class Motion Design Blueprint · Production-Ready
> Stack: React 18 + Motion (Framer Motion) v12 + GSAP 3 + Intersection Observer API
> Breakpoints: Mobile 320–767px · Tablet 768–1023px · iPad 1024–1199px · Desktop 1200px+
> Browser Support: Chrome 120+ · Safari 17+ · Edge 120+ (Bing) · Firefox 122+

---

## Table of Contents
1. [Philosophy & Motion Language](#1-philosophy--motion-language)
2. [Global Animation System](#2-global-animation-system)
3. [Intro Animation — Enhanced Cinematic Reveal](#3-intro-animation--enhanced-cinematic-reveal)
4. [Hero Section — Parallax Depth Stack](#4-hero-section--parallax-depth-stack)
5. [Trust Bar — Counter Roll-Up](#5-trust-bar--counter-roll-up)
6. [Services Section — Staggered Card Theatre](#6-services-section--staggered-card-theatre)
7. [Why Choose Us — Horizontal Parallax Split](#7-why-choose-us--horizontal-parallax-split)
8. [Meet the Doctor — Cinematic Reveal](#8-meet-the-doctor--cinematic-reveal)
9. [Testimonials — Magnetic Carousel](#9-testimonials--magnetic-carousel)
10. [Smile Gallery — Morphing Grid Reveal](#10-smile-gallery--morphing-grid-reveal)
11. [CTA Banner — Depth Pulse](#11-cta-banner--depth-pulse)
12. [Page Transition System](#12-page-transition-system)
13. [Navbar — Intelligent Scroll Behaviour](#13-navbar--intelligent-scroll-behaviour)
14. [Scroll Progress Indicator](#14-scroll-progress-indicator)
15. [Performance & Accessibility](#15-performance--accessibility)
16. [Responsive Adaptation Matrix](#16-responsive-adaptation-matrix)
17. [Implementation Checklist](#17-implementation-checklist)

---

## 1. Philosophy & Motion Language

### Core Motion Principles
Neel Dentistry's animation language is built on **three pillars**:

| Pillar | Description | Feel |
|--------|-------------|------|
| **Precision** | Every element arrives with purpose. No random bounces. | Clinical, expert |
| **Warmth** | Soft ease-outs, never harsh. Motions that breathe. | Approachable, caring |
| **Depth** | Multi-layer parallax creates a world you move through, not past. | Immersive, premium |

### Universal Easing Vocabulary
```javascript
// NEEL DENTISTRY — Custom Easing Tokens
export const EASE = {
  // Entry easing — fast start, silk landing
  enter:    [0.16, 1, 0.3, 1],     // cubic-bezier
  
  // Exit easing — gentle acceleration away
  exit:     [0.7, 0, 0.84, 0],
  
  // Hover/micro — snappy, tactile
  micro:    [0.34, 1.56, 0.64, 1], // slight overshoot — warmth
  
  // Page transitions — cinematic
  cinematic: [0.43, 0.13, 0.23, 0.96],
  
  // Spring — for physical-feeling UI
  spring:   { type: "spring", stiffness: 300, damping: 30 },
  
  // Gentle spring — for large elements
  gentleSpring: { type: "spring", stiffness: 120, damping: 20 }
};
```

### Global Timing Scale
```javascript
export const DURATION = {
  instant:  0.1,   // Micro feedback (hover glows)
  fast:     0.25,  // Button states, icon transitions  
  normal:   0.45,  // Card reveals, text fades
  slow:     0.75,  // Section headers, split layouts
  dramatic: 1.1,   // Hero elements, page transitions
  cinematic: 1.8,  // Full-page overlays, intro
};
```

---

## 2. Global Animation System

### 2.1 Reduced Motion Guard
**Every animation must respect this.** Wrap all motion components:

```typescript
// hooks/useMotionSafe.ts
import { useReducedMotion } from "motion/react";

export function useMotionSafe() {
  const shouldReduce = useReducedMotion();
  
  return {
    shouldAnimate: !shouldReduce,
    // Returns identity variants if motion is reduced
    safeVariants: (variants: any) => shouldReduce 
      ? { initial: {}, animate: {}, exit: {} } 
      : variants,
    safeTransition: (transition: any) => shouldReduce
      ? { duration: 0 }
      : transition,
  };
}
```

### 2.2 Scroll-Triggered Reveal — Base Component
```typescript
// components/ScrollReveal.tsx
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useMotionSafe } from "../hooks/useMotionSafe";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.7,
  once = true,
  className,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const { shouldAnimate } = useMotionSafe();
  
  // Trigger when 15% of element is visible
  const isInView = useInView(ref, { 
    once, 
    margin: "-15% 0px -15% 0px"
  });

  const directionMap = {
    up:    { y: distance },
    down:  { y: -distance },
    left:  { x: distance },
    right: { x: -distance },
    none:  {},
  };

  const initial = shouldAnimate 
    ? { opacity: 0, ...directionMap[direction] } 
    : { opacity: 1 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### 2.3 Stagger Container
```typescript
// components/StaggerContainer.tsx
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export { containerVariants, itemVariants };
```

---

## 3. Intro Animation — Enhanced Cinematic Reveal

> Upgrade over existing IntroAnimation.tsx — full 5-phase enhanced sequence.

### 3.1 Timeline (5.5s Total)
```
0.00s → 0.40s   PHASE 0 — Soft pink blobs breathe into existence (ambient depth)
0.40s → 1.10s   PHASE 1 — Silver rule draws from center outward + pink micro-dot pulse
1.10s → 2.20s   PHASE 2 — "NEEL DENTISTRY" cinematic slice/split vertical reveal
2.20s → 3.00s   PHASE 3 — Extended underline + tagline drift-fade
3.00s → 4.20s   PHASE 4 — Hold: entire composition breathes (subtle scale 1→1.005→1)
4.20s → 5.00s   PHASE 5 — Dissolve to website (cross-fade, no jump)
```

### 3.2 Complete Implementation
```typescript
// components/IntroAnimationV2.tsx
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const PHASES = {
  BLOBS:     { start: 0,    end: 0.4  },
  LINE:      { start: 0.4,  end: 1.1  },
  TEXT:      { start: 1.1,  end: 2.2  },
  TAGLINE:   { start: 2.2,  end: 3.0  },
  HOLD:      { start: 3.0,  end: 4.2  },
  EXIT:      { start: 4.2,  end: 5.0  },
};

export function IntroAnimationV2({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);
  const [windowW, setWindowW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  
  // Responsive font sizes
  const fontSize = windowW <= 400 ? 28 : windowW <= 768 ? 38 : windowW <= 1024 ? 52 : 72;
  const lineWidth = { rest: windowW <= 400 ? 80 : windowW <= 768 ? 100 : 120, extended: windowW <= 400 ? 140 : windowW <= 768 ? 180 : 240 };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      onComplete();
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
        onComplete();
      }, PHASES.EXIT.end * 1000),
    ];

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [onComplete]);

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
                  color: "#1A1A1A",
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
                  color: "#1A1A1A",
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
```

---

## 4. Hero Section — Parallax Depth Stack

### 4.1 Architecture
The hero uses **4 independent depth layers**, each scrolling at a different rate using `useScroll` + `useTransform`.

```
Layer 0 (fixed):    Pure black overlay — scroll rate: 0%
Layer 1 (slowest):  Background photo — scrolls at 30% of page speed (y: -150px max)
Layer 2 (medium):   Soft pink gradient vignette — scrolls at 20%
Layer 3 (fastest):  Text & CTA group — scrolls at 5% (barely moves — feels grounded)
```

### 4.2 Implementation
```typescript
// components/HeroParallax.tsx
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export function HeroParallax() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollY } = useScroll();
  
  // Layer 1 — Background photo parallax (moves up as user scrolls)
  const bgY = useTransform(scrollY, [0, 800], [0, -240]);
  const bgYSmooth = useSpring(bgY, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Layer 2 — Pink vignette (subtler parallax)
  const vignetteY = useTransform(scrollY, [0, 800], [0, -80]);
  
  // Layer 3 — Text content (almost fixed, slight float)
  const textY = useTransform(scrollY, [0, 800], [0, -40]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden"
    >
      {/* LAYER 1 — Background Photo */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: bgYSmooth }}
      >
        <img
          src="https://i.postimg.cc/wjLsx7mg/Enhance-the-PNG-to-4k-202605022239.jpg"
          alt="Neel Dentistry Team"
          className="w-full h-full object-cover object-center"
          style={{ transform: "scale(1.15)" }} // Pre-scale to prevent edge reveal during parallax
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

      {/* LAYER 2 — Pink warmth vignette */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          y: vignetteY,
          background: "radial-gradient(ellipse 80% 60% at 20% 60%, rgba(255,194,209,0.08) 0%, transparent 60%)",
        }}
      />

      {/* LAYER 3 — Text Content */}
      <motion.div
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="max-w-[640px]">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 20, letterSpacing: "0px" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "3px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[#BCD9DE] text-xs font-medium uppercase mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Chennai's Trusted Dental Clinic
          </motion.span>

          {/* H1 — Word-by-word reveal */}
          <motion.h1
            className="text-white mb-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {"Exceptional Dental Care, Delivered With Warmth.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                variants={{
                  hidden: { opacity: 0, y: 30, rotateX: -15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                style={{ transformOrigin: "bottom center" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/80 text-lg mb-10 max-w-[480px]"
          >
            Sculpting unique smiles — from your child's first check-up to a complete smile transformation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary */}
            <motion.a
              href="tel:+919655300036"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group flex items-center justify-center gap-3 bg-[#FFC2D1] hover:bg-[#FFB3C6] text-black h-14 px-10 rounded-xl font-bold text-base tracking-wide shadow-lg shadow-[#FFC2D1]/25 whitespace-nowrap"
            >
              Call Now — +91 96553 00036
            </motion.a>
            
            {/* Secondary */}
            <motion.a
              href="/services"
              whileHover={{ scale: 1.02, y: -2, borderColor: "rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 h-14 px-8 rounded-xl font-semibold text-base whitespace-nowrap"
            >
              View Our Services
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity: textOpacity }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-1.5"
        >
          <motion.div
            className="w-1 h-2 bg-white/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
```

---

## 5. Trust Bar — Counter Roll-Up

### Animation Spec
Numbers count from `0` to their target value as the section enters the viewport.

```typescript
// components/TrustBar.tsx  (animated version)
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 1800; // ms
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const TRUST_ITEMS = [
  { icon: "🏆", stat: 20, suffix: "+", label: "Years Experience" },
  { icon: "😊", stat: 2400, suffix: "+", label: "Happy Patients" },
  { icon: "⭐", stat: 5, suffix: "-Star", label: "Rated Clinic" },
  { icon: "🚨", stat: 24, suffix: "/7", label: "Emergency Care" },
];

export function TrustBar() {
  return (
    <section className="bg-[#F2F2F2] py-5 px-4 sm:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-heading font-bold text-xl text-[#2D68FF]">
                  <AnimatedCounter target={item.stat} suffix={item.suffix} />
                </p>
                <p className="text-sm text-[#333333]">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 6. Services Section — Staggered Card Theatre

### Animation Spec
Cards enter in a staggered cascade. On hover: card lifts + icon scales + teal underline draws in.

```typescript
// Framer Motion variants for service card grid
const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Card hover animation
const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  hover: {
    y: -8,
    boxShadow: "0 16px 40px rgba(45,104,255,0.15)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

// Icon animation on card hover
const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
  },
};

// Teal underline draw
const underlineVariants = {
  rest: { width: "0%" },
  hover: { width: "100%", transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};
```

---

## 7. Why Choose Us — Horizontal Parallax Split

### Animation Spec
Image and text panels float in from opposite sides. Inside the section, the image has a subtle continuous vertical drift (breathing effect).

```typescript
// components/WhyChooseUs.tsx  (animation layer)
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function WhyChooseUsParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  // Image drifts up as section scrolls (independent parallax)
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  // Text drifts slightly (less movement)
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const benefitVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const BENEFITS = [
    { icon: "✓", text: "No unnecessary treatments — ever" },
    { icon: "✓", text: "Advanced low-radiation digital X-rays" },
    { icon: "✓", text: "Same-day emergency appointments" },
    { icon: "✓", text: "Anxiety-free environment, always" },
  ];

  return (
    <section ref={sectionRef} className="bg-[#FAFAFA] py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Image Panel — slides in from left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
          style={{ y: imageY }}
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
            <img
              src="/assets/hero-team.png"
              alt="Neel Dentistry Clinic Interior"
              className="w-full h-[500px] object-cover"
            />
          </div>
          {/* Floating accent badge */}
          <motion.div
            className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-6 py-4 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <p className="text-3xl font-bold text-[#2D68FF]">20+</p>
            <p className="text-sm text-[#333333]">Years of Care</p>
          </motion.div>
        </motion.div>

        {/* Text Panel — slides in from right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: textY }}
        >
          <motion.span className="block text-[#2D68FF] text-xs font-medium uppercase tracking-widest mb-3">
            Why Patients Choose Us
          </motion.span>
          <h3 className="text-[28px] font-semibold text-black mb-5">
            A Standard of Care That Never Compromises
          </h3>
          <p className="text-[#333333] text-base mb-8 leading-relaxed">
            We built Neel Dentistry around one principle — every decision, every recommendation, and every treatment must genuinely serve you.
          </p>
          
          {/* Animated benefit list */}
          <ul className="space-y-4">
            {BENEFITS.map((b, i) => (
              <motion.li
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={benefitVariants}
                className="flex items-center gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-[#2D68FF] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {b.icon}
                </span>
                <span className="text-[#333333] font-medium">{b.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## 8. Meet the Doctor — Cinematic Reveal

### Animation Spec
Doctor photo reveals with a **wipe effect** (clip-path expanding from top). Bio text types in line by line.

```typescript
// Clip-path wipe from top reveal
const photoVariants = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0.5 },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

// Credential pills stagger in
const credentialVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.34, 1.56, 0.64, 1] },
  }),
};
```

---

## 9. Testimonials — Magnetic Carousel

### Animation Spec
Cards have **magnetic drag** feel — user can drag/flick. Active card scales up, neighbours scale down slightly.

```typescript
// Testimonial carousel with Framer Motion drag
const carouselVariants = {
  center: { scale: 1, opacity: 1, zIndex: 10 },
  left:   { scale: 0.9, opacity: 0.6, zIndex: 5, x: "-10%" },
  right:  { scale: 0.9, opacity: 0.6, zIndex: 5, x: "10%" },
};

// Stars rain in with stagger
const starVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -30 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.3, delay: i * 0.07, ease: [0.34, 1.56, 0.64, 1] },
  }),
};
```

---

## 10. Smile Gallery — Morphing Grid Reveal

### Animation Spec
Gallery items use a **scale-from-center** reveal with subtle rotation straightening.

```typescript
const galleryItemVariants = {
  hidden: { opacity: 0, scale: 0.85, rotate: -2 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// Before/After hover swap
const beforeAfterHover = {
  rest: { filter: "brightness(1) saturate(1)" },
  hover: {
    filter: "brightness(1.05) saturate(1.1)",
    transition: { duration: 0.4 },
  },
};

// "After" label slides up from bottom on hover
const labelHoverVariants = {
  rest: { y: 20, opacity: 0 },
  hover: { y: 0, opacity: 1, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};
```

---

## 11. CTA Banner — Depth Pulse

### Animation Spec
The blue CTA banner has a **subtle ambient pulse** — a radial gradient breathes in/out, creating depth. Text fades in from below.

```typescript
// Ambient pulse — purely CSS-based for performance
// In component:
<motion.div
  className="absolute inset-0 bg-[#2D68FF] overflow-hidden"
>
  {/* Breathing light orb */}
  <motion.div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
    style={{
      background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
    }}
    animate={{
      scale: [1, 1.4, 1],
      opacity: [0.5, 0.8, 0.5],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.div>
```

---

## 12. Page Transition System

### Architecture
All route transitions use a **clip-path wipe** — a `#FFC2D1` pink overlay sweeps across the screen, then retracts, revealing the new page.

```typescript
// components/PageTransition.tsx
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* Pink wipe overlay */}
        <motion.div
          className="fixed inset-0 z-[9998] bg-[#FFC2D1] pointer-events-none origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 1, 0] }}
          transition={{
            duration: 0.8,
            times: [0, 0.4, 0.6, 1],
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

---

## 13. Navbar — Intelligent Scroll Behaviour

### Behaviour States

| State | Trigger | Behaviour |
|-------|---------|-----------|
| **Transparent** | At top of page (scrollY < 20px) | No background, white text/logo |
| **Solid** | scrollY > 20px | White bg, shadow, dark text |
| **Hidden** | Scrolling DOWN quickly (Δy > 8px/frame) | Slides up out of view |
| **Visible** | Scrolling UP at any speed | Slides back down instantly |

```typescript
// components/Navbar.tsx  (smart hide/show + bg transition)
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

export function SmartNavbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - lastY.current;
    
    setIsScrolled(latest > 20);
    
    if (delta > 8 && latest > 80) {
      // Fast downward scroll — hide nav
      setIsHidden(true);
    } else if (delta < -2) {
      // Any upward scroll — show nav
      setIsHidden(false);
    }
    
    lastY.current = latest;
  });

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[1000] transition-colors duration-300"
      animate={{
        y: isHidden ? -80 : 0,
        backgroundColor: isScrolled ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
        boxShadow: isScrolled
          ? "0 2px 20px rgba(0,0,0,0.08)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Nav content */}
    </motion.nav>
  );
}
```

---

## 14. Scroll Progress Indicator

A **thin pink line** at the top of the viewport shows reading progress.

```typescript
// components/ScrollProgress.tsx
import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#FFC2D1] origin-left z-[9999]"
      style={{ scaleX }}
    />
  );
}
```

---

## 15. Performance & Accessibility

### Performance Rules
```typescript
// 1. Always use will-change on scroll-driven elements
style={{ willChange: "transform" }}

// 2. Prefer transform + opacity ONLY — never animate:
//    width, height, top, left, margin, padding
//    (these trigger layout recalculation)

// 3. Use passive scroll listeners
// Motion/react handles this internally ✓

// 4. Debounce resize handlers
const handleResize = useDebouncedCallback(() => {
  // ...
}, 100);

// 5. Lazy-load below-fold images
<img loading="lazy" decoding="async" />

// 6. Use CSS containment on animated sections
style={{ contain: "layout style paint" }}
```

### Accessibility Checklist
- [ ] All animations respect `prefers-reduced-motion: reduce`
- [ ] Focus indicators never hidden by animated elements
- [ ] `aria-live` regions for carousel updates
- [ ] `role="img"` with `aria-label` on decorative animations
- [ ] No critical content ever hidden by overlay animations
- [ ] Keyboard navigation fully functional on all carousels

### Browser-Specific Notes

**Safari / WebKit:**
```css
/* Clip-path requires -webkit- prefix in older Safari */
-webkit-clip-path: inset(0% 0 0 0);
clip-path: inset(0% 0 0 0);

/* backdrop-filter needs prefix */
-webkit-backdrop-filter: blur(12px);
backdrop-filter: blur(12px);
```

**Chrome (Bing/Edge same engine):**
- Standard — no prefixes needed
- Enable `willChange: "transform"` for 60fps on complex scenes

**Performance target:**
- Intro animation: 60fps (GPU-accelerated CSS only)
- Scroll parallax: 60fps on desktop / 30fps acceptable on mobile
- Page transitions: < 400ms total

---

## 16. Responsive Adaptation Matrix

| Animation | Desktop (1200px+) | Laptop (1024px) | Tablet (768px) | Mobile (< 768px) |
|-----------|------------------|-----------------|----------------|------------------|
| Intro font size | 72px | 52px | 38px | 28px |
| Hero parallax depth | -240px | -160px | -100px | Disabled |
| Card stagger delay | 120ms | 100ms | 80ms | 60ms |
| Section scroll travel | 60px | 40px | 30px | Disabled |
| Text parallax | Active | Active | Reduced 50% | Disabled |
| Page wipe duration | 800ms | 700ms | 600ms | 500ms |
| Scroll indicator | Visible | Visible | Visible | Hidden |
| Counter animation | 1800ms | 1500ms | 1200ms | 1000ms |

### Mobile Parallax Disable
```typescript
// Disable parallax on mobile for performance + nausea prevention
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const parallaxY = useTransform(
  scrollYProgress,
  [0, 1],
  isMobile ? [0, 0] : [60, -60]  // No-op on mobile
);
```

---

## 17. Implementation Checklist

### Phase 1 — Foundation (Day 1)
- [ ] Install `motion` (Framer Motion v12) — already in package.json ✓
- [ ] Create `hooks/useMotionSafe.ts` — reduced-motion guard
- [ ] Create `components/ScrollReveal.tsx` — base scroll trigger
- [ ] Create `components/ScrollProgress.tsx` — reading progress bar
- [ ] Implement `SmartNavbar` with hide/show + bg transition

### Phase 2 — Intro Animation (Day 2)
- [ ] Upgrade `IntroAnimation.tsx` → `IntroAnimationV2.tsx`
- [ ] Add ambient blob layer (Phase 0)
- [ ] Implement line draw from center (Phase 1)
- [ ] Add pink micro-dot pulse (Phase 1 detail)
- [ ] Implement slice/split text reveal (Phase 2)
- [ ] Add extended underline (Phase 2 end)
- [ ] Add tagline drift-fade (Phase 3)
- [ ] Implement cross-fade exit (Phase 5)
- [ ] Test: Chrome, Safari, Edge/Bing, Firefox

### Phase 3 — Hero Parallax (Day 3)
- [ ] Implement 4-layer depth stack
- [ ] Add word-by-word H1 reveal
- [ ] Add scroll indicator (mouse + scroll text)
- [ ] Add CTA hover spring animations
- [ ] Test: Hero renders at 60fps on Chrome DevTools Performance tab

### Phase 4 — Section Animations (Days 4–5)
- [ ] Trust bar counter roll-up
- [ ] Services grid staggered reveal + card hover theatre
- [ ] Why Choose Us horizontal parallax split
- [ ] Doctor section clip-path wipe photo reveal
- [ ] Testimonials magnetic drag carousel
- [ ] Gallery morphing grid reveal
- [ ] CTA banner ambient pulse

### Phase 5 — Page Transitions (Day 6)
- [ ] Implement `PageTransition.tsx` with pink wipe
- [ ] Wrap `Layout.tsx` with transition wrapper
- [ ] Verify no scroll position issues on transition
- [ ] Test all routes

### Phase 6 — QA & Polish (Day 7)
- [ ] Audit all animations with `prefers-reduced-motion` enabled
- [ ] Chrome Lighthouse: performance score ≥ 90
- [ ] Safari 17 clip-path and backdrop-filter verification
- [ ] Edge (Bing engine) full parity test
- [ ] Mobile: disable heavy parallax, verify 60fps on low-end device
- [ ] Keyboard navigation audit
- [ ] Final frame-rate profiling: no jank under 16ms/frame

---

*NEEL DENTISTRY — Parallax Scroll Animation Blueprint v2.0*
*Award-Winning Motion Design · Production-Ready · All Breakpoints*
*Compatible: Chrome 120+ · Safari 17+ · Edge/Bing 120+ · Firefox 122+*
