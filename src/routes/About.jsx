import AboutDeway from "../components/AboutDeway";
import AboutSection from "../components/AboutSection";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import ContactInfo from "../components/ContactInfo";
import AboutHero from "../components/AboutHero"

export default function About() {
    return (
      <section id="about" className="">
        <AboutHero/>
        <AboutSection/>
        <AboutDeway/>
        <Services/>
        <Features/>
        <Testimonials/>
        <ContactInfo/>
      </section>
    );
  }