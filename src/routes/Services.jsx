import ServicesHero from "../components/ServicesHero";
import ContactSection from "../components/ContactSection";
import ServicesContent from "../components/ServicesContent";

export default function Services() {
    return (
      <section className="">
        <ServicesHero/>
        <ServicesContent/>
        <ContactSection/>
      </section>
    );
  }