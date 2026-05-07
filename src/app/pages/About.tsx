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
    <div className="pt-20">
      {/* ─── Hero Banner ─── */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-[center_15%]"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/85Wrwjw9/Enhance-the-quality-of-the-202605022234.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.span
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary uppercase tracking-[0.3em] text-xs sm:text-sm font-black mb-5 font-sans"
          >
            Our Story
          </motion.span>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-white mb-5 leading-[1.1]"
          >
            More Than a Dentist.
            <br />
            <span className="text-primary">A Practice Built on Trust.</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-[620px] mx-auto text-white/80 text-base sm:text-lg lg:text-xl font-heading leading-relaxed"
          >
            At Neel Dentistry, we believe exceptional care begins long before you sit in the chair.
          </motion.p>
        </div>
      </section>

      {/* ─── Our Story ─── */}
      <section className="py-16 sm:py-24 lg:py-28 bg-section-pink">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="w-full lg:w-1/2">
              <span className="inline-block bg-primary/20 text-primary px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-6 font-sans">
                How We Began
              </span>
              <h2 className="mb-8 leading-[1.15]">
                A Practice Rooted <br className="hidden md:block" />
                in Purpose
              </h2>
              <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-[1.8] font-heading">
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
              <div className="absolute -inset-4 sm:-inset-6 bg-primary/20 rounded-[2rem] sm:rounded-[2.5rem] transform rotate-2 scale-[0.97] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />
              <div className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] sm:h-[520px] border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWFtfGVufDF8fHwxNzc3OTYwMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our Clinic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating stat badge */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-4 bg-white rounded-2xl shadow-xl p-4 sm:p-5 z-20 flex items-center gap-3 sm:gap-4 scale-90 sm:scale-100 origin-left">
                <div className="bg-primary rounded-full p-2 sm:p-3">
                  <Users className="text-black" size={20} sm:size={24} />
                </div>
                <div>
                  <p className="font-black text-xl sm:text-2xl text-black leading-none">2,400+</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-sans font-bold uppercase tracking-wider mt-1">
                    Happy Patients
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Values ─── */}
      <section className="py-16 sm:py-24 lg:py-28 bg-primary/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12 sm:mb-20">
            <span className="inline-block bg-primary/20 text-primary px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-5 font-sans">
              What Drives Us
            </span>
            <h2 className="leading-[1.15]">
              The Values Behind Every Visit
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
                  className="bg-white p-8 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm border border-primary/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/15 rounded-2xl flex items-center justify-center mb-7 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="text-primary group-hover:text-black transition-colors duration-300" size={24} sm:size={28} />
                  </div>
                  <h3 className="mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-heading text-sm sm:text-base">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Meet the Doctor ─── */}
      <section className="py-16 sm:py-24 lg:py-28 bg-section-pink">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="w-full lg:w-1/2">
              <span className="inline-block bg-primary/20 text-primary px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-6 font-sans">
                The Person Behind the Practice
              </span>
              <h2 className="mb-3 leading-[1.15]">
                Meet Dr. Neelambari Mohan
              </h2>
              <p className="text-primary font-black text-xs sm:text-sm uppercase tracking-[0.2em] mb-8">
                Orthodontist & Founder
              </p>

              <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-[1.8] font-heading">
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

              <blockquote className="mt-8 bg-primary/10 border-l-4 border-primary rounded-r-2xl pl-6 pr-6 py-5 text-foreground font-heading italic text-base sm:text-lg leading-relaxed">
                "I became a dentist because I wanted to help people feel confident. A healthy smile
                changes how you see yourself — and how the world sees you. That never gets old."
              </blockquote>

              {/* Credentials row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10">
                {[
                  { icon: GraduationCap, label: "BDS, MDS" },
                  { icon: Award, label: "20+ Years" },
                  { icon: Clock, label: "5000+ Cases" },
                ].map((cred, i) => {
                  const CIcon = cred.icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-primary/10"
                    >
                      <CIcon className="text-primary mb-2" size={20} sm:size={22} />
                      <span className="text-[10px] sm:text-xs font-bold text-black uppercase tracking-wider font-sans">
                        {cred.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-full font-bold text-sm sm:text-base mt-10 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group w-full sm:w-auto"
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
              <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl relative aspect-[4/5] border-4 border-white">
                <img
                  src="https://i.postimg.cc/Wprf07rY/Chat-GPT-Image-May-5-2026-02-24-07-PM.png"
                  alt="Dr. Neelambari Mohan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 sm:p-8 pt-24">
                  <p className="text-xl sm:text-2xl font-bold font-heading text-white">Dr. Neelambari Mohan</p>
                  <p className="text-primary font-bold text-[10px] sm:text-sm tracking-[0.15em] uppercase mt-1">
                    Orthodontist
                  </p>
                </div>
              </div>
              {/* Floating review badge */}
              <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-white rounded-2xl shadow-xl p-4 sm:p-5 z-20 flex items-center gap-2 sm:gap-3 scale-90 sm:scale-100 origin-right">
                <div className="flex gap-0.5 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} sm:size={16} fill="currentColor" />
                  ))}
                </div>
                <div>
                  <p className="font-black text-base sm:text-lg text-black leading-none">4.9</p>
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
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

        <div className="max-w-[1200px] mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="text-black mb-6 leading-[1.15]">
              Ready to Experience <br className="hidden md:block" /> the Difference?
            </h2>
            <p className="text-black/80 text-base sm:text-lg lg:text-xl mb-12 max-w-[650px] mx-auto font-heading leading-relaxed">
              Come in for a consultation and see why thousands of patients call Neel Dentistry their
              dental home.
            </p>
            <a
              href="tel:+919655300036"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-black px-8 sm:px-10 py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 w-full sm:w-auto"
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
