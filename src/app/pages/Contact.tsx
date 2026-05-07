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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-28 flex items-center justify-center overflow-hidden bg-dark-bg">
        <div className="absolute inset-0 z-0 bg-dark-bg/80" />
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-primary uppercase tracking-[0.3em] text-xs sm:text-sm font-black mb-5 block font-sans">
            Get in Touch
          </span>
          <h1 className="text-white mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="max-w-[600px] mx-auto text-white/50 text-base sm:text-lg lg:text-xl font-heading leading-relaxed">
            We're here to answer your questions and help you schedule your next visit.
          </p>
        </div>
      </section>

      {/* Contact Details & Map */}
      <section className="py-16 sm:py-24 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div className="w-full lg:w-2/5">
              <h2 className="text-black mb-10">Reach Out to Us</h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="p-4 bg-primary/15 rounded-2xl text-primary h-fit shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-black mb-2">Phone & WhatsApp</h4>
                    <p className="text-muted-foreground text-sm sm:text-base font-heading mb-4 leading-relaxed">
                      Call us for appointments or chat with us instantly.
                    </p>
                    <div className="flex flex-col gap-3">
                      <a 
                        href="tel:+919655300036" 
                        className="text-2xl sm:text-3xl font-bold text-black hover:text-primary transition-colors font-heading"
                      >
                        +91 96553 00036
                      </a>
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
                  <div className="p-4 bg-primary/15 rounded-2xl text-primary h-fit shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-black mb-2">Our Location</h4>
                    <p className="text-muted-foreground text-base sm:text-lg font-heading leading-relaxed">
                      Neel Dentistry Peace homes;<br />
                      113A, East main road Sankar Nagar,<br />
                      opposite Appaswamy The Bloomingdale,<br />
                      Estate, Pammal, Chennai, Tamil Nadu 600075.
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/wEfJnXYrMuPdmLaA7" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mt-4 hover:gap-3 transition-all"
                    >
                      Get Directions <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="p-4 bg-primary/15 rounded-2xl text-primary h-fit shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-black mb-2">Office Hours</h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-heading text-muted-foreground text-sm sm:text-base">
                      <span className="font-medium">Mon - Sat</span> 
                      <span className="font-bold text-black">9am - 10pm</span>
                      <span className="font-medium">Sunday</span> 
                      <span className="font-bold text-black">10am - 9pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-3/5 h-[400px] sm:h-[500px] lg:h-auto min-h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-section-pink">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.097562358378!2d80.12020469357908!3d12.968730400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f1c94c00a3b%3A0x470f08bf7866d8e5!2sNEEL%20DENTISTRY%20-%20Dr%20Neelambari%20Mohan%20M.D.S.!5e0!3m2!1sen!2sin!4v1778046331134!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Strip */}
      <section className="py-16 sm:py-20 lg:py-24 bg-dark-bg text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
           <div className="text-center lg:text-left max-w-2xl">
              <h2 className="text-primary mb-3">Dental Emergency?</h2>
              <p className="text-white/50 text-base sm:text-lg lg:text-xl font-heading leading-relaxed">
                We reserve same-day slots for patients who need us most. Reach out immediately.
              </p>
           </div>
           <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <a 
              href="tel:+919655300036" 
              className="bg-white hover:bg-gray-100 text-black px-10 py-5 rounded-xl font-sans font-bold text-base sm:text-lg transition-all shadow-xl text-center active:scale-95 whitespace-nowrap"
            >
                Call Emergency
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#25D366] hover:bg-[#1ebe57] text-white px-10 py-5 rounded-xl font-sans font-bold text-base sm:text-lg transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95 whitespace-nowrap"
            >
                <WhatsAppIcon size={24} />
                WhatsApp Us
            </a>
           </div>
        </div>
      </section>
    </div>
  );
}
