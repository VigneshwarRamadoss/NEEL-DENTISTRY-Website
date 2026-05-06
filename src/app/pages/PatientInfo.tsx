import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  FileText,
  Download,
  Calendar,
  Clock,
  IdCard,
  Pill,
  HelpCircle,
  ArrowRight,
  ChevronDown,
  CreditCard,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { Link } from "react-router";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const checklist = [
  {
    icon: IdCard,
    title: "Valid Photo ID",
    desc: "Any government-issued photo identification.",
  },
  {
    icon: FileText,
    title: "Insurance Details",
    desc: "Bring your card or policy number for benefit verification.",
  },
  {
    icon: Pill,
    title: "Current Medications",
    desc: "List of medications or supplements you take regularly.",
  },
  {
    icon: Calendar,
    title: "Previous Records",
    desc: "X-rays or summaries from your previous dentist.",
  },
  {
    icon: HelpCircle,
    title: "Your Questions",
    desc: "Write down any concerns you want us to address.",
  },
  {
    icon: Clock,
    title: "Arrive Early",
    desc: "10–15 minutes early for paperwork and settling in.",
  },
];

const faqs = [
  {
    q: "What should I expect during my first visit?",
    a: "Your first appointment typically includes a comprehensive oral examination, digital X-rays, and a thorough cleaning. We'll review your dental history, discuss any concerns, and create a personalised treatment plan together.",
  },
  {
    q: "Do you accept dental insurance?",
    a: "Yes, we accept most major dental insurance plans. Our team will verify your benefits before your appointment and help you understand your coverage so there are no surprises.",
  },
  {
    q: "What payment options are available?",
    a: "We offer flexible payment options including credit/debit cards, and interest-free payment plans for qualifying treatments. Our goal is to make quality dental care accessible to everyone.",
  },
  {
    q: "How do I handle a dental emergency?",
    a: "Call us immediately at +91 96553 00036. We reserve time slots specifically for emergency patients and will do our best to see you on the same day. After hours, follow the instructions on our voicemail for urgent guidance.",
  },
  {
    q: "Is sedation dentistry available?",
    a: "Yes. We offer various levels of sedation, from mild nitrous oxide to moderate oral sedation, to help patients with dental anxiety feel completely comfortable during their procedure.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-[#ffc2d1]/15 rounded-2xl overflow-hidden bg-white hover:border-[#ffc2d1]/40 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className="text-[17px] font-bold text-gray-900 font-serif pr-4 group-hover:text-[#ffc2d1] transition-colors">
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          className={`text-[#ffc2d1] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-600 text-[15px] leading-relaxed font-serif">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function PatientInfo() {
  return (
    <div className="pt-[80px]">
      {/* ─── Hero Banner ─── */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB3YWl0aW5nfGVufDF8fHwxNzc3OTYwMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080')",
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
            Here to Help
          </motion.span>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[40px] md:text-[56px] lg:text-[64px] font-bold font-serif mb-5 leading-[1.1]"
          >
            Everything You Need
            <br />
            <span className="text-[#ffc2d1]">Before You Arrive.</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-[620px] mx-auto text-gray-200 text-lg font-serif leading-relaxed"
          >
            We believe informed patients are confident patients. Find everything you need here.
          </motion.p>
        </div>
      </section>

      {/* ─── Welcome Message ─── */}
      <section className="py-28 bg-[#fff5f7]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center">
            <span className="inline-block bg-[#ffc2d1]/20 text-[#ffc2d1] px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-6 font-sans">
              First Time Here?
            </span>
            <h2 className="text-3xl md:text-[44px] font-bold text-gray-900 font-serif mb-8 leading-[1.15]">
              Welcome to Neel Dentistry
            </h2>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }} className="space-y-5 text-center">
            <p className="text-gray-600 text-[17px] leading-[1.8] font-serif">
              We're glad you found us. Your first visit is about getting to know each other — we
              want to understand your dental history, your concerns, and your goals, so we can build
              a care plan that's truly right for you.
            </p>
            <p className="text-gray-600 text-[17px] leading-[1.8] font-serif">
              There's no pressure to commit to any treatment on your first visit. Come in, meet the
              team, and let us show you what dentistry feels like when it's done right.
            </p>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 mt-16"
          >
            {[
              { value: "20+", label: "Years Experience" },
              { value: "2,400+", label: "Happy Patients" },
              { value: "4.9★", label: "Google Rating" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center border border-[#ffc2d1]/10 shadow-sm"
              >
                <p className="text-3xl md:text-4xl font-black text-[#ffc2d1] font-sans">{stat.value}</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-2 font-sans">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── What to Bring Checklist ─── */}
      <section className="py-28 bg-[#ffc2d1]/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-20">
            <span className="inline-block bg-[#ffc2d1]/20 text-[#ffc2d1] px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-5 font-sans">
              Be Prepared
            </span>
            <h2 className="text-3xl md:text-[44px] font-bold text-gray-900 font-serif leading-[1.15]">
              What to Bring — Checklist
            </h2>
            <p className="text-gray-600 font-serif mt-4 text-lg">
              Ensure a smooth check-in by having these ready.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklist.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white p-8 rounded-[1.5rem] border border-[#ffc2d1]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-start gap-5"
                >
                  <div className="w-14 h-14 bg-[#ffc2d1]/15 rounded-2xl flex items-center justify-center group-hover:bg-[#ffc2d1] transition-colors duration-300">
                    <Icon
                      className="text-[#ffc2d1] group-hover:text-white transition-colors duration-300"
                      size={28}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 font-serif text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                  <CheckCircle2 className="text-[#ffc2d1]/30 mt-auto ml-auto" size={20} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Download Forms ─── */}
      <section className="py-28 bg-[#fff5f7]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="bg-[#ffc2d1] rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden"
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-white/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-2xl" />

            <div className="w-full lg:w-1/2 relative z-10">
              <h2 className="text-3xl md:text-[40px] font-bold font-serif mb-6 text-gray-900 leading-[1.15]">
                Complete Your Paperwork <br className="hidden md:block" />
                in Advance
              </h2>
              <p className="text-gray-800 text-lg font-serif mb-10 leading-relaxed">
                Save time at your first visit by downloading and completing our intake forms at
                home. Bring them with you or ask us to email them.
              </p>
              <div className="space-y-3">
                {[
                  "New Patient Registration Form",
                  "Medical History Form",
                  "Dental History Form",
                  "Consent to Treatment Form",
                ].map((form, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 hover:bg-white/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="text-gray-900/60" size={18} />
                      <span className="font-serif font-semibold text-gray-900">{form}</span>
                    </div>
                    <Download
                      className="text-gray-900 group-hover:translate-y-0.5 transition-transform"
                      size={18}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjByZWNvcmRzfGVufDF8fHwxNzc3OTYwMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Patient Records"
                className="rounded-[1.5rem] shadow-2xl border-4 border-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="py-28 bg-[#ffc2d1]/10">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
            <span className="inline-block bg-[#ffc2d1]/20 text-[#ffc2d1] px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-5 font-sans">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-[44px] font-bold text-gray-900 font-serif leading-[1.15]">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Navigation ─── */}
      <section className="py-28 bg-[#fff5f7]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 font-serif leading-[1.15]">
              More Resources for You
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div {...fadeUp} transition={{ duration: 0.4 }}>
              <Link
                to="/patient-info/insurance"
                className="block bg-white p-10 rounded-[1.5rem] border border-[#ffc2d1]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full"
              >
                <div className="w-14 h-14 bg-[#ffc2d1]/15 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ffc2d1] transition-colors duration-300">
                  <CreditCard className="text-[#ffc2d1] group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-xl font-bold font-serif mb-3 text-gray-900">Insurance & Payments</h3>
                <p className="text-gray-600 font-serif text-[15px] mb-6 leading-relaxed">
                  Learn about our accepted plans and flexible payment options.
                </p>
                <span className="inline-flex items-center gap-2 text-[#ffc2d1] font-bold text-sm group-hover:translate-x-2 transition-transform">
                  Financial Info <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.1 }}>
              <Link
                to="/patient-info/faqs"
                className="block bg-white p-10 rounded-[1.5rem] border border-[#ffc2d1]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full"
              >
                <div className="w-14 h-14 bg-[#ffc2d1]/15 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ffc2d1] transition-colors duration-300">
                  <HelpCircle className="text-[#ffc2d1] group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-xl font-bold font-serif mb-3 text-gray-900">Common Questions</h3>
                <p className="text-gray-600 font-serif text-[15px] mb-6 leading-relaxed">
                  Find answers to the questions we hear every day.
                </p>
                <span className="inline-flex items-center gap-2 text-[#ffc2d1] font-bold text-sm group-hover:translate-x-2 transition-transform">
                  View FAQs <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.2 }}>
              <Link
                to="/contact"
                className="block bg-white p-10 rounded-[1.5rem] border border-[#ffc2d1]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full"
              >
                <div className="w-14 h-14 bg-[#ffc2d1]/15 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ffc2d1] transition-colors duration-300">
                  <Phone className="text-[#ffc2d1] group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-xl font-bold font-serif mb-3 text-gray-900">Contact Us</h3>
                <p className="text-gray-600 font-serif text-[15px] mb-6 leading-relaxed">
                  Ready to book? Call us or visit us — we'd love to hear from you.
                </p>
                <span className="inline-flex items-center gap-2 text-[#ffc2d1] font-bold text-sm group-hover:translate-x-2 transition-transform">
                  Get in Touch <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Emergency CTA ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#ffc2d1]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

        <div className="max-w-[1200px] mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <ShieldCheck className="mx-auto text-white mb-6" size={48} />
            <h2 className="text-3xl md:text-[48px] font-bold text-gray-900 font-serif mb-6 leading-[1.15]">
              Dental Emergency?
            </h2>
            <p className="text-gray-800 text-lg mb-12 max-w-[600px] mx-auto font-serif leading-relaxed">
              Don't wait. Call us immediately and we'll get you seen as quickly as possible. We
              reserve time daily for urgent cases.
            </p>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <Phone size={22} fill="currentColor" />
              Call +91 96553 00036
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
