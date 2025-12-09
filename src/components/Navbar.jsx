import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">

        {/* Logo + Nombre */}
        <div className="brand">
          <div className="logo-wrapper">
            <img src={logo} alt="logo" className="logo" />
          </div>

          <div className="brand-text">
            <span className="brand-title">MARKETING </span>
            <span className="brand-sub">LEGAL</span>
          </div>
        </div>


        {/* LINKS */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#reunion" onClick={() => setOpen(false)}>Reunión</a>
          <a href="#consulta-marca" onClick={() => setOpen(false)}>Consulta de marca</a>
          <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
          <a href="#quienes" onClick={() => setOpen(false)}>Quiénes somos</a>
          <a href="#faq" onClick={() => setOpen(false)}>Preguntas Frecuentes</a>

          <a
            className="btn-outline"
            href="https://wa.me/543586001318"
            target="_blank"
            rel="noreferrer"
          >
            Agenda tu reunión
          </a>
        </nav>

      </div>
    </header>
  );
}



