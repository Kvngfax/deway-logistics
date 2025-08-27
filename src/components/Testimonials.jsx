// src/components/Testimonials.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Abdulbasit",
    text: "DEWAY Logistics is highly reliable and always delivers on time. Their service makes my job so much easier!",
  },
  {
    name: "Bisola",
    text: "Their team is professional and truly cares about getting packages delivered with care. Excellent service!",
  },
  {
    name: "Muhammed",
    text: "Quick, dependable, and affordable! DEWAY Logistics has been a fantastic partner for my delivery needs.",
  },
  {
    name: "Olamide",
    text: "The customer service at DEWAY Logistics is top-notch. I always feel valued as a client.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center ">
        {/* Heading */}
        <h6 className="text-orange-500 uppercase font-semibold tracking-wide text-xl">
          Testimonial
        </h6>
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-gray-900">
          Our Clients Say
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          loop
          className="pb-12"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative bg-[#f5f5f5] shadow-xl rounded-2xl px-8 py-10 max-w-[450px] mx-auto">
                {/* Quote Icon */}
                <div className="absolute -top-6 right-6 text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 opacity-30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.17 6A5.99 5.99 0 003 12c0 2.21 1.2 4.15 2.97 5.19L7 22h6l-2.83-5.66C10.8 15.66 12 13.71 12 12a6 6 0 00-2.83-6H9.17zm10 0A5.99 5.99 0 0013 12c0 2.21 1.2 4.15 2.97 5.19L17 22h6l-2.83-5.66C20.8 15.66 22 13.71 22 12a6 6 0 00-2.83-6h.01z" />
                  </svg>
                </div>

                {/* Testimonial Content */}
                <p className="text-2xl text-gray-700 leading-relaxed mb-6">{t.text}</p>
                <h6 className="text-3xl font-semibold text-gray-900">{t.name}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
