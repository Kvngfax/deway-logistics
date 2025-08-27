// src/components/Hero.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Example background images (replace with your own in /assets)
import hero1 from "../assets/hero-home.jpg";
import hero2 from "../assets/about-hero.jpg";
import hero3 from "../assets/delivery van.jpg";

const slides = [
  {
    id: 1,
    bg: hero1,
    span: "Deway Logistics",
    heading: "Your Trusted Partner",
    text: "We connect businesses and people with reliable logistics solutions that keep the world moving.",
    buttonText: "Welcome",
    buttonLink: "/deway-logistics/#/#hero"

  },
  {
    id: 2,
    bg: hero2,
    span: "About Deway",
    heading: "Who We Are ",
    text: "With years of experience, Deway Logistics ensures every package reaches its destination safely and on time.",
    buttonText: "About Us",
    buttonLink: "/deway-logistics/#/about",
  },
  {
    id: 3,
    bg: hero3,
    span: "Our Services",
    heading: "We've Got You Covered",
    text: "Explore our range of logistics services designed to meet your unique needs, whether for businesses or individuals.",
    buttonText: "View Services",
    buttonLink: "/deway-logistics/#/services",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen md:h-screen  -top-4 md:top-0">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar
        loop
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Background image with dark overlay */}
            <div
              className="relative h-11/12 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-start justify-center text-left h-full px-6 lg:px-20 -top-16">

                <div className="relative left-4 mb-12">
                  <span className="text-gray-200 z-10 text-2xl md:text-4xl font-semibold tracking-wide ml-2 md:ml-4">
                    {slide.span}
                  </span>
                  <span className="absolute -left-4 h-10 w-[10px] bg-orange-400 -z-0"></span>
                </div>
                <h1 className="text-white text-5xl md:text-6xl font-bold mb-12 leading-tight max-w-4xl">
                  {slide.heading}
                </h1>
                <p className="text-gray-200 text-xl md:text-2xl mb-16 max-w-2xl">
                  {slide.text}
                </p>
                <a
                  href={slide.buttonLink}
                  className="bg-orange-500 hover:bg-orange-400 text-gray-200 px-8 py-4 text-2xl font-semibold shadow-lg transition"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
