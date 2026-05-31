import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 1800; // ms
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const TRUST_ITEMS = [
  { icon: "🏆", stat: 20, suffix: "+", label: "Years Experience" },
  { icon: "😊", stat: 2400, suffix: "+", label: "Happy Patients" },
  { icon: "⭐", stat: 5, suffix: "-Star", label: "Rated Clinic" },
  { icon: "🚨", stat: 24, suffix: "/7", label: "Emergency Care" },
];

export function TrustBar() {
  return (
    <section className="bg-secondary py-5 px-4 sm:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 justify-center sm:justify-start"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-heading font-bold text-xl text-[#333333]">
                  <AnimatedCounter target={item.stat} suffix={item.suffix} />
                </p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
