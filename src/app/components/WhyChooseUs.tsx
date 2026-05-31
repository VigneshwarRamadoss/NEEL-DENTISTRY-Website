import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Link } from "react-router";
import { useMotionSafe } from "@/hooks/useMotionSafe";

const benefits = [
  "State-of-the-Art Technology & Equipment",
  "Gentle, Pain-Free Approach to Care",
  "Experienced, Compassionate Professionals",
  "Clean, Modern, and Relaxing Environment",
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const { shouldAnimate } = useMotionSafe();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });
  
  const imageY = useTransform(smoothScrollY, [0, 1], [40, -40]);
  const textY = useTransform(smoothScrollY, [0, 1], [20, -20]);

  const benefitVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section ref={sectionRef} className="py-24 bg-section-pink overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 overflow-hidden rounded-xl"
            style={{ y: shouldAnimate ? imageY : 0 }}
          >
            <img
              src="https://images.unsplash.com/photo-1776400985210-92f654712d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzbWlsZSUyMGRlbnRpc3RyeXxlbnwxfHx8fDE3Nzc5NjAyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Beautiful smile"
              className="w-full h-full object-cover scale-[1.1]"
              style={{ minHeight: "480px" }}
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex items-center py-10 lg:pl-16 lg:py-0"
            style={{ y: shouldAnimate ? textY : 0 }}
          >
            <div className="max-w-[480px]">
              <h2 className="mb-5 text-[#333333]">
                A Dental Experience Unlike Any Other
              </h2>

              <p className="text-muted-foreground mb-8">
                We believe visiting the dentist shouldn't be something to dread. Our practice is designed to make you feel comfortable from the moment you walk through our doors.
              </p>

              <ul className="list-none p-0 m-0 mb-11">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10% 0px" }}
                    variants={benefitVariants}
                    className={`flex items-center gap-3 py-2.5 font-sans font-normal text-[#555555] ${
                      index < benefits.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="text-primary text-lg">✓</span>
                    {benefit}
                  </motion.li>
                ))}
              </ul>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#333333] hover:bg-[#1a1a1a] text-white h-12 px-7 rounded-xl font-sans font-bold text-[15px] no-underline transition-colors"
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
