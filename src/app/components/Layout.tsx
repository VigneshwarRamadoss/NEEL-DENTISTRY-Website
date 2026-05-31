import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { IntroAnimation } from "./IntroAnimation";
import { PageTransition } from "./PageTransition";
import { ScrollProgress } from "./ScrollProgress";
import { WhatsAppFloating } from "./WhatsAppFloating";

function PageSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#FFC2D1] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden">
      <ScrollProgress />
      <IntroAnimation />
      
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
