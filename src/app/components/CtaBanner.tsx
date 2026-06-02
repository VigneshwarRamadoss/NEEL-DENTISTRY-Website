import { motion } from "motion/react";
import { Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <p className="font-sans font-bold text-sm uppercase tracking-[0.2em] text-black/60 mb-4">
            Most patients are seen within 48 hours
          </p>

          {/* Headline */}
          <h2 className="text-black mb-10 leading-tight">
            Your next appointment<br />
            is one call away.
          </h2>

          {/* Level 1 CTA */}
          <a
            href="tel:+919655300036"
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-black h-14 px-10 rounded-xl font-sans font-bold text-base tracking-wide transition-all duration-300 shadow-lg active:scale-95 w-full sm:w-auto"
          >
            <Phone size={18} fill="currentColor" />
            Call Now — +91 96553 00036
          </a>

          {/* Trust micro-copy */}
          <p className="font-sans text-base text-black/60 mt-8 leading-relaxed">
            No referral needed &nbsp;·&nbsp; All ages welcome &nbsp;·&nbsp; Same-day emergency slots available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
