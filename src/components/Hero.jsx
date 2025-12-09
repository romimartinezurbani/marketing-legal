import React from "react";
/*import nosotrosImg from "../assets/florbruno.JPG";
import nosotros2 from "../assets/brunoflor.JPG"; */
import flechaImg from "../assets/flecha.png";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* IZQUIERDA */}
        <div className="hero-left">
          <div className="hero-title-wrapper">
            <h1 className="hero-title">Marketing Legal</h1>
            <img src={flechaImg} alt="Flecha" className="hero-arrow" />
            <div className="about-divider mv-divider"></div>
          </div>

          <p className="hero-sub">
            Combinamos publicidad digital, registro de marcas e identidad visual para
            que tu empresa crezca con claridad, coherencia y seguridad jurídica.
          </p>
        </div>

      
      
      </div>
    </section>
  );
}



