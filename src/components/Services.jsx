import { Link } from "react-router-dom";
import { Package, Truck, Boxes, Warehouse, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    idx: "01",
    Icon: Package,
    title: "Logistics",
    text: "We offer reliable services that make logistics simple and hassle-free from beginning to end.",
  },
  {
    idx: "02",
    Icon: Truck,
    title: "Delivery",
    text: "We provide fast and reliable delivery to make your packages arrive exactly where they should, on time and very time.",
  },
  {
    idx: "03",
    Icon: Boxes,
    title: "Haulages",
    text: "We ensure smooth and efficient handling of goods across various locations, making it easier for you to manage deliveries.",
  },
  {
    idx: "04",
    Icon: Warehouse,
    title: "Pick-up",
    text: "Our pick-up services make it easy and quick to collect items from different locations.",
  },
];

export default function Services() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="shead">
          <span className="eyebrow">Our Services</span>
          <h2>What We <span className="hl">Offer</span></h2>
          <p className="lead">
            Deway Logistics delivers trusted and innovative solutions backed by years of expertise,
            ensuring your goods are transported with speed, safety, and precision.
          </p>
        </Reveal>

        <div className="scards">
          {SERVICES.map(({ idx, Icon, title, text }) => (
            <Reveal className="scard" key={idx}>
              <div className="idx">{idx}</div>
              <div className="ico"><Icon className="ic" /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>

        <div style={{ marginTop: 54 }}>
          <Link to="/services" className="btn btn-primary">
            Learn More <ArrowRight className="ic" />
          </Link>
        </div>
      </div>
    </section>
  );
}