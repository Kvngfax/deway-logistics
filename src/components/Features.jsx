// src/components/Features.jsx
import React from "react";
import van from "../assets/delivery van.jpg"

export default function Features() {
  const features = [
    "Best in Industry",
    "Timely Delivery",
    "24/7 Customer Support",
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-30 md:px-16">
      <div className="max-w-7xl md:max-w-full mx-auto px-6 lg:px-8 flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-12 md:gap-20">
        {/* Left Image */}
        <div>
          <img
            src={van}
            alt="Delivery van in motion"
            className="w-full shadow-2xl object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="space-y-6">
          <h6 className="text-orange-400 uppercase font-semibold tracking-wide text-lg">
            Why Choose Us
          </h6>
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-gray-900">
            Faster, Safe, and Trusted Logistics Services
          </h2>
          <p className="text-gray-700 leading-relaxed text-xl">
            With a dedicated team and cutting-edge technology, DEWAY Logistics Ltd ensures fast,
            safe, and dependable deliveries. Our customer-first approach makes us the preferred
            logistics solution across Nigeria.
          </p>

          <ul className="space-y-4 text-xl">
            {features.map((feat) => (
              <li key={feat} className="flex items-center">
                <span className="inline-block h-3 w-3 bg-orange-500 rounded-full mr-3"></span>
                <span className="text-gray-800 font-medium">{feat}</span>
              </li>
            ))}
          </ul>

          <div className="pt-[30px]">
            <a href="#services">
              <p className="text-xl font-semibold text-gray-800">Learn More</p>
              <div className="w-20 h-1 bg-orange-500 mt-1"></div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
