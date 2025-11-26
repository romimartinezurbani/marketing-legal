import React from "react";
import logo from "../assets/logo.png";


export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <img src={logo} alt="logo" className="logo" />

          <div className="brand-text">
            <span className="brand-title">MARKETING</span>
            <span className="brand-sub">LEGAL</span>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#reunion">Reunión</a>
          <a href="#consulta-marca">Consulta de marca</a>
          <a href="#servicios">Servicios</a>
          <a href="#quienes">Quiénes somos</a>
          <a href="#faq">FAQ</a>

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


