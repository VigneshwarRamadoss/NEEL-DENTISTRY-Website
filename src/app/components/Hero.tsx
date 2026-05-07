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
            className="flex flex-col sm:flex-row items-center sm:items-start gap-5"
          >
            {/* Level 1 CTA — Primary */}
            <a
              href="tel:+919655300036"
              className="group"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                backgroundColor: "#ffc2d1",
                color: "#000000",
                height: "56px",
                padding: "0 40px",
                borderRadius: "12px",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                letterSpacing: "0.5px",
                textDecoration: "none",
                transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 14px rgba(255, 194, 209, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.backgroundColor = "#ffb3c6";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 194, 209, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "#ffc2d1";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(255, 194, 209, 0.2)";
              }}
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

            {/* Level 2 CTA — Secondary (Glassmorphism) */}
            <Link
              to="/services"
              className="group"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                color: "#FFFFFF",
                height: "56px",
                padding: "0 32px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View Our Services
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
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
