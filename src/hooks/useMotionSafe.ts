import { useReducedMotion } from "motion/react";

export function useMotionSafe() {
  const prefersReduced = useReducedMotion();
  
  return {
    shouldAnimate: !prefersReduced,
    duration: (ms: number) => (prefersReduced ? 0 : ms),
    safeTransition: <T extends object>(transition: T): T | { duration: 0 } =>
      prefersReduced ? { duration: 0 } : transition,
  };
}
