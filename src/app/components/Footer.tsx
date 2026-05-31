import { Link } from "react-router";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Patient Info", path: "/patient-info" },
  { name: "Smile Gallery", path: "/smile-gallery" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const serviceLinks = [
  { name: "General Dentistry", path: "/services/general-dentistry" },
  { name: "Cosmetic Dentistry", path: "/services/cosmetic-dentistry" },
  { name: "Orthodontics", path: "/services/orthodontics" },
  { name: "Pediatric Dentistry", path: "/services/pediatric-dentistry" },
  { name: "Emergency Care", path: "/services/emergency-care" },
  { name: "Dental Implants", path: "/services/dental-implants" },
];

const columnHeadingStyle: React.CSSProperties = {
  fontFamily: "'Open Sans', sans-serif",
  fontWeight: 700,
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "2px",
  color: "var(--color-primary)",
  marginBottom: "24px",
};

const linkStyle: React.CSSProperties = {
  fontFamily: "'Open Sans', sans-serif",
  fontWeight: 400,
  fontSize: "13px",
  color: "rgba(255,255,255,0.65)",
  textDecoration: "none",
  lineHeight: 2.0,
  transition: "color 200ms ease",
};

export function Footer() {
  return (
    <footer className="bg-[#1A2E35] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10">
          {/* Column 1 — Brand */}
          <div className="space-y-6">
            <div>
              <span className="font-nativera font-extrabold text-3xl text-white uppercase tracking-tighter leading-none block">
                Neel
              </span>
              <span className="font-sans font-bold text-[10px] tracking-[0.3em] text-primary uppercase block mt-0.5">
                Dentistry
              </span>
            </div>

            <p className="font-sans text-white/50 text-sm leading-relaxed max-w-[240px]">
              Where care meets craft. Delivering exceptional dental experiences for 20+ years.
            </p>

            <div className="space-y-2">
              <a
                href="tel:+919655300036"
                className="font-heading font-bold text-2xl text-white hover:text-primary transition-colors block"
              >
                +91 96553 00036
              </a>
              <a
                href="mailto:hello@neeldentistry.com"
                className="font-sans text-sm text-white/50 hover:text-white transition-colors block"
              >
                hello@neeldentistry.com
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-primary mb-8">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-primary mb-8">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Visit Us */}
          <div className="space-y-8">
            <div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-primary mb-8">
                Visit Us
              </h4>
              <p className="font-sans text-[13px] text-white/60 leading-relaxed">
                Neel Dentistry Peace Homes,<br />
                113A, East Main Road, Sankar Nagar,<br />
                Pammal, Chennai 600075
              </p>
            </div>
            
            <div className="space-y-1">
              <p className="font-sans text-[13px] text-white/60">Mon – Sat: 9am – 10pm</p>
              <p className="font-sans text-[13px] text-white/60">Sun: 10am – 9pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-center gap-6 py-8">
          <p className="font-sans text-xs text-white/30 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Neel Dentistry. The Dot
          </p>
          <div className="flex gap-8">
            <Link
              to="/"
              className="font-sans text-xs text-white/30 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="font-sans text-xs text-white/30 hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
