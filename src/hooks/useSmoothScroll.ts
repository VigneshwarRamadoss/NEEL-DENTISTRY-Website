import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import Lenis from "lenis";

export function useSmoothScroll() {
  const { pathname } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.4, // Silky 1.4s smooth deceleration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Keep scroll progress and scroll reveal hooks synchronized
    const handleScrollToTop = () => {
      lenis.scrollTo(0, { immediate: true });
    };

    window.addEventListener("popstate", handleScrollToTop);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      window.removeEventListener("popstate", handleScrollToTop);
    };
  }, []);

  // Silky scroll-to-top reset on SPA page routing changes
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [pathname]);
}

