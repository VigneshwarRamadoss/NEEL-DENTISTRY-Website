import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const images = [
  {
    img: "https://images.unsplash.com/photo-1653990255011-1a86c807d2c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwd29tYW4lMjB3aGl0ZSUyMHRlZXRofGVufDF8fHx8MTc3Nzk2MDI3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Teeth Whitening",
  },
  {
    img: "https://images.unsplash.com/photo-1758523671894-b5891a2ef3b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1hbiUyMHBlcmZlY3QlMjB0ZWV0aHxlbnwxfHx8fDE3Nzc5NjAyODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Porcelain Veneers",
  },
  {
    img: "https://images.unsplash.com/photo-1776400985210-92f654712d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzbWlsZSUyMGRlbnRpc3RyeXxlbnwxfHx8fDE3Nzc5NjAyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Smile Makeover",
  },
];

export function SmileGallery() {
  return (
    <section style={{ padding: "96px 0", backgroundColor: "#F5F5F5" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header — trimmed to 2 lines */}
        <div className="max-w-2xl" style={{ marginBottom: "56px" }}>
          <h2 style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 700,
            fontSize: "28px",
            color: "#000000",
            marginBottom: "12px",
          }}>
            Smile Gallery
          </h2>
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "16px",
            color: "#888888",
            lineHeight: 1.7,
          }}>
            Browse through our gallery of successful transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "28px" }}>
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to="/smile-gallery"
                className="relative group overflow-hidden cursor-pointer block"
                style={{ borderRadius: "12px", aspectRatio: "4/3" }}
              >
                <img
                  src={item.img}
                  alt={item.tag}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                    padding: "24px",
                  }}
                >
                  <span style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#ffc2d1",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "4px",
                  }}>
                    {item.tag}
                  </span>
                  <span style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                  }}>
                    View Results →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "44px" }}>
          <Link
            to="/smile-gallery"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "#000000",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.textDecoration = "underline"; }}
            onMouseLeave={(e) => { e.currentTarget.style.textDecoration = "none"; }}
          >
            View All Results <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
