import { motion, useScroll, useSpring } from "motion/react";
import { useMotionSafe } from "../../hooks/useMotionSafe";

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
