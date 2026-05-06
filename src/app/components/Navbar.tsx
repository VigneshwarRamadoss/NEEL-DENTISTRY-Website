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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{
        backgroundColor: isScrolled ? "#FFFFFF" : "transparent",
        boxShadow: isScrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
        transition: "background-color 300ms ease, box-shadow 300ms ease",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start leading-[0.7] group" style={{ minWidth: "fit-content" }}>
          <span className="text-2xl font-black tracking-tighter font-nativera uppercase"
            style={{ color: isScrolled ? "#000000" : "#FFFFFF" }}
          >
            Neel
          </span>
          <span className="text-[11px] font-bold tracking-[0.35em] uppercase"
            style={{ 
              fontFamily: "'Open Sans', sans-serif",
              color: isScrolled ? "#ffc2d1" : "#ffc2d1",
            }}
          >
            Dentistry
          </span>
        </Link>

        {/* Desktop Nav — 44px gap, Roboto 15px 400, max 5 items visible */}
        <nav className="hidden lg:flex items-center" style={{ gap: "44px", marginLeft: "40px" }}>
          {navLinks.slice(0, 2).map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "15px",
                fontWeight: isActive(link.path) ? 700 : 400,
                color: isScrolled ? "#333333" : "#FFFFFF",
                letterSpacing: "0.2px",
                textDecoration: "none",
                transition: "color 300ms ease, font-weight 200ms ease",
                whiteSpace: "nowrap",
              }}
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
              className="flex items-center gap-1"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "15px",
                fontWeight: isActive("/services") ? 700 : 400,
                color: isScrolled ? "#333333" : "#FFFFFF",
                letterSpacing: "0.2px",
                textDecoration: "none",
                transition: "color 300ms ease",
                whiteSpace: "nowrap",
              }}
            >
              Services <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </Link>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[280px]">
                <div className="bg-white shadow-2xl rounded-xl border-t-[3px] border-[#ffc2d1] overflow-hidden">
                  <div className="p-3 grid grid-cols-1 gap-0">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="px-4 py-3 text-sm text-gray-700 hover:bg-[#F5F5F5] hover:text-[#000000] rounded-lg transition-all"
                        style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <Link
                        to="/services"
                        className="px-4 py-3 text-sm font-bold text-[#ffc2d1] flex items-center justify-between"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
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
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "15px",
                fontWeight: isActive(link.path) ? 700 : 400,
                color: isScrolled ? "#333333" : "#FFFFFF",
                letterSpacing: "0.2px",
                textDecoration: "none",
                transition: "color 300ms ease, font-weight 200ms ease",
                whiteSpace: "nowrap",
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right zone — Level 1 CTA (desktop) */}
        <div className="hidden lg:flex items-center">
          <a
            href="tel:+919655300036"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#ffc2d1",
              color: "#000000",
              height: "52px",
              padding: "0 36px",
              borderRadius: "6px",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "0.3px",
              textDecoration: "none",
              transition: "all 200ms ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffb3c6";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffc2d1";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Phone size={16} fill="currentColor" />
            Call Now
          </a>
        </div>

        {/* Mobile — Icon-only phone + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="tel:+919655300036"
            aria-label="Call Neel Dentistry"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              backgroundColor: "#ffc2d1",
              borderRadius: "50%",
              color: "#000000",
            }}
          >
            <Phone size={20} fill="currentColor" />
          </a>
          <button
            className="p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: isScrolled ? "#000000" : "#FFFFFF" }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 flex flex-col p-8 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "24px",
                  fontWeight: isActive(link.path) ? 700 : 400,
                  color: "#000000",
                  textDecoration: "none",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col gap-4 mt-2">
              <span
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#ffc2d1",
                  textTransform: "uppercase",
                  letterSpacing: "2.5px",
                }}
              >
                Our Services
              </span>
              {services.map(service => (
                <Link
                  key={service.path}
                  to={service.path}
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#333333",
                    paddingLeft: "16px",
                    borderLeft: "2px solid #E8E8E8",
                    textDecoration: "none",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </nav>

          <a
            href="tel:+919655300036"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              backgroundColor: "#ffc2d1",
              color: "#000000",
              padding: "16px 24px",
              borderRadius: "6px",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 700,
              fontSize: "18px",
              marginTop: "48px",
              textDecoration: "none",
            }}
          >
            <Phone size={22} fill="currentColor" />
            Call Now — +91 96553 00036
          </a>

          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "13px",
            color: "#888888",
            textAlign: "center",
            marginTop: "12px",
          }}>
            Mon–Sat · 9am–10pm · Sun · 10am–9pm
          </p>
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
