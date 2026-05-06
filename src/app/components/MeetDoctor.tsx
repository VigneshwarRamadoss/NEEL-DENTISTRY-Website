import { motion } from "motion/react";
import { ArrowRight, UserCheck } from "lucide-react";
import { Link } from "react-router";

export function MeetDoctor() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="w-full h-[550px] relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://i.postimg.cc/Wprf07rY/Chat-GPT-Image-May-5-2026-02-24-07-PM.png"
                alt="Dr. Neelambari Mohan"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-8 pt-20 text-white">
                <p className="text-xl font-bold font-serif">Dr. Neelambari Mohan</p>
                <p className="text-[#ffc2d1] font-medium text-sm tracking-wide">Orthodontist & Founder</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center justify-center p-3 bg-[#ffc2d1]/20 rounded-full text-[#ffc2d1] mb-6">
              <UserCheck size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif leading-tight">
              Meet the Person Behind the Practice
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed font-serif">
              Dr. Neelambari Mohan has dedicated her career to providing advanced, minimally invasive dentistry. With expertise in Orthodontics, she combines clinical precision with genuine warmth to deliver stunning, functional results.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-serif">
              She believes that every patient deserves to be seen, heard, and cared for with complete honesty. Her philosophy is built on trust, transparency, and a gentle touch.
            </p>

            <Link to="/about" className="inline-flex items-center gap-2 text-gray-900 font-semibold text-lg hover:text-[#ffc2d1] transition-colors group">
              Full Bio & Credentials 
              <ArrowRight className="transform group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
