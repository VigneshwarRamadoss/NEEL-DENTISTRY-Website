import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  const whatsappUrl = "https://wa.me/919655300036?text=Hello!%20I'd%20like%20to%20start%20my%20smile%20journey%20with%20Neel%20Dentistry.";

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.postimg.cc/wjLsx7mg/Enhance-the-PNG-to-4k-202605022239.jpg"
          alt="The Neel Dentistry Team"
          className="w-full h-full object-cover object-center"
        />
        {/* Darker overlay for text legibility */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(13,13,13,0.45)" }} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        <div className="max-w-[640px]">
          {/* Headline — 2 lines max */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: 1.15,
              letterSpacing: "-0.5px",
              color: "#FFFFFF",
              marginBottom: "20px",
            }}
          >
            Exceptional Dental Care,<br />
            Delivered With Warmth.
          </motion.h1>

          {/* Sub-headline — 1 line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "480px",
              marginBottom: "40px",
            }}
          >
            Trusted by families across Chennai for 20+ years.
          </motion.p>

          {/* CTA grouping */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            {/* Level 1 CTA — Primary */}
            <a
              href="tel:+919655300036"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                backgroundColor: "#ffc2d1",
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
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffb3c6";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffc2d1";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Call Now — +91 96553 00036
            </a>

            {/* Level 2 CTA — Secondary */}
            <Link
              to="/services"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: "transparent",
                color: "#FFFFFF",
                height: "48px",
                padding: "0 28px",
                borderRadius: "6px",
                border: "1.5px solid #FFFFFF",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                transition: "all 200ms ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              View Our Services
            </Link>
          </motion.div>

          {/* Plain text fallback — removes last psychological barrier */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.0 }}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              marginTop: "20px",
            }}
          >
            Or WhatsApp us directly:{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.8)", textDecoration: "underline" }}
            >
              +91 96553 00036
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
