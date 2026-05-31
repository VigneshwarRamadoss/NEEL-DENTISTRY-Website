import type { Variants } from "motion/react";

export const EASE = {
  enter:     [0.16, 1, 0.3, 1]    as [number,number,number,number],
  exit:      [0.7, 0, 0.84, 0]    as [number,number,number,number],
  micro:     [0.34, 1.56, 0.64, 1] as [number,number,number,number],
  cinematic: [0.43, 0.13, 0.23, 0.96] as [number,number,number,number],
};

export const DUR = {
  fast:     0.25,
  normal:   0.55,
  slow:     0.75,
  dramatic: 1.0,
};

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
