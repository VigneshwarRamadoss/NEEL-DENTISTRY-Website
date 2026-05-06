import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Phone, MapPin, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#ffc2d1] text-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
        <div>
          <h2 className="text-2xl font-black mb-6 font-nativera uppercase tracking-tighter">
            NEEL <span className="text-white">DENTISTRY</span>
          </h2>
          <p className="text-gray-800 font-serif mb-8 leading-relaxed">
            Every patient deserves to be seen, heard, and cared for with complete honesty. That is the Neel Dentistry standard.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all border border-black/10">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all border border-black/10">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all border border-black/10">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-[2px] mb-8 font-sans">Quick Links</h3>
          <ul className="flex flex-col gap-4">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Patient Info", path: "/patient-info" },
              { name: "Smile Gallery", path: "/smile-gallery" },
              { name: "Contact Us", path: "/contact" }
            ].map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-gray-800 hover:text-white transition-colors font-serif">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-[2px] mb-8 font-sans">Our Services</h3>
          <ul className="flex flex-col gap-4">
            {[
              { name: "General Dentistry", path: "/services/general-dentistry" },
              { name: "Cosmetic Dentistry", path: "/services/cosmetic-dentistry" },
              { name: "Orthodontics", path: "/services/orthodontics" },
              { name: "Pediatric Dentistry", path: "/services/pediatric-dentistry" },
              { name: "Emergency Care", path: "/services/emergency-care" },
              { name: "Dental Implants", path: "/services/dental-implants" }
            ].map((service) => (
              <li key={service.name}>
                <Link to={service.path} className="text-gray-800 hover:text-white transition-colors font-serif">{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-[2px] mb-8 font-sans">Contact Info</h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
               <MapPin className="text-white shrink-0" size={20} />
               <p className="text-gray-800 font-serif">
                 Neel Dentistry Peace homes;<br />
                 113A, East main road Sankar Nagar,<br />
                 Pammal, Chennai, Tamil Nadu 600075
               </p>
            </div>
            <div className="flex gap-4 items-center">
               <Phone className="text-white shrink-0" size={20} />
               <a href="tel:+919655300036" className="text-gray-800 hover:text-white transition-colors font-serif">+91 96553 00036</a>
            </div>
            <div className="flex gap-4 items-center">
               <Mail className="text-white shrink-0" size={20} />
               <a href="mailto:hello@neeldentistry.com" className="text-gray-800 hover:text-white transition-colors font-serif">hello@neeldentistry.com</a>
            </div>
            <div className="flex gap-4 items-start">
               <Clock className="text-white shrink-0" size={20} />
               <div className="text-gray-800 font-serif text-sm">
                  <p>Mon - Sat: 9am - 10pm</p>
                  <p>Sun: 10am - 9pm</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-700 text-sm font-serif">
          &copy; {new Date().getFullYear()} Neel Dentistry. All rights reserved.
        </p>
        <div className="flex gap-8 text-sm text-gray-700 font-serif">
          <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
