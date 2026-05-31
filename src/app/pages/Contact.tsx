import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  ExternalLink,
  Sparkles
} from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { motion } from "motion/react";

export function Contact() {
  const whatsappUrl = "https://wa.me/919655300036?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment%20with%20Neel%20Dentistry.";

  return (
    <div className="pt-20 bg-background text-[#333333]">
      
      {/* Award-Winning Premium Hero Section with Glassmorphism and Animated Orbs */}
      <section className="relative py-24 sm:py-32 flex items-center justify-center overflow-hidden bg-[#0d0d0d] text-white">
        
        {/* Animated Fluid Orbs (Organic Breathing Effect) */}
        <motion.div
          className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-[#ffc2d1]/12 rounded-full blur-[140px] pointer-events-none"
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#ffc2d1]/8 rounded-full blur-[120px] pointer-events-none"
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 40, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Fine Minimalist Vector Grid (Architectural Texture) */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none" 
          style={{
            backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        
        {/* Glassmorphic Container with Light Sweep Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center px-8 py-16 sm:py-20 mx-4 max-w-[840px] rounded-3xl backdrop-blur-xl bg-white/[0.02] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Subtle light sweep across the card on load */}
          <motion.div
            className="absolute top-0 bottom-0 left-[-150%] w-[60%] bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 z-0"
            animate={{ left: "150%" }}
            transition={{ duration: 2.2, delay: 0.6, ease: "easeInOut" }}
          />

          <div className="relative z-10">
            {/* Eyebrow */}
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "1px" }}
              animate={{ opacity: 1, letterSpacing: "4px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-[#FFC2D1] uppercase text-xs font-bold mb-4 font-sans"
            >
              Get in Touch
            </motion.span>
            
            {/* 3D Kinetic Text Reveal */}
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight select-none"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
              }}
            >
              {"Contact Us".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#ffc2d1] bg-[size:150%]"
                  variants={{
                    hidden: { opacity: 0, y: 35, rotateX: -20 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      rotateX: 0,
                      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
                    }
                  }}
                  style={{ transformOrigin: "bottom center" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[620px] mx-auto text-white text-base sm:text-lg font-sans leading-relaxed"
            >
              We're here to answer your questions, ease any anxieties, and help you schedule your next visit with our specialists.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Contact Details & Map */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
            
            {/* Details Side */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between">
              <div>
                <h2 className="text-[#333333] mb-10 font-heading text-3xl sm:text-4xl font-bold">Reach Out to Us</h2>
                
                <div className="space-y-10">
                  
                  {/* Phone & WhatsApp */}
                  <div className="flex gap-5">
                    <div className="p-3.5 bg-[#ffc2d1]/15 rounded-2xl text-[#ffb3c6] h-fit shrink-0 border border-[#ffc2d1]/10">
                      <Phone size={22} className="text-[#ffc2d1]" />
                    </div>
                    <div>
                      <h4 className="text-[#333333] font-heading font-semibold text-lg mb-1.5">Phone & WhatsApp</h4>
                      <p className="text-[#666666] text-sm sm:text-base font-sans mb-4 leading-relaxed">
                        Call us directly for immediate inquiries or chat with us instantly on WhatsApp.
                      </p>
                      <div className="flex flex-col gap-2.5">
                        <a 
                          href="tel:+919655300036" 
                          className="text-2xl sm:text-3xl font-bold text-[#333333] hover:text-[#ffc2d1] transition-colors font-heading tracking-tight"
                        >
                          +91 96553 00036
                        </a>
                        <a 
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-base font-bold text-[#25D366] hover:text-[#1ebe57] transition-colors font-sans"
                        >
                          <WhatsAppIcon size={18} />
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Our Location */}
                  <div className="flex gap-5">
                    <div className="p-3.5 bg-[#ffc2d1]/15 rounded-2xl text-[#ffb3c6] h-fit shrink-0 border border-[#ffc2d1]/10">
                      <MapPin size={22} className="text-[#ffc2d1]" />
                    </div>
                    <div>
                      <h4 className="text-[#333333] font-heading font-semibold text-lg mb-1.5">Our Location</h4>
                      <p className="text-[#666666] text-sm sm:text-base font-sans leading-relaxed">
                        Neel Dentistry, Peace Homes,<br />
                        113A, East Main Road, Sankar Nagar,<br />
                        Opposite Appaswamy The Bloomingdale,<br />
                        Pammal, Chennai, Tamil Nadu 600075.
                      </p>
                      <a 
                        href="https://maps.app.goo.gl/wEfJnXYrMuPdmLaA7" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 text-[#ffc2d1] font-bold text-xs uppercase tracking-widest mt-4 hover:gap-2.5 transition-all font-sans"
                      >
                        Get Directions <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex gap-5">
                    <div className="p-3.5 bg-[#ffc2d1]/15 rounded-2xl text-[#ffb3c6] h-fit shrink-0 border border-[#ffc2d1]/10">
                      <Clock size={22} className="text-[#ffc2d1]" />
                    </div>
                    <div>
                      <h4 className="text-[#333333] font-heading font-semibold text-lg mb-1.5">Office Hours</h4>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 font-sans text-[#666666] text-sm sm:text-base mt-2">
                        <span className="font-medium text-muted-foreground">Mon - Sat</span> 
                        <span className="font-bold text-[#333333]">9am - 10pm</span>
                        <span className="font-medium text-muted-foreground">Sunday</span> 
                        <span className="font-bold text-[#333333]">10am - 9pm</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Map Side */}
            <div className="w-full lg:w-7/12 h-[350px] sm:h-[450px] lg:h-auto min-h-[350px] rounded-2xl overflow-hidden shadow-xl border border-border bg-gray-50 flex items-stretch">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.097562358378!2d80.12020469357908!3d12.968730400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f1c94c00a3b%3A0x470f08bf7866d8e5!2sNEEL%20DENTISTRY%20-%20Dr%20Neelambari%20Mohan%20M.D.S.!5e0!3m2!1sen!2sin!4v1778046331134!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 w-full h-full"
                title="Neel Dentistry Location Map"
              ></iframe>
            </div>
            
          </div>
        </div>
      </section>

      {/* Emergency Strip — Premium Dark Slate & Pink Accents */}
      <section className="py-20 bg-[#1a1a1a] text-white relative overflow-hidden">
        {/* Ambient glow decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ffc2d1]/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
           <div className="text-center lg:text-left max-w-2xl">
              <h2 className="text-[#FFC2D1] mb-3 font-heading font-bold text-3xl sm:text-4xl">Dental Emergency?</h2>
              <p className="text-white/70 text-base sm:text-lg font-sans leading-relaxed">
                We reserve same-day emergency slots for patients experiencing severe pain. Reach out to our team immediately.
              </p>
           </div>
           <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
            <a 
              href="tel:+919655300036" 
              className="bg-white hover:bg-gray-100 text-black px-10 py-4.5 rounded-xl font-bold text-[15px] transition-all shadow-lg text-center active:scale-95 whitespace-nowrap font-sans"
            >
                Call Emergency
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#25D366] hover:bg-[#1ebe57] text-white px-10 py-4.5 rounded-xl font-bold text-[15px] transition-all shadow-lg flex items-center justify-center gap-2.5 active:scale-95 whitespace-nowrap font-sans"
            >
                <WhatsAppIcon size={18} />
                WhatsApp Us
            </a>
           </div>
        </div>
      </section>
      
    </div>
  );
}
