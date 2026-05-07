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
    <section className="py-24 bg-section-pink">
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
              className="w-full h-full object-cover rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none"
              style={{
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
            className="w-full lg:w-1/2 flex items-center py-10 lg:pl-16 lg:py-0"
          >
            <div className="max-w-[480px]">
              <h2 className="mb-5">
                A Dental Experience Unlike Any Other
              </h2>

              <p className="text-muted-foreground mb-8">
                We believe visiting the dentist shouldn't be something to dread. Our practice is designed to make you feel comfortable from the moment you walk through our doors.
              </p>

              <ul className="list-none p-0 m-0 mb-11">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-3 py-2.5 font-sans font-normal ${
                      index < benefits.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="text-primary text-lg">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground h-12 px-7 rounded-md font-sans font-bold text-[15px] no-underline transition-colors hover:bg-primary-hover"
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
