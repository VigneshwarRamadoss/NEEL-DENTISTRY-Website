import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";
import { Award, Users, Star, Clock } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000; // ms
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
  { icon: <Award className="w-7 h-7 text-amber-400 stroke-[1.5]" />, stat: 20, suffix: "+", label: "Years Experience" },
  { icon: <Users className="w-7 h-7 text-amber-400 stroke-[1.5]" />, stat: 2400, suffix: "+", label: "Happy Patients" },
  { icon: <Star className="w-7 h-7 text-amber-400 stroke-[1.5]" />, stat: 5, suffix: "-Star", label: "Rated Clinic" },
  { icon: <Clock className="w-7 h-7 text-amber-400 stroke-[1.5]" />, stat: 24, suffix: "/7", label: "Emergency Care" },
];

export function TrustBar() {
  return (
    <section className="bg-[#0B0F19] py-10 px-4 sm:px-10 border-t border-b border-white/5 relative z-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/10">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`flex items-center gap-5 justify-center sm:justify-start ${i !== 0 ? 'lg:pl-10 lg:justify-center' : ''} ${i === 0 ? 'lg:justify-start' : ''} ${i === 3 ? 'lg:justify-end' : ''}`}
            >
              <div className="flex-shrink-0 bg-white/5 p-3.5 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(251,191,36,0.06)] flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex flex-col text-left">
                <p className="font-heading font-extrabold text-2xl md:text-3xl text-white tracking-tight leading-none mb-1.5 drop-shadow-sm">
                  <AnimatedCounter target={item.stat} suffix={item.suffix} />
                </p>
                <p className="text-xs md:text-sm text-white/60 uppercase tracking-[0.15em] font-semibold">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
