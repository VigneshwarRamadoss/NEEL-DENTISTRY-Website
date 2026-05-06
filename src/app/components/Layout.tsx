import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { IntroAnimation } from "./IntroAnimation";
import { WhatsAppFloating } from "./WhatsAppFloating";
import { motion } from "motion/react";

export function Layout() {
  const isReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans relative">
      <IntroAnimation />
      <motion.div
        className="flex flex-col min-h-screen"
        initial={{ opacity: isReducedMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: isReducedMotion ? 0 : 2.2 }}
      >
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloating />
      </motion.div>
    </div>
  );
}
