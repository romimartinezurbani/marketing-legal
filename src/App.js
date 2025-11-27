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
            
            {/* LOGO FORMATEADO */}
            <div className="footer-logo-wrapper">
              <div className="footer-logo-circle">
                <img src={logo} alt="logo" className="footer-logo" />
              </div>
            </div>

            {/* DATOS DEL ESTUDIO */}
            <div className="footer-info">
              <p><span className="footer-icon">📍</span> Hipólito Irigoyen 470 - Río Cuarto, Cba</p>
              <p><span className="footer-icon">📞</span> (0358) 156001318</p>
              <p><span className="footer-icon">✉️</span> marketinglegal.ok@gmail.com</p>
            </div>

          </div>

          <div className="copyright">
            © {new Date().getFullYear()} Marketing Legal. Todos los derechos reservados.
          </div>
        </footer>


      <ContactButton />
    </>
  );
}


