import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function MeetDoctor() {
  return (
    <section className="py-24 bg-primary">
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
              className="w-full h-full object-cover object-top rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
              style={{
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
            className="w-full lg:w-1/2 flex items-center py-10 lg:pr-16 lg:py-0"
          >
            <div className="max-w-[480px]">
              <p className="font-sans font-bold text-[11px] tracking-[2.5px] uppercase text-primary-foreground/70 mb-3.5">
                The Person Behind the Practice
              </p>

              <h2 className="text-primary-foreground mb-5">
                Dr. Neelambari Mohan
              </h2>

              <p className="text-primary-foreground/80 mb-4">
                Dr. Neelambari has dedicated her career to providing advanced, minimally invasive dentistry. With expertise in Orthodontics, she combines clinical precision with genuine warmth.
              </p>

              <p className="text-primary-foreground/80 mb-11">
                She believes every patient deserves honesty, transparency, and a gentle touch.
              </p>

              <Link
                to="/about"
                className="font-sans text-sm font-normal text-primary-foreground no-underline inline-flex items-center gap-1.5 transition-all hover:underline"
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
