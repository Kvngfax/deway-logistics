import { Link } from "react-router-dom";
import { ArrowRight, Package } from "lucide-react";

// Adjust path/name to match your asset if different.
import img from "../assets/delivery van.jpg";

export default function ServicesHero() {
  return (
    <section className="hero dot-grid">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow fade d1">Services</span>
            <h1 className="fade d2">
              Our <span className="hl">Services</span>
            </h1>
            <p className="fade d3">
              Deway Logistics delivers trusted and innovative solutions backed by years of
              expertise, ensuring your goods are transported with speed, safety, and precision.
            </p>
            <div className="hero-cta fade d3">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote <ArrowRight className="ic" />
              </Link>
            </div>
          </div>

          <div className="hvis fade d3">
            <div className="blob" />
            <div className="frame">
              <img src={img} alt="Deway Logistics fleet" />
            </div>
            <div className="chip chip--tl">
              <Package className="ic" /> Logistics &amp; haulage
            </div>
            <div className="chip chip--stat">
              <span className="big">4</span>
              <span className="sm">Core services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}