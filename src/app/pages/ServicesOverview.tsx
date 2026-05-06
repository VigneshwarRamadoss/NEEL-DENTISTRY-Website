import { motion } from "motion/react";
import { 
  Stethoscope, 
  Sparkles, 
  AlignJustify as Align, 
  Baby, 
  Activity, 
  PlusCircle,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    icon: <Stethoscope size={40} className="text-[#ffc2d1]" />,
    desc: "Your foundation for lifelong oral health. From routine check-ups to fillings and gum care."
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    icon: <Sparkles size={40} className="text-[#ffc2d1]" />,
    desc: "Help you feel completely comfortable in your own smile — whitening, reshaping, or transformation."
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    icon: <Align size={40} className="text-[#ffc2d1]" />,
    desc: "Straight, healthy smiles for all ages. We offer traditional braces and clear aligner options."
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    icon: <Baby size={40} className="text-[#ffc2d1]" />,
    desc: "A gentle approach and a friendly team to make every child feel safe and comfortable."
  },
  {
    id: "emergency-care",
    title: "Emergency Care",
    icon: <Activity size={40} className="text-[#ffc2d1]" />,
    desc: "When it can't wait — we're here. Same-day appointments for genuine dental emergencies."
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    icon: <PlusCircle size={40} className="text-[#ffc2d1]" />,
    desc: "The gold standard for replacing missing teeth. Permanent, natural, and life-changing."
  }
];

export function ServicesOverview() {
  return (
    <div className="pt-[80px]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc3OTYwMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080')" }}
        >
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-[#ffc2d1] uppercase tracking-[3px] text-sm font-semibold mb-4 block">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 leading-tight">
            Complete Dental Care,<br />Under One Roof.
          </h1>
          <p className="max-w-[600px] mx-auto text-gray-200 text-lg font-serif">
            From your child's first check-up to a complete smile makeover.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="text-[#ffc2d1] uppercase tracking-[2px] text-sm font-semibold mb-4 block">Our Specialisations</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6">Every Smile Has a Story. We Help You Write Yours.</h2>
            <p className="text-gray-600 text-lg max-w-[800px] mx-auto font-serif">
              We offer six core areas of dental care, each delivered by trained specialists using modern equipment and evidence-based techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link 
                key={idx} 
                to={`/services/${service.id}`}
                className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-8 p-4 bg-[#ffc2d1]/10 rounded-2xl w-fit group-hover:bg-[#ffc2d1]/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{service.title}</h3>
                <p className="text-gray-600 mb-8 font-serif leading-relaxed">
                  {service.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-[#ffc2d1] font-bold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight size={20} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Note */}
      <section className="py-12 bg-[#f2f2f2] border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-center gap-4 text-center">
          <ShieldCheck className="text-[#ffc2d1] shrink-0" size={32} />
          <p className="text-gray-800 font-medium font-serif">
            We work with most major dental insurance providers. Speak to our front desk team about your coverage.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Not Sure Which Treatment Is Right for You?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-[700px] mx-auto font-serif">
            Book a consultation and let us guide you. We'll assess your needs, explain your options, and help you decide.
          </p>
          <a href="tel:+919655300036" className="inline-block bg-[#ffc2d1] text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-[#ffb3c6] transition-colors shadow-lg">
            Call to Book a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
