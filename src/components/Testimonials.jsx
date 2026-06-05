import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    text: "DEWAY Logistics is highly reliable and always delivers on time. Their service makes my job so much easier!",
    name: "Abdulbasit",
  },
  {
    text: "Their team is professional and truly cares about getting packages delivered with care. Excellent service!",
    name: "Bisola",
  },
  {
    text: "Quick, dependable, and affordable! DEWAY Logistics has been a fantastic partner for my delivery needs.",
    name: "Muhammed",
  },
  {
    text: "The customer service at DEWAY Logistics is top-notch. I always feel valued as a client.",
    name: "Olamide",
  },
];

export default function Testimonials() {
  return (
    <section className="sec sec--warm">
      <div className="wrap" style={{ textAlign: "center" }}>
        <span className="eyebrow eyebrow--center">Testimonial</span>
        <h2 style={{ fontSize: "clamp(2rem,4.6vw,3.1rem)", fontWeight: 700, marginTop: 14 }}>
          Our Clients <span className="hl">Say</span>
        </h2>

        <div className="tcar">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="tslide">
                  <div className="tq"><Quote className="ic" /></div>
                  <p>{t.text}</p>
                  <div className="who">{t.name}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}