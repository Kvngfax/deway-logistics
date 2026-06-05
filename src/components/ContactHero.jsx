import { ArrowDown, Phone } from "lucide-react";

// Adjust path/name to match your asset if different.
import img from "../assets/delivery van.jpg";

export default function ContactHero() {
  return (
    <section className="hero dot-grid">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow fade d1">Contact Deway</span>
            <h1 className="fade d2">
              Contact <span className="hl">Us</span>
            </h1>
            <p className="fade d3">
              We offer reliable services that make logistics simple and hassle-free from beginning
              to end.
            </p>
            <div className="hero-cta fade d3">
              <a href="#contact-form" className="btn btn-primary">
                Send a Request <ArrowDown className="ic" />
              </a>
            </div>
          </div>

          <div className="hvis fade d3">
            <div className="blob" />
            <div className="frame">
              <img src={img} alt="Contact Deway Logistics" />
            </div>
            <div className="chip chip--tl">
              <Phone className="ic" /> Talk to our team
            </div>
            <div className="chip chip--stat">
              <span className="big">24/7</span>
              <span className="sm">We&apos;re here to help</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}