import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router";

const services = [
  { name: "General Dentistry", path: "/services/general-dentistry" },
  { name: "Cosmetic Dentistry", path: "/services/cosmetic-dentistry" },
  { name: "Orthodontics", path: "/services/orthodontics" },
  { name: "Pediatric Dentistry", path: "/services/pediatric-dentistry" },
  { name: "Emergency Care", path: "/services/emergency-care" },
  { name: "Dental Implants", path: "/services/dental-implants" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Patient Info", path: "/patient-info" },
  { name: "Gallery", path: "/smile-gallery" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const isHomePage = location.pathname === "/";
  const shouldShowSolid = isScrolled || !isHomePage;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        shouldShowSolid ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start leading-[0.7] group min-w-fit">
          <span className={`text-2xl font-black tracking-tighter font-nativera uppercase transition-colors duration-300 ${
            shouldShowSolid ? "text-black" : "text-white"
          }`}>
            Neel
          </span>
          <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-primary">
            Dentistry
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 ml-10">
          {navLinks.slice(0, 2).map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-heading text-[15px] tracking-wide transition-all duration-300 hover:text-primary ${
                isActive(link.path) ? "font-bold" : "font-normal"
              } ${shouldShowSolid ? "text-gray-800" : "text-white"}`}
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className={`flex items-center gap-1 font-heading text-[15px] tracking-wide transition-colors duration-300 hover:text-primary ${
                isActive("/services") ? "font-bold" : "font-normal"
              } ${shouldShowSolid ? "text-gray-800" : "text-white"}`}
            >
              Services <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </Link>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[280px]">
                <div className="bg-white shadow-2xl rounded-xl border-t-[3px] border-primary overflow-hidden">
                  <div className="p-3 grid grid-cols-1 gap-0">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-all font-sans"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <Link
                        to="/services"
                        className="px-4 py-3 text-sm font-bold text-primary flex items-center justify-between font-sans"
                        onClick={() => setServicesOpen(false)}
                      >
                        View All Services <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(2).map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-heading text-[15px] tracking-wide transition-all duration-300 hover:text-primary ${
                isActive(link.path) ? "font-bold" : "font-normal"
              } ${shouldShowSolid ? "text-gray-800" : "text-white"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="tel:+919655300036"
            className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-black h-[52px] px-8 rounded-lg font-sans font-bold text-base tracking-wide transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <Phone size={16} fill="currentColor" />
            Call Now
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <a
            href="tel:+919655300036"
            aria-label="Call Neel Dentistry"
            className="flex items-center justify-center w-11 h-11 bg-primary rounded-full text-black shadow-sm active:scale-90 transition-transform"
          >
            <Phone size={20} fill="currentColor" />
          </a>
          <button
            className={`p-1 transition-colors duration-300 ${shouldShowSolid ? "text-black" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div 
        className={`lg:hidden fixed inset-0 top-0 bg-white z-[60] flex flex-col transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-[72px] px-4 border-b">
          <Link to="/" className="flex flex-col items-start leading-[0.7]" onClick={() => setMobileMenuOpen(false)}>
            <span className="text-2xl font-black tracking-tighter font-nativera uppercase text-black">
              Neel
            </span>
            <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-primary">
              Dentistry
            </span>
          </Link>
          <button className="p-2 text-black" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto px-6 py-10">
          <nav className="flex flex-col gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading text-3xl tracking-tight ${
                  isActive(link.path) ? "font-bold text-primary" : "font-normal text-black"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col gap-5 mt-4">
              <span className="font-sans text-xs font-black text-primary uppercase tracking-[0.2em]">
                Our Services
              </span>
              <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-gray-100">
                {services.map(service => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="font-sans text-lg font-medium text-gray-700 active:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="mt-16 space-y-6">
            <a
              href="tel:+919655300036"
              className="flex items-center justify-center gap-3 bg-primary text-black py-5 rounded-xl font-sans font-bold text-xl shadow-lg active:scale-95 transition-all"
            >
              <Phone size={24} fill="currentColor" />
              Call +91 96553 00036
            </a>

            <div className="text-center space-y-2">
              <p className="font-sans text-sm font-bold text-gray-400 uppercase tracking-widest">
                Opening Hours
              </p>
              <p className="font-sans text-base text-gray-600">
                Mon–Sat · 9am–10pm
              </p>
              <p className="font-sans text-base text-gray-600">
                Sun · 10am–9pm
              </p>
            </div>
          </div>
        </div>
      </div>
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
