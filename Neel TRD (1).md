# NEEL DENTISTRY — Technical Requirements Document (TRD)
## Production-Grade Web Application · Version 2.0
> Stack: React 18.3 · Vite 6 · TailwindCSS 4 · Motion/React v12 · React Router 7
> Author: Senior Engineering Lead | Last Updated: 2026

---

## Table of Contents
1. [System Overview](#1-system-overview)
2. [Technology Stack (Full Specification)](#2-technology-stack-full-specification)
3. [Architecture Diagram](#3-architecture-diagram)
4. [Project Structure](#4-project-structure)
5. [Environment & Build Configuration](#5-environment--build-configuration)
6. [Routing & Navigation](#6-routing--navigation)
7. [State Management](#7-state-management)
8. [Component Architecture](#8-component-architecture)
9. [Animation Technical Specification](#9-animation-technical-specification)
10. [Performance Requirements](#10-performance-requirements)
11. [Responsive Engineering Spec](#11-responsive-engineering-spec)
12. [Browser Compatibility Matrix](#12-browser-compatibility-matrix)
13. [Accessibility Requirements (WCAG 2.1 AA)](#13-accessibility-requirements-wcag-21-aa)
14. [SEO & Meta Requirements](#14-seo--meta-requirements)
15. [Asset Management](#15-asset-management)
16. [Security Requirements](#16-security-requirements)
17. [Testing Requirements](#17-testing-requirements)
18. [Deployment Requirements](#18-deployment-requirements)
19. [Error Handling](#19-error-handling)
20. [Dependencies & Version Locks](#20-dependencies--version-locks)

---

## 1. System Overview

### 1.1 Product Summary
**NEEL DENTISTRY** is a production-grade, single-page-application (SPA) dental clinic website built on a client-side React stack with Vite as bundler. The application has no backend server, no database, and no form submission infrastructure — it is a **static marketing and information website** that connects visitors to the clinic via phone and WhatsApp.

### 1.2 Functional Scope
| Included | Excluded |
|----------|----------|
| 12 fully routed pages | Appointment booking form |
| GSAP / Framer Motion animations | Patient portal |
| WhatsApp & tel: link integration | Email server / SMTP |
| Before/After Smile Gallery | CMS / Admin dashboard |
| Blog Index with category filtering | Real-time availability |
| Responsive layout (4 breakpoints) | Payment gateway |

### 1.3 Non-Functional Requirements Summary
| Requirement | Target |
|-------------|--------|
| First Contentful Paint (FCP) | < 1.5s (3G connection) |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| First Input Delay (FID) | < 100ms |
| Lighthouse Performance Score | ≥ 90 |
| Lighthouse Accessibility Score | ≥ 95 |
| Animation frame rate | 60fps sustained desktop, 30fps mobile |
| Bundle size (JS, gzipped) | < 250KB |
| Time to Interactive (TTI) | < 3.5s |

---

## 2. Technology Stack (Full Specification)

### 2.1 Core Runtime
```
React              18.3.1      — UI rendering
React DOM          18.3.1      — DOM mounting
TypeScript         5.x         — Type safety
```

### 2.2 Build Tooling
```
Vite               6.3.5       — Bundler, HMR, preview server
@vitejs/plugin-react 4.7.0     — React Fast Refresh
@tailwindcss/vite  4.1.12      — Tailwind CSS integration
PostCSS            8.x         — CSS transforms
```

### 2.3 Routing
```
react-router       7.13.0      — Client-side routing (Data Router API)
```

### 2.4 Animation
```
motion             12.23.24    — Framer Motion (renamed package)
```
> **Note:** GSAP 3 may be added for intro animation precision (optional peer dep). If added: `gsap@^3.12.0` via npm.

### 2.5 UI Component Libraries
```
@radix-ui/*        Latest      — Accessible headless components
@mui/material      7.3.5       — Supplementary UI components
lucide-react       0.487.0     — Icon library
tailwind-merge     3.2.0       — Class composition
clsx               2.1.1       — Conditional classnames
```

### 2.6 Carousel / Gallery
```
embla-carousel-react 8.6.0     — Touch-enabled carousel (testimonials)
react-responsive-masonry 2.7.1 — Gallery masonry grid
```

### 2.7 Styling
```
TailwindCSS        4.1.12      — Utility-first CSS
tw-animate-css     1.3.8       — CSS animation utilities
Custom CSS         theme.css   — Design token variables
```

### 2.8 Fonts (Loaded via Google Fonts CDN)
```
Montserrat     — Heading display font (weights: 400, 500, 600, 700)
Open Sans      — Body copy (weights: 400, 500)
Roboto         — Secondary heading fallback
```

---

## 3. Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    NEEL DENTISTRY SPA                        │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                 React Application                    │   │
│  │                                                     │   │
│  │  ┌───────────┐  ┌──────────────┐  ┌─────────────┐  │   │
│  │  │  Router   │  │   Layout     │  │ PageTrans.  │  │   │
│  │  │ (RR v7)   │→ │  (Shell)     │→ │ (Framer)    │  │   │
│  │  └───────────┘  └──────────────┘  └─────────────┘  │   │
│  │                        │                            │   │
│  │         ┌──────────────┼──────────────┐            │   │
│  │         ▼              ▼              ▼            │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────┐    │   │
│  │  │  Pages   │  │ Shared   │  │  Animation   │    │   │
│  │  │ (12 rts) │  │ Comps    │  │  System      │    │   │
│  │  └──────────┘  └──────────┘  └──────────────┘    │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌──────────────┐  ┌────────────────┐  ┌─────────────┐    │
│  │  Static CDN  │  │  External APIs │  │   Vite Dev  │    │
│  │  (Images)    │  │  (WhatsApp,    │  │   Server    │    │
│  │              │  │   Google Maps, │  │   (Local)   │    │
│  │              │  │   tel: links)  │  │             │    │
│  └──────────────┘  └────────────────┘  └─────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Project Structure

```
NEEL-DENTISTRY-Website/
├── public/
│   ├── assets/
│   │   └── hero-team.png
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.tsx                    — App entry, React.StrictMode
│   ├── app/
│   │   ├── App.tsx                 — RouterProvider mount
│   │   ├── routes.tsx              — createBrowserRouter config
│   │   ├── components/
│   │   │   ├── Layout.tsx          — Shell: Navbar + PageTransition + Footer
│   │   │   ├── Navbar.tsx          — Smart hide/show navbar
│   │   │   ├── Hero.tsx            — Home hero section
│   │   │   ├── IntroAnimation.tsx  — Opening cinematic animation
│   │   │   ├── TrustBar.tsx        — Counter roll-up strip
│   │   │   ├── ServicesOverview.tsx — Card grid
│   │   │   ├── WhyChooseUs.tsx     — Split layout parallax
│   │   │   ├── MeetDoctor.tsx      — Doctor profile section
│   │   │   ├── Testimonials.tsx    — Carousel
│   │   │   ├── SmileGallery.tsx    — Gallery teaser
│   │   │   ├── CtaBanner.tsx       — Full-width CTA
│   │   │   ├── Footer.tsx          — Site footer
│   │   │   ├── ScrollReveal.tsx    — NEW: Base scroll animation
│   │   │   ├── ScrollProgress.tsx  — NEW: Progress bar
│   │   │   ├── PageTransition.tsx  — NEW: Route change wipe
│   │   │   ├── WhatsAppFloating.tsx — WhatsApp FAB
│   │   │   ├── WhatsAppIcon.tsx    — Icon component
│   │   │   └── ui/                 — Radix/shadcn components
│   │   └── pages/
│   │       ├── Home.tsx
│   │       ├── About.tsx
│   │       ├── ServicesOverview.tsx
│   │       ├── ServiceDetail.tsx
│   │       ├── PatientInfo.tsx
│   │       ├── Insurance.tsx
│   │       ├── FAQs.tsx
│   │       ├── SmileGallery.tsx
│   │       ├── BlogIndex.tsx
│   │       └── Contact.tsx
│   ├── hooks/
│   │   ├── useMotionSafe.ts        — NEW: prefers-reduced-motion guard
│   │   ├── useScrollProgress.ts   — NEW: scroll position tracking
│   │   └── useWindowSize.ts       — NEW: responsive breakpoint hook
│   ├── lib/
│   │   ├── animations.ts           — NEW: Shared animation variants
│   │   ├── constants.ts            — NEW: Site-wide constants
│   │   └── utils.ts               — Existing utility functions
│   ├── styles/
│   │   ├── theme.css              — Design tokens
│   │   ├── fonts.css              — Font-face declarations
│   │   ├── index.css              — Global resets
│   │   └── tailwind.css           — Tailwind directives
│   └── imports/                   — Documentation & assets
├── index.html
├── vite.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json                  — ADD: TypeScript config
```

---

## 5. Environment & Build Configuration

### 5.1 Vite Configuration (Enhanced)
```typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  build: {
    target: "es2020",
    outDir: "dist",
    
    rollupOptions: {
      output: {
        // Manual chunking for optimal code splitting
        manualChunks: {
          "vendor-react":  ["react", "react-dom"],
          "vendor-router": ["react-router"],
          "vendor-motion": ["motion"],
          "vendor-ui":     ["@radix-ui/react-accordion", "@radix-ui/react-dialog"],
          "vendor-icons":  ["lucide-react"],
        },
      },
    },
    
    // Asset size warnings
    chunkSizeWarningLimit: 300, // KB
  },
  
  // Image optimization
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.webp", "**/*.avif"],
  
  // Alias for cleaner imports
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/app/components",
      "@pages": "/src/app/pages",
      "@hooks": "/src/hooks",
      "@lib": "/src/lib",
    },
  },
  
  // Dev server
  server: {
    port: 3000,
    open: true,
  },
});
```

### 5.2 TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/app/components/*"],
      "@pages/*": ["./src/app/pages/*"],
      "@hooks/*": ["./src/hooks/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## 6. Routing & Navigation

### 6.1 Route Map
```typescript
// Complete route tree
const routes = [
  {
    path: "/",
    Component: Layout,           // Shell with Navbar, Transition, Footer
    children: [
      { index: true, Component: Home },               // /
      { path: "about", Component: About },             // /about
      {
        path: "services",
        children: [
          { index: true, Component: ServicesOverview }, // /services
          { path: ":serviceId", Component: ServiceDetail }, // /services/general-dentistry
        ],
      },
      {
        path: "patient-info",
        children: [
          { index: true, Component: PatientInfo },     // /patient-info
          { path: "insurance", Component: Insurance }, // /patient-info/insurance
          { path: "faqs", Component: FAQs },           // /patient-info/faqs
        ],
      },
      { path: "smile-gallery", Component: SmileGallery }, // /smile-gallery
      { path: "blog", Component: BlogIndex },          // /blog
      { path: "contact", Component: Contact },         // /contact
      { path: "*", Component: NotFound },              // /404 — ADD THIS
    ],
  },
];
```

### 6.2 Service IDs (URL Slugs)
```
/services/general-dentistry
/services/cosmetic-dentistry
/services/orthodontics
/services/pediatric-dentistry
/services/emergency-dental-care
```

### 6.3 Scroll Restoration
```typescript
// Restore scroll to top on every route change
// In Layout.tsx:
import { useEffect } from "react";
import { useLocation } from "react-router";

export function Layout() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  
  // ... render
}
```

---

## 7. State Management

**No external state library required** — this is a static marketing site. State is managed with:

| State Type | Solution | Location |
|------------|----------|----------|
| UI state (modals, menu open) | `useState` | Local component |
| Animation state | Framer Motion internal | Motion components |
| Scroll position | `useScroll` (Motion) | Navbar, parallax hooks |
| Window size | Custom `useWindowSize` hook | Global |
| Reduced motion | `useReducedMotion` (Motion) | Global hook |
| Active gallery filter | `useState` | Gallery page |
| Active FAQ tab | `useState` | FAQs page |
| Carousel index | `useState` + Embla | Testimonials |

---

## 8. Component Architecture

### 8.1 Component Classification

| Type | Description | Examples |
|------|-------------|---------|
| **Layout** | Shell-level, route-aware | Layout, Navbar, Footer, PageTransition |
| **Section** | Full-width page sections | Hero, TrustBar, WhyChooseUs, CtaBanner |
| **Motion** | Purely animation wrappers | ScrollReveal, StaggerContainer, ScrollProgress |
| **Interactive** | User-driven state | FAQAccordion, TestimonialCarousel, GalleryFilter |
| **UI Primitive** | Radix headless + styled | Button, Card, Badge, Dialog, Tabs |
| **Page** | Route-level composition | Home, About, ServiceDetail, Contact |

### 8.2 Component Contract Rules
1. **Props are typed** — no untyped component props in production
2. **Single responsibility** — one section per component file
3. **No prop drilling beyond 2 levels** — use composition or context
4. **All images have alt text** — enforced via TypeScript interface
5. **All interactive elements have aria-label** — via eslint-plugin-jsx-a11y

### 8.3 Key Component Interfaces
```typescript
// Shared types
interface SectionProps {
  className?: string;
  id?: string;
}

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

interface Testimonial {
  id: string;
  quote: string;
  patientName: string;
  treatment: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoSrc: string;
  photoAlt: string;
}
```

---

## 9. Animation Technical Specification

*(Full specification is in `PARALLAX-SCROLL-ANIMATION.md` — this section covers the engineering constraints.)*

### 9.1 Animation Allowed Properties
**Safe (GPU-composited, no layout recalc):**
- `transform: translateX/Y/Z, scale, rotate`
- `opacity`
- `filter: blur, brightness` (use sparingly)
- `clip-path` (triggers paint, acceptable for entrances)

**Forbidden (trigger layout reflow):**
- `width`, `height`, `top`, `left`, `bottom`, `right`
- `margin`, `padding`
- `border-width`

### 9.2 Frame Budget
```
60fps target = 16.6ms per frame

Budget breakdown:
  JavaScript execution:   4ms max
  Layout calculation:     0ms (forbidden)
  Paint:                  2ms max
  Composite:              2ms
  ─────────────────────
  Total safe budget:      8ms max
```

### 9.3 GPU Layer Promotion
```css
/* Promote elements to GPU layer BEFORE animation begins */
.will-animate {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force GPU layer */
}

/* CRITICAL: Remove will-change AFTER animation completes */
/* Framer Motion handles this automatically via style prop */
```

---

## 10. Performance Requirements

### 10.1 Core Web Vitals Targets
| Metric | Target | Measurement |
|--------|--------|-------------|
| FCP | < 1.5s | Chrome DevTools |
| LCP | < 2.5s | Lighthouse |
| CLS | < 0.1 | Lighthouse |
| FID/INP | < 100ms | Web Vitals extension |
| TTFB | < 500ms | Network tab |

### 10.2 Image Optimization Requirements
```html
<!-- Hero image — must be preloaded -->
<link rel="preload" href="/assets/hero-team.png" as="image" />

<!-- All below-fold images — lazy loaded -->
<img loading="lazy" decoding="async" width="800" height="600" />

<!-- Use srcset for responsive images -->
<img
  srcset="image-400.webp 400w, image-800.webp 800w, image-1200.webp 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
  src="image-800.webp"
  alt="..."
/>
```

### 10.3 Font Loading Strategy
```html
<!-- In index.html <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="preload"
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500&display=swap"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
/>
<noscript>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500&display=swap" rel="stylesheet" />
</noscript>
```

### 10.4 Code Splitting Strategy
- Each **page** is lazily loaded via `React.lazy` + `Suspense`
- **Animation library** (motion) is split into its own vendor chunk
- **Radix UI** components are tree-shaken at build time
- Only import what you use from lucide-react

```typescript
// routes.tsx — Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
// ... all pages

// Suspense wrapper in Layout.tsx
<Suspense fallback={<PageSkeleton />}>
  <Outlet />
</Suspense>
```

---

## 11. Responsive Engineering Spec

### 11.1 Breakpoint Tokens
```css
/* TailwindCSS 4 breakpoints — theme.css */
:root {
  --bp-sm:  480px;  /* Large mobile */
  --bp-md:  768px;  /* Tablet portrait */
  --bp-lg:  1024px; /* Tablet landscape / iPad Pro / Laptop */
  --bp-xl:  1200px; /* Desktop */
  --bp-2xl: 1440px; /* Large desktop */
}
```

### 11.2 Container Behaviour
```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-inline: clamp(16px, 4vw, 40px);
}
```

### 11.3 Typography Fluid Scaling
```css
/* All heading sizes use clamp() — no media query needed */
h1 { font-size: clamp(24px, 6vw, 48px); }
h2 { font-size: clamp(20px, 4vw, 36px); }
h3 { font-size: clamp(18px, 3vw, 28px); }
h4 { font-size: clamp(16px, 2.5vw, 22px); }
p  { font-size: clamp(14px, 2vw, 16px); }
```

### 11.4 Touch Target Requirements
```
Minimum touch target: 44 × 44px (Apple HIG / WCAG 2.5.5)
All buttons, links, nav items, FAB: min 44px tall
Mobile nav drawer links: min 56px tall (thumb-friendly)
```

---

## 12. Browser Compatibility Matrix

| Browser | Version | Support Level | Notes |
|---------|---------|---------------|-------|
| Chrome | 120+ | ✅ Full | Primary development target |
| Edge (Bing) | 120+ | ✅ Full | Chromium-based, same as Chrome |
| Safari | 17+ | ✅ Full | Requires -webkit- prefixes for clip-path |
| Safari iOS | 17+ | ✅ Full | Test backdrop-filter, clip-path |
| Firefox | 122+ | ✅ Full | Minor animation timing differences |
| Chrome Android | 120+ | ✅ Full | Heavy parallax disabled on mobile |
| Samsung Internet | 23+ | ⚠️ Partial | Test carousel touch events |

### 12.1 CSS Feature Detection
```typescript
// Detect Safari for vendor prefixes
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Use CSS @supports for progressive enhancement
@supports (backdrop-filter: blur(12px)) {
  .glass-effect {
    backdrop-filter: blur(12px);
    background: rgba(255,255,255,0.1);
  }
}

@supports not (backdrop-filter: blur(12px)) {
  .glass-effect {
    background: rgba(255,255,255,0.9);
  }
}
```

---

## 13. Accessibility Requirements (WCAG 2.1 AA)

### 13.1 Colour Contrast Ratios
| Text Type | Min Ratio | Example Pairs |
|-----------|-----------|---------------|
| Normal text (16px) | 4.5:1 | #333333 on #FFFFFF → 10.7:1 ✅ |
| Large text (24px+) | 3:1 | #FFFFFF on #2D68FF → 5.1:1 ✅ |
| UI components | 3:1 | #2D68FF border on #FFFFFF → 3.2:1 ✅ |
| Text on dark bg | 4.5:1 | #FFFFFF on #34394D → 8.1:1 ✅ |

### 13.2 Keyboard Navigation
- [ ] All interactive elements reachable via Tab key
- [ ] Logical tab order follows visual reading order
- [ ] Focus indicators visible and meet 3:1 contrast ratio
- [ ] Mobile drawer closes on Escape key
- [ ] Carousel navigable with arrow keys
- [ ] FAQ accordion toggleable with Enter/Space

### 13.3 ARIA Requirements
```html
<!-- Navigation -->
<nav aria-label="Main navigation">
<button aria-expanded="false" aria-controls="mobile-menu">

<!-- Carousel -->
<div role="region" aria-label="Patient Testimonials" aria-live="polite">
<button aria-label="Next testimonial">

<!-- Gallery -->
<img alt="Before: Misaligned teeth. After: Straight teeth with veneers" />

<!-- Accordion -->
<button aria-expanded="true" aria-controls="faq-answer-1">
<div id="faq-answer-1" role="region">

<!-- Skip link -->
<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
```

---

## 14. SEO & Meta Requirements

### 14.1 Per-Page Meta Tags
```typescript
// lib/seo.ts — Page-level meta configuration
export const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: "Neel Dentistry | Chennai's Trusted Dental Clinic",
    description: "Exceptional dental care delivered with warmth. General, cosmetic, orthodontic & pediatric dentistry in Chennai. Call +91 96553 00036.",
    canonical: "https://neeldentistry.com/",
    ogImage: "/og-home.jpg",
  },
  about: {
    title: "About Us | Neel Dentistry Chennai",
    description: "Meet Dr. Neel and the team behind Chennai's most trusted dental clinic. 20+ years of honest, precise dental care.",
    canonical: "https://neeldentistry.com/about",
  },
  // ... all pages
};
```

### 14.2 Structured Data (JSON-LD)
```html
<!-- In index.html or injected per page -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Neel Dentistry",
  "url": "https://neeldentistry.com",
  "telephone": "+919655300036",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [...],
  "priceRange": "₹₹",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "2400"
  }
}
</script>
```

---

## 15. Asset Management

### 15.1 Image Strategy
```
/public/assets/
├── hero-team.png             → Optimize → hero-team.webp (< 200KB)
├── doctor-portrait.webp      → Max 150KB
├── clinic-gallery/
│   ├── reception.webp        → Max 100KB each
│   ├── treatment-suite.webp
│   └── sterilization.webp
└── og/
    ├── og-home.jpg           → 1200×630px exactly
    └── og-services.jpg
```

### 15.2 Optimization Pipeline
```bash
# Convert PNG to WebP (run pre-deployment)
npx sharp-cli --input "public/assets/*.png" --output "public/assets" --format webp --quality 85

# Resize hero for multiple breakpoints
npx sharp-cli --input "public/assets/hero-team.png" \
  --resize 800 --output "public/assets/hero-team-800.webp" \
  --resize 1200 --output "public/assets/hero-team-1200.webp" \
  --resize 1920 --output "public/assets/hero-team-1920.webp"
```

---

## 16. Security Requirements

### 16.1 Content Security Policy
```html
<!-- index.html -->
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' https://i.postimg.cc https://*.googleapis.com data:;
  connect-src 'self';
  frame-src https://www.google.com;
" />
```

### 16.2 Additional Security Headers (via Netlify/Vercel _headers)
```
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## 17. Testing Requirements

### 17.1 Manual QA Checklist
- [ ] All 12 routes load without error
- [ ] Intro animation plays once and exits cleanly
- [ ] Hero parallax smooth at 60fps (Chrome Performance tab)
- [ ] Service detail pages render for all 5 service IDs
- [ ] Gallery filter tabs work correctly
- [ ] FAQ accordion expands/collapses
- [ ] Testimonial carousel auto-plays and pauses on hover
- [ ] WhatsApp button opens correct URL with pre-filled message
- [ ] tel: link functional on mobile
- [ ] 404 page shows for invalid routes
- [ ] `prefers-reduced-motion` skips all animations

### 17.2 Device Test Matrix
| Device | OS | Browser |
|--------|----|---------||
| iPhone 15 Pro | iOS 17 | Safari |
| iPhone SE (3rd gen) | iOS 16 | Safari |
| iPad Pro 12.9" | iPadOS 17 | Safari |
| Samsung Galaxy S24 | Android 14 | Chrome |
| MacBook Pro M3 | macOS Sonoma | Chrome, Safari |
| Windows 11 Desktop | Windows 11 | Edge (Bing), Chrome |

---

## 18. Deployment Requirements

### 18.1 Build Process
```bash
npm run build
# Output: /dist (static files)
# Deploy /dist to: Netlify / Vercel / GitHub Pages
```

### 18.2 Deployment Checklist
- [ ] `robots.txt` present and correct
- [ ] `sitemap.xml` generated and submitted to Google Search Console
- [ ] All environment variables configured in hosting platform
- [ ] SPA redirect rule configured (all routes → index.html)
- [ ] Gzip/Brotli compression enabled on hosting
- [ ] CDN caching configured (assets: 1 year, index.html: no-cache)

### 18.3 SPA Redirect Config
```toml
# netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 19. Error Handling

### 19.1 Error Boundary
```typescript
// components/ErrorBoundary.tsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Page error:", error, info);
    // Optional: send to monitoring (Sentry, etc.)
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1>Something went wrong</h1>
            <a href="/">Return to Home</a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
```

---

## 20. Dependencies & Version Locks

### Critical Version Constraints
```json
{
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```

### Version Lock Policy
- All `dependencies` pinned to **exact versions** (no `^` or `~`)
- All `devDependencies` may use `^` minor range
- `package-lock.json` committed to source control
- Dependabot or Renovate enabled for security updates

---

*NEEL DENTISTRY — Technical Requirements Document v2.0*
*All specifications are implementation-authoritative.*
*Changes require sign-off from Engineering Lead & Design Lead.*
