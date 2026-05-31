export const CLINIC = {
  name:        "Neel Dentistry",
  phone:       "+91 96553 00036",
  phoneRaw:    "+919655300036",
  whatsapp:    "https://wa.me/919655300036?text=Hello!%20I'd%20like%20to%20start%20my%20smile%20journey%20with%20Neel%20Dentistry.",
  city:        "Chennai",
  state:       "Tamil Nadu",
  tagline:     "Exceptional Dental Care, Delivered With Warmth.",
  subTagline:  "Sculpting Unique Smiles",
} as const;

export const SERVICES = [
  { id: "general-dentistry",     label: "General Dentistry",      icon: "shield" },
  { id: "cosmetic-dentistry",    label: "Cosmetic Dentistry",     icon: "sparkles" },
  { id: "orthodontics",          label: "Orthodontics",           icon: "alignCenter" },
  { id: "pediatric-dentistry",   label: "Pediatric Dentistry",    icon: "baby" },
  { id: "emergency-dental-care", label: "Emergency Dental Care",  icon: "alertCircle" },
] as const;

export const TRUST_STATS = [
  { value: 20,   suffix: "+",    label: "Years Experience" },
  { value: 2400, suffix: "+",    label: "Happy Patients" },
  { value: 5,    suffix: "-Star", label: "Rated Clinic" },
  { value: 24,   suffix: "/7",   label: "Emergency Care" },
] as const;

export const BREAKPOINTS = {
  sm:  480,
  md:  768,
  lg:  1024,
  xl:  1200,
  xxl: 1440,
} as const;
