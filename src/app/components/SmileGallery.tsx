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

export function SmileGallerySection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFC2D1]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl font-bold font-heading text-[#333333] mb-4"
          >
            Smile Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#666666] text-base sm:text-lg leading-relaxed"
          >
            Browse through our gallery of successful, life-changing transformations.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <Link
                to="/smile-gallery"
                className="relative group overflow-hidden cursor-pointer block rounded-2xl aspect-[4/3] border border-border shadow-md hover:shadow-xl transition-all duration-500 bg-white"
              >
                {/* Photo Layer */}
                <img
                  src={item.img}
                  alt={item.tag}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />
                
                {/* Ethereal overlay gradient */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
                  }}
                >
                  <span className="text-[#FFC2D1] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-1.5 font-sans">
                    {item.tag}
                  </span>
                  <span className="text-white text-base sm:text-lg font-bold flex items-center gap-1 font-sans group-hover:translate-x-1 transition-transform duration-300">
                    View Results <ArrowRight size={14} className="text-[#FFC2D1]" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Link */}
        <div className="text-center mt-12">
          <Link
            to="/smile-gallery"
            className="inline-flex items-center gap-2 text-[#333333] hover:text-[#FFC2D1] font-bold text-sm tracking-widest uppercase transition-colors font-sans group"
          >
            View All Results 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
