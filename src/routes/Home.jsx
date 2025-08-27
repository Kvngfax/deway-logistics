import React from "react";
import Hero from "../components/Hero";
import HomeHero from "../components/HomeHero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import ContactInfo from "../components/ContactInfo";
import Services from "../components/Services"

export default function Home() {
    return (
      <section>
        <HomeHero/>
        <Hero/>
        <Features/>
        <Services/>
        <Testimonials/>
        <ContactSection/>
        <ContactInfo/>
      </section>
    );
  }