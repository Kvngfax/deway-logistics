// src/components/Hero.jsx
import React from "react";
import hero2 from "../assets/about-hero.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen md:h-screen -top-4 md:top-0">

      <div
        className="relative h-screen md:h-11/12 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-start text-left justify-center h-full px-6 lg:px-20 -top-16">
          <div className="relative left-4 mb-12">
            <span className="text-gray-200 z-10 text-4xl md:text-4xl font-semibold tracking-wide ml-2 md:ml-4">
              About Deway
            </span>
            <span className="absolute -left-4 h-14 w-[10px] bg-orange-400 -z-0"></span>
          </div>
          <h1 className="absolute text-center self-center text-white text-9xl font-bold mb-12 leading-tight max-w-4xl opacity-30">
            About Us
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl mb-16 max-w-2xl">
            With years of experience, Deway Logistics ensures every package reaches its destination safely and on time
          </p>
        </div>
      </div>
    </section>
  );
}
