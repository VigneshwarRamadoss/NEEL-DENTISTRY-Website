# Motion Graphic Opening Design Prompt
## NEEL DENTISTRY — Website Intro Animation
> Duration: 2–3 seconds | Style: Clean & Minimal | Reveal: Cinematic Slice/Split

---

## 1. OVERVIEW

Design a **2–3 second website opening motion graphic** for **NEEL DENTISTRY** — a modern dental clinic brand. The animation should feel like a luxury brand opener: unhurried, precise, and quietly confident. It plays once on page load, then dissolves cleanly into the full website. No sound. No complexity. Every frame should feel intentional.

---

## 2. COLOR PALETTE

| Role | Color | Hex |
|---|---|---|
| Accent / Warmth | Soft Pink | `#FFC2D1` |
| Primary Surface | Pure White | `#FFFFFF` |
| Structure / Text | Silver Gray | `#CED4DA` |
| Deep Anchor (shadows only) | Near-Black | `#1A1A1A` (5–10% opacity max) |

**Rules:**
- Background is always `#FFFFFF` — no dark backgrounds, no gradients that go dark
- Pink `#FFC2D1` is used sparingly — it is the punctuation mark, not the sentence
- Silver `#CED4DA` carries the structural weight: lines, dividers, and supporting text
- No other colors are introduced — purity of palette is the point

---

## 3. TIMING BREAKDOWN

**Total Duration: 2.5 seconds (recommended sweet spot)**

```
0.00s → 0.30s   PHASE 1 — Blank white canvas. Pure silence. A single breath.
0.30s → 1.00s   PHASE 2 — Horizontal silver line draws in from center outward
1.00s → 1.60s   PHASE 3 — "NEEL DENTISTRY" cinematic slice/split reveal
1.60s → 2.10s   PHASE 4 — Tagline or logo mark fades in below
2.10s → 2.50s   PHASE 5 — Entire composition fades to white → website loads
```

**Timing Easing:**
- All motion uses `ease-out` or `cubic-bezier(0.16, 1, 0.3, 1)` — fast start, soft landing
- Nothing bounces. Nothing overshoots. Smooth deceleration only.

---

## 4. PHASE-BY-PHASE ANIMATION INSTRUCTIONS

---

### PHASE 1 — White Canvas (0.00s – 0.30s)

- Screen is `#FFFFFF`, completely empty
- No elements visible
- This silence is intentional — it creates anticipation
- Duration: `300ms`
- Do not skip or shorten this phase

---

### PHASE 2 — Horizontal Line Draw (0.30s – 1.00s)

**Element:** A single thin horizontal rule

- Color: `#CED4DA` (Silver Gray)
- Thickness: `1px`
- Width at rest: `120px`
- Position: Vertically and horizontally centered on screen
- Animation: Line draws from its **center outward** simultaneously in both directions (left and right)
  - Start width: `0px`
  - End width: `120px`
  - Duration: `400ms`
  - Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- After draw completes: line stays visible, holds for `270ms` before Phase 3 begins
- A barely-visible pink dot `#FFC2D1` (4px circle) pulses once at dead center of the line at `0.65s`, then disappears at `0.90s`
  - Opacity: `0 → 1 → 0` over `250ms`
  - This is a micro-detail — barely perceptible, adds warmth

---

### PHASE 3 — "NEEL DENTISTRY" Cinematic Slice/Split Reveal (1.00s – 1.60s)

**This is the hero moment of the entire animation.**

**Typography:**
- Font: Montserrat, weight 600
- Size: `48px` desktop / `32px` mobile
- Color: `#1A1A1A` (near-black, not pure black — softer)
- Letter spacing: `6px` (wide tracking — luxury feel)
- Text: `NEEL DENTISTRY`
- Alignment: Centered, horizontally and vertically

**Slice/Split Reveal Mechanic:**
The text is revealed through a **vertical slice wipe** — as if a blade cuts through the composition and the two halves of the text peel open:

```
BEFORE (1.00s):     Two invisible halves sitting on top of each other, offset

   [NEEL DENTIS] ←  top half clipped, positioned 8px ABOVE center
   [TRY        ] ←  bottom half clipped, positioned 8px BELOW center

TRANSITION (1.00s → 1.50s): Both halves slide to their correct Y position
   Top half: moves DOWN 8px to center
   Bottom half: moves UP 8px to center
   As they meet, the full word appears complete.

AT REST (1.50s):    Full text visible, perfectly centered
```

**Technical Spec for the Slice:**
- Clip each half using `clip-path`:
  - Top half: `clip-path: inset(0 0 50% 0)`
  - Bottom half: `clip-path: inset(50% 0 0 0)`
- Transform:
  - Top half: `translateY(-8px)` → `translateY(0)` over `500ms`
  - Bottom half: `translateY(8px)` → `translateY(0)` over `500ms`
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` — fast into position, elegant stop
- Both halves move simultaneously
- Slight opacity: `0.85 → 1` during the same duration (text "solidifies" as it locks)

**Pink Accent Line:**
- As the two text halves lock into place at `1.50s`, the silver horizontal line from Phase 2 **gently extends** from `120px` to `220px` over `200ms`
- This line now acts as an underline rule beneath the text
- Color stays `#CED4DA`

---

### PHASE 4 — Tagline / Descriptor Fade In (1.60s – 2.10s)

**Element:** Supporting tagline beneath the clinic name

- Text (choose one, or replace with clinic's actual tagline):
  - Option A: `"Where Care Meets Craft"`
  - Option B: `"Precision. Comfort. Trust."`
  - Option C: Simply the city/location name (e.g., `"Chennai, India"`)
- Font: Montserrat, weight 400
- Size: `13px`
- Color: `#CED4DA` (Silver Gray — intentionally subtle)
- Letter spacing: `4px`
- Transform: Uppercase
- Position: Centered, `20px` below the clinic name

**Animation:**
- Fade in: `opacity 0 → 1` over `400ms`
- Subtle upward drift: `translateY(6px) → translateY(0)` simultaneously
- Easing: `ease-out`
- Delay: starts at `1.60s`

**Optional micro-detail:**
- A `#FFC2D1` soft glow — radial gradient, `200px` wide, `8%` opacity max — centered behind the tagline, fades in with it and stays
- This adds the barest warmth to the white canvas without being visible as a distinct shape

---

### PHASE 5 — Exit / Dissolve to Website (2.10s – 2.50s)

**The entire composition fades out into the website.**

- All elements (line, clinic name, tagline, pink glow): `opacity 1 → 0` simultaneously
- Duration: `400ms`
- Easing: `ease-in` (opposite of entry — accelerates into invisibility)
- Background `#FFFFFF` persists — the website content fades in from `0 → 1` simultaneously, so there is never a flash or jump
- No scaling, no sliding — purely an opacity dissolve

**Cross-fade with website:**
- The website's first section should begin fading in at `2.20s` (slightly before animation fully ends)
- This overlap of `300ms` makes the transition seamless

---

## 5. LAYOUT COMPOSITION

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│                                                        │
│                   ─────────────                        │ ← Phase 2: Silver line (120px)
│                                                        │
│               N E E L  D E N T I S T R Y              │ ← Phase 3: Slice reveal
│                   ─────────────────────                │ ← Line extends to 220px
│             W H E R E  C A R E  M E E T S             │ ← Phase 4: Tagline
│                                                        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Vertical spacing:**
- Silver line: vertically centered (`50vh`)
- Clinic name: `50vh + 16px` (just below center — optically centered)
- Tagline: `50vh + 52px`
- This slight below-center placement is intentional — it feels more grounded and calm than dead-center

---

## 6. MOTION PRINCIPLES (DO's & DON'Ts)

### DO
- Keep every motion linear in intent — elements go from A to B, nothing wiggles or loops
- Use `ease-out` for entries, `ease-in` for exits
- Let white space do the work — resist filling the screen
- Keep the pink accent as a whisper, not a statement
- Maintain letter-spacing consistency throughout — never compress the tracking

### DON'T
- Don't use bounce or spring easing — this is a dental clinic, not a toy app
- Don't add particle effects, sparkles, or glitter — even subtle ones break the minimal tone
- Don't animate letter-by-letter (that's typewriter — we chose slice/split, stay committed)
- Don't use a loading bar, spinner, or any progress indicator
- Don't add background texture, noise, or pattern — white must be pure white
- Don't make the pink dot in Phase 2 any larger than 4–5px
- Don't loop the animation — it plays once, exits, and never returns

---

## 7. RESPONSIVE ADAPTATIONS

| Property | Desktop | Tablet | Mobile |
|---|---|---|---|
| Clinic name font size | `48px` | `36px` | `28px` |
| Letter spacing | `6px` | `5px` | `3px` |
| Silver line rest width | `120px` | `100px` | `80px` |
| Silver line extended width | `220px` | `180px` | `140px` |
| Tagline font size | `13px` | `12px` | `11px` |
| Slice offset distance | `8px` | `6px` | `5px` |
| Overall timing | `2.5s` | `2.5s` | `2.5s` (unchanged) |

---

## 8. IMPLEMENTATION NOTES (FOR DEVELOPERS)

- Build in **CSS + vanilla JS** or **GSAP (GreenSock)** — GSAP is preferred for precise timing control
- If using GSAP: use `gsap.timeline()` with `delay` values matching the phase timestamps above
- The clip-path slice can be done in pure CSS using `@keyframes` or GSAP's `clipPath` property
- Wrap entire animation in a `#intro-overlay` div with `position: fixed`, `z-index: 9999`, `background: #FFFFFF`
- On animation end (`2.50s`), set `display: none` and trigger website entrance
- For performance: use `will-change: transform, opacity` on animated elements
- Test on Chrome, Safari (clip-path support), Firefox, and iOS Safari
- Respect `prefers-reduced-motion`: if enabled, skip animation entirely and show website directly

```css
@media (prefers-reduced-motion: reduce) {
  #intro-overlay { display: none !important; }
}
```

---

## 9. DELIVERABLE CHECKLIST

- [ ] 2.5 second animation, 5 distinct phases
- [ ] Colors strictly: `#FFC2D1`, `#FFFFFF`, `#CED4DA`, `#1A1A1A` (shadows only)
- [ ] Clinic name uses cinematic slice/split vertical reveal
- [ ] Silver line draws from center outward (Phase 2)
- [ ] Pink micro-dot pulse at line center (Phase 2 detail)
- [ ] Tagline fades in with upward drift (Phase 4)
- [ ] Exit is a pure white opacity dissolve (Phase 5)
- [ ] Cross-fades seamlessly into website first section
- [ ] Fully responsive across 3 breakpoints
- [ ] `prefers-reduced-motion` respected
- [ ] No sound, no looping, no loading indicators

---

*Motion Opening Prompt v1.0 — NEEL DENTISTRY*
*Clean & Minimal | Cinematic Slice Reveal | 2.5s Duration*
