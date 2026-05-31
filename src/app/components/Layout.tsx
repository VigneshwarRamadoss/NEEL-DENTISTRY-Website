import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { IntroAnimation } from "./IntroAnimation";
import { PageTransition } from "./PageTransition";
import { ScrollProgress } from "./ScrollProgress";
import { WhatsAppFloating } from "./WhatsAppFloating";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

function PageSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#FFC2D1] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export function Layout() {
  const { pathname } = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  useSmoothScroll();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden">
      <ScrollProgress />
      
      <AnimatePresence>
        {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <PageTransition>
            <Suspense fallback={<PageSkeleton />}>
              <Outlet />
            </Suspense>
          </PageTransition>
        </main>
        <Footer />
        <WhatsAppFloating />
      </div>
    </div>
  );
}

