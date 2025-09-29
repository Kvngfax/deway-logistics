import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo-white.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-20 lg:py-25 px-6 md:px-12">
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <img src={logo} alt="Logo" className=" max-w-[250px] lg:max-w-[200px] sm:mx-0 relative -left-5" />
          <p className="mt-8 leading-relaxed text-lg">
            We take pride in offering reliable logistics services that meet all your delivery and shipping needs with speed, security, and professionalism.
          </p>
          {/* Socials */}
          <div className="flex space-x-4 mt-8 ">
            <a href="#" className="hover:text-orange-500 text-2xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-500 text-2xl"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-500 text-2xl"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-500 text-2xl"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-3xl mb-6">Quick Links</h3>
          <ul className="space-y-4 text-xl">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-500">About Us</Link></li>
            <li><Link to="/services" className="hover:text-orange-500">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-3xl mb-6">Our Services</h3>
          <ul className="space-y-4 text-xl">
            <li><Link to="/services" className="hover:text-orange-500">Logistics</Link></li>
            <li><Link to="/services" className="hover:text-orange-500">Delivery</Link></li>
            <li><Link to="/services" className="hover:text-orange-500">Haulages</Link></li>
            <li><Link to="/services" className="hover:text-orange-500">Pick-up</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-3xl mb-6">Contact Us</h3>
          <ul className="space-y-4 text-xl">
            <li className="flex items-start space-x-2">
              <MapPin className="w-7 h-7 text-orange-500" />
              <span>Suite 409 AHCN Towers, Alausa, Ikeja.</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-7 h-7 text-orange-500" />
              <a href="tel:+2348163314496" className="hover:text-orange-500">+234-816-331-4496</a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-7 h-7 text-orange-500" />
              <a href="mailto:info@deway.com" className="hover:text-orange-500">info@dewaylogistics.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom note */}
      <div className="text-center text-lg text-gray-500 mt-10">
        © {new Date().getFullYear()} Deway Logistics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
