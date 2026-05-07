import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function MeetDoctor() {
  return (
    <section style={{ padding: "96px 0", backgroundColor: "#ffc2d1" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row-reverse items-stretch gap-0">
          {/* Image Side — bleeds to section edge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <img
              src="https://i.postimg.cc/Wprf07rY/Chat-GPT-Image-May-5-2026-02-24-07-PM.png"
              alt="Dr. Neelambari Mohan"
              className="w-full h-full object-cover object-top"
              style={{
                borderRadius: "12px 0 0 12px",
                minHeight: "500px",
              }}
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex items-center"
            style={{ padding: "40px 60px 40px 0" }}
          >
            <div style={{ maxWidth: "480px" }}>
              <p style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#ffc2d1",
                marginBottom: "14px",
              }}>
                The Person Behind the Practice
              </p>

              <h2 style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 700,
                fontSize: "28px",
                color: "#000000",
                marginBottom: "20px",
                lineHeight: 1.2,
              }}>
                Dr. Neelambari Mohan
              </h2>

              <p style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "16px",
                color: "#888888",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}>
                Dr. Neelambari has dedicated her career to providing advanced, minimally invasive dentistry. With expertise in Orthodontics, she combines clinical precision with genuine warmth.
              </p>

              <p style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "16px",
                color: "#888888",
                lineHeight: 1.7,
                marginBottom: "44px",
              }}>
                She believes every patient deserves honesty, transparency, and a gentle touch.
              </p>

              <Link
                to="/about"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#000000",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                Full Bio & Credentials <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
