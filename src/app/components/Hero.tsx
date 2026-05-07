import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  const whatsappUrl = "https://wa.me/919655300036?text=Hello!%20I'd%20like%20to%20start%20my%20smile%20journey%20with%20Neel%20Dentistry.";

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.postimg.cc/wjLsx7mg/Enhance-the-PNG-to-4k-202605022239.jpg"
          alt="The Neel Dentistry Team"
          className="w-full h-full object-cover object-center"
        />
        {/* Darker overlay for text legibility */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        <div className="max-w-[640px]">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white mb-5"
          >
            Exceptional Dental Care,<br />
            Delivered With Warmth.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans font-normal text-lg sm:text-xl text-white/80 max-w-[480px] mb-10"
          >
            Sculpting unique smiles.
          </motion.p>

          {/* CTA grouping */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5"
          >
            {/* Primary CTA */}
            <a
              href="tel:+919655300036"
              className="group flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-black h-14 px-10 rounded-xl font-sans font-bold text-base tracking-wide transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" height="18" 
                viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="2.5" 
                strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.3-2.3a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now — +91 96553 00036
            </a>

            {/* Secondary CTA */}
            <Link
              to="/services"
              className="group flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 h-14 px-8 rounded-xl font-sans font-semibold text-base transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              View Our Services
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* WhatsApp micro-copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.0 }}
            className="font-sans text-sm text-white/60 mt-6"
          >
            Or WhatsApp us directly:{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all"
            >
              +91 96553 00036
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
