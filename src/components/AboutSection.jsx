import React from "react";
import Bike from "../assets/Delivery bike.png"

export default function AboutSection() {
  return (
    <section className="bg-white py-20 lg:pb-20 lg:pt-10 px-8 lg:px-24 -z-100" id="aboutSection">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Div - Image */}
        <div className="relative">
          <div className="shadow-lg rounded-xl overflow-hidden ">
            <img
              src={Bike} // replace with your image path
              alt="Deway Logistics Bike"
              width={600}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Right Div - Text */}
        <div className="space-y-6 lg:max-w-xl">
          {/* About Deway with orange box */}
          <div className="relative inline-block justify-center left-4 pb-2">
            <span className="relative z-10 text-2xl text-gray-600 ">About Deway</span>
            <span className="absolute -left-4 -top-1 h-12 w-[10px] bg-orange-400 -z-0"></span>
          </div>

          {/* Suggested Subheading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Fast, Reliable & Technology-Driven Logistics
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 leading-relaxed text-[22px]">
            At Deway Logistics, we leverage modern technology to ensure real-time tracking,
            timely deliveries, and a seamless customer experience from start to finish.
            Whether you need same-day delivery, nationwide shipping, or secure parcel handling,
            our professional team is committed to meeting your logistics needs with speed and precision.
          </p>

          {/* View Our Services */}
          <div className="pt-4">
            <a href="/services">
              <p className="text-xl font-semibold text-gray-800">View Our Services</p>
              <div className="w-35 h-1 bg-orange-500 mt-1"></div>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
