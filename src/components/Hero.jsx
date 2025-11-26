import React from "react";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">Marketing Legal</h1>
          <p className="hero-sub">
            Combinamos publicidad digital, registro de marcas e identidad visual para que tu empresa crezca con
            claridad, coherencia y seguridad jurídica.
          </p>
        </div>

        <div className="hero-card">
          <div className="card-inner">

            {/* ⭐ Nuevo estilo del logo del Hero */}
            <div className="hero-logo-wrapper">
              <img src={logo} alt="Marketing Legal" className="hero-logo" />
            </div>

            <p className="small">Impulsar y proteger marcas con propósito.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

