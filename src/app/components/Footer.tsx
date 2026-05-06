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
  color: "#ffc2d1",
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
    <footer style={{ backgroundColor: "#1A2E35" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10" style={{ paddingTop: "80px", paddingBottom: "40px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 — Brand */}
          <div>
            {/* Logo white variant */}
            <div className="mb-6">
              <span
                style={{
                  fontFamily: "'Nativera', sans-serif",
                  fontWeight: 800,
                  fontSize: "28px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  letterSpacing: "-1px",
                  lineHeight: 0.7,
                  display: "block",
                }}
              >
                Neel
              </span>
              <span
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  letterSpacing: "3px",
                  color: "#ffc2d1",
                  textTransform: "uppercase",
                }}
              >
                Dentistry
              </span>
            </div>

            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "24px",
              lineHeight: 1.6,
            }}>
              Where care meets craft.
            </p>

            {/* Phone — standalone headline */}
            <a
              href="tel:+919655300036"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 700,
                fontSize: "22px",
                color: "#FFFFFF",
                textDecoration: "none",
                display: "block",
                marginBottom: "8px",
              }}
            >
              +91 96553 00036
            </a>
            <a
              href="mailto:hello@neeldentistry.com"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
              }}
            >
              hello@neeldentistry.com
            </a>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 style={columnHeadingStyle}>Quick Links</h4>
            <ul className="flex flex-col">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={linkStyle}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,1)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 style={columnHeadingStyle}>Services</h4>
            <ul className="flex flex-col">
              {serviceLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={linkStyle}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,1)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Visit Us */}
          <div>
            <h4 style={columnHeadingStyle}>Visit Us</h4>
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}>
              Neel Dentistry Peace Homes,<br />
              113A, East Main Road, Sankar Nagar,<br />
              Pammal, Chennai 600075
            </p>
            <div style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 2.0,
            }}>
              <p>Mon – Sat: 9am – 10pm</p>
              <p>Sun: 10am – 9pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4 py-5">
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "12px",
            color: "rgba(255,255,255,0.35)",
          }}>
            &copy; {new Date().getFullYear()} Neel Dentistry. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              to="/"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.35)"; }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.35)"; }}
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
