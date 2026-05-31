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
  const [beforeLoaded, setBeforeLoaded] = useState(false);
  const [afterLoaded, setAfterLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const imagesLoaded = beforeLoaded && afterLoaded;

  const updateSlider = (clientX: number) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width || 1; // Safeguard against division by zero
    const x = Math.max(0, Math.min(clientX - rect.left, width));
    setSliderPos((x / width) * 100);
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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-border transition-all duration-500"
    >
      {/* Slider Viewport */}
      <div
        ref={cardRef}
        className="relative aspect-[4/3] select-none cursor-col-resize overflow-hidden bg-gray-100"
        onMouseDown={(e) => { setIsDragging(true); updateSlider(e.clientX); }}
        onTouchStart={(e) => { setIsDragging(true); updateSlider(e.touches[0].clientX); }}
      >
        {/* After (full width, behind) */}
        <img 
          src={item.after} 
          alt="After restoration" 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${imagesLoaded ? "opacity-100" : "opacity-0"}`} 
          onLoad={() => setAfterLoaded(true)}
        />

        {/* Before (clipped, front) */}
        <div
          className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${imagesLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
        >
          <img 
            src={item.before} 
            alt="Before treatment" 
            className="absolute inset-0 w-full h-full object-cover" 
            onLoad={() => setBeforeLoaded(true)}
          />
        </div>

        {/* Premium Skeleton Shimmer Layer */}
        {!imagesLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:400%_100%] animate-pulse" 
               style={{ animationDuration: "1.5s" }} />
        )}

        {/* Custom Premium Handle */}
        <div
          className={`absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-10 transition-opacity duration-500 ${imagesLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border border-[#ffc2d1] hover:scale-105 active:scale-95 transition-all">
            <ChevronLeft size={10} className="text-[#333333] mr-[1px]" />
            <ChevronRight size={10} className="text-[#333333] ml-[1px]" />
          </div>
        </div>

        {/* Labels with subtle glassmorphism */}
        <span className={`absolute top-4 left-4 bg-black/45 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10 font-sans transition-opacity duration-500 ${imagesLoaded ? "opacity-100" : "opacity-0"}`}>
          Before
        </span>
        <span className={`absolute top-4 right-4 bg-[#ffc2d1] text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10 font-sans transition-opacity duration-500 ${imagesLoaded ? "opacity-100" : "opacity-0"}`}>
          After
        </span>

        {/* Interactive Drag Hint */}
        <div className={`absolute inset-0 z-20 flex items-center justify-center bg-black/25 backdrop-blur-[0.5px] transition-opacity duration-500 pointer-events-none ${!imagesLoaded || isDragging || sliderPos !== 50 ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`}>
          <p className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] bg-black/55 backdrop-blur-md px-4 py-2 rounded-full font-sans">
            ← Drag to Compare →
          </p>
        </div>
      </div>

      {/* Card Info Section */}
      <div className="p-6 flex items-start justify-between gap-4">
        <div>
          <span className="inline-block bg-[#ffc2d1]/15 text-[#ffb3c6] text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1 rounded-full mb-2.5 font-sans">
            {item.category}
          </span>
          <h3 className="text-lg font-bold text-[#333333] font-heading leading-tight">{item.title}</h3>
          <p className="text-[#666666] text-sm mt-1 font-sans">{item.desc}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="flex gap-0.5 justify-end mb-1">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={11} className="text-[#ffc2d1] fill-[#ffc2d1]" />
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground font-sans uppercase tracking-wider font-semibold">{item.duration}</p>
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
    <div className="pt-[80px] bg-background text-foreground relative">

      {/* ─── Hero Banner with Pink Ethereal Glow ─── */}
      <section className="relative overflow-hidden py-24 sm:py-28 px-4">
        {/* Soft elegant ambient glows */}
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#ffc2d1]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#ffc2d1]/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 bg-[#ffc2d1]/15 text-[#ffb3c6] px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] mb-6 font-sans">
              <Sparkles size={11} className="text-[#ffc2d1]" />
              Real Results · Real Patients
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] sm:text-[56px] md:text-[68px] font-bold text-[#333333] leading-[1.05] mb-6 font-heading"
          >
            Smiles We're{" "}
            <span className="relative inline-block text-black">
              Proud Of
              <span className="absolute -bottom-1.5 left-0 w-full h-[4px] bg-[#ffc2d1] rounded-full" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#666666] text-base sm:text-lg max-w-[620px] mx-auto font-sans leading-relaxed"
          >
            Interact with the cards below by dragging the comparison slider to see before &amp; after transformations. Every patient restyled by our experts.
          </motion.p>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-white border-y border-border">
        <div className="max-w-[1100px] mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold text-[#333333] font-heading">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-sans font-bold mt-1.5">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Filter Tabs (Sticky with Premium Glassmorphism) ─── */}
      <section className="sticky top-[72px] z-30 bg-background/85 backdrop-blur-md border-b border-border py-4 transition-all duration-300">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-bold font-sans transition-all duration-300 ${
                activeTab === cat
                  ? "text-white"
                  : "bg-white text-[#666666] hover:bg-[#ffc2d1]/10 hover:text-[#333333] border border-border"
              }`}
            >
              {activeTab === cat && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-[#333333] rounded-full -z-10 shadow-md shadow-[#333333]/15"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              {cat}
              {cat !== "All" && (
                <span className={`ml-2 text-[9px] px-1.5 py-0.5 rounded-full font-bold ${activeTab === cat ? "bg-white/20 text-white" : "bg-[#ffc2d1]/20 text-[#ffb3c6]"}`}>
                  {galleryItems.filter((g) => g.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Gallery Grid ─── */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item) => (
                <BeforeAfterCard key={item.id} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-24 text-[#666666] font-sans font-medium">
              No results available in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ─── Premium Testimonial Strip ─── */}
      <section className="py-24 bg-white border-t border-border relative overflow-hidden">
        {/* Soft pink glow overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#ffc2d1]/8 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-[900px] mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex gap-1 justify-center mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-[#ffc2d1] fill-[#ffc2d1]" />
              ))}
            </div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-[#333333] leading-relaxed mb-6 italic">
              "I never imagined I'd be comfortable smiling in photos. Dr. Neelambari gave me back my confidence, and my new smile looks incredibly natural."
            </blockquote>
            <p className="text-[#666666] font-sans text-xs uppercase tracking-[0.2em] font-semibold">— Priya R. · Veneers Patient</p>
          </motion.div>
        </div>
      </section>

      {/* ─── Premium Dark Slate CTA Section with Pink Glow ─── */}
      <section className="relative py-28 overflow-hidden bg-[#1a1a1a]">
        {/* Breathtaking ambient pink-to-silver radial glows */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#ffc2d1]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#ffc2d1]/8 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-[800px] mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Sparkles className="mx-auto text-[#ffc2d1] mb-5 animate-pulse" size={28} />
            <h2 className="text-[36px] md:text-[52px] font-bold text-white font-heading leading-tight mb-5">
              Ready for Your<br />Transformation?
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-10 max-w-[560px] mx-auto font-sans leading-relaxed">
              Every beautiful smile you saw started with a simple conversation. Book your consultation today and let's explore what's possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FFC2D1] hover:bg-[#FFB3C6] text-black px-10 py-4.5 rounded-xl font-bold text-[15px] transition-all shadow-lg shadow-[#FFC2D1]/15 active:scale-95 group"
              >
                <WhatsAppIcon size={16} />
                Book via WhatsApp
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="tel:+919655300036"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-9 py-4.5 rounded-xl font-bold text-[15px] transition-all backdrop-blur-md active:scale-95"
              >
                <Phone size={15} />
                +91 96553 00036
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
