import { motion } from "motion/react";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

export function SmileGallery() {
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

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#ffc2d1] font-semibold tracking-wider uppercase text-sm mb-2 block">Our Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Smile Gallery</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We take pride in crafting beautiful, natural-looking smiles. Browse through our gallery of successful transformations to see the potential for your own smile.
            </p>
          </div>
          <button className="hidden md:inline-flex bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 px-6 py-3 rounded-full font-medium transition-colors items-center gap-2 shadow-sm whitespace-nowrap">
            <ImageIcon size={18} /> View Full Gallery
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl shadow-sm aspect-[4/5] cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.tag}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest inline-block w-max mb-3">
                  {item.tag}
                </span>
                <div className="flex items-center justify-between">
                  <p className="text-white font-bold font-serif text-xl group-hover:text-[#ffc2d1] transition-colors">Before & After</p>
                  <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 md:hidden text-center">
          <button className="bg-white border border-gray-200 text-gray-900 px-8 py-3.5 rounded-full font-medium shadow-sm flex items-center gap-2 mx-auto">
            <ImageIcon size={18} /> View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
