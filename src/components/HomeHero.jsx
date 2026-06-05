import { Link } from "react-router-dom";
import { ArrowRight, Clock, MapPin } from "lucide-react";

// Adjust path/name to match your asset if different.
import heroImg from "../assets/hero-home.jpg";

const STATES = [
  "Abuja", "Akwa Ibom", "Anambra", "Cross River", "Delta", "Edo", "Ekiti",
  "Kaduna", "Kano", "Kogi", "Kwara", "Lagos", "Ogun", "Ondo", "Osun", "Oyo", "Rivers",
];

export default function HomeHero() {
  return (
    <section className="hero dot-grid">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow fade d1">Deway Logistics</span>
            <h1 className="fade d2">
              Your Trusted <span className="hl">Partner</span>
            </h1>
            <p className="fade d3">
              We provide reliable and efficient logistics solutions that empower businesses and individuals, ensuring the seamless movement of goods with speed, security, and professionalism
            </p>
            <div className="hero-cta fade d3">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote <ArrowRight className="ic" />
              </Link>
              <Link to="/booking" className="btn btn-ghost">
                Book a delivery
              </Link>
            </div>
            <div className="trust fade d4">
              <div>
                <div className="n">Same-day</div>
                <div className="l">Pickup &amp; dispatch</div>
              </div>
              <div>
                <div className="n">Nationwide</div>
                <div className="l">Across Nigeria</div>
              </div>
              <div>
                <div className="n">24/7</div>
                <div className="l">Customer support</div>
              </div>
            </div>
          </div>

          <div className="hvis fade d3">
            <div className="blob" />
            <div className="frame">
              <img src={heroImg} alt="Deway Logistics delivery in transit" loading="eager" fetchPriority="high" decoding="async"/>
            </div>
            <div className="chip chip--tl">
              <Clock className="ic" /> Same-day pickup
            </div>
            <div className="chip chip--br">
              <MapPin className="ic" /> Nationwide reach
            </div>
            <div className="chip chip--stat">
              <span className="big">24/7</span>
              <span className="sm">Customer support</span>
            </div>
          </div>
        </div>

        <div className="ticker fade d5" aria-hidden="true">
          <div className="tick-track">
            {[...STATES, ...STATES].map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}