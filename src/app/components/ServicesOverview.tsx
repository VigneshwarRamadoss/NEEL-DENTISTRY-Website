import { motion } from "motion/react";
import { ArrowRight, Stethoscope, Sparkles, SmilePlus } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description: "Comprehensive checkups, cleanings, and preventive care to keep your smile healthy and bright for a lifetime.",
    image: "https://images.unsplash.com/photo-1777331903190-341a3dd0441b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjaGVja3VwfGVufDF8fHx8MTc3Nzk2MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your confidence with teeth whitening, porcelain veneers, and complete smile makeovers.",
    image: "https://images.unsplash.com/photo-1734518352247-706431856d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwd29ya2luZyUyMHRvb2x8ZW58MXx8fHwxNzc3OTYwMjcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: SmilePlus,
    title: "Orthodontics",
    description: "Achieve the perfectly straight smile you've always wanted with modern braces and clear aligner therapies.",
    image: "https://images.unsplash.com/photo-1720685193942-5a1c5ac7fd80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFjZXMlMjBvcnRob2RvbnRpY3N8ZW58MXx8fHwxNzc3OTYwMjc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-[#fff5f7]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#ffc2d1] font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Comprehensive Dental Care</h2>
          <p className="text-gray-600 text-lg">
            We provide a wide range of dental services tailored to your unique needs, using the latest technology and techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md z-20">
                    <Icon className="text-[#ffc2d1]" size={24} />
                  </div>
                </div>
                
                <div className="pt-10 pb-8 px-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                    {service.description}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-[#ffc2d1] font-semibold hover:text-[#ffb3c6] transition-colors mt-auto">
                    Learn More <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/services" 
            className="bg-[#ced4da] hover:bg-[#adb5bd] text-gray-900 px-10 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 group"
          >
            View All Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
