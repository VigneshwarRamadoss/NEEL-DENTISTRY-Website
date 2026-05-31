import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router";
import { useMotionSafe } from "@/hooks/useMotionSafe";

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
