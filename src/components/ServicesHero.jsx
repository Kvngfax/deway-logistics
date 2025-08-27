// src/components/Hero.jsx
import React from "react";

import hero3 from "../assets/delivery van.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen md:h-screen -top-4 md:top-0">

      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${hero3})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start text-left justify-center h-full px-6 lg:px-20 -top-16">
          <div className="relative left-4 mb-12">
            <span className="text-gray-200 z-10 text-4xl md:text-5xl font-semibold tracking-wide ml-2 md:ml-4">
              Services
            </span>
            <span className="absolute -left-4 h-14 w-[10px] bg-orange-400 -z-0 -top-2 md:-top-1"></span>
          </div>
          <h1 className="absolute text-center self-center text-white text-8xl md:text-9xl font-bold mb-12 leading-tight max-w-4xl opacity-30">
            Our Services
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl mb-16 max-w-2xl">
            Deway Logistics delivers trusted and innovative solutions backed by years
            of expertise, ensuring your goods are transported with speed, safety, and precision.
          </p>
        </div>
      </div>
    </section>
  );
}
