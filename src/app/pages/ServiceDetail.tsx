import { useParams, Link } from "react-router";
import { 
  CheckCircle2, 
  ArrowLeft, 
  HelpCircle, 
  ChevronDown,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const serviceContent: Record<string, any> = {
  "general-dentistry": {
    title: "General Dentistry",
    headline: "Everyday Care for a Lifetime of Healthy Smiles",
    body: "General dentistry is the cornerstone of everything we do at Neel Dentistry. Regular visits aren't just about cleaning — they're how we catch small problems before they become expensive ones.",
    treatments: [
      "Comprehensive Oral Examinations",
      "Professional Teeth Cleaning (Scaling & Polishing)",
      "Tooth-Coloured Fillings",
      "Root Canal Treatment",
      "Tooth Extractions",
      "Gum Disease Diagnosis & Treatment",
      "Digital X-Rays (low radiation)",
      "Oral Cancer Screening",
      "Night Guards & Mouthguards"
    ],
    steps: [
      { title: "Examination", desc: "We review your dental history and take digital X-rays." },
      { title: "Assessment", desc: "We walk you through our findings honestly, with no jargon." },
      { title: "Planning", desc: "We discuss your options and build a plan that fits your life." },
      { title: "Treatment", desc: "Comfortable, efficient, and explained every step." }
    ],
    faqs: [
      { q: "How often should I visit the dentist?", a: "We recommend a check-up and cleaning every 6 months for most patients." },
      { q: "Do cleanings hurt?", a: "A professional cleaning should not be painful. You may feel mild sensitivity." },
      { q: "Will you judge me if I haven't been in years?", a: "Never. We see patients at every stage of dental health." }
    ]
  },
  "cosmetic-dentistry": {
    title: "Cosmetic Dentistry",
    headline: "The Smile You've Imagined Is Closer Than You Think",
    body: "Cosmetic dentistry at Neel Dentistry is about helping you feel completely comfortable in your own smile — whether that means whitening, reshaping, or a complete transformation.",
    treatments: [
      "Professional Teeth Whitening",
      "Dental Veneers (Porcelain & Composite)",
      "Smile Makeovers",
      "Tooth Bonding & Reshaping",
      "Gum Contouring",
      "Tooth-Coloured Fillings",
      "Smile Analysis & Digital Preview"
    ],
    steps: [
      { title: "Consultation", desc: "We listen to what you want and set honest expectations." },
      { title: "Digital Preview", desc: "See a simulation of your results before any treatment begins." },
      { title: "Staged Plan", desc: "We sequence treatments for the best outcome." },
      { title: "Reveal", desc: "We send you home with maintenance guidance so results last." }
    ],
    faqs: [
      { q: "Is teeth whitening safe?", a: "Yes, when done professionally. Our treatments are calibrated to your enamel." },
      { q: "How long do veneers last?", a: "Porcelain veneers typically last 10–15 years with proper care." }
    ]
  },
  "orthodontics": {
    title: "Orthodontics",
    headline: "Straight, Healthy Smiles — At Every Age",
    body: "Orthodontic treatment has come a long way. We offer both traditional braces and clear aligner options depending on your case and preference.",
    treatments: [
      "Traditional Metal Braces",
      "Ceramic (Tooth-Coloured) Braces",
      "Clear Aligners",
      "Retainers (post-treatment)",
      "Early Orthodontic Assessment",
      "Adult Orthodontics"
    ],
    steps: [
      { title: "Consultation", desc: "Assessment of teeth, jaw alignment, and X-rays." },
      { title: "Planning", desc: "We present your options with honest timelines and costs." },
      { title: "Fitting", desc: "Braces or aligners fitted precisely at your comfort." },
      { title: "Reviews", desc: "Regular appointments to adjust and monitor progress." }
    ],
    faqs: [
      { q: "Am I too old for braces?", a: "No. We treat adults of all ages. Clear aligners are popular with professionals." },
      { q: "How long does it take?", a: "Most cases range from 12 to 24 months, depending on complexity." }
    ]
  },
  "pediatric-dentistry": {
    title: "Pediatric Dentistry",
    headline: "Building Healthy Habits That Last a Lifetime",
    body: "Children are not small adults. Our pediatric approach is built around communication, patience, and making every visit feel like less of a big deal.",
    treatments: [
      "First Dental Visit & Assessment",
      "Routine Check-ups & Cleanings",
      "Fissure Sealants",
      "Fluoride Treatments",
      "Children's Fillings",
      "Orthodontic Screening",
      "Habit Counselling"
    ],
    steps: [
      { title: "Introduction", desc: "We show your child the tools and let them ask questions." },
      { title: "Examination", desc: "We check teeth and gums in a relaxed manner." },
      { title: "Parent Briefing", desc: "We talk you through what we found and how to care at home." },
      { title: "No Fear Policy", desc: "If your child is anxious, we stop. We go at their pace." }
    ],
    faqs: [
      { q: "When should the first visit be?", a: "By their first birthday, or when their first tooth comes through." },
      { q: "What if my child is terrified?", a: "We start slow and never force treatment. We have a children's corner too." }
    ]
  },
  "emergency-care": {
    title: "Emergency Care",
    headline: "When It Can't Wait — We're Here",
    body: "A dental emergency is frightening and painful. We keep same-day slots available every day for genuine dental emergencies.",
    treatments: [
      "Severe Toothache",
      "Knocked-out Tooth",
      "Cracked or Fractured Tooth",
      "Lost Filling or Crown",
      "Dental Abscess or Swelling",
      "Broken Braces Wire"
    ],
    steps: [
      { title: "Call Us", desc: "Describe your situation so we can prioritise you." },
      { title: "Assessment", desc: "We examine, diagnose, and stabilise immediately." },
      { title: "Treatment", desc: "We treat what we can on the spot." },
      { title: "Follow-up", desc: "We schedule follow-up care for full support." }
    ],
    faqs: [
      { q: "Do I need to be a patient?", a: "No. We see emergency patients regardless of previous visits." },
      { q: "What are your hours?", a: "We offer same-day appointments during clinic hours." }
    ]
  },
  "dental-implants": {
    title: "Dental Implants",
    headline: "Permanent. Natural. Life-Changing.",
    body: "Dental implants are the gold standard for replacing missing teeth. They are anchored into the jawbone, providing stability and looking exactly like natural teeth.",
    treatments: [
      "Single Tooth Implants",
      "Multiple Teeth Implants",
      "Implant-Supported Dentures",
      "Bone Grafting",
      "3D Imaging & Planning"
    ],
    steps: [
      { title: "Consultation", desc: "Full assessment including 3D imaging." },
      { title: "Preparation", desc: "Bone grafting or extraction if required." },
      { title: "Placement", desc: "Titanium post placement. Healing takes 3-6 months." },
      { title: "Restoration", desc: "Custom-made crown is attached for final result." }
    ],
    faqs: [
      { q: "Am I a candidate?", a: "Most healthy adults are. We evaluate bone density first." },
      { q: "How long do they last?", a: "With proper care, implants can last a lifetime." }
    ]
  }
};

export function ServiceDetail() {
  const { serviceId } = useParams();
  const content = serviceContent[serviceId || ""] || serviceContent["general-dentistry"];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-[80px]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-900" />
        <div className="relative z-10 text-center text-white px-4">
          <Link to="/services" className="inline-flex items-center gap-2 text-[#ffc2d1] mb-6 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={18} /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 leading-tight">
            {content.title}
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-bold font-serif text-gray-900 mb-6">{content.headline}</h2>
              <p className="text-xl text-gray-600 font-serif leading-relaxed mb-10">
                {content.body}
              </p>

              <h3 className="text-2xl font-bold font-serif text-gray-900 mb-8">What We Offer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.treatments.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-[#f2f2f2] rounded-xl border border-gray-100">
                    <CheckCircle2 className="text-[#ffc2d1] shrink-0" size={20} />
                    <span className="text-gray-800 font-medium font-serif">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="w-full lg:w-1/3 bg-[#f2f2f2] p-8 rounded-3xl sticky top-[100px]">
              <h3 className="text-xl font-bold font-serif mb-6">Need Help?</h3>
              <p className="text-gray-600 mb-8 font-serif">
                Not sure if this treatment is right for you? Speak to our experts for a personalised assessment.
              </p>
              <a href="tel:+919655300036" className="w-full block bg-[#ffc2d1] text-gray-900 text-center py-4 rounded-full font-bold hover:bg-[#ffb3c6] transition-colors shadow-md mb-4">
                Call +91 96553 00036
              </a>
              <Link to="/contact" className="w-full block text-center py-4 border-2 border-gray-900 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all">
                Contact Us
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif">What to Expect</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {content.steps.map((step: any, idx: number) => (
              <div key={idx} className="relative">
                <div className="text-5xl font-bold text-[#ffc2d1]/20 absolute -top-4 -left-2 z-0 font-serif">
                  0{idx + 1}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-serif mb-3 text-[#ffc2d1]">{step.title}</h3>
                  <p className="text-gray-400 font-serif leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="text-center mb-16">
            <HelpCircle className="mx-auto text-[#ffc2d1] mb-4" size={40} />
            <h2 className="text-3xl font-bold font-serif">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {content.faqs.map((faq: any, idx: number) => (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f2f2f2] transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-lg font-bold font-serif text-gray-900">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} size={20} />
                </button>
                {openFaq === idx && (
                  <div className="p-6 bg-[#f2f2f2]/50 border-t border-gray-100 text-gray-600 font-serif leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-[#f2f2f2]">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-center mb-16">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.keys(serviceContent).filter(id => id !== serviceId).slice(0, 3).map((id, idx) => (
              <Link 
                key={idx} 
                to={`/services/${id}`}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-bold font-serif mb-4 text-gray-900">{serviceContent[id].title}</h3>
                <span className="inline-flex items-center gap-2 text-[#ffc2d1] font-bold group-hover:translate-x-2 transition-transform">
                  View Service <ArrowRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
