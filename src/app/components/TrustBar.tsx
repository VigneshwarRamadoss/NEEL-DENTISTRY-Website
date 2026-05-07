import { motion } from "motion/react";

const trustItems = [
  { number: "20+", label: "Years of Experience" },
  { number: "2,400+", label: "Happy Patients" },
  { number: "5.0", label: "Google Rating" },
  { number: "Same-Day", label: "Emergency Slots" },
];

export function TrustBar() {
  return (
    <section
      style={{
        backgroundColor: "#ffc2d1",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        padding: "40px 0",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <p
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 700,
                  fontSize: "32px",
                  color: "#000000",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {item.number}
              </p>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "#888888",
                }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
