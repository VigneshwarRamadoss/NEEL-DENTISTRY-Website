import { motion } from "motion/react";
import { Link } from "react-router";

const benefits = [
  "State-of-the-Art Technology & Equipment",
  "Gentle, Pain-Free Approach to Care",
  "Experienced, Compassionate Professionals",
  "Clean, Modern, and Relaxing Environment",
];

export function WhyChooseUs() {
  return (
    <section style={{ padding: "96px 0", backgroundColor: "#FFFFFF" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {/* Image Side — bleeds to section edge, no padding */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1776400985210-92f654712d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzbWlsZSUyMGRlbnRpc3RyeXxlbnwxfHx8fDE3Nzc5NjAyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Beautiful smile"
              className="w-full h-full object-cover"
              style={{
                borderRadius: "0 12px 12px 0",
                minHeight: "480px",
              }}
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex items-center"
            style={{ padding: "40px 0 40px 60px" }}
          >
            <div style={{ maxWidth: "480px" }}>
              <h2 style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 700,
                fontSize: "28px",
                color: "#000000",
                marginBottom: "20px",
                lineHeight: 1.2,
              }}>
                A Dental Experience Unlike Any Other
              </h2>

              <p style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "16px",
                color: "#888888",
                lineHeight: 1.7,
                marginBottom: "32px",
              }}>
                We believe visiting the dentist shouldn't be something to dread. Our practice is designed to make you feel comfortable from the moment you walk through our doors.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 44px 0" }}>
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#000000",
                      padding: "10px 0",
                      borderBottom: index < benefits.length - 1 ? "1px solid #E8E8E8" : "none",
                    }}
                  >
                    <span style={{ color: "#ffc2d1", fontSize: "18px" }}>✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "transparent",
                  color: "#000000",
                  height: "48px",
                  padding: "0 28px",
                  borderRadius: "6px",
                  border: "1.5px solid #000000",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  transition: "all 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F5F5F5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Meet Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
