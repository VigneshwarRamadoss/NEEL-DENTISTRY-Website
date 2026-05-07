import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "I came in with a cracked tooth on a Monday morning. By afternoon I had a same-day crown. I haven't been to any other dentist since.",
    author: "Rajdeep S.",
    location: "Chennai",
    treatment: "Root Canal & Crown",
  },
  {
    text: "I was nervous about getting a root canal due to my past experience, but Dr. Neel and the team were incredible. The entire procedure was comfortable and pain-free — a huge relief.",
    author: "Muthu K.",
    location: "Pammal",
    treatment: "Root Canal",
  },
  {
    text: "The doctors are exceptional — caring, precise, and patient. Their commitment to quality dental care really shows in every visit. Grateful for their excellent service.",
    author: "Jawahar G.",
    location: "Chennai",
    treatment: "General Dentistry",
  },
  {
    text: "Well trained staff with minimum pain procedures. Briefed properly about the procedures. My decayed tooth was cleaned, root canal done, filled, and tooth cap fixed without any pain.",
    author: "Elango S.",
    location: "Sankar Nagar",
    treatment: "Root Canal & Crown",
  },
  {
    text: "First time visited for my wife's treatment. The root causes were explained promptly and treatment was done in a phased manner. Cost wise very reasonable and affordable.",
    author: "Palanirajan K.",
    location: "Chennai",
    treatment: "Root Canal & Capping",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const review = reviews[current];

  return (
    <section style={{ backgroundColor: "#fff5f7", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-[640px] mx-auto text-center">
          {/* Stars — above the quote */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                fill="#ffc2d1"
                color="#ffc2d1"
              />
            ))}
          </div>

          {/* Quote — single testimonial, centered, large */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "20px",
                color: "#000000",
                lineHeight: 1.7,
                marginBottom: "32px",
              }}>
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Patient name */}
              <p style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                color: "#000000",
                marginBottom: "4px",
              }}>
                {review.author}, {review.location}
              </p>

              {/* Treatment type */}
              <p style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                color: "#888888",
              }}>
                {review.treatment}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dot navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`View testimonial ${idx + 1}`}
                style={{
                  width: idx === current ? "8px" : "6px",
                  height: idx === current ? "8px" : "6px",
                  borderRadius: "50%",
                  backgroundColor: idx === current ? "#ffc2d1" : "#E8E8E8",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 200ms ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
