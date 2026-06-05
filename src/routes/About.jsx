import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import AboutDeway from "../components/AboutDeway";
import Services from "../components/Services";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import ContactInfo from "../components/ContactInfo";

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutSection />
      <AboutDeway />
      <Services />
      <Features />
      <Testimonials />
      <ContactInfo />
    </>
  );
}