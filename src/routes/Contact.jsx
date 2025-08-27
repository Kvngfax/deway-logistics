import ContactSection from "../components/ContactSection"
import ContactHero from "../components/ContactHero"
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
    return (
      <section id="contact" className="">
        <ContactHero/>
        <ContactSection/>
        <ContactInfo/>
      </section>
    );
  }