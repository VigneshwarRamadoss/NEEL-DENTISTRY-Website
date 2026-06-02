# NEEL DENTISTRY Website Pre-Loader — Master Prompt

## Role
You are a senior award-winning UI/UX animation designer and creative front-end engineer with 20+ years of experience building premium healthcare, luxury, and Awwwards-level web experiences.

Your task is to design and implement a **world-class, groundbreaking pre-loader** for the NEEL DENTISTRY website using the attached logo PNG as the main visual asset. The animation must feel premium, calm, clinical, futuristic, and emotionally memorable — not like a normal spinner.

---

## Brand Context
**Brand:** NEEL DENTISTRY  
**Industry:** Premium dental clinic / dental care  
**Logo:** Abstract tooth mark with inner organic curve, smile arc, and sparkle elements  
**Mood:** Premium, clean, trustworthy, soft, modern, precise, human, clinical luxury  
**Primary visual language:** Black background, charcoal/white logo, soft glow, dental-light shimmer, subtle sparkle motion

The pre-loader should make the user feel:

> “Something precise, premium, and beautiful is being prepared for my smile.”

---

## Core Concept
### **“The Smile Forms Before the Page”**
The loader should tell a tiny 2.5–3 second story:

1. **A dark calm space appears.**  
   The screen feels silent, polished, premium, and clinical.

2. **A surgical light sweep reveals the tooth shape.**  
   The logo does not simply fade in. It is discovered through light, like a dental lamp slowly passing over a polished surface.

3. **The tooth outline draws itself with precision.**  
   The outer tooth curve should animate like a refined SVG stroke reveal, using smooth easing and a slight organic delay.

4. **The inner curve blooms upward.**  
   The inner shape should feel like a soft brush of care, not a mechanical line.

5. **The smile arc draws from left to right.**  
   The bottom smile line should become the emotional anchor. It should sweep across the screen and subtly become the transition mask into the homepage.

6. **The sparkle marks pulse once.**  
   The sparkle should feel clean and premium, not cartoonish. Use tiny bloom, blur, and opacity changes.

7. **The logo becomes a reveal portal.**  
   The loader exits by expanding the smile arc or logo glow into a smooth page reveal. The homepage should feel like it is being uncovered by the smile.

---

## Animation Timeline
Total duration: **2.5s–3.2s maximum**. Never make users wait unnecessarily.

### 0ms–300ms — Black Arrival
- Full-screen pure black or near-black background: `#020203` / `#050505`.
- Add a very subtle radial gradient behind the logo.
- Optional: add extremely subtle film grain/noise at 2–4% opacity.
- No heavy particles. Keep it premium.

### 300ms–900ms — Light Scan Reveal
- A soft horizontal/diagonal dental-light sweep passes over the logo area.
- The logo silhouette becomes visible through the light sweep.
- Use `mix-blend-mode: screen`, blurred gradient, or SVG mask.
- Motion should feel like Apple-level smoothness: calm, controlled, no bounce.

### 900ms–1600ms — Tooth Outline Draw
- Convert the logo mark into SVG paths if possible.
- Animate the outer tooth stroke using `stroke-dasharray` and `stroke-dashoffset`.
- Easing: `power3.out` or cubic-bezier similar to `cubic-bezier(0.22, 1, 0.36, 1)`.
- Stroke should look precise, smooth, and premium.
- Use soft charcoal `#5B5B5B` at first, then transition to off-white `#F5F5F2` near completion.

### 1300ms–2000ms — Inner Curve Bloom
- Animate the inner organic curve slightly after the outer shape.
- The curve should reveal with a softer movement than the outer tooth.
- Add a barely visible glow trail behind the curve.
- Avoid cartoon liquid effects. This is dental luxury, not playful SaaS.

### 1700ms–2300ms — Smile Arc Sweep
- Animate the bottom smile arc from left to right.
- The arc should stretch wider than the logo and feel like it is “drawing a smile.”
- At the end of the arc, create a subtle crossing highlight at the center.
- The smile arc can become the transition wipe that reveals the homepage.

### 2100ms–2700ms — Sparkle Pulse + Logo Fill
- Sparkles appear in sequence: large sparkle first, then smaller ones.
- Add one clean pulse: scale `0.85 → 1.08 → 1`, opacity `0 → 1 → 0.85`.
- Fill the logo with soft off-white or refined grey.
- Add a very soft glow only around the edges. Do not overdo neon.

### 2700ms–3200ms — Page Reveal Exit
- The smile arc expands vertically or becomes a curved mask reveal.
- The logo scales up slightly, blurs by 2–4px, and fades out.
- The homepage content enters with a soft upward motion and opacity reveal.
- Transition must feel seamless — no hard cut.

---

## Visual Design Requirements
- Full viewport pre-loader: `position: fixed; inset: 0; z-index: 9999`.
- Background: near-black luxury clinical theme.
- Logo position: center of screen.
- Logo size: responsive; around `120px–180px` desktop, `96px–140px` mobile.
- Use the attached PNG as the fallback asset.
- If the vector logo is available, use SVG paths for stroke animation.
- Do not distort, recolor randomly, crop, stretch, or redesign the logo.
- No generic spinning circles.
- No loading bars unless they are integrated into the smile arc.
- No childish dental icons, tooth emojis, toothbrush animations, or stock medical symbols.
- Use only refined motion, light, blur, opacity, scale, masks, and stroke animation.

---

## Technical Stack Assumption
Build for this website stack:

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- GSAP + ScrollTrigger already available in the project
- Motion / Framer Motion available if needed
- Lenis used for smooth scrolling after page load

Use **GSAP timeline** for the pre-loader because it gives the most control over timing, easing, masks, and SVG stroke reveals.

---

## Implementation Requirements
Create a production-ready pre-loader component:

### Files to Create
```txt
src/components/PreLoader.tsx
src/components/preloader.css
```

Or, if the project prefers Tailwind-only styling:

```txt
src/components/PreLoader.tsx
```

### Component Behavior
- Show pre-loader immediately on first page load.
- Hide it after the animation completes.
- Lock body scroll while pre-loader is active.
- Release scroll when the pre-loader finishes.
- Add optional `sessionStorage` logic so it plays once per browser session.
- Add `prefers-reduced-motion` support:
  - If enabled, show static logo for 400–600ms, then fade into page.
- Ensure no layout shift when the pre-loader exits.
- The loader should never block the website for more than 3.2 seconds.

### Performance Requirements
- Must run at 60fps.
- Animate only transform, opacity, filter, mask-position, stroke-dashoffset, and clip-path where possible.
- Avoid heavy canvas/WebGL unless absolutely necessary.
- No video files.
- Keep asset weight light.
- Use lazy hydration or simple state control.
- Clean up all GSAP timelines on component unmount.

---

## Exact Creative Direction
Make the animation feel like this:

> A premium dental logo is being revealed by a soft clinical light. The tooth mark draws itself with surgical precision. The inner curve blooms gently. The smile line sweeps across the bottom and becomes the page transition. The sparkles pulse once like polished enamel catching light. Then the whole screen opens into the website.

The final result should feel:

- Premium, not loud
- Clinical, not cold
- Emotional, not cheesy
- Futuristic, not gimmicky
- Minimal, not empty
- Smooth, not overanimated
- Luxury healthcare, not generic dental clinic

---

## Motion References to Follow as Principles
Do not copy any specific site. Use these principles:

- **Awwwards-level landing page polish:** cinematic first impression, smooth reveal, strong restraint
- **Apple-style transition quality:** calm timing, no unnecessary bounce, elegant fade/scale
- **Stripe-style interaction precision:** exact easing, clean surfaces, performance-first
- **GSAP showcase-level sequencing:** layered timeline, mask reveal, SVG draw, controlled choreography
- **Luxury brand loading screens:** minimal elements, dramatic negative space, premium light treatment

---

## Developer Prompt
Use this prompt to generate the implementation:

```prompt
Build a premium, award-winning pre-loader for the NEEL DENTISTRY website using the attached transparent PNG logo as the central brand asset.

The loader must be full-screen, black luxury healthcare style, and feel like a cinematic dental-light reveal. Do not create a generic spinner. The animation should tell a short story: dark calm screen → soft clinical light sweep → tooth logo outline appears/draws → inner curve blooms → smile arc sweeps left to right → sparkles pulse subtly → smile arc becomes a smooth transition wipe into the homepage.

Use React + TypeScript + Vite + Tailwind CSS v4. Use GSAP for the main timeline. If SVG paths are available, animate stroke-dasharray/stroke-dashoffset for the tooth outline, inner curve, smile arc, and sparkle marks. If only the PNG is available, use the PNG as an alpha mask/fallback and simulate the reveal using CSS masks, gradient light sweep, opacity, blur, and transform animations.

Animation duration must be between 2.5 and 3.2 seconds. Keep motion premium, restrained, smooth, and clinically precise. Use near-black background (#020203), charcoal logo tone, off-white highlight (#F5F5F2), subtle radial glow, and a small polished enamel sparkle effect. Avoid neon, excessive particles, bouncing, dental cartoons, progress bars, toothbrush icons, or playful effects.

Create a production-ready component named PreLoader.tsx. It should lock body scroll while active, clean up GSAP timelines on unmount, support prefers-reduced-motion, avoid layout shift, and hide itself after animation completion. Add optional sessionStorage so the full animation plays once per session. The exit transition should reveal the homepage smoothly using the smile arc or logo glow as a mask/wipe.

Deliver clean, maintainable code with clear comments explaining the timeline stages. The final result should look like a premium dental clinic brand opening — calm, confident, precise, and memorable.
```

---

## Acceptance Criteria
The pre-loader is successful only if:

- It feels custom to the NEEL DENTISTRY logo.
- It does not look like a template.
- The smile arc becomes a meaningful part of the transition.
- The logo remains clean, premium, and undistorted.
- The animation works smoothly on mobile and desktop.
- The total duration stays under 3.2 seconds.
- Reduced-motion users get a simplified experience.
- The homepage reveal feels intentional, not like the loader simply disappears.

---

## Final Quality Bar
This should not feel like a “loading screen.”  
It should feel like the **first brand moment** of NEEL DENTISTRY.

The animation should make users pause for a second and think:

> “This clinic feels premium before I even see the website.”
