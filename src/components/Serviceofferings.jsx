import {
  Zap,
  CalendarClock,
  Route,
  Briefcase,
  Store,
  ShoppingBag,
  Bike,
  Warehouse,
} from "lucide-react";
import Reveal from "./Reveal";

const OFFERINGS = [
  { Icon: Zap, name: "Same-Day Delivery" },
  { Icon: CalendarClock, name: "Next-Day Delivery" },
  { Icon: Route, name: "Interstate Delivery" },
  { Icon: Briefcase, name: "Corporate Courier Services" },
  { Icon: Store, name: "SME Logistics Solutions" },
  { Icon: ShoppingBag, name: "E-commerce Delivery" },
  { Icon: Bike, name: "Last-Mile Delivery" },
  { Icon: Warehouse, name: "Warehousing & Inventory Management" },
];

export default function ServiceOfferings() {
  return (
    <section className="sec dot-grid">
      <div className="wrap">
        <Reveal className="shead">
          <span className="eyebrow">Service Offerings</span>
          <h2>Everything We <span className="hl">Deliver</span></h2>
          <p className="lead">
            From a single parcel across town to full warehousing for your business — Deway covers
            the complete range of logistics needs.
          </p>
        </Reveal>

        <div className="offer-grid">
          {OFFERINGS.map(({ Icon, name }) => (
            <Reveal className="ocard" key={name}>
              <div className="oico"><Icon className="ic" /></div>
              <div className="oname">{name}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}