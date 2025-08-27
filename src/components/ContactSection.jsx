// src/components/ContactSection.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import deliveryMan from "../assets/Delivery man.jpg";

// Nigerian States
const states = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
    "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
    "FCT - Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
    "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
    "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        state: "",
        description: "",
    });

    const [status, setStatus] = useState(""); // success / error / loading

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("loading");

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                    setStatus("success");
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        state: "",
                        description: "",
                    });
                },
                (error) => {
                    console.error("EmailJS Error:", error.text);
                    setStatus("error");
                }
            );
    };

    return (
        <section
            className="w-full bg-gray-50 py-16 lg:py-30 px-6 md:pl-12 md:pr-2"
            id="contact"
        >
            <div className="max-w-full mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
                {/* Left Form */}
                <div className="flex-1">
                    <div className="relative left-4">
                        <p className="relative z-10 text-xl text-gray-600">
                            Have some goods, need a helping hand?
                        </p>
                        <span className="absolute -left-4 -top-2 h-12 w-[10px] bg-orange-400 -z-0"></span>
                    </div>
                    <h2 className="text-5xl font-bold mt-6 mb-12">Contact Deway</h2>

                    <form onSubmit={handleSubmit} className="space-y-12 text-xl">
                        {/* Name + Email + Phone + State */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 focus:border-orange-500 focus:outline-none py-2"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 focus:border-orange-500 focus:outline-none py-2"
                                required
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Your Contact Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 focus:border-orange-500 focus:outline-none py-2"
                                required
                            />
                            <select
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 focus:border-orange-500 focus:outline-none py-2 bg-transparent"
                                required
                            >
                                <option value="">Select State</option>
                                {states.map((s) => (
                                    <option key={s} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Message */}
                        <textarea
                            name="description"
                            placeholder="Describe your request"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            className="w-full border-b border-gray-300 focus:border-orange-500 focus:outline-none py-2 resize-none"
                            required
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="bg-orange-500 text-white px-15 font-bold py-4 text-xl shadow-lg hover:bg-orange-600 transition mt-6 disabled:opacity-60"
                        >
                            {status === "loading" ? "Sending..." : "Submit Your Request"}
                        </button>

                        {/* Status Messages */}
                        {status === "success" && (
                            <p className="text-green-600 font-semibold">
                                ✅ Your request has been sent successfully!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-600 font-semibold">
                                ❌ Something went wrong. Please try again later.
                            </p>
                        )}
                    </form>
                </div>

                {/* Right Image */}
                <div className="flex-1 md:block">
                    <img
                        src={deliveryMan}
                        alt="Contact logistics"
                        className="w-full h-auto md:h-[600px] object-cover shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
