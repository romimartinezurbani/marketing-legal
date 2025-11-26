import React from "react";

export default function MeetingSection() {
  return (
    <section id="reunion" className="section">
      <div className="container reunion-wrapper">
        <h2 className="section-title">Agendá tu reunión</h2>

        <p>
          Coordiná una videollamada de 40 minutos para evaluar en qué etapa se encuentra tu marca y 
          determinar el servicio más adecuado para tu proyecto. Esta reunión es 100% gratuita.
        </p>

        <p>
          En este encuentro analizamos tu situación actual, respondemos dudas específicas y te orientamos 
          sobre los próximos pasos para avanzar con publicidad digital, registro de marca o identidad visual.
        </p>

        <h3>¿Qué incluye esta reunión?</h3>
        <ul>
          <li>Análisis de la etapa actual de tu marca</li>
          <li>Revisión preliminar del caso</li>
          <li>Recomendación del servicio adecuado</li>
          <li>Respuestas a consultas específicas</li>
        </ul>

        <h3>¿Cómo reservar?</h3>
        <p>
          La coordinación se realiza directamente por WhatsApp, donde te enviaremos opciones de fecha y horario disponibles.
        </p>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a
            className="btn-accent"
            href="https://wa.me/543586001318"
            target="_blank"
            rel="noreferrer"
          >
            Agendar reunión por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}


