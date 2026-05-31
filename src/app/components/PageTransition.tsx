import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router";
import { useMotionSafe } from "../../hooks/useMotionSafe";

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
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{
          duration: 0.22, // Silky, super-snappy 220ms ease-out reveal
          ease: [0.16, 1, 0.3, 1], // Cinematic cubic-bezier
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
