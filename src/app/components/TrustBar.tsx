import { Award, Star, Users, Clock } from "lucide-react";
import { motion } from "motion/react";

const trustItems = [
  { icon: Award, stat: "20+ Years Experience", label: "Trusted by families" },
  { icon: Users, stat: "2,400+ Happy Patients", label: "Smiling brighter today" },
  { icon: Star, stat: "5-Star Rated", label: "On Google & Yelp" },
  { icon: Clock, stat: "Same-Day Care", label: "For dental emergencies" },
];

export function TrustBar() {
  return (
    <section className="bg-white py-14 border-y border-[#ced4da]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-[#f8f9fa] rounded-2xl border border-[#ced4da]/20 flex items-center justify-center mb-5 group-hover:border-[#ffc2d1] group-hover:bg-[#ffc2d1]/5 transition-all duration-300">
                  <Icon className="text-[#ffc2d1]" size={30} />
                </div>
                <h4 className="font-bold text-gray-900 mb-1 font-sans uppercase tracking-widest text-xs">{item.stat}</h4>
                <p className="text-sm text-gray-500 font-serif italic">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
