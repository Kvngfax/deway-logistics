import { Link } from "react-router-dom";
import { Check, Clock } from "lucide-react";
import Reveal from "./Reveal";

// Adjust path/name to match your asset if different.
import img from "../assets/delivery van.jpg";

export default function Features() {
  return (
    <section className="sec sec--warm">
      <div className="wrap split">
        <Reveal className="figure l">
          <div className="blob" />
          <div className="frame">
            <img src={img} alt="Deway Logistics delivery van" />
          </div>
          <div className="chip" style={{ top: 16, right: -6 }}>
            <Clock className="ic" /> Timely delivery
          </div>
        </Reveal>

        <Reveal>
          <span className="eyebrow">Why Choose Us</span>
          <h2 style={{ fontSize: "clamp(2rem,4.6vw,3.1rem)", fontWeight: 700, marginTop: 14 }}>
            Faster, Safe, and <span className="hl">Trusted</span> Logistics Services
          </h2>
          <p className="lead" style={{ marginTop: 22 }}>
            With a dedicated team and cutting-edge technology, DEWAY Logistics Ltd ensures fast,
            safe, and dependable deliveries. Our customer-first approach makes us the preferred
            logistics solution across Nigeria.
          </p>
          <ul className="flist">
            <li>
              <span className="tick"><Check className="ic" /></span>Timely Delivery
            </li>
            <li>
              <span className="tick"><Check className="ic" /></span>24/7 Customer Support
            </li>
          </ul>
          <Link to="/services" className="txtlink" style={{ marginTop: 30 }}>
            Learn More<span />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}