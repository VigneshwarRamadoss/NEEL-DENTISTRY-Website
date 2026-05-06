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
    <section style={{ padding: "96px 0", backgroundColor: "#FFFFFF" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section header — 2 lines max */}
        <div className="text-center max-w-2xl mx-auto" style={{ marginBottom: "56px" }}>
          <h2 style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 700,
            fontSize: "28px",
            color: "#000000",
            marginBottom: "12px",
          }}>
            Comprehensive Dental Care
          </h2>
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "16px",
            color: "#888888",
            lineHeight: 1.7,
          }}>
            A wide range of services tailored to your unique needs, using the latest technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "28px" }}>
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
                className="group flex flex-col bg-white overflow-hidden hover:shadow-lg transition-all duration-300"
                style={{ borderRadius: "12px", border: "1px solid #E8E8E8" }}
              >
                {/* Image — 16:9 aspect, border-radius 12px, no shadow */}
                <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div style={{ padding: "24px" }} className="flex-grow flex flex-col">
                  <h4 style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#000000",
                    marginBottom: "8px",
                  }}>
                    {service.title}
                  </h4>

                  <p style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "16px",
                    color: "#888888",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                    flexGrow: 1,
                  }}>
                    {service.description}
                  </p>

                  {/* Conversion hook line */}
                  <p style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#ffc2d1",
                    marginBottom: "8px",
                  }}>
                    {service.hook}
                  </p>

                  {/* Level 3 directional link */}
                  <span
                    className="inline-flex items-center gap-1 group-hover:underline"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#000000",
                    }}
                  >
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "56px" }}>
          <Link
            to="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "transparent",
              color: "#000000",
              height: "48px",
              padding: "0 28px",
              borderRadius: "6px",
              border: "1.5px solid #000000",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              textDecoration: "none",
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#F5F5F5";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
