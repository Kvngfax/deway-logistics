import { Link } from "react-router-dom";
import Reveal from "./Reveal";

// Adjust path/name to match your asset if different.
import img from "../assets/Delivery bike.png";

export default function AboutSection() {
  return (
    <section className="sec">
      <div className="wrap split">
        <Reveal className="figure l">
          <div className="blob" />
          <div className="frame">
            <img src={img} alt="Deway Logistics delivery rider" />
          </div>
        </Reveal>

        <Reveal>
          <span className="eyebrow">About Deway</span>
          <h2 style={{ fontSize: "clamp(2rem,4.6vw,3.1rem)", fontWeight: 700, marginTop: 14 }}>
            Fast, Reliable &amp; <span className="hl">Technology-Driven</span> Logistics
          </h2>
          <p className="lead" style={{ marginTop: 22 }}>
            At Deway Logistics, we leverage modern technology to ensure real-time tracking, timely
            deliveries, and a seamless customer experience from start to finish. Whether you need
            same-day delivery, nationwide shipping, or secure parcel handling, our professional team
            is committed to meeting your logistics needs with speed and precision.
          </p>
          <Link to="/services" className="txtlink" style={{ marginTop: 30 }}>
            View Our Services<span />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}