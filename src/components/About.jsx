import React from "react";
import fotoBrunoFlor from "../assets/Bruno-Flor.jpg";

export default function About() {
  return (
    <section className="about-section">

      {/* Foto principal */}
      <div className="about-photo-wrapper">
        <img src={fotoBrunoFlor} alt="Bruno y Flor" className="about-main-photo" />
      </div>

      {/* Introducción */}
      <div className="about-intro">
        <h2 className="about-title">Somos Marketing Legal</h2>
        <p>
          Combinamos publicidad digital, registro de marcas e identidad visual para que tu empresa
          crezca con claridad, coherencia y seguridad jurídica. Nuestro enfoque integra análisis,
          estrategia y creatividad para acompañar cada etapa del desarrollo de tu marca.
        </p>
      </div>

      {/* Tarjetas individuales */}
      <div className="team-grid">

        {/* BRUNO */}
        <div className="team-card">
          <h3>Bruno Belmartino</h3>
          <p>
            Abogado & Agente de Marcas (INPI), especializado en propiedad intelectual y en la
            gestión integral de trámites de registro de marcas.
          </p>
          <p>
            Enfocado en el análisis técnico, seguimiento y presentación estratégica,
            asegura claridad en los procesos y acompañamiento en cada etapa legal.
          </p>
          <p>
            Su trabajo contempla desde la búsqueda previa de antecedentes hasta la obtención del
            título de marca, garantizando protección jurídica sólida para cada proyecto.
          </p>
        </div>

        {/* FLORENCIA */}
        <div className="team-card">
          <h3>Florencia Casim</h3>
          <p>
            Abogada y profesional en marketing digital especializada en publicidad estratégica,
            branding e identidad visual.
          </p>
          <p>
            Desarrolla estrategias digitales, planificación de campañas publicitarias y construcción
            de identidades visuales orientadas al posicionamiento.
          </p>
          <p>
            Su enfoque integra análisis, creatividad y comunicación clara para fortalecer la presencia
            digital de marcas y mejorar su crecimiento y conversión.
          </p>
        </div>

      </div>

      {/* Misión y Visión */}
      <div className="mv-grid">

        <div className="mv-card">
          <h3>Misión</h3>
          <p>
            Acompañar a marcas y negocios fortaleciendo su base legal e impulsando su presencia digital,
            integrando identidad visual, estrategia y protección jurídica.
          </p>
        </div>

        <div className="mv-card">
          <h3>Visión</h3>
          <p>
            Consolidarnos como una agencia pionera en la integración de servicios legales y de marketing
            digital, liderando un enfoque moderno, claro y humano.
          </p>
        </div>

      </div>

    </section>
  );
}

