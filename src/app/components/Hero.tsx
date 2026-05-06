import { motion } from "motion/react";
import { ArrowRight, Star, Sparkles, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  const whatsappUrl = "https://wa.me/919655300036?text=Hello!%20I'd%20like%20to%20start%20my%20smile%20journey%20with%20Neel%20Dentistry.";

  return (
    <section className="relative w-full h-screen min-h-[750px] flex items-center overflow-hidden bg-[#fff5f7]">
      {/* ─── Background Design Layer ─── */}
      <div className="absolute inset-0 z-0 flex justify-end">
        {/* Main Background Image - Using a friendly smiling person (Human Connection) */}
        <div className="relative w-full lg:w-[70%] h-full">
          <img
            src="https://i.postimg.cc/wjLsx7mg/Enhance-the-PNG-to-4k-202605022239.jpg"
            alt="The Neel Dentistry Team"
            className="w-full h-full object-cover object-center lg:object-right transition-all duration-700 hover:scale-105"
          />
          {/* ultra-smooth gradient fade to prevent the "vertical line" issue */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fff5f7] via-[#fff5f7]/95 via-30% to-transparent lg:via-45%" />
        </div>

        {/* Decorative Background Accents (The "Design") */}
        <div className="absolute top-[-5%] left-[-2%] w-[450px] h-[450px] bg-[#ffc2d1]/40 rounded-full blur-[130px] opacity-70" />
        <div className="absolute bottom-[5%] left-[20%] w-[350px] h-[350px] bg-[#ffc2d1]/30 rounded-full blur-[110px] opacity-60" />
        
        {/* Abstract Floating Shapes (Silver/Gray Accents) */}
        <div className="absolute top-[20%] right-[10%] w-64 h-64 border-[30px] border-[#ced4da]/10 rounded-full blur-sm" />
        
        {/* Subtle Brand Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: 'radial-gradient(#ffc2d1 1.5px, transparent 1.5px)', 
               backgroundSize: '40px 40px' 
             }} 
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        <div className="max-w-[750px]">
          {/* Logo-style Branding (Frost Reference) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="flex flex-col items-start">
              <span className="text-[72px] md:text-[110px] lg:text-[150px] font-black tracking-tighter text-gray-900 font-nativera uppercase leading-none">
                Neel
              </span>
              <span className="text-[20px] md:text-[32px] lg:text-[42px] font-bold tracking-[0.5em] text-[#ffc2d1] font-sans uppercase leading-none mt-1 md:mt-2">
                Dentistry
              </span>
            </div>
          </motion.div>

          {/* Minimalist Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 mt-6"
          >
            <h1 className="text-[26px] md:text-[38px] lg:text-[46px] font-medium text-gray-800 font-sans leading-[1.2]">
              Artistic smiles. <br className="hidden md:block" />
              <span className="font-extrabold text-gray-900 relative inline-block">
                Exceptional care.
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#ffc2d1] rounded-full" />
              </span>
            </h1>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gray-900 hover:bg-black text-white px-12 py-5 rounded-full font-black text-xl transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 flex items-center justify-center gap-3 group"
            >
              <WhatsAppIcon size={24} />
              Start Your Journey
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link 
              to="/about" 
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-100 px-12 py-5 rounded-full font-black text-xl transition-all shadow-sm flex items-center justify-center gap-2"
            >
              Meet Our Team
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ─── Floating Modern UI Card (Glassmorphism) ─── */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 lg:right-24 z-20 hidden md:block"
      >
        <div className="backdrop-blur-2xl bg-white/60 p-10 rounded-[50px] shadow-[0_20px_50px_rgba(255,194,209,0.3)] border border-white flex items-center gap-8 group">
          <div className="w-20 h-20 bg-[#ffc2d1] rounded-[24px] flex items-center justify-center text-white shadow-xl shadow-[#ffc2d1]/30 group-hover:scale-110 transition-transform">
            <ShieldCheck size={44} />
          </div>
          <div>
            <p className="text-4xl font-black text-gray-900 leading-none">5.0</p>
            <p className="text-[11px] font-black text-gray-500 uppercase tracking-[0.25em] mt-2 font-sans">Google Reviews</p>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
