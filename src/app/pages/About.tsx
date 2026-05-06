import { motion } from "motion/react";
import { Shield, Heart, Star, ArrowRight, Award, GraduationCap, Clock, Users } from "lucide-react";
import { Link } from "react-router";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function About() {
  return (
    <div className="pt-[80px]">
      {/* ─── Hero Banner ─── */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1629909605125-58da3181444d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzc3OTYwMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffc2d1]/40 via-gray-900/60 to-gray-900/80" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.span
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#ffc2d1] uppercase tracking-[0.35em] text-[13px] font-black mb-5 font-sans"
          >
            Our Story
          </motion.span>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[40px] md:text-[56px] lg:text-[64px] font-bold font-serif mb-5 leading-[1.1]"
          >
            More Than a Dentist.
            <br />
            <span className="text-[#ffc2d1]">A Practice Built on Trust.</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-[620px] mx-auto text-gray-200 text-lg font-serif leading-relaxed"
          >
            At Neel Dentistry, we believe exceptional care begins long before you sit in the chair.
          </motion.p>
        </div>
      </section>

      {/* ─── Our Story ─── */}
      <section className="py-28 bg-[#fff5f7]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="w-full lg:w-1/2">
              <span className="inline-block bg-[#ffc2d1]/20 text-[#ffc2d1] px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-6 font-sans">
                How We Began
              </span>
              <h2 className="text-3xl md:text-[44px] font-bold text-gray-900 mb-8 font-serif leading-[1.15]">
                A Practice Rooted <br className="hidden md:block" />
                in Purpose
              </h2>
              <div className="space-y-5 text-gray-600 text-[17px] leading-[1.8] font-serif">
                <p>
                  Neel Dentistry was founded on a simple but powerful belief — that every patient
                  deserves to be seen, heard, and cared for with complete honesty. What began as a
                  single-chair practice has grown into a full-service dental clinic, but our
                  philosophy has never changed.
                </p>
                <p>
                  Our founder built this practice not to chase volume, but to build something
                  lasting. A place where families return generation after generation. A clinic where
                  your comfort and confidence are never secondary to anything else.
                </p>
                <p>
                  We invest in the latest dental technology not because it impresses — but because it
                  means less discomfort, shorter visits, and better outcomes for the people who trust
                  us with their smiles.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 relative group"
            >
              {/* Decorative pink blob behind image */}
              <div className="absolute -inset-6 bg-[#ffc2d1]/20 rounded-[2.5rem] transform rotate-2 scale-[0.97] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[520px] border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWFtfGVufDF8fHwxNzc3OTYwMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our Clinic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating stat badge */}
              <div className="absolute -bottom-6 -left-4 bg-white rounded-2xl shadow-xl p-5 z-20 hidden md:flex items-center gap-4">
                <div className="bg-[#ffc2d1] rounded-full p-3">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-black text-2xl text-gray-900 leading-none">2,400+</p>
                  <p className="text-xs text-gray-500 font-sans font-bold uppercase tracking-wider mt-1">
                    Happy Patients
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Values ─── */}
      <section className="py-28 bg-[#ffc2d1]/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-20">
            <span className="inline-block bg-[#ffc2d1]/20 text-[#ffc2d1] px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-5 font-sans">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-[44px] font-bold text-gray-900 font-serif leading-[1.15]">
              The Values Behind Every Visit
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Honest Care, Always",
                desc: "We will never recommend a treatment you don't need. We explain everything — your diagnosis, your options, and our honest recommendation.",
              },
              {
                icon: Heart,
                title: "Your Comfort Is Non-Negotiable",
                desc: "Dental anxiety is real, and we take it seriously. Every detail is designed to put you at ease. We work at your pace — not ours.",
              },
              {
                icon: Star,
                title: "Precision in Every Detail",
                desc: "Good enough is not a phrase we use. Whether it's a routine cleaning or a complete smile transformation, we bring the same level of focus.",
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="bg-white p-10 rounded-[2rem] shadow-sm border border-[#ffc2d1]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-[#ffc2d1]/15 rounded-2xl flex items-center justify-center mb-7 group-hover:bg-[#ffc2d1] transition-colors duration-300">
                    <Icon className="text-[#ffc2d1] group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-serif text-[15px]">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Meet the Doctor ─── */}
      <section className="py-28 bg-[#fff5f7]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="w-full lg:w-1/2">
              <span className="inline-block bg-[#ffc2d1]/20 text-[#ffc2d1] px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-6 font-sans">
                The Person Behind the Practice
              </span>
              <h2 className="text-3xl md:text-[44px] font-bold text-gray-900 mb-3 font-serif leading-[1.15]">
                Meet Dr. Neelambari Mohan
              </h2>
              <p className="text-[#ffc2d1] font-black text-sm uppercase tracking-[0.2em] mb-8">
                Orthodontist & Founder
              </p>

              <div className="space-y-5 text-gray-600 text-[17px] leading-[1.8] font-serif">
                <p>
                  Dr. Neelambari Mohan completed her dental degree and has since dedicated years to
                  providing comprehensive dental care to patients of all ages. With advanced
                  training in Orthodontics, she brings a rare combination of clinical precision and
                  genuine warmth to every consultation.
                </p>
                <p>
                  Outside of the clinic, Dr. Neelambari is a passionate advocate for community oral
                  health, regularly participating in awareness programs.
                </p>
              </div>

              <blockquote className="mt-8 bg-[#ffc2d1]/10 border-l-4 border-[#ffc2d1] rounded-r-2xl pl-6 pr-6 py-5 text-gray-800 font-serif italic text-[17px] leading-relaxed">
                "I became a dentist because I wanted to help people feel confident. A healthy smile
                changes how you see yourself — and how the world sees you. That never gets old."
              </blockquote>

              {/* Credentials row */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { icon: GraduationCap, label: "BDS, MDS" },
                  { icon: Award, label: "20+ Years" },
                  { icon: Clock, label: "5000+ Cases" },
                ].map((cred, i) => {
                  const CIcon = cred.icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center bg-white rounded-2xl p-4 border border-[#ffc2d1]/10"
                    >
                      <CIcon className="text-[#ffc2d1] mb-2" size={22} />
                      <span className="text-xs font-bold text-gray-900 uppercase tracking-wider font-sans">
                        {cred.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#ffc2d1] hover:bg-[#ffb3c6] text-gray-900 px-8 py-4 rounded-full font-bold text-[15px] mt-10 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group"
              >
                Book a Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 relative group"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-2xl relative aspect-[4/5] border-4 border-white">
                <img
                  src="https://i.postimg.cc/Wprf07rY/Chat-GPT-Image-May-5-2026-02-24-07-PM.png"
                  alt="Dr. Neelambari Mohan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Bottom gradient overlay with name */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent p-8 pt-24">
                  <p className="text-2xl font-bold font-serif text-white">Dr. Neelambari Mohan</p>
                  <p className="text-[#ffc2d1] font-bold text-sm tracking-[0.15em] uppercase mt-1">
                    Orthodontist
                  </p>
                </div>
              </div>
              {/* Floating review badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-5 z-20 hidden md:flex items-center gap-3">
                <div className="flex gap-0.5 text-[#ffc2d1]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <div>
                  <p className="font-black text-lg text-gray-900 leading-none">4.9</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">
                    Rating
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="relative py-24 overflow-hidden">
        {/* Layered pink background */}
        <div className="absolute inset-0 bg-[#ffc2d1]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

        <div className="max-w-[1200px] mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-[48px] font-bold text-gray-900 font-serif mb-6 leading-[1.15]">
              Ready to Experience <br className="hidden md:block" /> the Difference?
            </h2>
            <p className="text-gray-800 text-lg mb-12 max-w-[650px] mx-auto font-serif leading-relaxed">
              Come in for a consultation and see why thousands of patients call Neel Dentistry their
              dental home.
            </p>
            <a
              href="tel:+919655300036"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Call Us to Schedule
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
