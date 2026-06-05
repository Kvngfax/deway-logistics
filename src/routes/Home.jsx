import HomeHero from "../components/HomeHero";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import ContactInfo from "../components/ContactInfo";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <ContactSection />
      <ContactInfo />
    </>
  );
}