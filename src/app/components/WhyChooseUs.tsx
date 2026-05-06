import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import { Link } from "react-router";

export function WhyChooseUs() {
  const benefits = [
    { icon: ShieldCheck, text: "State-of-the-Art Technology & Equipment" },
    { icon: HeartPulse, text: "Gentle, Pain-Free Approach to Care" },
    { icon: CheckCircle2, text: "Experienced, Compassionate Professionals" },
    { icon: Sparkles, text: "Clean, Modern, and Relaxing Environment" },
  ];

  return (
    <section className="py-24 bg-[#fff5f7] border-y border-[#ffc2d1]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-[#ffc2d1]/20 rounded-3xl transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1776400985210-92f654712d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzbWlsZSUyMGRlbnRpc3RyeXxlbnwxfHx8fDE3Nzc5NjAyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Beautiful smile in modern clinic"
              className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover z-10"
            />
            {/* Small floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-[#ffc2d1]/20 p-2 rounded-full">
                  <StarIcon className="text-[#ffc2d1]" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 leading-tight">4.9/5</p>
                  <p className="text-xs text-gray-500 font-medium">Patient Reviews</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-[#ffc2d1] font-semibold tracking-wider uppercase text-sm mb-3 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
              A Dental Experience Unlike Any Other
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We believe that visiting the dentist shouldn't be something to dread. 
              Our practice is designed to make you feel comfortable and relaxed from 
              the moment you walk through our doors, delivering exceptional results 
              that speak for themselves.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 bg-white rounded-full p-1 shadow-sm text-[#ffc2d1]">
                      <Icon size={20} />
                    </div>
                    <span className="text-gray-700 font-medium text-lg leading-snug pt-1">
                      {benefit.text}
                    </span>
                  </li>
                );
              })}
            </ul>

            <Link to="/about" className="bg-[#ced4da] hover:bg-[#adb5bd] text-gray-900 px-10 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2">
              Meet Our Team
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
