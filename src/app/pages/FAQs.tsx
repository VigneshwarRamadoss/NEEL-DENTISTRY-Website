import { useState } from "react";
import { Link } from "react-router";
import { 
  ArrowLeft, 
  HelpCircle, 
  ChevronDown,
  Search
} from "lucide-react";

const faqData = [
  {
    category: "General",
    questions: [
      { q: "How do I know if I need to see a dentist urgently?", a: "See us urgently if you have: severe or persistent toothache, visible swelling, a knocked-out tooth, or bleeding that won't stop." },
      { q: "Can I change my dentist to Neel Dentistry?", a: "Absolutely. You can register as a new patient at any time. We can even help you transfer your records." },
      { q: "How do I know what treatment I actually need?", a: "We explain our findings and the reason behind every recommendation. You can ask for alternatives and take your time." },
      { q: "Is it safe to visit the dentist if I'm pregnant?", a: "Yes, and we recommend it. Pregnancy can affect gum health. We adjust our approach for X-rays and medications." }
    ]
  },
  {
    category: "Services",
    questions: [
      { q: "What's the difference between a filling and a root canal?", a: "A filling treats decay that hasn't reached the nerve. A root canal is needed when infection reaches the inner pulp." },
      { q: "How long does teeth whitening last?", a: "Typically 12–18 months depending on your diet and habits (coffee, tea, smoking)." },
      { q: "Can I get veneers if my teeth aren't perfectly aligned?", a: "Sometimes. In some cases, we recommend orthodontic treatment first to give you the best foundation." }
    ]
  },
  {
    category: "Payments",
    questions: [
      { q: "Do you offer payment plans?", a: "Yes, for qualifying treatments like implants, orthodontics, and smile makeovers. Speak to our front desk team." },
      { q: "Can I get a cost estimate before committing?", a: "Always. We provide a written treatment plan with a full cost breakdown before any work begins." }
    ]
  },
  {
    category: "Kids",
    questions: [
      { q: "My child is scared of the dentist. What should I do?", a: "Talk about the dentist matter-of-factly. Avoid phrases like 'it won't hurt'. Let our team take it from there." },
      { q: "At what age should my child start using toothpaste?", a: "A small smear of fluoride toothpaste as soon as the first tooth appears (around age 1)." }
    ]
  }
];

export function FAQs() {
  const [activeTab, setActiveTab] = useState("General");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const filteredFaqs = faqData.find(cat => cat.category === activeTab)?.questions || [];

  return (
    <div className="pt-[80px]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-900" />
        <div className="relative z-10 text-center text-white px-4">
          <Link to="/patient-info" className="inline-flex items-center gap-2 text-[#ffc2d1] mb-6 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={18} /> Back to Patient Info
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="max-w-[600px] mx-auto text-gray-400 text-lg font-serif">
            Questions we hear every day — answered honestly.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-4">
          {/* Tab Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 border-b border-gray-100 pb-2">
            {faqData.map(cat => (
              <button
                key={cat.category}
                onClick={() => { setActiveTab(cat.category); setOpenFaq(null); }}
                className={`px-8 py-4 font-bold font-serif text-lg transition-all relative ${
                  activeTab === cat.category 
                    ? "text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#ffc2d1]" 
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden">
                <button 
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-[#f2f2f2] transition-colors"
                  onClick={() => setOpenFaq(openFaq === `${activeTab}-${idx}` ? null : `${activeTab}-${idx}`)}
                >
                  <span className="text-xl font-bold font-serif text-gray-900">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === `${activeTab}-${idx}` ? "rotate-180" : ""}`} size={24} />
                </button>
                {openFaq === `${activeTab}-${idx}` && (
                  <div className="p-8 bg-[#f2f2f2]/50 border-t border-gray-100 text-gray-600 font-serif text-lg leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-24 text-center p-12 bg-gray-900 rounded-[40px] text-white">
            <HelpCircle className="mx-auto text-[#ffc2d1] mb-6" size={48} />
            <h3 className="text-2xl font-bold font-serif mb-4">Still Have Questions?</h3>
            <p className="text-gray-400 font-serif mb-10 max-w-[500px] mx-auto text-lg">
              Our front desk team is happy to help with anything — from treatment questions to insurance queries.
            </p>
            <a href="tel:+919655300036" className="inline-block bg-[#ffc2d1] text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-[#ffb3c6] transition-colors">
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
