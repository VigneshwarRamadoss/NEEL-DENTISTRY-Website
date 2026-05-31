import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export function useWindowSize(): WindowSize {
  const [size, setSize] = useState<WindowSize>(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    const h = typeof window !== "undefined" ? window.innerHeight : 800;
    return {
      width: w,
      height: h,
      isMobile: w < 768,
      isTablet: w >= 768 && w < 1024,
      isDesktop: w >= 1024,
    };
  });

  useEffect(() => {
    let rafId: number;
    
    const handleResize = () => {
      rafId = requestAnimationFrame(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        setSize({
          width: w,
          height: h,
          isMobile: w < 768,
          isTablet: w >= 768 && w < 1024,
          isDesktop: w >= 1024,
        });
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return size;
}
