import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useMotionSafe } from "../../hooks/useMotionSafe";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  threshold?: number;
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
