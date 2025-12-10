import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Overlay (aparece cuando el menú está abierto) */}
      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}

      <header className="navbar">
        <div className="container nav-inner">

          {/* Logo + Nombre */}
          <div className="brand">
            <div className="logo-wrapper">
              <img src={logo} alt="logo" className="logo" />
            </div>

            <div className="brand-text">
              <span className="brand-title">MARKETING</span>
              <span className="brand-title">LEGAL</span>
            </div>
          </div>

          {/* Botón Hamburguesa (solo mobile) */}
          <button
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* LINKS */}
          <nav className={`nav-links ${open ? "open" : ""}`}>
            {/* Marca dentro del panel mobile */}
            {open && (
              <div className="panel-brand">
                <img src={logo} className="logo" alt="logo pequeño" />
                <span className="brand-title" style={{ color: "white" }}>Marketing Legal</span>
              </div>
            )}

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
              onClick={() => setOpen(false)}
            >
              Agenda tu reunión
            </a>
          </nav>

        </div>
      </header>
    </>
  );
}




