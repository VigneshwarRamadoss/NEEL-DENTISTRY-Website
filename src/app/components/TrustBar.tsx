import { motion } from "motion/react";

const trustItems = [
  { number: "20+", label: "Years of Experience" },
  { number: "2,400+", label: "Happy Patients" },
  { number: "5.0", label: "Google Rating" },
  { number: "Same-Day", label: "Emergency Slots" },
];

export function TrustBar() {
  return (
    <section className="bg-primary border-y border-black/5 py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px:6 lg:px-10">
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
              <p className="font-heading font-bold text-3xl text-primary-foreground leading-none mb-2">
                {item.number}
              </p>
              <p className="font-sans font-normal text-[13px] text-primary-foreground/60 uppercase tracking-wider">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
