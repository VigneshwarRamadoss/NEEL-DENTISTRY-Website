# NEEL DENTISTRY — Implementation Guide
## Complete Production Build Playbook · Step-by-Step
> React 18 + Vite 6 + Motion v12 + TailwindCSS 4
> From zero to deployed — every file, every command, every decision

---

## Table of Contents
1. [Prerequisites & Environment Setup](#1-prerequisites--environment-setup)
2. [Repository Setup & Dependencies](#2-repository-setup--dependencies)
3. [Phase 1 — Foundation Layer](#3-phase-1--foundation-layer)
4. [Phase 2 — Animation System](#4-phase-2--animation-system)
5. [Phase 3 — Hero & Intro Animation](#5-phase-3--hero--intro-animation)
6. [Phase 4 — Home Page Sections](#6-phase-4--home-page-sections)
7. [Phase 5 — Inner Pages](#7-phase-5--inner-pages)
8. [Phase 6 — Page Transitions](#8-phase-6--page-transitions)
9. [Phase 7 — Performance Optimization](#9-phase-7--performance-optimization)
10. [Phase 8 — Cross-Browser QA](#10-phase-8--cross-browser-qa)
11. [Phase 9 — Deployment](#11-phase-9--deployment)
12. [Post-Launch Monitoring](#12-post-launch-monitoring)
13. [Maintenance & Update Guide](#13-maintenance--update-guide)
14. [Troubleshooting Reference](#14-troubleshooting-reference)

---

## 1. Prerequisites & Environment Setup

### 1.1 Required Tools
```bash
# Verify versions before starting
node --version    # Must be >= 18.0.0
npm --version     # Must be >= 9.0.0
git --version     # Must be >= 2.40.0
```

### 1.2 Recommended VS Code Extensions
```
dbaeumer.vscode-eslint          — ESLint
esbenp.prettier-vscode          — Prettier
bradlc.vscode-tailwindcss       — Tailwind IntelliSense
formulahendry.auto-close-tag    — HTML auto-close
ms-vscode.vscode-typescript-next — Latest TS
```

### 1.3 VS Code Settings (`.vscode/settings.json`)
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

---

## 2. Repository Setup & Dependencies

### 2.1 Clone and Install
```bash
# Clone the repository
git clone https://github.com/VigneshwarRamadoss/NEEL-DENTISTRY-Website.git
cd NEEL-DENTISTRY-Website

# Install all dependencies (use npm — matches package-lock.json)
npm install

# Verify dev server starts
npm run dev
# → Opens at http://localhost:3000
```

### 2.2 Additional Dependencies to Install
```bash
# These are not in current package.json but needed for the enhanced build

# Type definitions (if not already present)
npm install --save-dev @types/react @types/react-dom typescript

# ESLint + Prettier
npm install --save-dev eslint eslint-plugin-react eslint-plugin-jsx-a11y \
  eslint-plugin-react-hooks @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser prettier eslint-config-prettier

# Web Vitals monitoring
npm install web-vitals

# Optional: GSAP for enhanced intro (if Framer not sufficient)
# npm install gsap@^3.12.0
```

### 2.3 Add tsconfig.json (Missing from Repo)
```bash
# Create TypeScript config at project root
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/app/components/*"],
      "@pages/*": ["./src/app/pages/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@lib/*": ["./src/lib/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
EOF

cat > tsconfig.node.json << 'EOF'
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
EOF
```

### 2.4 Update vite.config.ts
```typescript
// vite.config.ts — REPLACE existing content
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/app/components"),
      "@pages": path.resolve(__dirname, "./src/app/pages"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@lib": path.resolve(__dirname, "./src/lib"),
    },
  },
  
  build: {
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react":  ["react", "react-dom"],
          "vendor-router": ["react-router"],
          "vendor-motion": ["motion"],
          "vendor-ui":     ["lucide-react"],
        },
      },
    },
    chunkSizeWarningLimit: 400,
  },
  
  server: {
    port: 3000,
    open: true,
  },
});
```

---

## 3. Phase 1 — Foundation Layer

### 3.1 Create Directory Structure
```bash
# Create new directories
mkdir -p src/hooks
mkdir -p src/lib
mkdir -p src/app/components/ui

# Files to create in this phase:
# src/hooks/useMotionSafe.ts
# src/hooks/useWindowSize.ts
# src/hooks/useScrollProgress.ts
# src/lib/animations.ts
# src/lib/constants.ts
# src/lib/utils.ts
```

### 3.2 Create `src/hooks/useMotionSafe.ts`
```typescript
import { useReducedMotion } from "motion/react";

/**
 * Hook that respects prefers-reduced-motion.
 * Use this everywhere before animating.
 */
export function useMotionSafe() {
  const prefersReduced = useReducedMotion();
  
  return {
    shouldAnimate: !prefersReduced,
    duration: (ms: number) => (prefersReduced ? 0 : ms),
    safeTransition: <T extends object>(transition: T): T | { duration: 0 } =>
      prefersReduced ? { duration: 0 } : transition,
  };
}
```

### 3.3 Create `src/hooks/useWindowSize.ts`
```typescript
import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
  isMobile: boolean;    // < 768px
  isTablet: boolean;    // 768–1023px
  isDesktop: boolean;   // >= 1024px
}

export function useWindowSize(): WindowSize {
  const [size, setSize] = useState<WindowSize>(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    const h = typeof window !== "undefined" ? window.innerHeight : 800;
    return {
      width: w,
      height: h,
      isMobile: w < 768,
      isTablet: w >= 768 && w < 1024,
      isDesktop: w >= 1024,
    };
  });

  useEffect(() => {
    let rafId: number;
    
    const handleResize = () => {
      rafId = requestAnimationFrame(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        setSize({
          width: w,
          height: h,
          isMobile: w < 768,
          isTablet: w >= 768 && w < 1024,
          isDesktop: w >= 1024,
        });
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return size;
}
```

### 3.4 Create `src/lib/animations.ts`
```typescript
import type { Variants } from "motion/react";

// ─── EASING ────────────────────────────────────────────────────
export const EASE = {
  enter:     [0.16, 1, 0.3, 1]    as [number,number,number,number],
  exit:      [0.7, 0, 0.84, 0]    as [number,number,number,number],
  micro:     [0.34, 1.56, 0.64, 1] as [number,number,number,number],
  cinematic: [0.43, 0.13, 0.23, 0.96] as [number,number,number,number],
};

// ─── DURATIONS ─────────────────────────────────────────────────
export const DUR = {
  fast:     0.25,
  normal:   0.55,
  slow:     0.75,
  dramatic: 1.0,
};

// ─── SHARED VARIANTS ───────────────────────────────────────────

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: DUR.slow, ease: EASE.enter } },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DUR.normal, ease: EASE.enter } },
};

export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: DUR.dramatic, ease: EASE.enter } },
};

export const slideRight: Variants = {
  hidden:  { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: DUR.dramatic, ease: EASE.enter } },
};

export const scaleUp: Variants = {
  hidden:  { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: DUR.normal, ease: EASE.enter } },
};

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: DUR.slow, ease: EASE.enter } },
};
```

### 3.5 Create `src/lib/constants.ts`
```typescript
export const CLINIC = {
  name:        "Neel Dentistry",
  phone:       "+91 96553 00036",
  phoneRaw:    "+919655300036",
  whatsapp:    "https://wa.me/919655300036?text=Hello!%20I'd%20like%20to%20start%20my%20smile%20journey%20with%20Neel%20Dentistry.",
  city:        "Chennai",
  state:       "Tamil Nadu",
  tagline:     "Exceptional Dental Care, Delivered With Warmth.",
  subTagline:  "Sculpting Unique Smiles",
} as const;

export const SERVICES = [
  { id: "general-dentistry",     label: "General Dentistry",      icon: "shield" },
  { id: "cosmetic-dentistry",    label: "Cosmetic Dentistry",     icon: "sparkles" },
  { id: "orthodontics",          label: "Orthodontics",           icon: "alignCenter" },
  { id: "pediatric-dentistry",   label: "Pediatric Dentistry",    icon: "baby" },
  { id: "emergency-dental-care", label: "Emergency Dental Care",  icon: "alertCircle" },
] as const;

export const TRUST_STATS = [
  { value: 20,   suffix: "+",    label: "Years Experience" },
  { value: 2400, suffix: "+",    label: "Happy Patients" },
  { value: 5,    suffix: "-Star", label: "Rated Clinic" },
  { value: 24,   suffix: "/7",   label: "Emergency Care" },
] as const;

export const BREAKPOINTS = {
  sm:  480,
  md:  768,
  lg:  1024,
  xl:  1200,
  xxl: 1440,
} as const;
```

### 3.6 Update `src/styles/theme.css`
Add the missing CSS custom properties to the existing theme.css:

```css
/* ADD to :root in theme.css */
:root {
  /* Existing tokens kept as-is, add these: */
  
  /* Brand color system */
  --color-primary-blue:  #2D68FF;
  --color-dark-charcoal: #34394D;
  --color-teal-accent:   #BCD9DE;
  --color-pink-primary:  #FFC2D1;
  --color-pink-hover:    #FFB3C6;
  --color-soft-gray:     #F2F2F2;
  --color-near-white:    #FAFAFA;
  --color-star-yellow:   #FFF300;
  --color-silver-line:   #CED4DA;
  --color-near-black:    #1A1A1A;
  --color-body-text:     #333333;
  
  /* Shadows */
  --shadow-1: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-2: 0 4px 12px rgba(0,0,0,0.12);
  --shadow-3: 0 8px 24px rgba(0,0,0,0.16);
  --shadow-blue: 0 8px 32px rgba(45,104,255,0.20);
  --shadow-pink: 0 8px 32px rgba(255,194,209,0.30);
  
  /* Spacing */
  --section-padding-desktop: 64px 40px;
  --section-padding-tablet:  48px 24px;
  --section-padding-mobile:  40px 16px;
  --max-width: 1200px;
  
  /* Radii */
  --radius-card: 12px;
  --radius-button: 12px;
  --radius-pill: 9999px;
}
```

### 3.7 Update `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>Neel Dentistry | Chennai's Trusted Dental Clinic</title>
    <meta name="title" content="Neel Dentistry | Chennai's Trusted Dental Clinic" />
    <meta name="description" content="Exceptional dental care delivered with warmth. General, cosmetic, orthodontic & pediatric dentistry in Chennai. Call +91 96553 00036." />
    
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://neeldentistry.com/" />
    <meta property="og:title" content="Neel Dentistry | Chennai's Trusted Dental Clinic" />
    <meta property="og:description" content="Exceptional dental care delivered with warmth. 20+ years experience, 2400+ happy patients." />
    <meta property="og:image" content="/og-image.jpg" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    
    <!-- Fonts — preconnect first, then load -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
    
    <!-- Preload hero image -->
    <link rel="preload" href="/assets/hero-team.png" as="image" />
    
    <!-- Theme color for mobile browser chrome -->
    <meta name="theme-color" content="#FFFFFF" />
  </head>
  <body>
    <!-- Skip to content link for accessibility -->
    <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg">
      Skip to main content
    </a>
    
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 4. Phase 2 — Animation System

### 4.1 Create `src/app/components/ScrollReveal.tsx`
```typescript
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useMotionSafe } from "@hooks/useMotionSafe";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  threshold?: number; // % of element visible before triggering (0–1)
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.65,
  once = true,
  className,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const { shouldAnimate } = useMotionSafe();
  
  const isInView = useInView(ref, {
    once,
    margin: `-${Math.round(threshold * 100)}% 0px -${Math.round(threshold * 100)}% 0px`,
  });

  const offsets = {
    up:    { y: distance },
    down:  { y: -distance },
    left:  { x: distance },
    right: { x: -distance },
    none:  {},
  };

  const hiddenState = shouldAnimate ? { opacity: 0, ...offsets[direction] } : {};
  const visibleState = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={hiddenState}
      animate={isInView ? visibleState : hiddenState}
      transition={{
        duration: shouldAnimate ? duration : 0,
        delay: shouldAnimate ? delay : 0,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### 4.2 Create `src/app/components/ScrollProgress.tsx`
```typescript
import { motion, useScroll, useSpring } from "motion/react";
import { useMotionSafe } from "@hooks/useMotionSafe";

export function ScrollProgress() {
  const { shouldAnimate } = useMotionSafe();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!shouldAnimate) return null;

  return (
    <motion.div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={0}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#FFC2D1] origin-left z-[9999] pointer-events-none"
      style={{ scaleX }}
    />
  );
}
```

### 4.3 Create `src/app/components/PageTransition.tsx`
```typescript
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router";
import { useMotionSafe } from "@hooks/useMotionSafe";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const { shouldAnimate } = useMotionSafe();

  if (!shouldAnimate) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={location.pathname}
        id="main-content"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{
          duration: 0.35,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        {/* Pink wipe overlay */}
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[9998] pointer-events-none origin-left"
          style={{ backgroundColor: "#FFC2D1" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 1, 0] }}
          transition={{
            duration: 0.7,
            times: [0, 0.45, 0.55, 1],
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        />
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
```

---

## 5. Phase 3 — Hero & Intro Animation

### 5.1 Update `src/app/components/Layout.tsx`
```typescript
import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { IntroAnimation } from "./IntroAnimation";
import { PageTransition } from "./PageTransition";
import { ScrollProgress } from "./ScrollProgress";
import { WhatsAppFloating } from "./WhatsAppFloating";

function PageSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#FFC2D1] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <ScrollProgress />
      <IntroAnimation />
      <Navbar />
      <PageTransition>
        <Suspense fallback={<PageSkeleton />}>
          <Outlet />
        </Suspense>
      </PageTransition>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
```

### 5.2 Update `src/app/components/Hero.tsx`
Replace with the Parallax Hero from PARALLAX-SCROLL-ANIMATION.md Section 4.

**Key implementation steps:**
1. Import `useScroll, useTransform, useSpring` from `motion/react`
2. Create `containerRef` with `useRef`
3. Apply `useScroll({ container: containerRef })` — but actually use page-level scroll
4. Wire background image to `bgYSmooth` spring
5. Wire text container to `textY` transform
6. Add word-by-word H1 reveal with staggered variants
7. Add scroll indicator animation

---

## 6. Phase 4 — Home Page Sections

### 6.1 Section Implementation Order
Implement sections in this exact order (dependencies matter):

```
1. TrustBar        → Simplest, no deps
2. ServicesOverview → Card grid + hover
3. WhyChooseUs     → Parallax split
4. MeetDoctor      → Clip-path reveal
5. Testimonials    → Carousel
6. SmileGallery    → Grid reveal
7. CtaBanner       → Pulse animation
```

### 6.2 TrustBar — Counter Animation Implementation
```typescript
// Replace existing TrustBar.tsx completely
// Key additions:
// 1. useInView hook to trigger counter
// 2. useEffect interval for counting
// 3. requestAnimationFrame for smooth counting

// Animation trigger: element 20% in view
const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

// Counter increment using easeOut timing
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}
```

### 6.3 Services Cards — Hover Theatre
Add to each service card:
```typescript
<motion.div
  className="service-card ..."
  initial="rest"
  whileHover="hover"
  animate="rest"
  variants={{
    rest:  { y: 0, boxShadow: "var(--shadow-1)" },
    hover: { y: -8, boxShadow: "var(--shadow-blue)" },
  }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  <motion.div
    className="icon-container ..."
    variants={{
      rest:  { scale: 1, rotate: 0 },
      hover: { scale: 1.15 },
    }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
  >
    {/* icon */}
  </motion.div>
  {/* card content */}
  
  {/* Hover underline */}
  <motion.div
    className="h-0.5 bg-[#2D68FF] mt-4"
    variants={{
      rest:  { width: "0%" },
      hover: { width: "100%" },
    }}
    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
  />
</motion.div>
```

---

## 7. Phase 5 — Inner Pages

### 7.1 About Page
Add these scroll-reveal triggers:
```typescript
// Our Story — slide from sides
<ScrollReveal direction="right"> {/* image */} </ScrollReveal>
<ScrollReveal direction="left" delay={0.15}> {/* text */} </ScrollReveal>

// Mission cards — stagger up
<motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
  {values.map((v, i) => (
    <motion.div key={i} variants={staggerItem}>{/* card */}</motion.div>
  ))}
</motion.div>

// Team cards — scale-up stagger
```

### 7.2 Service Detail Page
Implement the "What to Expect" step animation:
```typescript
// Each numbered step animates in sequence
steps.map((step, i) => (
  <ScrollReveal key={i} delay={i * 0.15} direction="up">
    <motion.div
      whileInView={{ scale: [0.9, 1.05, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.15 }}
    >
      {/* Step number circle */}
    </motion.div>
  </ScrollReveal>
))
```

### 7.3 FAQ Accordion
```typescript
// Use Framer Motion for height animation
<motion.div
  initial={false}
  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
  style={{ overflow: "hidden" }}
>
  {answer}
</motion.div>

// Chevron rotation
<motion.div
  animate={{ rotate: isOpen ? 180 : 0 }}
  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
>
  <ChevronDown />
</motion.div>
```

### 7.4 Smile Gallery — Filter Animation
```typescript
// When filter changes, animate cards out then in
const [filter, setFilter] = useState("all");
const [filteredItems, setFilteredItems] = useState(allItems);

const handleFilter = async (newFilter: string) => {
  // Animate out
  await animateControls.start({ opacity: 0, scale: 0.95 });
  setFilteredItems(allItems.filter(item => 
    newFilter === "all" || item.category === newFilter
  ));
  // Animate in
  await animateControls.start({ opacity: 1, scale: 1 });
};
```

---

## 8. Phase 6 — Page Transitions

### 8.1 Wrap Routes with Lazy Loading
```typescript
// routes.tsx — update to use lazy loading
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ServicesOverview = lazy(() => import("./pages/ServicesOverview"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const PatientInfo = lazy(() => import("./pages/PatientInfo"));
const Insurance = lazy(() => import("./pages/Insurance"));
const FAQs = lazy(() => import("./pages/FAQs"));
const SmileGallery = lazy(() => import("./pages/SmileGallery"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const Contact = lazy(() => import("./pages/Contact"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      // ... all routes
    ],
  },
]);
```

---

## 9. Phase 7 — Performance Optimization

### 9.1 Image Optimization Script
```bash
# Install sharp for image processing
npm install --save-dev sharp

# Create scripts/optimize-images.mjs
cat > scripts/optimize-images.mjs << 'EOF'
import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';

const images = await glob('public/**/*.{png,jpg,jpeg}');

for (const imagePath of images) {
  const outputPath = imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  await sharp(imagePath)
    .webp({ quality: 85 })
    .toFile(outputPath);
  console.log(`✓ ${path.basename(outputPath)}`);
}
EOF

node scripts/optimize-images.mjs
```

### 9.2 Bundle Analysis
```bash
# Install bundle analyzer
npm install --save-dev rollup-plugin-visualizer

# Add to vite.config.ts plugins:
import { visualizer } from 'rollup-plugin-visualizer';
plugins: [
  react(),
  tailwindcss(),
  visualizer({ open: true, filename: 'dist/bundle-stats.html' })
]

# Build and analyze
npm run build
```

### 9.3 Preload Critical Resources
```typescript
// In Layout.tsx or index.html:
// Preload hero image, primary font weights
```

### 9.4 Web Vitals Monitoring
```typescript
// src/main.tsx — Add Web Vitals reporting
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

function reportWebVitals(metric: any) {
  // Log to console in dev, send to analytics in production
  if (import.meta.env.DEV) {
    console.log(`[Vitals] ${metric.name}: ${Math.round(metric.value)}ms`);
  }
}

onCLS(reportWebVitals);
onFID(reportWebVitals);
onFCP(reportWebVitals);
onLCP(reportWebVitals);
onTTFB(reportWebVitals);
```

---

## 10. Phase 8 — Cross-Browser QA

### 10.1 Safari-Specific Fixes
```css
/* Add to src/styles/index.css */

/* Safari clip-path fix */
* {
  -webkit-clip-path: inherit;
}

/* Safari backdrop-filter */
.glass-element {
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  backdrop-filter: blur(12px) saturate(180%);
}

/* Safari smooth scroll */
html {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

/* Prevent Safari zoom on inputs */
input[type="text"],
input[type="tel"],
select,
textarea {
  font-size: 16px;
}

/* Safari animation performance */
.animated-element {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
```

### 10.2 Edge/Chrome Parity
No additional fixes needed — Edge is Chromium-based and has full parity with Chrome.

### 10.3 Manual Test Script
```
For each browser (Chrome, Safari, Edge):

HOME PAGE:
□ Intro animation plays smoothly
□ Hero parallax scrolls at 60fps (DevTools > Performance)
□ Trust bar counters animate
□ Service cards hover correctly
□ Testimonial carousel auto-plays
□ CTA banner pulse visible

NAVIGATION:
□ Desktop: dropdown opens on hover
□ Mobile: hamburger opens drawer
□ Logo links to home
□ All nav links route correctly
□ Navbar hides on scroll down
□ Navbar shows on scroll up

ANIMATIONS:
□ prefers-reduced-motion: all animations disabled
□ Page transitions don't cause scroll jump
□ Gallery filter animates correctly
□ FAQ accordion smooth

RESPONSIVE:
□ iPhone SE (375px): no horizontal overflow
□ iPad (768px): 2-col layouts look balanced
□ Laptop (1024px): desktop nav active
□ 1440px: max-width container respected
```

### 10.4 Lighthouse Audit
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit (against built + served site)
npm run build && npx serve dist &
lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html

# Open report
open lighthouse-report.html
```

**Target scores:**
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

---

## 11. Phase 9 — Deployment

### 11.1 Build for Production
```bash
# Clean previous build
rm -rf dist/

# Production build
npm run build

# Preview build locally
npm run preview
# → Opens at http://localhost:4173

# Verify:
# - All routes work
# - No console errors
# - Images load
# - Animations run
```

### 11.2 Deploy to Netlify (Recommended)

**Option A — Netlify CLI:**
```bash
npm install -g netlify-cli
netlify init
netlify deploy --prod --dir=dist
```

**Option B — Netlify UI:**
1. Push to GitHub (or pull from existing repo)
2. Go to app.netlify.com > New site from Git
3. Connect GitHub repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy

**netlify.toml (create at project root):**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
```

### 11.3 Deploy to Vercel (Alternative)
```bash
npm install -g vercel
vercel --prod
```

**vercel.json:**
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### 11.4 Custom Domain Setup
```
1. In hosting dashboard: Add custom domain (neeldentistry.com)
2. At domain registrar: Point nameservers to Netlify/Vercel
   OR add CNAME: www → [yoursite].netlify.app
3. Wait for DNS propagation (up to 48h, usually < 1h)
4. SSL auto-provisioned by hosting platform
5. Verify: https://neeldentistry.com loads without errors
```

---

## 12. Post-Launch Monitoring

### 12.1 Analytics Setup
```html
<!-- Add Google Analytics 4 to index.html <head> -->
<!-- Replace G-XXXXXXXXXX with your GA4 Measurement ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    page_path: window.location.pathname,
    // Track Core Web Vitals
    transport_type: 'beacon'
  });
</script>
```

### 12.2 Track Key Events
```typescript
// Track phone click
function trackPhoneClick() {
  gtag('event', 'click', {
    event_category: 'Contact',
    event_label: 'Phone CTA',
  });
}

// Track WhatsApp click
function trackWhatsAppClick() {
  gtag('event', 'click', {
    event_category: 'Contact',
    event_label: 'WhatsApp FAB',
  });
}
```

### 12.3 Google Search Console
1. Go to search.google.com/search-console
2. Add property: neeldentistry.com
3. Verify via DNS TXT record (hosting provides value)
4. Submit sitemap: `https://neeldentistry.com/sitemap.xml`
5. Monitor Core Web Vitals report weekly

---

## 13. Maintenance & Update Guide

### 13.1 Content Updates

**Update testimonials:**
Edit the testimonials data in `src/app/components/Testimonials.tsx` or create a `src/data/testimonials.ts` file and import it.

**Add new service:**
1. Add to `SERVICES` in `src/lib/constants.ts`
2. Add case to `ServiceDetail.tsx` switch/data object
3. Add route if needed (already dynamic via `:serviceId`)

**Update phone number:**
Change `phoneRaw` and `phone` in `src/lib/constants.ts` — it's used everywhere.

### 13.2 Dependency Updates
```bash
# Check outdated packages
npm outdated

# Update patch/minor (safe)
npm update

# Update major versions (review changelog first)
npm install motion@latest
npm install react-router@latest
```

### 13.3 Animation Troubleshooting Quick Reference
| Symptom | Cause | Fix |
|---------|-------|-----|
| Animations not playing | prefers-reduced-motion | Expected behaviour |
| Jerky parallax | Layout recalc | Use transform only |
| Intro plays twice | State not cleared | Check `useEffect` deps |
| Clip-path broken in Safari | Missing prefix | Add `-webkit-clip-path` |
| Page transition causes flicker | AnimatePresence mode | Use `mode="wait"` |
| Cards don't stagger | Parent not using `staggerChildren` | Check variant inheritance |

---

## 14. Troubleshooting Reference

### Common Build Errors

**Error: Cannot find module '@hooks/useMotionSafe'**
```bash
# Verify vite.config.ts alias exists
# Verify tsconfig.json paths match
# Restart Vite dev server: Ctrl+C, then npm run dev
```

**Error: motion is not defined**
```bash
# Verify import:
import { motion } from "motion/react";
# NOT: import { motion } from "framer-motion";
```

**Error: useScroll must be used within a scroll container**
```bash
# Solution: Don't pass ref to useScroll for page-level scroll
const { scrollY } = useScroll(); // No ref = window scroll ✓
```

**Error: Hydration mismatch (if using SSR in future)**
```bash
# Add suppressHydrationWarning to elements with dynamic values
# Or use useEffect to set dynamic values client-side
```

### Performance Debugging
```bash
# Check bundle size breakdown
npm run build -- --report

# Profile animations in Chrome:
# 1. Open DevTools > Performance
# 2. Click Record
# 3. Scroll through page
# 4. Stop recording
# 5. Check for frames > 16ms (red in timeline)
# 6. Look for Layout/Recalc — should be 0 during scroll
```

### Safari Debugging
```bash
# Enable Safari Web Inspector:
# Safari > Preferences > Advanced > Show Develop menu
# Develop > Connect iOS device (for mobile testing)
# Or use Simulator: Xcode > Open Developer Tool > Simulator
```

---

## Summary: Implementation Timeline

| Week | Phase | Deliverable |
|------|-------|-------------|
| **Week 1, Day 1–2** | Foundation | Project setup, hooks, constants, theme |
| **Week 1, Day 3** | Animation System | ScrollReveal, ScrollProgress, PageTransition |
| **Week 1, Day 4–5** | Hero + Intro | Parallax hero, enhanced intro animation |
| **Week 2, Day 1–2** | Home Sections | TrustBar, Services, WhyChooseUs, Doctor |
| **Week 2, Day 3** | Home Cont. | Testimonials, Gallery, CTA, Footer |
| **Week 2, Day 4–5** | Inner Pages | About, Services, Patient Info, Gallery, Blog, Contact |
| **Week 3, Day 1** | Page Transitions | Route wipe animation, lazy loading |
| **Week 3, Day 2** | Performance | Image optimization, bundle splitting, Lighthouse |
| **Week 3, Day 3–4** | Cross-Browser QA | Chrome, Safari, Edge — all breakpoints |
| **Week 3, Day 5** | Deployment | Build, deploy, custom domain, DNS |

**Total estimate: 3 weeks to production-ready launch**

---

*NEEL DENTISTRY — Implementation Guide v2.0*
*Step-by-step production build playbook*
*Companion documents: TRD.md · Webflow.md · PARALLAX-SCROLL-ANIMATION.md*
