import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";

const INFO = [
  { Icon: MapPin, title: "Our Office", value: "Suite 409 AHCN Towers, Alausa, Ikeja" },
  { Icon: Mail, title: "Email Deway", value: "care@dewaylogistics.com" },
  { Icon: Phone, title: "Call Us", value: "+234-903-855-6298" },
  { Icon: MessageCircle, title: "Chat With Us", value: "+234-903-862-6843" },
];

export default function ContactInfo() {
  return (
    <section className="sec cinfo">
      <div className="wrap">
        <div className="cinfo-grid">
          {INFO.map(({ Icon, title, value }) => (
            <Reveal key={title}>
              <div className="ico"><Icon className="ic" /></div>
              <h3>{title}</h3>
              <p>{value}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}