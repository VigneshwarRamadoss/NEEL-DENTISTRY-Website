import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, BadgeCheck } from "lucide-react";

// Real Google Reviews from verified patients
const reviews = [
  {
    text: "It was my first time to visit here for deep cleaning of my teeth. They handle very properly and their staff are supportive and good at handling the situation. And the consolidation fees are also minimal and the rest will be there depending on what you want to do.",
    author: "Rajdeep Singha",
    meta: "Local Guide · 311 reviews · 831 photos",
    time: "9 months ago",
    treatment: "Deep Cleaning",
    initials: "RS",
    avatarColor: "#4CAF50",
    stars: 5,
  },
  {
    text: "I was nervous about getting a root canal due to my past experience, but Dr Neel and their team were incredible. The entire procedure was well explained first then the procedure was comfortable and pain-free, which was huge relief. On top of that, the charges were fair and affordable than other quotes that I received. I appreciate their professional and caring approach.",
    author: "Muthu Kumaran",
    meta: "3 reviews",
    time: "7 months ago",
    treatment: "Root Canal",
    initials: "MK",
    avatarColor: "#E91E63",
    stars: 5,
  },
  {
    text: "The doctors are very knowledgeable and the service quality is top-notch. Highly recommend this clinic. The doctors here are exceptional — caring, precise, and patient. Their commitment to quality dental care really shows in every visit. Grateful for their excellent service. Their ambiance are excellent.",
    author: "Jawahar Ganesh",
    meta: "7 reviews",
    time: "6 months ago",
    treatment: "General Dentistry",
    initials: "JG",
    avatarColor: "#9C27B0",
    stars: 5,
  },
  {
    text: "Well trained staffs with minimum pain procedures done. Briefed properly about the procedures. Fully satisfied Thanks. My decayed tooth was cleaned root canal done filled and tooth cap was fixed with out and pain and now I feel normal.",
    author: "Elango Sivaprakasam",
    meta: "Local Guide · 29 reviews · 40 photos",
    time: "4 months ago",
    treatment: "Root Canal & Crown",
    initials: "ES",
    avatarColor: "#FF5722",
    stars: 5,
  },
  {
    text: "This is the first time visited to the Dentistry for my wife treatment. The root causes for the dental problem was explained promptly and undergone the remedial treatment in a phased manner. Cost wise also we felt very reasonable and affordable. The root canal and capping was carried out effectively.",
    author: "Palanirajan Kumar",
    meta: "2 reviews",
    time: "7 months ago",
    treatment: "Root Canal & Capping",
    initials: "PK",
    avatarColor: "#2196F3",
    stars: 5,
  },
];

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-28 bg-gray-900 text-white overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#ffc2d1]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[#ffc2d1] font-semibold tracking-[0.25em] uppercase text-xs mb-4">
            <BadgeCheck size={14} />
            Verified Google Reviews
          </span>
          <h2 className="text-3xl md:text-[44px] font-bold mb-4 font-serif leading-tight">
            What Our Patients Say
          </h2>
          <p className="text-gray-400 text-lg font-sans leading-relaxed">
            Real words from real patients. Every review below is pulled directly from Google.
          </p>
          {/* Google aggregate score */}
          <div className="inline-flex items-center gap-3 mt-6 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-[#ffc2d1] fill-[#ffc2d1]" />
              ))}
            </div>
            <span className="text-white font-black text-xl">5.0</span>
            <span className="text-gray-400 text-sm font-sans">on Google</span>
          </div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="testimonial-slider"
        >
          <Slider {...settings}>
            {reviews.map((review, idx) => (
              <div key={idx} className="p-3 h-full">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-7 flex flex-col gap-5 border border-white/5 hover:border-[#ffc2d1]/30 transition-all duration-300 h-full min-h-[340px] shadow-xl">

                  {/* Top: Avatar + Name + Google badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar circle with initials */}
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0 shadow-lg"
                        style={{ backgroundColor: review.avatarColor }}
                      >
                        {review.initials}
                      </div>
                      <div>
                        <p className="font-bold text-white text-[15px] leading-tight">{review.author}</p>
                        <p className="text-gray-500 text-[11px] font-sans leading-tight mt-0.5">{review.meta}</p>
                      </div>
                    </div>
                    {/* Google "G" icon */}
                    <svg className="shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>

                  {/* Stars + time */}
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} size={14} className="text-[#ffc2d1] fill-[#ffc2d1]" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-[11px] font-sans">{review.time}</span>
                  </div>

                  {/* Review text */}
                  <p className="text-gray-300 font-sans text-[14px] leading-[1.75] flex-grow">
                    "{review.text}"
                  </p>

                  {/* Treatment tag */}
                  <div className="pt-1 border-t border-white/5">
                    <span className="inline-block bg-[#ffc2d1]/10 text-[#ffc2d1] text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                      {review.treatment}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      <style>{`
        .testimonial-slider .slick-list { padding: 8px 0 24px; }
        .testimonial-slider .slick-track { display: flex !important; align-items: stretch; }
        .testimonial-slider .slick-slide > div { height: 100%; }
        .testimonial-slider .slick-dots li button:before { color: #4b5563; font-size: 8px; }
        .testimonial-slider .slick-dots li.slick-active button:before { color: #ffc2d1; }
      `}</style>
    </section>
  );
}
