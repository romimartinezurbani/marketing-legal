import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import MeetingSection from "./components/MeetingSection";
import MarcaFormSection from "./components/MarcaFormSection";
import FAQ from "./components/FAQ";
import ContactButton from "./components/ContactButton";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <MeetingSection />

        <section id="servicios" className="section">
          <div className="container">
            <h2 className="section-title">Servicios</h2>
            <Services />
          </div>
        </section>

        <MarcaFormSection />

        <section id="quienes" className="section light">
          <div className="container">
            <h2 className="section-title">Quiénes somos</h2>
            <About />
          </div>
        </section>

        <FAQ />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div>
            <p>Hipólito Irigoyen 470 - Río Cuarto, Cba</p>
            <p>Llámanos al (0358) 156001318</p>
            <p>marketinglegal.ok@gmail.com</p>
          </div>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Marketing Legal
        </div>
      </footer>

      <ContactButton />
    </>
  );
}


