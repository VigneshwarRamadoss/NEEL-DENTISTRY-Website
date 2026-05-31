import { Link } from "react-router";
import { 
  CreditCard, 
  Wallet, 
  ShieldCheck, 
  CheckCircle2,
  ArrowLeft
} from "lucide-react";

export function Insurance() {
  return (
    <div className="pt-[80px]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-900" />
        <div className="relative z-10 text-center text-white px-4">
          <Link to="/patient-info" className="inline-flex items-center gap-2 text-primary mb-6 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={18} /> Back to Patient Info
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 leading-tight">
            Insurance & Payments
          </h1>
          <p className="max-w-[600px] mx-auto text-gray-400 text-lg font-serif">
            Financial transparency and flexible options for your care.
          </p>
        </div>
      </section>

      {/* Transparency Message */}
      <section className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <span className="text-primary uppercase tracking-[2px] text-sm font-semibold mb-4 block">Financial Transparency</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6 leading-tight">
            We Believe You Should Always Know the Cost Before You Commit
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-serif">
            At Neel Dentistry, we provide a full cost estimate before any treatment begins. No surprises. No hidden fees. If a treatment plan changes, we tell you before we proceed — never after.
          </p>
        </div>
      </section>

      {/* Insurance Providers Grid */}
      <section className="py-24 bg-[#f2f2f2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif mb-4">Accepted Insurance Providers</h2>
            <p className="text-gray-600 font-serif max-w-[700px] mx-auto">
              We are empanelled with the following insurance providers. Please confirm your specific plan details with our front desk prior to your appointment.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Star Health Insurance",
              "HDFC ERGO Health",
              "Niva Bupa Health",
              "Care Health Insurance",
              "Bajaj Allianz",
              "Aditya Birla Health",
              "Max Life Insurance",
              "TATA AIG"
            ].map((provider, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl flex items-center justify-center text-center shadow-sm border border-gray-100 hover:border-primary transition-colors cursor-default">
                <span className="font-bold text-gray-800 font-serif">{provider}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-3 text-gray-500 font-serif italic text-sm text-center">
            <CheckCircle2 className="text-primary" size={16} />
            Not all treatments are covered under all plans. We will help you understand your benefits clearly.
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl border border-gray-200 bg-white hover:shadow-xl transition-all">
              <div className="p-4 bg-primary/10 rounded-2xl w-fit text-primary mb-6">
                <Wallet size={32} />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4 text-gray-900">All Major Cards & UPI</h3>
              <p className="text-gray-600 font-serif leading-relaxed">
                We accept all major debit and credit cards, net banking, and all UPI platforms including GPay, PhonePe, and Paytm. Payment is collected after treatment is complete.
              </p>
            </div>
            
            <div className="p-10 rounded-3xl border border-gray-200 bg-white hover:shadow-xl transition-all">
              <div className="p-4 bg-primary/10 rounded-2xl w-fit text-primary mb-6">
                <CreditCard size={32} />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4 text-gray-900">Treatment Payment Plans</h3>
              <p className="text-gray-600 font-serif leading-relaxed">
                For larger treatment plans — implants, orthodontics, smile makeovers — we offer structured payment schedules so you can spread the cost without delaying your care.
              </p>
            </div>
            
            <div className="p-10 rounded-3xl border border-gray-200 bg-white hover:shadow-xl transition-all">
              <div className="p-4 bg-primary/10 rounded-2xl w-fit text-primary mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4 text-gray-900">Insurance Direct Billing</h3>
              <p className="text-gray-600 font-serif leading-relaxed">
                Where your insurer permits, we bill directly so you only pay your co-pay. We handle the paperwork so you don't have to worry about the logistics.
              </p>
            </div>
          </div>
          
          <p className="mt-16 text-center text-gray-400 text-sm font-serif italic max-w-[700px] mx-auto">
            *Payment plans are subject to approval. Treatment costs are estimates until a full clinical examination is completed. We will always confirm final costs before proceeding.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6">Have Questions About Costs?</h2>
          <p className="text-gray-800 text-lg mb-10 max-w-[700px] mx-auto font-serif">
            Our front desk team is ready to help you navigate your insurance benefits and payment options.
          </p>
          <Link to="/contact" className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg">
            Talk to Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
