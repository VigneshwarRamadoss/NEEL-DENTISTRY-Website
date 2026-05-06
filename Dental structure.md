# Dental Clinic Website — Structure Document
> Derived from the Frost Orthodontics Design System
> Excludes: Appointment Booking Form & Email functionality

---

## Table of Contents
1. [Site Architecture](#1-site-architecture)
2. [Global Layout Shell](#2-global-layout-shell)
3. [Page-by-Page Structure](#3-page-by-page-structure)
4. [Reusable Section Patterns](#4-reusable-section-patterns)
5. [Component Inventory](#5-component-inventory)
6. [Navigation Architecture](#6-navigation-architecture)
7. [Footer Architecture](#7-footer-architecture)
8. [Responsive Behavior Summary](#8-responsive-behavior-summary)
9. [Content Hierarchy Rules](#9-content-hierarchy-rules)
10. [Design Token Mapping (Quick Ref)](#10-design-token-mapping-quick-ref)

---

## 1. Site Architecture

```
Dental Clinic Website
├── Home                        (index)
├── About
│   ├── Our Story
│   ├── Meet the Team
│   └── Our Clinic / Tour
├── Services
│   ├── Services Overview       (landing hub)
│   ├── General Dentistry
│   ├── Cosmetic Dentistry
│   ├── Orthodontics
│   ├── Pediatric Dentistry
│   └── Emergency Dental Care
├── Patient Info
│   ├── New Patients
│   ├── Insurance & Payments
│   └── FAQs
├── Smile Gallery               (before/after)
├── Blog / Resources
│   ├── Blog Index
│   └── Blog Post (template)
├── Contact
└── 404 Error Page
```

---

## 2. Global Layout Shell

Every page shares the same outer shell. Content slots in between the Header and Footer.

```
┌─────────────────────────────────────────────────────────┐
│  STICKY HEADER (Navbar)                                 │
│  bg: #FFFFFF | shadow: 0 2px 8px rgba(0,0,0,0.08)      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  PAGE CONTENT AREA                                      │
│  max-width: 1200px | margin: 0 auto                     │
│  padding: 0 40px (desktop) → 24px (tablet) → 16px (mob)│
│                                                         │
├─────────────────────────────────────────────────────────┤
│  FOOTER                                                 │
│  bg: #34394D | text: #FFFFFF                            │
└─────────────────────────────────────────────────────────┘
```

**Sticky Header Specs**
- Height: `80px` desktop / `64px` mobile
- Background: `#FFFFFF`
- Box Shadow: `0 2px 8px rgba(0, 0, 0, 0.08)` (Level 1)
- z-index: `1000`
- Becomes sticky on scroll after `0px` from top
- Transition: `box-shadow 0.2s ease` (shadow intensifies on scroll)

---

## 3. Page-by-Page Structure

---

### 3.1 Home Page

**Purpose**: First impression, trust-building, and routing hub to all key areas.

```
HOME PAGE
├── [SECTION 1] Hero Banner
├── [SECTION 2] Trust Bar / Social Proof Strip
├── [SECTION 3] Services Overview (3-column cards)
├── [SECTION 4] Why Choose Us (split layout)
├── [SECTION 5] Meet the Doctor (single featured)
├── [SECTION 6] Patient Testimonials (carousel)
├── [SECTION 7] Smile Gallery Teaser (3 before/after images)
├── [SECTION 8] Blog / Resources Teaser (3 latest posts)
└── [SECTION 9] CTA Banner (full-width)
```

**Section Details:**

**[SECTION 1] Hero Banner**
- Layout: Full-width, full-viewport-height (`100vh` desktop, `300px` mobile)
- Background: High-quality photography (clinic interior or patient smile), with `rgba(52, 57, 77, 0.55)` dark overlay
- Content (centered, max-width 800px):
  - Eyebrow label: Montserrat 14px, weight 400, `#BCD9DE`, uppercase letter-spacing `2px`
  - H1 Headline: Montserrat 34px, weight 600, `#FFFFFF`, line-height 38.76px
  - Sub-headline: Times New Roman 16px, weight 400, `#FFFFFF`, line-height 24px, max-width 560px
  - Primary CTA Button: "Explore Our Services" — Dark Gray `#333333` bg, white text
  - Ghost CTA: "Our Story →" — borderless, white text, `#BCD9DE` on hover
- Padding: `64px 40px`

**[SECTION 2] Trust Bar / Social Proof Strip**
- Layout: Full-width, horizontal flex row
- Background: `#F2F2F2`
- Padding: `20px 40px`
- Content (4 trust items, evenly spaced):
  - Icon (SVG, `#2D68FF`) + Stat/Label (Montserrat 14px, `#333333`)
  - Examples: "20+ Years Experience" | "2,400+ Happy Patients" | "5-Star Rated" | "Same-Day Emergency Care"
- No border; very subtle section divider only

**[SECTION 3] Services Overview**
- Layout: 3-column card grid (desktop) → 2-column (tablet) → 1-column (mobile)
- Background: `#FFFFFF`
- Section heading (H3, Montserrat 28px, weight 500, `#000000`, centered)
- Section sub-copy (Times New Roman 16px, `#333333`, centered, max-width 640px)
- Padding: `64px 40px`
- Card Specs: Standard Card component (`12px` radius, Level 1 shadow)
  - Icon (64×64px SVG, `#2D68FF`)
  - Service title: H4 Montserrat 26px, weight 600, `#000000`
  - Description: Times New Roman 16px, `#333333`, 3 lines max
  - "Learn More →" link: Montserrat 18px, `#2D68FF`, underline on hover
- Grid gap: `24px`

**[SECTION 4] Why Choose Us**
- Layout: 50/50 split — image left, content right (reverses on mobile to stacked)
- Background: `#FAFAFA`
- Padding: `64px 40px`
- Image side: Rounded `12px`, Level 2 shadow, covers full column height
- Content side:
  - Eyebrow: Montserrat 14px, `#2D68FF`, uppercase
  - H3 heading: Montserrat 28px, weight 500, `#000000`
  - Body copy: Times New Roman 16px, `#333333`
  - 4 benefit bullet rows: icon (`#2D68FF`, 20px) + Montserrat 16px text
  - Primary CTA Button: "Meet Our Team"

**[SECTION 5] Meet the Doctor**
- Layout: Centered single card or 50/50 split (image + bio)
- Background: `#FFFFFF`
- Padding: `64px 40px`
- Doctor photo: circular crop (`50%` radius) or portrait card (`12px` radius)
- Name: H3 Montserrat 28px, weight 500
- Title/Credentials: Montserrat 14px, `#2D68FF`
- Bio: Times New Roman 16px, `#333333`, max 3 lines teaser
- Link: "Full Bio & Team →" Montserrat 18px, `#2D68FF`

**[SECTION 6] Patient Testimonials**
- Layout: Carousel (auto-play, 3s interval; pause on hover)
- Background: `#34394D` (dark charcoal)
- Text: `#FFFFFF`
- Padding: `64px 40px`
- Each testimonial card:
  - Star rating: 5 filled stars, `#FFF300`
  - Quote: Times New Roman 16px italic, `#FFFFFF`, line-height 24px
  - Patient name: Montserrat 14px, weight 600, `#BCD9DE`
  - Location/treatment type: Montserrat 14px, weight 400, `rgba(255,255,255,0.6)`
- Carousel nav dots: `#BCD9DE` active, `rgba(255,255,255,0.3)` inactive
- Arrow controls: Ghost Button style

**[SECTION 7] Smile Gallery Teaser**
- Layout: 3-column equal grid
- Background: `#F2F2F2`
- Padding: `64px 40px`
- Section H3 heading centered
- Each item: Before/After image pair with Teal overlay label tag (`#BCD9DE` bg, `#34394D` text)
- "View Full Gallery →" Primary CTA button, centered below grid

**[SECTION 8] Blog Teaser**
- Layout: 3-column card grid (desktop) → 1-column (mobile)
- Background: `#FFFFFF`
- Padding: `64px 40px`
- Blog card:
  - Thumbnail image (full-width, `12px` radius top, 0 bottom)
  - Category tag: Montserrat 14px, `#2D68FF` bg pill, `#FFFFFF` text
  - Title: Montserrat 26px, weight 600, `#000000`
  - Excerpt: Times New Roman 16px, `#333333`, 2 lines
  - Date + read time: Montserrat 14px, `#999999`
  - "Read More →" link: `#2D68FF`

**[SECTION 9] CTA Banner**
- Layout: Full-width, centered text
- Background: `#2D68FF` (Primary Action Blue)
- Padding: `64px 40px`
- H3 heading: Montserrat 28px, weight 500, `#FFFFFF`
- Sub-text: Times New Roman 16px, `#FFFFFF`, opacity 0.85
- Button: Secondary Button (outlined white, transparent bg)

---

### 3.2 About Page

```
ABOUT
├── [SECTION 1] Page Hero (shorter, 400px)
├── [SECTION 2] Our Story (split: text left, image right)
├── [SECTION 3] Mission & Values (3 icon cards)
├── [SECTION 4] Meet the Full Team (grid of team cards)
├── [SECTION 5] Clinic Tour / Photo Gallery (lightbox grid)
├── [SECTION 6] Accreditations & Awards Strip
└── [SECTION 7] CTA Banner
```

**Key Notes:**
- Page Hero: `400px` height, same overlay treatment as Home Hero, H1 page title only
- Team cards: photo (circular `50%`) + name (H4) + role (caption) + LinkedIn icon optional
- Mission & Values: 3 Standard Cards, icon top, short copy — NOT a list
- Awards Strip: Horizontal flex of logo/seal images, `#F2F2F2` bg, `28px` padding

---

### 3.3 Services Overview Page

```
SERVICES OVERVIEW
├── [SECTION 1] Page Hero
├── [SECTION 2] Services Hub Grid (6 service cards)
└── [SECTION 3] Insurance Note Strip (text + icon)
```

**Key Notes:**
- Hub Grid: 3-column desktop, links each card to individual service page
- No booking form — only "Learn More" card links

---

### 3.4 Individual Service Page (Template)

```
SERVICE PAGE (TEMPLATE)
├── [SECTION 1] Page Hero (service name as H1)
├── [SECTION 2] Service Overview (split: content + image)
├── [SECTION 3] What to Expect (numbered step list, horizontal on desktop)
├── [SECTION 4] Benefits (2-column icon list)
├── [SECTION 5] FAQs (accordion, service-specific)
├── [SECTION 6] Related Services (3 cards)
└── [SECTION 7] CTA Banner
```

**Key Notes:**
- "What to Expect" steps: circle-numbered (bg `#2D68FF`, text `#FFFFFF`, `50%` radius), Montserrat 14px step labels
- FAQ Accordion: chevron icon rotates on open, border-bottom `1px solid #D9D9D9` between items
- CTA Banner: standard pattern, **no booking form** — use "Call Us" or "Contact Us" link only

---

### 3.5 Patient Info — New Patients Page

```
NEW PATIENTS
├── [SECTION 1] Page Hero
├── [SECTION 2] Welcome Message (centered copy block)
├── [SECTION 3] What to Bring / First Visit Checklist (icon + text rows)
├── [SECTION 4] Patient Forms (downloadable PDF links only)
└── [SECTION 5] FAQ Accordion (general/new patient questions)
```

**Patient Forms Block:**
- Card with download icon (`#2D68FF`), form name (Montserrat 16px), and "Download PDF" link
- No online form submission

---

### 3.6 Patient Info — Insurance & Payments Page

```
INSURANCE & PAYMENTS
├── [SECTION 1] Page Hero
├── [SECTION 2] Accepted Insurance Logos Grid
├── [SECTION 3] Payment Options (3 icon cards)
└── [SECTION 4] Finance Disclaimer (caption text, `#999999`)
```

---

### 3.7 Patient Info — FAQs Page

```
FAQs
├── [SECTION 1] Page Hero
├── [SECTION 2] Category Tabs (General | Services | Payments | Kids)
└── [SECTION 3] Accordion FAQ List (filtered by active tab)
```

**Tab Component:**
- Active tab: `#2D68FF` bottom border `2px`, Montserrat 18px weight 600
- Inactive tab: `#333333`, weight 400
- Tab bg: `#FFFFFF`, border-bottom `1px solid #D9D9D9`

---

### 3.8 Smile Gallery Page

```
SMILE GALLERY
├── [SECTION 1] Page Hero
├── [SECTION 2] Filter Bar (All | Veneers | Whitening | Braces | Implants)
└── [SECTION 3] Masonry / Grid Gallery (before/after pairs, lightbox on click)
```

**Gallery Item:**
- Pair displayed side-by-side within one card (`12px` radius, Level 1 shadow)
- "Before" / "After" label tags: `#34394D` bg, `#FFFFFF` text, `6px` radius, Montserrat 14px
- Lightbox overlay: `rgba(0,0,0,0.85)`, close icon Ghost Button

---

### 3.9 Blog Index Page

```
BLOG
├── [SECTION 1] Page Hero
├── [SECTION 2] Featured Post (large hero card, full-width)
├── [SECTION 3] Category Filter Tabs
└── [SECTION 4] Blog Grid (3-column, paginated)
```

---

### 3.10 Blog Post Page (Template)

```
BLOG POST
├── [SECTION 1] Post Hero (title, meta, feature image)
├── [SECTION 2] Article Body (max-width 720px, centered)
├── [SECTION 3] Author Bio Card
├── [SECTION 4] Related Posts (3 cards)
└── [SECTION 5] CTA Banner
```

**Article Body Typography:**
- Body: Times New Roman 16px, `#000000`, line-height 24px
- H2 subheadings within article: Montserrat 28px, weight 500
- H3 within article: Montserrat 26px, weight 600
- Blockquotes: left border `4px solid #BCD9DE`, `#34394D` text, italic, `32px` left padding

---

### 3.11 Contact Page

```
CONTACT
├── [SECTION 1] Page Hero
├── [SECTION 2] Contact Details + Map (split 40/60)
│   ├── Left: Address, Phone, Hours of Operation
│   └── Right: Embedded Google Map (iframe, `12px` radius)
└── [SECTION 3] Find Us / Directions Strip (icon + text pairs)
```

**No booking form, no email form.** Contact is limited to:
- Phone number (click-to-call `<a href="tel:...">`)
- Address (links to Google Maps)
- Office hours table

---

### 3.12 404 Error Page

```
404
├── Centered layout, `100vh`
├── Large "404" display text: Montserrat 80px, weight 600, `#F2F2F2`
├── H3 message: Montserrat 28px, `#000000`
├── Body copy: Times New Roman 16px, `#333333`
├── "Back to Home" Primary CTA Button
└── "View Services →" Ghost link
```

---

## 4. Reusable Section Patterns

These patterns appear across multiple pages and should be built as reusable components.

### Pattern A — Page Hero (Short)
- Height: `400px` desktop / `240px` mobile
- Background: Full-bleed photo + `rgba(52, 57, 77, 0.6)` overlay
- Content: H1 (white) + eyebrow label (optional) + breadcrumb trail
- No CTA buttons (except on Home Hero)

### Pattern B — Standard CTA Banner
- Full-width, `#2D68FF` background
- Centered H3 + body line + one Secondary (outlined white) button
- Padding: `64px 40px`
- Used at the bottom of: Services, About, Service pages, Blog posts

### Pattern C — Section Intro Block
- Centered eyebrow + H3 heading + one-line sub-copy
- Max-width: `640px`, `margin: 0 auto`
- Bottom margin: `44px` before the grid/content below it
- Used at the top of grids, carousels, and feature sections

### Pattern D — Split Content Block
- 50/50 or 40/60 flex layout
- One side: image (`12px` radius, Level 2 shadow)
- Other side: eyebrow + heading + body + optional CTA
- Gap between sides: `40px`
- Stacks vertically on mobile (image above text)

### Pattern E — Icon Stat Row (Trust Bar)
- Horizontal flex, 4 items
- Each: SVG icon (`#2D68FF`) + Montserrat 14px stat + caption
- Background: `#F2F2F2`
- Padding: `20px 40px`

---

## 5. Component Inventory

| Component | Variant | Usage Location |
|---|---|---|
| Button — Primary | Dark Gray fill | CTAs across all pages |
| Button — Secondary | Outlined white | CTA Banners, Hero |
| Button — Ghost | Borderless white | Hero overlay, Carousels |
| Card — Standard | Shadow Level 1 | Services, Blog, Team |
| Card — Blog Post | Top image + meta | Blog Index, Home teaser |
| Card — Testimonial | Dark bg, star rating | Home carousel |
| FAQ Accordion | Chevron toggle | Service pages, FAQs |
| Tab Bar | Underline active state | FAQs, Gallery filter |
| Gallery Item | Before/After pair | Smile Gallery |
| Breadcrumb | Montserrat 14px trail | All inner pages |
| Pagination | Numbered + prev/next | Blog Index |
| Lightbox Overlay | Dark overlay + close | Gallery |
| Stat Strip | Icon + number row | Home Trust Bar |
| Author Bio Card | Avatar + name + role | Blog Post |
| Download Link Row | Icon + PDF label | New Patients forms |
| Clinic Hours Table | Day + time pairs | Contact |
| Map Embed | Google Maps iframe | Contact |
| Category Tag Pill | `#2D68FF` bg, white text | Blog cards |
| Star Rating | 5 stars, `#FFF300` | Testimonials |
| Carousel Control | Dots + arrows | Testimonials |
| Hamburger Menu | Mobile nav toggle | Global Header |
| Overlay Drawer | Full-screen mobile nav | Global Header |

---

## 6. Navigation Architecture

### Desktop Navigation (1200px+)

```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]   Home  About  Services ▾  Patient Info  Blog  Contact │  [Phone CTA]
└─────────────────────────────────────────────────────────────┘
```

- Logo: Left-aligned, max-height `48px`
- Nav links: Montserrat 18px, weight 400, `#333333`, hover `#2D68FF` underline
- "Services" has a **mega-dropdown** (see below)
- Phone CTA: Primary Button style, right-aligned, `"Call Us: (XXX) XXX-XXXX"`
- Active page: `#2D68FF`, `2px solid #2D68FF` underline

**Services Mega-Dropdown:**
```
┌────────────────────────────────────────────┐
│  General Dentistry     Pediatric Dentistry │
│  Cosmetic Dentistry    Emergency Care      │
│  Orthodontics          → View All Services │
└────────────────────────────────────────────┘
```
- Background: `#FFFFFF`
- Border-top: `3px solid #2D68FF`
- Box shadow: Level 2 (`0 4px 12px rgba(0,0,0,0.12)`)
- Each link: Montserrat 16px, `#333333`, hover `#2D68FF`
- Padding: `28px 40px`

### Mobile Navigation (< 768px)

- Hamburger icon (right-aligned, `43px × 43px` circular tap target)
- Tap opens full-screen overlay drawer:
  - Background: `#FFFFFF`
  - Links: Montserrat 18px, `#000000`, stacked with `24px` between items
  - "Services" expands inline accordion
  - Close button: top-right corner Ghost Button
  - Phone CTA: Primary Button, full-width, pinned to bottom of drawer

---

## 7. Footer Architecture

```
┌──────────────────────────────────────────────────────────────┐
│  FOOTER — bg: #34394D | text: #FFFFFF                        │
│  Padding: 64px 40px (desktop) → 40px 16px (mobile)          │
├──────────────────────────────────────────────────────────────┤
│  [LOGO white]    [Quick Links]   [Services]   [Contact Info] │
│                                                              │
│  Tagline copy    Home            Gen. Dentistry  Phone       │
│  (Times New      About           Cosmetic        Address     │
│   Roman 16px)    Services        Orthodontics    Hours       │
│                  Patient Info    Pediatric                   │
│                  Blog            Emergency                   │
│                  Contact                                     │
├──────────────────────────────────────────────────────────────┤
│  [Social Icons Row]         © 2025 Clinic Name — Privacy     │
└──────────────────────────────────────────────────────────────┘
```

**Footer Specs:**
- Background: `#34394D` (Dark Charcoal)
- Primary text: `#FFFFFF`
- Secondary/muted text: `rgba(255,255,255,0.6)`
- Link color: `#FFFFFF`, hover: `#BCD9DE`
- Column headings: Montserrat 16px, weight 600, `#BCD9DE`, uppercase, letter-spacing `1px`
- Body links: Montserrat 14px, weight 400
- Divider line: `1px solid rgba(255,255,255,0.15)`
- Social icons: Ghost Button style, `43×43px`, circular hover
- Copyright bar: `rgba(0,0,0,0.2)` bg strip, Montserrat 14px, `rgba(255,255,255,0.5)`

**Footer Grid:**
- Desktop: 4 equal columns
- Tablet: 2 × 2 grid
- Mobile: stacked single column, logo + tagline first

---

## 8. Responsive Behavior Summary

| Element | Desktop (1200px+) | Tablet (768–1199px) | Mobile (<768px) |
|---|---|---|---|
| Section padding | `64px 40px` | `48px 24px` | `40px 16px` |
| Page Hero height | `100vh` (Home) / `400px` (inner) | `320px` | `240px` |
| H1 font size | `34px` | `28px` | `24px` |
| H3 font size | `28px` | `24px` | `20px` |
| Card grid | 3 columns | 2 columns | 1 column |
| Navigation | Horizontal inline | Horizontal inline (condensed) | Hamburger drawer |
| Split layouts | Side by side | Side by side | Stacked |
| Footer | 4 columns | 2×2 grid | Single column |
| CTA buttons | Auto-width (min 275px) | Auto-width | Full-width |
| Blog grid | 3 columns | 2 columns | 1 column |
| Gallery grid | 4 columns | 2 columns | 1 column |

---

## 9. Content Hierarchy Rules

1. **One H1 per page** — always the page title or hero headline. Color: `#FFFFFF` (on photo bg) or `#000000` (on white bg).
2. **H3 for section headings** — starts each major content section. Montserrat 28px, weight 500.
3. **H4 for card/component titles** — internal to cards, service titles, team names. Montserrat 26px, weight 600.
4. **Body copy** — all descriptive text uses Times New Roman 16px, `#333333` on white, `#FFFFFF` on dark.
5. **Eyebrow labels** — appear above H1/H3, Montserrat 14px, uppercase, `#2D68FF` (light bg) or `#BCD9DE` (dark bg), letter-spacing `2px`.
6. **Caption/meta text** — dates, tags, credentials use Montserrat 14px, `#999999` or muted white.
7. **Never nest H2 on this site** — the hierarchy skips H2 intentionally; H1 → H3 → H4.
8. **Links within body copy** — `#2D68FF`, underline on hover, Montserrat 18px.
9. **Maximum line length** — body copy containers cap at `720px` width for readability.
10. **Section intros** — always centered, max-width `640px`, before any grid or split content.

---

## 10. Design Token Mapping (Quick Ref)

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#2D68FF` | CTAs, links, focus, eyebrows |
| `--color-dark` | `#34394D` | Footer bg, dark sections |
| `--color-gray-dark` | `#333333` | Button bg, nav text, secondary text |
| `--color-black` | `#000000` | H1, body headlines, heavy type |
| `--color-teal` | `#BCD9DE` | Accents, footer links on hover, overlays |
| `--color-bg-soft` | `#F2F2F2` | Alternating section bg, trust bar |
| `--color-bg-near-white` | `#FAFAFA` | Section alternation |
| `--color-white` | `#FFFFFF` | Surface, cards, nav bg |
| `--color-warning` | `#FFF300` | Star ratings, warnings |
| `--shadow-1` | `0 2px 8px rgba(0,0,0,0.08)` | Default cards |
| `--shadow-2` | `0 4px 12px rgba(0,0,0,0.12)` | Hover cards, dropdowns |
| `--shadow-3` | `0 8px 24px rgba(0,0,0,0.16)` | Modals, overlays |
| `--radius-sm` | `6px` | Small inputs, pills |
| `--radius-md` | `12px` | Buttons, cards |
| `--radius-full` | `50%` | Avatars, icon buttons |
| `--font-display` | Montserrat | All headings |
| `--font-body` | Times New Roman | Body copy |
| `--font-cta` | Raleway | Button labels |
| `--spacing-section` | `64px` | Section vertical padding (desktop) |
| `--max-width` | `1200px` | Global container cap |

---

*Structure document v1.0 — Frost Orthodontics Design System*
*Excludes: Appointment Booking Form, Email Integration*
