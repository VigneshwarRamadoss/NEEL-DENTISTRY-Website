import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Link } from "react-router";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollY } = useScroll();
  
  const bgY = useTransform(scrollY, [0, 800], [0, -240]);
  const bgYSmooth = useSpring(bgY, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const vignetteY = useTransform(scrollY, [0, 800], [0, -80]);
  
  const textY = useTransform(scrollY, [0, 800], [0, -40]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden"
    >
      {/* LAYER 1 — Background Photo */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: bgYSmooth }}
      >
        <img
          src="https://i.postimg.cc/wjLsx7mg/Enhance-the-PNG-to-4k-202605022239.jpg"
          alt="Neel Dentistry Team"
          className="w-full h-full object-cover object-center"
          style={{ transform: "scale(1.15)" }}
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

      {/* LAYER 2 — Pink warmth vignette */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          y: vignetteY,
          background: "radial-gradient(ellipse 80% 60% at 20% 60%, rgba(255,194,209,0.08) 0%, transparent 60%)",
        }}
      />

      {/* LAYER 3 — Text Content */}
      <motion.div
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="max-w-[640px]">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 20, letterSpacing: "0px" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "3px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[#BCD9DE] text-xs font-medium uppercase mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Chennai's Trusted Dental Clinic
          </motion.span>

          {/* H1 — Word-by-word reveal */}
          <motion.h1
            className="text-white mb-5 text-4xl sm:text-5xl md:text-6xl font-bold font-heading"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {"Exceptional Dental Care, Delivered With Warmth.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                variants={{
                  hidden: { opacity: 0, y: 30, rotateX: -15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                style={{ transformOrigin: "bottom center" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/80 text-lg mb-10 max-w-[480px]"
          >
            Sculpting unique smiles — from your child's first check-up to a complete smile transformation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary */}
            <motion.a
              href="tel:+919655300036"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group flex items-center justify-center gap-3 bg-[#FFC2D1] hover:bg-[#FFB3C6] text-black h-14 px-10 rounded-xl font-bold text-base tracking-wide shadow-lg shadow-[#FFC2D1]/25 whitespace-nowrap"
            >
              Call Now — +91 96553 00036
            </motion.a>
            
            {/* Secondary */}
            <motion.a
              href="/services"
              whileHover={{ scale: 1.02, y: -2, borderColor: "rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 h-14 px-8 rounded-xl font-semibold text-base whitespace-nowrap"
            >
              View Our Services
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity: textOpacity }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-1.5"
        >
          <motion.div
            className="w-1 h-2 bg-white/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
