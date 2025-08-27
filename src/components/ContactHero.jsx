// src/components/Hero.jsx
import React from "react";
import hero3 from "../assets/delivery van.jpg";

export default function ContactHero() {
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
            <span className="text-gray-200 z-10 text-4xl md:text-4xl font-semibold tracking-wide ml-2 md:ml-4">
              Contact Deway
            </span>
            <span className="absolute -left-4 h-14 w-[10px] bg-orange-400 -z-0 -top-2"></span>
          </div>
          <h1 className="absolute text-center self-center text-white text-8xl md:text-9xl font-bold mb-12 leading-tight max-w-4xl opacity-30">
            Contact Us
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl mb-16 max-w-2xl">
            We offer reliable services that make logistics simple and hassle-free from beginning to end.
          </p>
        </div>
      </div>
    </section>
  );
}
