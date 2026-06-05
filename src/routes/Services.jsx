import ServicesHero from "../components/ServicesHero";
import ServicesContent from "../components/ServicesContent";
import ServiceOfferings from "../components/ServiceOfferings.jsx";
import ContactSection from "../components/ContactSection";
import ContactInfo from "../components/ContactInfo";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesContent />
      <ServiceOfferings />
      <ContactSection />
      <ContactInfo />
    </>
  );
}