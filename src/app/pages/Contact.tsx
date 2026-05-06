import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  ExternalLink,
  MessageCircle
} from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";

export function Contact() {
  const whatsappUrl = "https://wa.me/919655300036?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment%20with%20Neel%20Dentistry.";

  return (
    <div className="pt-[80px]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-900" />
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-[#ffc2d1] uppercase tracking-[3px] text-sm font-semibold mb-4 block">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="max-w-[600px] mx-auto text-gray-400 text-lg font-serif">
            We're here to answer your questions and help you schedule your next visit.
          </p>
        </div>
      </section>

      {/* Contact Details & Map */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-2/5">
              <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8">Reach Out to Us</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="p-4 bg-[#f2f2f2] rounded-2xl text-[#ffc2d1] h-fit">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">Phone & WhatsApp</h3>
                    <p className="text-gray-600 font-serif mb-1">Call us for appointments or chat with us instantly.</p>
                    <div className="flex flex-col gap-2">
                      <a href="tel:+919655300036" className="text-2xl font-bold text-gray-900 hover:text-[#ffc2d1] transition-colors">+91 96553 00036</a>
                      <a 
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-bold text-[#25D366] hover:text-[#1ebe57] transition-colors"
                      >
                        <WhatsAppIcon size={20} />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="p-4 bg-[#f2f2f2] rounded-2xl text-[#ffc2d1] h-fit">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">Our Location</h3>
                    <p className="text-gray-600 font-serif leading-relaxed">
                      Neel Dentistry Peace homes;<br />
                      113A, East main road Sankar Nagar,<br />
                      opposite Appaswamy The Bloomingdale,<br />
                      Estate, Pammal, Chennai, Tamil Nadu 600075.
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/wEfJnXYrMuPdmLaA7" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-[#ffc2d1] font-bold mt-3 hover:translate-x-1 transition-transform"
                    >
                      Get Directions <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="p-4 bg-[#f2f2f2] rounded-2xl text-[#ffc2d1] h-fit">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">Office Hours</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 font-serif text-gray-600">
                      <span>Mon - Sat</span> <span className="font-bold">9am - 10pm</span>
                      <span>Sunday</span> <span className="font-bold">10am - 9pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-3/5 h-[600px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#f2f2f2]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.097562358378!2d80.12020469357908!3d12.968730400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f1c94c00a3b%3A0x470f08bf7866d8e5!2sNEEL%20DENTISTRY%20-%20Dr%20Neelambari%20Mohan%20M.D.S.!5e0!3m2!1sen!2sin!4v1778046331134!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Strip */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold font-serif text-[#ffc2d1] mb-2">Dental Emergency?</h2>
              <p className="text-gray-400 font-serif text-lg">We reserve same-day slots for patients who need us most.</p>
           </div>
           <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+919655300036" className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl text-center">
                Call Emergency
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#1ebe57] transition-colors shadow-xl flex items-center justify-center gap-2">
                <WhatsAppIcon size={20} />
                WhatsApp Us
            </a>
           </div>
        </div>
      </section>
    </div>
  );
}
