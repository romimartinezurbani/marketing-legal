import React from "react";
import fotoBrunoFlor from "../assets/Bruno-Flor.jpg";
import mision from "../assets/mision.png";
import vision from "../assets/vision.png";


export default function About() {
  return (
    <section className="about-section">

      {/* Foto + Intro */}
      <div className="about-top">
        <div className="about-photo-wrapper">
          <img src={fotoBrunoFlor} alt="Bruno y Flor" className="about-main-photo" />
        </div>

        <div className="about-intro">
          <h2 className="about-title">Sobre Nosotros</h2>
          <div className="about-divider"></div>

          <p>
            Combinamos publicidad digital, registro de marcas e identidad visual para que tu empresa
            crezca con claridad, coherencia y seguridad jurídica. Nuestro enfoque integra análisis,
            estrategia y creatividad para acompañar cada etapa del desarrollo de tu marca.
          </p>
        </div>
      </div>

      {/* TARJETAS DEL EQUIPO */}
      <div className="team-grid">
        
        <div className="team-card-new">
          

          <h3 className="team-title">Bruno Belmartino</h3>
          <div className="team-divider"></div>

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

        <div className="team-card-new">
          
          <h3 className="team-title">Florencia Casim</h3>
          <div className="team-divider"></div>

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

      {/* MISIÓN & VISIÓN */}
      {/* MISIÓN & VISIÓN */}
<div className="about-intro mv-intro">
  <h2 className="about-title mv-title">Sobre Marketing Legal</h2>
  <div className="about-divider mv-divider"></div>

  <div className="mv-grid">

    <div className="mv-card-new">
      <div className="team-icon-wrapper">
        <img src={mision} className="team-icon" alt="" />
      </div>

      <h3 className="team-title">Misión</h3>
      <div className="team-divider"></div>

      <p>
        Acompañar a marcas y negocios fortaleciendo su base legal e impulsando su presencia digital,
        integrando identidad visual, estrategia y protección jurídica.
      </p>
    </div>

    <div className="mv-card-new">
      <div className="team-icon-wrapper">
        <img src={vision} className="team-icon" alt="" />
      </div>

      <h3 className="team-title">Visión</h3>
      <div className="team-divider"></div>

      <p>
        Consolidarnos como una agencia pionera en la integración de servicios legales y de marketing
        digital, liderando un enfoque moderno, claro y humano.
      </p>
    </div>

  </div>
</div>


    </section>
  );
}


