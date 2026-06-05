import { Link } from "react-router-dom";
import { BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";

// Adjust path/name to match your asset if different.
import img from "../assets/delivery3.jpg";

export default function Hero() {
  return (
    <section className="sec" id="hero">
      <div className="wrap split">
        <Reveal>
          <span className="eyebrow">Safe &amp; Faster</span>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3.4rem)", fontWeight: 800, marginTop: 16 }}>
            Logistics and <span className="hl">Delivery</span> Services
          </h2>
          <p className="lead" style={{ marginTop: 24 }}>
            Deway Logistics is a national logistics company committed to delivering fast, reliable, and technology-driven transportation solutions. We serve businesses and individuals with a comprehensive range of logistics services tailored to meet the evolving demands of today's marketplace.

          </p>
          <p className="lead" style={{ marginTop: 16 }}>
            From transportation and scheduled pickups to seamless last-mile delivery, our solutions are designed to ensure speed, efficiency, and exceptional customer satisfaction. With a focus on innovation, operational excellence, and nationwide reach, we help our clients move goods with confidence, reliability, and ease.
          </p>
          <div className="hero-cta" style={{ marginTop: 32 }}>
            <Link to="/about" className="btn btn-primary">Learn More</Link>
            <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
          </div>
        </Reveal>

        <Reveal className="figure r">
          <div className="blob" />
          <div className="frame">
            <img src={img} alt="Deway Logistics operations" />
          </div>
          <div className="chip" style={{ bottom: 18, left: -6 }}>
            <BadgeCheck className="ic" /> Technology-driven
          </div>
        </Reveal>
      </div>
    </section>
  );
}