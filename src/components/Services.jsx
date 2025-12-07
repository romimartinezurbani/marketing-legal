import React from "react";
import idvisual from "../assets/identidadvisual.png";
import registro from "../assets/registro.png";
import publicidad from "../assets/publicidad.png";



export default function Services() {
  const services = [
    {
      icono: idvisual,
      title: "Identidad Visual & Branding",
      intro: "Creamos identidades visuales funcionales, estéticas y alineadas al propósito de cada marca.",
      list: [
        "Diseño de logotipo y variantes",
        "Paleta de colores institucional",
        "Sistema tipográfico",
        "Iconografía personalizada",
        "Moodboard conceptual",
        "Manual de marca completo",
      ],
      
    },

    {
      icono: registro,
      title: "Registro de Marca & Propiedad Intelectual",
      intro: "Protección legal completa del signo distintivo de tu proyecto, acompañando todas las etapas ante el INPI.",
      list: [
        "Búsqueda previa de antecedentes",
        "Análisis de registrabilidad",
        "Estrategia de presentación",
        "Selección de clases (Niza)",
        "Seguimiento del trámite",
        "Contestación de observaciones",
        "Asesoramiento frente a oposiciones",
      ],
      extraTitle: "Servicios complementarios",
      extraList: [
        "Renovación de marca",
        "Transferencias",
        "Contratos comerciales / franquicia",
        "Oposiciones",
        "Informes técnicos",
      ],
    },

    {
      icono: publicidad,
      title: "Publicidad Digital",
      intro: "Impulsamos visibilidad y conversiones mediante campañas en Meta Ads con un enfoque profesional y analítico.",
      list: [
        "Campañas en Meta Ads",
        "Segmentación estratégica",
        "Configuración de Pixel y métricas",
        "Optimización continua",
        "Reportes mensuales",
        "Lanzamientos y campañas especiales",
      ],
    
    },
  ];

  return (
    <section className="services-section">
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card-new" key={i}>

            <div className="service-icon-wrapper">
              <img src={s.icono} alt="" className="service-icon" />
            </div>

            <h3 className="service-title">{s.title}</h3>
            <div className="service-divider"></div>

            <p className="service-intro">{s.intro}</p>

            <ul className="service-list">
              {s.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {s.extraTitle && (
              <>
                <h4 className="service-extra-title">{s.extraTitle}</h4>
                <ul className="service-list">
                  {s.extraList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {s.goal && <p className="service-goal">{s.goal}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

