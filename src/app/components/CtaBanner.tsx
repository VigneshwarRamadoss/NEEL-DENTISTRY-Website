import { motion } from "motion/react";
import { PhoneCall, Calendar } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-24 bg-[#ffc2d1] relative overflow-hidden">
      {/* Decorative abstract elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[140%] bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-3xl transform rotate-12 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[140%] bg-gradient-to-bl from-[#ffb3c6] to-transparent rounded-full blur-3xl transform -rotate-12 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-gray-800 font-bold tracking-[3px] uppercase text-sm mb-4 block">Ready for a change?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
            Schedule Your Next Dental Visit Today
          </h2>
          <p className="text-gray-800 text-lg md:text-xl mb-12 leading-relaxed opacity-90 max-w-2xl mx-auto">
            Experience the highest standard of dental care in a relaxing environment. We are currently accepting new patients and look forward to seeing your smile.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <a
              href="tel:+1234567890"
              className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              <PhoneCall size={22} />
              +91 96553 00036
            </a>
            <button className="w-full sm:w-auto bg-white/50 backdrop-blur-md hover:bg-white text-gray-900 border border-white/60 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 transform hover:-translate-y-1">
              <Calendar size={22} />
              Book Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
