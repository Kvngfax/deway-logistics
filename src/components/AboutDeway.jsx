// src/components/AboutSection.jsx
import React from "react";
import aboutImg from "../assets/delivery3.jpg";

export default function AboutSection() {
    return (
        <section className="w-full bg-gray-50 py-16 px-6 md:px-10" id="about">
            <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-center">

                {/* Column 1 */}
                <div className="space-y-5 md:space-y-8 text-left">
                    <h2 className=" text-5xl font-bold text-gray-800">
                        Deway Logistics
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        We go beyond moving goods, we build trust through
                        speed, safety, and unmatched reliability. Our goal is to simplify logistics
                        for businesses and individuals across Nigeria, ensuring every journey is seamless.
                    </p>

                    <h3 className="text-4xl font-semibold text-orange-500 mt-6">
                        What We Do
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        We provide complete logistics solutions including delivery, haulage,
                        pick-up, and last-mile distribution. By combining innovative tools
                        with a skilled team, we make sure every item reaches its destination on time.
                    </p>
                </div>

                {/* Column 2 */}
                <div className="space-y-5 md:space-y-8 text-left">

                    <h3 className="text-4xl font-semibold text-orange-500 ">
                        Our Qualities
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Reliability, transparency, and speed define us. With a culture of
                        excellence and customer-first values, Deway ensures every delivery
                        is not just a service, but a promise kept.
                    </p>
                    <h3 className="text-4xl font-semibold text-orange-500">
                        Our Mission
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        To provide fast, secure and dependable ligisics solutiion that empower our clients to thrive.
                    </p>

                    <h3 className="text-4xl font-semibold text-orange-500">
                        Our Vision
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        To be the logistics company of your choice.
                    </p>

                </div>

                {/* Column 3: Image */}
                <div className="flex justify-center">
                    <img
                        src={aboutImg}
                        alt="Deway Logistics operations"
                        className="shadow-lg w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}
