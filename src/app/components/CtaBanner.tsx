import { motion } from "motion/react";
import { Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section style={{ backgroundColor: "#ffc2d1", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#888888",
            marginBottom: "14px",
          }}>
            Most patients are seen within 48 hours
          </p>

          {/* Headline */}
          <h2 style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 700,
            fontSize: "28px",
            color: "#000000",
            lineHeight: 1.2,
            marginBottom: "44px",
          }}>
            Your next appointment<br />
            is one call away.
          </h2>

          {/* Level 1 CTA */}
          <a
            href="tel:+919655300036"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#FFFFFF",
              color: "#000000",
              height: "52px",
              padding: "0 36px",
              borderRadius: "6px",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "0.3px",
              textDecoration: "none",
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffb3c6";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Phone size={18} fill="currentColor" />
            Call Now — +91 96553 00036
          </a>

          {/* Trust micro-copy */}
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "13px",
            color: "#888888",
            marginTop: "24px",
            lineHeight: 1.7,
          }}>
            No referral needed &nbsp;·&nbsp; All ages welcome &nbsp;·&nbsp; Same-day emergency slots available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
