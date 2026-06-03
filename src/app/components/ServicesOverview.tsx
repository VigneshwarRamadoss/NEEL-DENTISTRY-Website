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

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  hover: {
    y: -8,
    boxShadow: "0 16px 40px rgba(255, 194, 209, 0.30)",
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

const underlineVariants = {
  rest: { width: "0%" },
  hover: { width: "100%", transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const } },
};


export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-[#333333] mb-3">
            Comprehensive Dental Care
          </h2>
          <p className="text-muted-foreground">
            A wide range of services tailored to your unique needs, using the latest technology.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-full"
            >
              <Link to={service.path} className="block h-full outline-none">
                <motion.div
                  className="group flex flex-col bg-white overflow-hidden rounded-2xl border border-border h-full"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={cardHoverVariants}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 sm:p-8 flex-grow flex flex-col relative">
                    <h4 className="text-[#333333] mb-2">
                      {service.title}
                    </h4>

                    <p className="text-muted-foreground mb-6 flex-grow">
                      {service.description}
                    </p>

                    <div className="mt-auto space-y-4">
                      <p className="text-[#555555] font-bold text-xs uppercase tracking-[0.12em] mb-4">
                        {service.hook}
                      </p>

                      <span className="inline-flex items-center gap-2 text-gray-800 font-semibold text-sm group-hover:gap-3 transition-all">
                        Learn More <ArrowRight size={16} />
                      </span>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-primary"
                      variants={underlineVariants}
                    />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-3 bg-[#333333] hover:bg-[#1a1a1a] text-white h-14 px-10 rounded-xl font-sans font-bold text-base transition-all duration-300 shadow-lg active:scale-95 w-full sm:w-auto"
          >
            View All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
