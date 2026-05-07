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
    <section className="bg-section-pink py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-[640px] mx-auto text-center">
          {/* Stars — above the quote */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                fill="var(--color-primary)"
                stroke="var(--color-primary)"
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
              <p className="font-sans font-normal italic text-xl text-foreground leading-relaxed mb-8">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Patient name */}
              <p className="font-heading font-bold text-sm text-foreground mb-1">
                {review.author}, {review.location}
              </p>

              {/* Treatment type */}
              <p className="font-sans font-normal text-[13px] text-muted-foreground">
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
                className={`w-1.5 h-1.5 rounded-full border-none p-0 cursor-pointer transition-all ${
                  idx === current ? "w-2 h-2 bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
