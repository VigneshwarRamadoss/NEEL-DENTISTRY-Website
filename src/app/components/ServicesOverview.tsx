import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive checkups, cleanings, and preventive care to keep your smile healthy for a lifetime.",
    image: "https://images.unsplash.com/photo-1777331903190-341a3dd0441b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjaGVja3VwfGVufDF8fHx8MTc3Nzk2MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    hook: "Accepting new patients now",
    path: "/services/general-dentistry",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your confidence with teeth whitening, porcelain veneers, and complete smile makeovers.",
    image: "https://images.unsplash.com/photo-1734518352247-706431856d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwd29ya2luZyUyMHRvb2x8ZW58MXx8fHwxNzc3OTYwMjcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    hook: "Results visible from the first visit",
    path: "/services/cosmetic-dentistry",
  },
  {
    title: "Orthodontics",
    description: "Achieve a perfectly straight smile with modern braces and clear aligner therapies.",
    image: "https://images.unsplash.com/photo-1720685193942-5a1c5ac7fd80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFjZXMlMjBvcnRob2RvbnRpY3N8ZW58MXx8fHwxNzc3OTYwMjc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    hook: "Free initial assessment included",
    path: "/services/orthodontics",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-24 bg-primary">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-black mb-3">
            Comprehensive Dental Care
          </h2>
          <p className="text-black/60">
            A wide range of services tailored to your unique needs, using the latest technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.path}
                className="group flex flex-col bg-section-pink overflow-hidden hover:shadow-xl transition-all duration-300 rounded-2xl border border-black/5 h-full"
              >
                {/* Image — 16:9 aspect */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 sm:p-8 flex-grow flex flex-col">
                  <h4 className="text-black mb-2">
                    {service.title}
                  </h4>

                  <p className="text-black/60 mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="mt-auto space-y-4">
                    <p className="text-primary font-bold text-xs uppercase tracking-wider">
                      {service.hook}
                    </p>

                    <span className="inline-flex items-center gap-2 text-black font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white h-14 px-10 rounded-xl font-sans font-bold text-base transition-all duration-300 shadow-lg active:scale-95 w-full sm:w-auto"
          >
            View All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
