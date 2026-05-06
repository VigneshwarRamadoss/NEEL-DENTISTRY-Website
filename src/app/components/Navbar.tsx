import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router";

const services = [
  { name: "General Dentistry", path: "/services/general-dentistry" },
  { name: "Cosmetic Dentistry", path: "/services/cosmetic-dentistry" },
  { name: "Orthodontics", path: "/services/orthodontics" },
  { name: "Pediatric Dentistry", path: "/services/pediatric-dentistry" },
  { name: "Emergency Care", path: "/services/emergency-care" },
  { name: "Dental Implants", path: "/services/dental-implants" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#ffc2d1] shadow-lg py-3" : "bg-[#ffc2d1]/90 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        <Link to="/" className="flex flex-col items-start leading-[0.7] group">
          <span className="text-2xl font-black tracking-tighter text-gray-900 font-nativera uppercase">
            Neel
          </span>
          <span className="text-[11px] font-bold tracking-[0.35em] text-white font-sans uppercase">
            Dentistry
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-[14px] font-bold text-gray-900 hover:text-white transition-colors font-sans uppercase tracking-widest whitespace-nowrap">Home</Link>
          <Link to="/about" className="text-[14px] font-bold text-gray-900 hover:text-white transition-colors font-sans uppercase tracking-widest whitespace-nowrap">About</Link>
          
          {/* Services Mega Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link 
              to="/services" 
              className="text-[14px] font-bold text-gray-900 hover:text-white transition-colors font-sans uppercase tracking-widest flex items-center gap-1 whitespace-nowrap"
            >
              Services <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </Link>
            
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[280px]">
                <div className="bg-white shadow-2xl rounded-2xl border-t-4 border-[#ffc2d1] overflow-hidden">
                  <div className="p-4 grid grid-cols-1 gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-[#ffc2d1]/10 hover:text-[#ffc2d1] rounded-xl transition-all"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link 
                        to="/services" 
                        className="px-4 py-3 text-sm font-bold text-[#ffc2d1] flex items-center justify-between group/all"
                        onClick={() => setServicesOpen(false)}
                      >
                        View All Services <ArrowRight size={14} className="group-hover/all:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/patient-info" className="text-[14px] font-bold text-gray-900 hover:text-white transition-colors font-sans uppercase tracking-widest whitespace-nowrap">Patient Info</Link>
          <Link to="/smile-gallery" className="text-[14px] font-bold text-gray-900 hover:text-white transition-colors font-sans uppercase tracking-widest whitespace-nowrap border-2 border-white/40 px-4 py-1.5 rounded-lg">Gallery</Link>
          <Link to="/blog" className="text-[14px] font-bold text-gray-900 hover:text-white transition-colors font-sans uppercase tracking-widest whitespace-nowrap">Blog</Link>
          <Link to="/contact" className="text-[14px] font-bold text-gray-900 hover:text-white transition-colors font-sans uppercase tracking-widest whitespace-nowrap">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="tel:+919655300036"
            className="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-5 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            <Phone size={16} fill="currentColor" />
            <span className="font-sans text-[14px]">+91 96553 00036</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[80px] bg-white z-40 flex flex-col p-8 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            <Link to="/" className="text-2xl font-bold text-gray-900 font-serif" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-2xl font-bold text-gray-900 font-serif" onClick={() => setMobileMenuOpen(false)}>About</Link>
            
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-[#ffc2d1] uppercase tracking-widest">Our Services</span>
              {services.map(service => (
                <Link 
                  key={service.path} 
                  to={service.path} 
                  className="text-xl font-medium text-gray-700 pl-4 border-l-2 border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Link to="/patient-info" className="text-2xl font-bold text-gray-900 font-serif" onClick={() => setMobileMenuOpen(false)}>Patient Info</Link>
            <Link to="/smile-gallery" className="text-2xl font-bold text-gray-900 font-serif" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link to="/blog" className="text-2xl font-bold text-gray-900 font-serif" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="text-2xl font-bold text-gray-900 font-serif" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>

          <a
            href="tel:+919655300036"
            className="flex items-center justify-center gap-3 bg-[#ffc2d1] text-gray-900 px-6 py-4 rounded-full font-bold text-xl mt-12 shadow-lg"
          >
            <Phone size={24} />
            <span>Call Us Now</span>
          </a>
        </div>
      )}
    </header>
  );
}

function ArrowRight({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}
