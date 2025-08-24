// src/components/Hero.jsx
import React from "react";
import hero from "../assets/heroImage.avif"

export default function Hero() {

  return (
    <section className="w-full bg-white text-black" id="home">
      <div className="mx-auto max-w-[1520px] flex flex-col lg:flex-row items-center py-10 lg:py-20 lg:px-8 gap-12">
        
        {/* Text Column */}
        <div className="flex-1 space-y-4 md:space-y-6 text-left lg:text-left px-6">
          <h6 className="text-orange-400 font-bold uppercase tracking-widest">
            Safe & Faster
          </h6>
          <h1 className="text-[40px] lg:text-6xl font-extrabold leading-tight">
            Logistics and Delivery Services
          </h1>
          <p className="text-gray-800 max-w-xl mx-auto lg:mx-0 text-[20px] md:text-2xl">
          Deway Logistics is an indigenous logistics company based in Nigeria, dedicated to providing fast, reliable, and technology-driven transport solutions. Our services are designed to meet the growing demands of businesses and individuals across the country, offering efficient transportation, pick-up, and last-mile delivery services.
          </p>
          <div className="flex justify-left lg:justify-start gap-4 text-lg pt-[25px] lg:pt-[0]">
            <a
              href="#services"
              className="rounded-lg bg-orange-400 px-6 py-3 text-gray-100 font-semibold hover:bg-orange-500 transition"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-orange-400 px-6 py-3 text-orange-400 font-semibold hover:bg-orange-400 hover:text-black transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={hero}
            alt="Cargo containers at logistics hub"
            className="w-full max-w-full lg:max-w-7xl lg:w-[800px] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
