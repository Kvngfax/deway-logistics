import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

// Adjust path/name to match your asset if different.
import logoWhite from "../assets/logo-white.png";

// TODO: replace "#" with your real social profile URLs.
const SOCIALS = [
  { Icon: FaFacebookF, url: "#", label: "Facebook" },
  { Icon: FaXTwitter, url: "#", label: "Twitter / X" },
  { Icon: FaInstagram, url: "#", label: "Instagram" },
  { Icon: FaLinkedinIn, url: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="fgrid">
          <div className="fcol">
            <div className="flogo">
              <img src={logoWhite} alt="Deway Logistics" />
            </div>
            <p style={{ color: "#94A3B8" }}>
              We take pride in offering reliable logistics services that meet all your delivery and
              shipping needs with speed, security, and professionalism.
            </p>
            <div className="fsoc">
              {SOCIALS.map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="fcol">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="fcol">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services">Logistics</Link></li>
              <li><Link to="/services">Delivery</Link></li>
              <li><Link to="/services">Haulages</Link></li>
              <li><Link to="/services">Pick-up</Link></li>
            </ul>
          </div>

          <div className="fcol">
            <h4>Contact Us</h4>
            <ul className="fcontact">
              <li>
                <MapPin className="ic" />
                <span className="fc">Suite 409 AHCN Towers, Alausa, Ikeja.</span>
              </li>
              <li>
                <Phone className="ic" />
                <a href="tel:+2348163314496">+234-816-331-4496</a>
              </li>
              <li>
                <Mail className="ic" />
                <a href="mailto:info@dewaylogistics.com">info@dewaylogistics.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="fbar">© {new Date().getFullYear()} Deway Logistics. All rights reserved.</div>
      </div>
    </footer>
  );
}