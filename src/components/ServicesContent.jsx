// src/pages/ServicesContent.jsx
import React from "react";
import delivery from "../assets/delivery3.jpg";
import logistics from "../assets/delivery4.jpg"
import haulages from "../assets/delivery1.jpg"
import pickup from "../assets/delivery5.jpg"

export default function ServicesContent() {
  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 md:px-20 py-20">
      <div className="max-w-7xl md:max-w-full mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12 md:mb-20 ">
          Our Services
        </h1>

        <div className="flex flex-col md:gap-40 gap-16">
          {/* Logistics */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-30">
            <div className="flex-1">
              <img
                src={logistics}
                alt="Logistics"
                className="w-full h-full object-cover shadow-md"
              />
            </div>
            <div className="flex-1 md:space-y-10">
              <div className="relative left-4 ">
                <h2 className=" text-3xl font-bold text-gray-700 mb-4 md:text-6xl">
                  Logistics
                </h2>
                <span className="absolute -left-4 -top-1 md:top-0 h-10 md:h-full w-[10px] bg-orange-400"></span>
              </div>
              <p className="text-gray-600 leading-relaxed text-xl md:text-2xl mb-2">
                We provide efficient and reliable logistics solutions designed to
                meet the needs of businesses and individuals. Our team ensures
                that every package is handled with care and delivered on time.
              </p>
              <p className="text-gray-600 leading-relaxed text-xl md:text-2xl">
                Whether it is local distribution or nationwide transportation, we
                have the resources and expertise to simplify the process for you.
              </p>
            </div>
          </div>

          {/* Delivery */}
          <div className="flex flex-col md:flex-row-reverse md:gap-30 gap-10 items-center">
            <div className="flex-1">
              <img
                src={delivery}
                alt="Delivery"
                className="w-full h-full object-cover shadow-md"
              />
            </div>
            <div className="flex-1 md:space-y-10">
              <div className="relative left-4">
                <h2 className=" text-3xl font-bold text-gray-700 mb-4 md:text-5xl">
                  Delivery
                </h2>
                <span className="absolute -left-4 -top-1 md:top-0 h-10 md:h-full w-[10px] bg-orange-400"></span>
              </div>
              <p className="text-gray-600 leading-relaxed text-xl md:text-2xl mb-2">
                Our delivery service is fast, secure, and designed to keep you
                stress-free. From small parcels to larger goods, we ensure timely
                drop-offs across multiple locations.
              </p>
              <p className="text-gray-600 leading-relaxed text-xl md:text-2xl">
                We combine technology and
                human dedication to keep you informed every step of the way,
                guaranteeing smooth deliveries with full transparency.
              </p>
            </div>
          </div>

          {/* Haulages */}
          <div className="flex flex-col md:flex-row md:gap-30 gap-10 items-center">
            <div className="flex-1">
              <img
                src={haulages}
                alt="Haulage"
                className="w-full h-full object-cover shadow-md"
              />
            </div>
            <div className="flex-1 md:space-y-10">
              <div className="relative left-4">
                <h2 className=" text-3xl font-bold text-gray-700 mb-4 md:text-5xl">
                  Haulages
                </h2>
                <span className="absolute -left-4 -top-1 md:top-0 h-10 md:h-full w-[10px] bg-orange-400"></span>
              </div>
              <p className="text-gray-600 leading-relaxed text-xl md:text-2xl mb-2">
                We specialize in dependable haulage services that connect
                businesses to their markets. Our trucks and experienced drivers
                ensure that bulk goods, construction materials, or equipment are
                transported safely and efficiently.
              </p>
              <p className="text-gray-600 leading-relaxed text-xl md:text-2xl">
                With a strong emphasis on
                punctuality, we help businesses maintain smooth supply chains and
                operations.
              </p>
            </div>
          </div>

          {/* Pick Up */}
          <div className="flex flex-col md:flex-row-reverse md:gap-30 gap-10 items-center">
            <div className="flex-1">
              <img
                src={pickup}
                alt="Pick Up"
                className="w-full h-full object-cover shadow-md"
              />
            </div>
            <div className="flex-1 md:space-y-10">
              <div className="relative left-4">
                <h2 className=" text-3xl font-bold text-gray-700 mb-4 md:text-5xl">
                  Pick Up
                </h2>
                <span className="absolute -left-4 -top-1 md:top-0 h-10 md:h-full w-[10px] bg-orange-400"></span>
              </div>
              <p className="text-gray-600 leading-relaxed text-xl md:text-2xl mb-2">
                Our pick up service offers convenience at your doorstep. You no
                longer need to worry about dropping packages off. We come to you,
                collect your items, and ensure they are delivered where they need
                to be.
              </p>
              <p className="text-gray-600 leading-relaxed text-xl md:text-2xl">
                This service is designed to save time for busy individuals
                and organizations, allowing you to focus on what truly matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
