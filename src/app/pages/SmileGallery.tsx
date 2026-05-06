import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Star, Sparkles, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";

// ─── Data ────────────────────────────────────────────────────────────────────
const galleryItems = [
  {
    id: 1,
    category: "Veneers",
    title: "Smile Transformation",
    desc: "Porcelain veneers — 8 upper teeth restored",
    before: "https://images.unsplash.com/photo-1593022356769-11f09a79a24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    after:  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    duration: "3 visits",
    rating: 5,
  },
  {
    id: 2,
    category: "Whitening",
    title: "Brightening Session",
    desc: "In-office laser whitening — 6 shades brighter",
    before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    after:  "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    duration: "1 visit",
    rating: 5,
  },
  {
    id: 3,
    category: "Braces",
    title: "Alignment Journey",
    desc: "Clear aligner therapy — 14 months",
    before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    after:  "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    duration: "14 months",
    rating: 5,
  },
  {
    id: 4,
    category: "Implants",
    title: "Full Restoration",
    desc: "Single titanium implant with ceramic crown",
    before: "https://images.unsplash.com/photo-1513224502586-d1e602410265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    after:  "https://images.unsplash.com/photo-1629909605125-58da3181444d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    duration: "2 visits",
    rating: 5,
  },
  {
    id: 5,
    category: "Veneers",
    title: "Smile Makeover",
    desc: "Full upper arch composite veneers",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    after:  "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    duration: "4 visits",
    rating: 5,
  },
  {
    id: 6,
    category: "Whitening",
    title: "Gentle Whitening",
    desc: "Sensitive-formula take-home whitening kit",
    before: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    after:  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    duration: "2 weeks",
    rating: 4,
  },
];

const categories = ["All", "Veneers", "Whitening", "Braces", "Implants"];

const stats = [
  { value: "2,400+", label: "Happy Patients" },
  { value: "98%",    label: "Satisfaction Rate" },
  { value: "15+",    label: "Years of Excellence" },
  { value: "5.0 ★",  label: "Google Reviews" },
];

// ─── Before/After Slider Card ─────────────────────────────────────────────────
function BeforeAfterCard({ item }: { item: typeof galleryItems[0] }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const updateSlider = (clientX: number) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => { if (isDragging) updateSlider(e.clientX); };
    const onMouseUp   = () => setIsDragging(false);
    const onTouchMove = (e: TouchEvent) => { if (isDragging) updateSlider(e.touches[0].clientX); };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [isDragging]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl border border-[#ffc2d1]/10 transition-all duration-500"
    >
      {/* Slider */}
      <div
        ref={cardRef}
        className="relative aspect-[4/3] select-none cursor-col-resize overflow-hidden"
        onMouseDown={(e) => { setIsDragging(true); updateSlider(e.clientX); }}
        onTouchStart={(e) => { setIsDragging(true); updateSlider(e.touches[0].clientX); }}
      >
        {/* After (full width, behind) */}
        <img src={item.after} alt="After" className="absolute inset-0 w-full h-full object-cover" />

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img src={item.before} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000 / sliderPos}%`, maxWidth: "none" }} />
        </div>

        {/* Divider line + handle */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-white shadow-xl z-10"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-[#ffc2d1]">
            <ChevronLeft size={12} className="text-[#ffc2d1]" />
            <ChevronRight size={12} className="text-[#ffc2d1]" />
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest z-10">
          Before
        </span>
        <span className="absolute top-4 right-4 bg-[#ffc2d1] text-gray-900 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest z-10">
          After
        </span>

        {/* Hint overlay (fades after first interaction) */}
        <div className={`absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-[1px] transition-opacity duration-500 pointer-events-none ${isDragging || sliderPos !== 50 ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`}>
          <p className="text-white text-xs font-bold uppercase tracking-widest bg-black/40 px-4 py-2 rounded-full">
            ← Drag to Compare →
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-6 flex items-start justify-between gap-4">
        <div>
          <span className="inline-block bg-[#ffc2d1]/15 text-[#ffc2d1] text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1 rounded-full mb-2">
            {item.category}
          </span>
          <h3 className="text-lg font-bold text-gray-900 font-serif leading-tight">{item.title}</h3>
          <p className="text-gray-500 text-sm mt-1 font-sans">{item.desc}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="flex gap-0.5 justify-end mb-1">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={12} className="text-[#ffc2d1] fill-[#ffc2d1]" />
            ))}
          </div>
          <p className="text-[11px] text-gray-400 font-sans uppercase tracking-wider">{item.duration}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export function SmileGallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  const whatsappUrl = "https://wa.me/919655300036?text=Hello!%20I%20saw%20your%20smile%20gallery%20and%20would%20like%20to%20book%20a%20consultation.";

  return (
    <div className="pt-[80px] bg-[#fff5f7]">

      {/* ─── Hero Banner ─── */}
      <section className="relative overflow-hidden py-28 px-4">
        {/* Background blobs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#ffc2d1]/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#ffc2d1]/20 rounded-full blur-[100px]" />

        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#ffc2d1]/20 text-[#ffc2d1] px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.3em] mb-6">
              <Sparkles size={12} />
              Real Results · Real Patients
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[44px] md:text-[68px] font-black text-gray-900 leading-[1.0] mb-6 font-serif"
          >
            Smiles We're{" "}
            <span className="relative inline-block">
              Proud Of
              <span className="absolute -bottom-2 left-0 w-full h-[5px] bg-[#ffc2d1] rounded-full" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl max-w-[620px] mx-auto font-sans leading-relaxed"
          >
            Drag the slider on each card to see the before &amp; after transformation. Every result is a real patient from our clinic.
          </motion.p>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-white border-y border-[#ffc2d1]/20">
        <div className="max-w-[1100px] mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-3xl font-black text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-sans mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Filter Tabs ─── */}
      <section className="sticky top-[80px] z-30 bg-[#fff5f7]/90 backdrop-blur-md border-b border-[#ffc2d1]/15 py-4">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-bold font-sans transition-all duration-300 ${
                activeTab === cat
                  ? "bg-gray-900 text-white shadow-lg shadow-gray-900/20"
                  : "bg-white text-gray-600 hover:bg-[#ffc2d1]/20 hover:text-gray-900 border border-[#ffc2d1]/20"
              }`}
            >
              {activeTab === cat && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gray-900 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {cat}
              {cat !== "All" && (
                <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full font-black ${activeTab === cat ? "bg-white/20 text-white" : "bg-[#ffc2d1]/30 text-[#ffc2d1]"}`}>
                  {galleryItems.filter((g) => g.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Gallery Grid ─── */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item) => (
                <BeforeAfterCard key={item.id} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-24 text-gray-400 font-sans">
              No results in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ─── Testimonial Strip ─── */}
      <section className="py-20 bg-white border-t border-[#ffc2d1]/15">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-1 justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-[#ffc2d1] fill-[#ffc2d1]" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-serif font-medium text-gray-900 leading-snug mb-6">
              "I never imagined I'd be comfortable smiling in photos. Dr. Neelambari gave me back my confidence."
            </blockquote>
            <p className="text-gray-500 font-sans text-sm uppercase tracking-widest">— Priya R. · Veneers Patient</p>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#ffc2d1]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />

        <div className="relative z-10 max-w-[800px] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="mx-auto text-white/60 mb-5" size={32} />
            <h2 className="text-[38px] md:text-[52px] font-black text-gray-900 font-serif leading-[1.1] mb-5">
              Ready for Your<br />Transformation?
            </h2>
            <p className="text-gray-800 text-lg mb-10 max-w-[560px] mx-auto font-sans leading-relaxed">
              Every smile you saw started with a conversation. Book yours today and let's plan what's possible for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-full font-bold text-[16px] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
              >
                <WhatsAppIcon size={18} />
                Book via WhatsApp
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+919655300036"
                className="inline-flex items-center gap-3 bg-white/30 hover:bg-white/50 text-gray-900 px-10 py-4 rounded-full font-bold text-[16px] transition-all backdrop-blur-sm"
              >
                <Phone size={16} />
                +91 96553 00036
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
