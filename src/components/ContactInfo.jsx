import React from "react";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">

        {/* Address */}
        <div className="flex flex-col items-center md:items-start space-y-5">
          <MapPin className="w-15 h-15 text-orange-500" />
          <h3 className="font-semibold text-3xl">Our Office</h3>
          <p className="text-gray-400 text-xl">123 Dummy Street, Lagos</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center md:items-start space-y-5">
          <Mail className="w-15 h-15 text-orange-500" />
          <h3 className="font-semibold text-3xl">Email Deway</h3>
          <p className="text-gray-400 text-xl">care@dewaylogistics.com</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center md:items-start space-y-5">
          <Phone className="w-15 h-15 text-orange-500" />
          <h3 className="font-semibold text-3xl">Call Us</h3>
          <p className="text-gray-400 text-xl">+234-903-855-6298</p>
        </div>

        {/* Chat */}
        <div className="flex flex-col items-center md:items-start space-y-5">
          <MessageCircle className="w-15 h-15 text-orange-500" />
          <h3 className="font-semibold text-3xl">Chat With Us</h3>
          <p className="text-gray-400 text-xl">+234-903-862-6843</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
