import Reveal from "./Reveal";

// Adjust path/name to match your asset if different.
import img from "../assets/delivery3.jpg";

export default function AboutDeway() {
  return (
    <section className="sec sec--warm">
      <div className="wrap tri">
        <Reveal>
          <h2>Deway <span className="hl">Logistics</span></h2>
          <p>
            We go beyond moving goods, we build trust through speed, safety, and unmatched
            reliability. Our goal is to simplify logistics for businesses and individuals across
            Nigeria, ensuring every journey is seamless.
          </p>
          <h3>What We Do</h3>
          <p>
            We provide complete logistics solutions including delivery, haulage, pick-up, and
            last-mile distribution. By combining innovative tools with a skilled team, we make sure
            every item reaches its destination on time.
          </p>
        </Reveal>

        <Reveal>
          <h3 style={{ marginTop: 0 }}>Our Qualities</h3>
          <p>
            Reliability, transparency, and speed define us. With a culture of excellence and
            customer-first values, Deway ensures every delivery is not just a service, but a promise
            kept.
          </p>
          <h3>Our Mission</h3>
          <p>
            To provide fast, secure and dependable logistics solutions that empower our clients to
            thrive.
          </p>
          <h3>Our Vision</h3>
          <p>To be the logistics company of your choice.</p>
        </Reveal>

        <Reveal className="figure r">
          <div className="blob" />
          <div className="frame">
            <img src={img} alt="Deway Logistics operations" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}