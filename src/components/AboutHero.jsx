import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";

// Adjust path/name to match your asset if different.
import img from "../assets/about-hero.jpg";

export default function AboutHero() {
  return (
    <section className="hero dot-grid">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow fade d1">About Deway</span>
            <h1 className="fade d2">
              About <span className="hl">Us</span>
            </h1>
            <p className="fade d3">
              With years of experience, Deway Logistics ensures every package reaches its
              destination safely and on time.
            </p>
            <div className="hero-cta fade d3">
              <Link to="/services" className="btn btn-primary">
                Our Services <ArrowRight className="ic" />
              </Link>
              <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
            </div>
          </div>

          <div className="hvis fade d3">
            <div className="blob" />
            <div className="frame">
              <img src={img} alt="The Deway Logistics team" />
            </div>
            <div className="chip chip--tl">
              <Award className="ic" /> Years of experience
            </div>
            <div className="chip chip--stat">
              <span className="big">Safe</span>
              <span className="sm">On every journey</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}