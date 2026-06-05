import Reveal from "./Reveal";

// Adjust paths/names to match your assets if different.
import imgLogistics from "../assets/delivery4.jpg";
import imgDelivery from "../assets/delivery3.jpg";
import imgHaulage from "../assets/delivery1.jpg";
import imgPickup from "../assets/delivery5.jpg";

const ROWS = [
  {
    title: "Logistics",
    img: imgLogistics,
    alt: "Logistics handling",
    paras: [
      "We provide efficient and reliable logistics solutions designed to meet the needs of businesses and individuals. Our team ensures that every package is handled with care and delivered on time.",
      "Whether it is local distribution or nationwide transportation, we have the resources and expertise to simplify the process for you.",
    ],
  },
  {
    title: "Delivery",
    img: imgDelivery,
    alt: "Parcel delivery",
    reversed: true,
    paras: [
      "Our delivery service is fast, secure, and designed to keep you stress-free. From small parcels to larger goods, we ensure timely drop-offs across multiple locations.",
      "We combine technology and human dedication to keep you informed every step of the way, guaranteeing smooth deliveries with full transparency.",
    ],
  },
  {
    title: "Haulages",
    img: imgHaulage,
    alt: "Haulage trucks",
    paras: [
      "We specialize in dependable haulage services that connect businesses to their markets. Our trucks and experienced drivers ensure that bulk goods, construction materials, or equipment are transported safely and efficiently.",
      "With a strong emphasis on punctuality, we help businesses maintain smooth supply chains and operations.",
    ],
  },
  {
    title: "Pick Up",
    img: imgPickup,
    alt: "Doorstep pick up",
    reversed: true,
    paras: [
      "Our pick up service offers convenience at your doorstep. You no longer need to worry about dropping packages off. We come to you, collect your items, and ensure they are delivered where they need to be.",
      "This service is designed to save time for busy individuals and organizations, allowing you to focus on what truly matters.",
    ],
  },
];

export default function ServicesContent() {
  return (
    <section className="sec sec--warm">
      <div className="wrap">
        <Reveal as="h2" style={{ textAlign: "center", fontSize: "clamp(2.2rem,5vw,3.4rem)", fontWeight: 700, marginBottom: 80 }}>
          Our <span className="hl">Services</span>
        </Reveal>

        {ROWS.map((row) => (
          <Reveal className={`srow ${row.reversed ? "srow--rev" : ""}`} key={row.title}>
            <div className={`figure ${row.reversed ? "r" : "l"}`}>
              <div className="blob" />
              <div className="frame">
                <img src={row.img} alt={row.alt} />
              </div>
            </div>
            <div>
              <div className="bar-label"><h2>{row.title}</h2></div>
              {row.paras.map((p, i) => (
                <p className="lead" key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}