
import AboutSection from "./components/AboutSection";
import ContactInfo from "./components/ContactInfo";
import ContactSection from "./components/ContactSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <div className="font-sans">
      <Header />
      <main className="pt-24">
        <Hero />
        <AboutSection/>
        <Services/>
        <Features/>
        <Testimonials/>
        <ContactSection/>
        <ContactInfo/>
        <Footer/>
        {/* Other sections… */}
      </main>
    </div>
  );
}

export default App;
